
const express = require("express");
const router = express.Router();

const {
  createContact,
} = require("../controllers/contactController");

// POST: Submit contact enquiry
router.post("/", createContact);

module.exports = router;



