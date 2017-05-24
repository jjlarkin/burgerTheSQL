// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burger/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });


  // POST new burger
  app.post("/api/burger", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      name: req.body.name,
      isEaten: req.body.isEaten,

    })
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/burger/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/burger", function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
