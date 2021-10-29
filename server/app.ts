import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
import 'colors';

// import environment variables
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// database connection
import { db } from './config/db';
import { errorHandler } from './middlewares/errorHandler';
db.connect((error) => {
  if (error) throw error;
  app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}...`.cyan.bold);
  });
  console.log('Connected to database.'.yellow.bold);
});

const productRoute = require('./routes/productRoute');
const authRoute = require('./routes/authRoute');

app.use('/products', productRoute);
app.use('/auth', authRoute);

app.use(errorHandler);
