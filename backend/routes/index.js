const { render } = require("ejs");

const express = required("express");
const router = express.Router();

router.get("/", (req, res) => {
    render("index");
});