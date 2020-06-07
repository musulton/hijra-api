import bookController from '../controller/book.controller';

const bookRoutes = (app) => {
  app.route('/book/insert').post(bookController.insertOne);
  app.route('/book/insertMany').post(bookController.insertMany);
  app.route('/book/').get(bookController.getAll);
  app.route('/book/:id').get(bookController.getOneById);
  app.route('/book/:id').delete(bookController.deleteOneById);
  app.route('/book/:id').patch(bookController.updateOneById);
};

export default bookRoutes;
