const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createColor,
  updateColor,
  getColor,
  getAllColor,
  deleteColor,
} = require("../controller/colorCtrl");
const router = express.Router();

router.post("/", authMiddleware, isAdmin,createColor);
router.put("/:id", authMiddleware, isAdmin,updateColor);
router.get("/:id",getColor);
router.get("/",getAllColor);
router.delete("/:id", authMiddleware, isAdmin,deleteColor);

module.exports = router;
