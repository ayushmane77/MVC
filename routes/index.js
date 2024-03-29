// const express=require('express');
// const locationControlller=require('../controllers/locationController.js');
// const route=express.Router();
// route.get('/location',locationControlller.getLocation);
// module.exports=route;

const express=require('express');
const locationController=require('../controllers/locationController.js')
const restuarantController=require('../controllers/restuarantController.js');
const route=express.Router();
route.get('/location',locationController.getLocations);
route.get('/restuarants',restuarantController.getAllRestuarants);
route.get('/restuarants/:city',restuarantController.getRestuarantsByCity);
module.exports=route;