// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
      var hbsObject = {
          burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);

  });


};
