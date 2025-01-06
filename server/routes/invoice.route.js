const express = require("express");
const {
  addInvoice,
  getAllInvoices,
  deleteInvoice,
} = require("../controllers/invoice.controller");

const router = express.Router();

router.route("/add").post(addInvoice);
router.route("/all").get(getAllInvoices);
router.route("/:id").delete(deleteInvoice);

module.exports = router;
