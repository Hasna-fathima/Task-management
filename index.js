import express from 'express';
import { connect } from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import taskRouter from './Route/TaskRouter.js'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/task', taskRouter);



connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });