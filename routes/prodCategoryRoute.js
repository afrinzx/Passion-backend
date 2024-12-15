const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  PcreateCategory,
  PupdateCategory,
  PgetCategory,
  PgetAllCategory,
  PdeleteCategory,
} = require("../controller/prodCategoryCtrl");
const router = express.Router();

router.post("/", authMiddleware, isAdmin,PcreateCategory);
router.put("/:id", authMiddleware, isAdmin,PupdateCategory);
router.get("/:id",PgetCategory);
router.get("/",PgetAllCategory);
router.delete("/:id", authMiddleware, isAdmin,PdeleteCategory);

module.exports = router;
