const express = require("express");
const router = express.Router();

const {
  Create,
  FindAll,
  Update,
  Delete,
} = require("../Controllers/Controllers");

router.route("/addData").post(Create);

router.route("/findData").get(FindAll);

router.route("/updateData/:id").put(Update);

router.route("/deleteData/:id").delete(Delete);

module.exports = router;
