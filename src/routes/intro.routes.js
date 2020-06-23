/**
 * Intro/root application
 * @param  {any} app to install route express
 */
const introRoutes = (app) => {
  app.route('/').get((req, res) => {
    res.json(
      'Selamat datang di Iqra API. Ini adalah API untuk membantu anda hijrah dan belajar'
    );
    res.end();
  });
};

export default introRoutes;
