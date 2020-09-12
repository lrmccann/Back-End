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
.route("/users/:id1")            //id1 is user _id
    .get(auth.authentication, usersController.findById)   // get 1 user by id   
    .put(auth.authentication, usersController.updateById)     // update 1 user by id


router
.route("/usersmatches/:id1/:id2")    //id1 is userid1, id2 user id of match
    .put(auth.authentication, usersController.updateMatchesYesById)     // update 1 user's matchesYes by id
 
router
.route("/usersallmatches/:id1")            //id1 is user _id
    .get(usersController.getMatchesById)   // get 1 user by id


// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
