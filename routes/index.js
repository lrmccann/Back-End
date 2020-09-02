const router = require("express").Router();
const usersController = require("../controllers/usersController");

router
  .route("/users")
  // .get(usersController.findAll)
  .post(function(req, res, next) {
    // Handle the get for this route
    usersController.create
  });
  
router
  .route("/users/:id1/:id2")
  .get(usersController.authenticate);



// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
