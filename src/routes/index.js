import express from 'express';
const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'Welcome to Hijra API' });
});

export default indexRouter;
