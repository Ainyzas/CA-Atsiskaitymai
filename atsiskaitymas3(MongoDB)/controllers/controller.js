import User from '../models/userModel.js';
import { fetchDatabases } from './dbController.js';

// MongoDB specific functions
export async function postNewUser(req, res) {
  try {
    const { name, email, address } = req.body;

    const user = await User.create({
      name,
      email,
      address,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.find({}, { __v: false });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// PlaceholderDB and MongoDB functions
export async function getUserNames(req, res) {
  try {
    const mongoReq = User.find({}, { _id: true, name: true });

    const combinedPosts = await fetchDatabases(mongoReq);
    const serializedPosts = combinedPosts.map((post) => ({
      id: post.id,
      name: post.name,
    }));

    res.status(200).json(serializedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserEmails(req, res) {
  try {
    const mongoReq = User.find({}, { _id: true, name: true, email: true });

    const combinedPosts = await fetchDatabases(mongoReq);
    const serializedPosts = combinedPosts.map((post) => ({
      id: post.id,
      name: post.name,
      email: post.email,
    }));

    res.status(200).json(serializedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserAddresses(req, res) {
  try {
    const mongoReq = User.find({}, { address: true, name: true, _id: true });

    const combinedPosts = await fetchDatabases(mongoReq);
    const serializedPosts = combinedPosts.map((post) => ({
      id: post.id,
      name: post.name,
      address: post.address,
    }));

    res.status(200).json(serializedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
