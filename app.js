// The first part of the file will create the Express application 
// and Router objects, and define the base directory and port 
// as constants.
// The require function loads the express module, which we then use 
//to create the app and router objects. 
//The router object will perform the routing function of the application, 
//and as we define HTTP method routes we will add them to this object to define how our application will handle requests.
// This section of the file also sets a couple of constants, path and port:
//  - path: Defines the base directory, which will be the views subdirectory 
//          within the current project directory.
//  - port: Tells the app to listen on and bind to port 8080.
// Next, set the routes for the application using the router object
const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;
// The router.use function loads a middleware function that will log 
// the router’s requests and pass them on to the application’s routes. 
// These are defined in the subsequent functions, which specify that a GET request 
// to the base project URL should return the index.html page, 
// while a GET request to the /sharks route should return sharks.html.

// Finally, mount the router middleware and the application’s static assets 
// and tell the app to listen on port 8080
router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req,res){
  res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})