const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUsers,
  getaUser,
  deleteaUser,
  updatedUser,
} = require("../controller/userCtrl");
const {authMiddleware,isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUsers);
router.get("/:id",authMiddleware,isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user",authMiddleware, updatedUser);

module.exports = router;