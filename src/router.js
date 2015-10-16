//import the controllers
//This only specifies the folder name, which means it will automatically pull the index.js file
var controllers = require('./controllers');

//function to attach routes
var router = function(app) { //pass the express app in

  // Pages
  app.get('/', controllers.index);
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/page3', controllers.page3);

  // Cat Routes
  app.get('/getName', controllers.getName);
  app.get('/findByName', controllers.searchName);
  app.post('/setName', controllers.setName);
  app.post('/updateLast', controllers.updateLast);

  // Dog Routes
  app.post('/createDog', controllers.createDog);
  app.get('/ageDog', controllers.updateDog);

  // Redirect any other GET requests to 404
  app.get('/*', controllers.notFound);
};

//export the router function
module.exports = router;
