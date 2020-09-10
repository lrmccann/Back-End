const router = require("express").Router();
const usersController = require("../controllers/usersController");

router
.route("/users")
    .post(usersController.create)   // create a user
    .get(usersController.findAll)   // get all users
  
router
.route("/users/:id1/:id2")          //id1 is username, id2 is password
    .get(usersController.authenticate)
   
router
.route("/users/:id1")                   //id1 is user _id
    .get(usersController.findById)      // get 1 user by id   
    .put(usersController.updateById)     // update 1 user by id


router
.route("/usersmatches/:id1/:id2")       //id1 is userid1, id2 user id of match
    .put(usersController.updateMatchesYesById)     // update 1 user's matchesYes by id
 
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
