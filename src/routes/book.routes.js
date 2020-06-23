import bookController from '../controller/book.controller';

/**
 * Use the controller to access route books
 * @param  {any} app to install route express
 */
const bookRoutes = (app) => {
  app.route('/book/insertOne').post(bookController.insertOne);
  app.route('/book/insertMany').post(bookController.insertMany);
  app.route('/book/').get(bookController.getAll);
  app.route('/book/:id').get(bookController.getOneById);
  app.route('/book/filter/:filter').get(bookController.filterByProp);
  app.route('/book/:id').delete(bookController.deleteOneById);
  app.route('/book/:id').patch(bookController.updateOneById);
};

export default bookRoutes;
