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
.route("/users/:id1")            
    .get(auth.authentication, usersController.findById)    // get 1 user by _id (:id1)   
    .put(auth.authentication, usersController.updateById)      // update 1 user by userName (:id1)

// update :id1 user's matchesYes array be adding :id2 (id of matched user) in it
//:id1 is userid1, :id2 user id of match
router
.route("/usersmatches/:id1/:id2")    
    .put(auth.authentication, usersController.updateMatchesYesById)   
 
    // get all info for all matches (for all users in matchesYes array) of user by id (:id1) 
router
.route("/usersallmatches/:id1")            
    .get(usersController.getMatchesById)    //id1 is user _id


// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .delete(usersController.remove);

module.exports = router;
