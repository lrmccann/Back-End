const router = require("express").Router();
const usersController = require("../controllers/usersController");
const auth = require("../controllers/middlewere/session-trecker")

router
.route("/users")
    .post(usersController.create)   // create a user
    .get(auth.authentication, usersController.findAll)   // get all users
  
router
.route("/users/:id1/:id2")          //id1 is username, id2 is password
    .get(usersController.authenticate)
   
router
.route("/user/:id1")            
    .get(auth.authentication, usersController.findByName)    // get 1 user by name (:id1)   
    .put(auth.authentication, usersController.updateByName)      // update 1 user by userName (:id1)

// update :id1 user's matchesYes array be adding :id2 (Name of matched user) in it
//:id1 is user Name, :id2 user Name of match
router
.route("/usersmatches/:id1/:id2")    
    .put(usersController.updateMatchesYesByName)   
 
    // get all info for all matches (for all users in matchesYes array) of user by id (:id1) 
router
.route("/usersallmatches/:id1")            
    .get(auth.authentication, usersController.getMatchesByName)    //id1 is user Name


// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .delete(usersController.remove);

module.exports = router;
