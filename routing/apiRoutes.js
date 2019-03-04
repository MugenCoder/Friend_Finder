// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// LOAD DATA
var friendFinder = require("../data/____"); 
var compatSurvey = require("../data/____"); 

// ROUTING
module.exports = function(app) {
    
    // API GET Requests
    app.get("/api/____", function(req, res) {
      res.json(friendFinder);
    });

    app.get("/api/____", function(req, res) {
        res.json(compatSurvey);
      });


    app.post("/api/____", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (friendFinder.length < 5) {
            friendFinder.push(req.body);
          res.json(true);
        }
        else {
          compatSurvey.push(req.body);
          res.json(false);
        }
      });

      app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        friendFinder.length = [];
        compatSurvey.length = [];
    
        res.json({ ok: true });
      });
    };