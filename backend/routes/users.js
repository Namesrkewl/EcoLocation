const express = require("express");
const bcrypt = require("bcrypt");
const { request } = require("express");
const router = express.Router();

// Variable storing an array of users on the site
const users = [];

// All routes in this file start with /users, so it's not needed in routing
// All routes are read from top to bottom in express, keep the dynamic users at the bottom and new users near the top


// Gets a list of all users
router.get("/", (req, res) => {
    console.log(req.query.name);
    res.json(users);
});

// Default values for registering a new account to the site
router.get("/new", (req, res) => {
    res.render("users/new", {firstName: "John", lastName: "Smith", email: "email@domain.com", userName: "Username", password: "Password"});
});

// When entering user registration credentials, the password is hashed through bcrypt for security
router.post("/", async (req, res) => {
    const isValid = true;
    if (isValid) {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, userName: req.body.userName, password: hashedPassword, identity: req.body.identity};
            users.push(user);
            res.redirect(`/users/${users.length - 1}`);
        } catch {
            res.status(500).send();
        }
    } else {
        console.log("Error");
        res.render("users/new", {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, userName: req.body.userName, password: req.body.password});
    }
});

// User Login
router.post("/login", async (req, res) => {
    const user = users.find(user => user.userName == req.body.userName);
    if(user == null) {
        return res.status(400).send("Cannot find user");
    }
    // Comparison for hashed password
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send("Welcome");
        } else {
            res.send("Not Allowed");
        }
    } catch {
        res.status(500).send();
    }
})

// Creates a dynamic parameter /:id that accepts any code after the address
router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User With ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`);
    });

// Param is a middleware (runinng between request and response), when it finds something with the "id" parameter, perform it's function then the next function. If there is no next, infinitely loads
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
})

// Sends the information out to a router variable to be accessed in other files
module.exports = router;