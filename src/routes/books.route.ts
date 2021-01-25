import express, { Router } from 'express';
import { addBook, allBooks, deleteBook, showBook, updateBook } from '../controllers/book.controller';

const router: Router = express.Router();

router.route('/books')
    .get(allBooks)
    .post(addBook);

router.route('/books/:id')
    .get(showBook)
    .patch(updateBook)
    .delete(deleteBook);

export default router;