import express, { Application } from 'express';
import bodyParser from 'body-parser';

import connect from './config/connect';

import { MONGODB_URI } from './config';

import booksRoute from './routes/books.route';

const app: Application = express();
const port: number = 5000 || process.env.PORT;

connect(MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', booksRoute);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});