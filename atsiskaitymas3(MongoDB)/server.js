import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/router.js';

dotenv.config();
const { PORT } = process.env || 3000;
const { Mongo_URI } = process.env || '';

mongoose
  .connect(Mongo_URI)
  .then(console.log('established connection to Mongo Database'))
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
