import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

const app = express();
const router = express.Router();

config({path: "./config.env"});

console.log(process.env.PORT);  //testing purpose 

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
