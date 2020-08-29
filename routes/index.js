const router = require("express").Router();
const usersController = require("../controllers/usersController");

router
  .route("/users")
  // .get(usersController.findAll)
  .post(usersController.create);
  
router
  .route("/users/:id")
  .get(usersController.findByUserName);



// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
