// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var userData = require("../data/friends");
var govData = require("../data/governors");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // It parses the array exported from the "friends" files
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(userData);
  });

  app.get("/api/governors", function(req, res) {
    res.json(govData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    let existingIds = [];
    userData.forEach((e) => {
      existingIds.push(e.userId)
    });    
      if(existingIds.indexOf(req.body.userId) === -1) {
        res.json(true);
        userData.push(req.body);
      }
      else {
        res.json(false);
      }
    })

    app.post("/api/governors", function(req, res) {
      console.log("New Governor");
      })
};
