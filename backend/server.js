import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRouter from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8070;

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongodb connection is successfull");
});


app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});