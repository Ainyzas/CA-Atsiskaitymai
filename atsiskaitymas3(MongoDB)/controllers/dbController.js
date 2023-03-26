import dotenv from 'dotenv';

dotenv.config();

const { Json_URI } = process.env || '';

// PlaceholderDB and MongoDB fetch function
export async function fetchDatabases(mongoReq) {
  try {
    const jsonReq = fetch(Json_URI);

    const [mongoPosts, jsonRes] = await Promise.all([mongoReq, jsonReq]);
    const jsonPosts = await jsonRes.json();
    jsonPosts.map(
      (post) =>
        (post.address = `${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}`),
    );

    const combinedPosts = [...mongoPosts, ...jsonPosts];
    return combinedPosts;
  } catch (error) {
    console.log(error.message);
  }
}
