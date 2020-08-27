const router = require("express").Router();
const usersRoutes = require("./users");

// Post routes
router.use("/users", usersRoutes);

module.exports = router;
