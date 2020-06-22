import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

// Routes
import bookRoutes from './routes/book.routes';
import introRoutes from './routes/intro.routes';

// Connection
import './config/connection';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

introRoutes(app);
bookRoutes(app);

export default app;
