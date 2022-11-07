const express = require("express");
const mysql = require("mysql");

// Create sql connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
});

// Connect database to backend
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySql Connected...");
});

const app = express();

// Create database
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send("Database created...");
    });
});

// Create table
app.get("/createpoststable", (req, res) => {
    let sql = "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Posts table created...");
    });
});

// Insert post 1
app.get("/addpost1", (req, res) => {
    let post = {title:"Post One", body:"This is post number one"};
    let sql = "INSERT INTO posts SET ?";
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Post 1 added...");
    });
});

// Insert post 2
app.get("/addpost2", (req, res) => {
    let post = {title:"Post Two", body:"This is post number two"};
    let sql = "INSERT INTO posts SET ?";
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Post 2 added...");
    });
});

// Select posts
app.get("/getposts", (req, res) => {
    let sql = "SELECT * FROM posts";
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("Posts fetched...");
    })
})

// Select single post
app.get("/getposts/:id", (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Post fetched...");
    })
})

// Update post
app.get("/updatepost/:id", (req, res) => {
    let newTitle = "Updated Title";
    let sql = `UPDATE posts SET title = "${newTitle}" WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("Post updated...");
    })
})

// Delete post
app.get("/deletepost/:id", (req, res) => {
    let newTitle = "Updated Title";
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("Post deleted...");
    })
})

const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views" + __dirname + "views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// Call for logger middleware. Middleware runs top to bottom, so this one runs first. If called after get requests, would not run
app.use(logger);

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const userRouter = require("./routes/users");

// Mounts userRouter to the /users directory
app.use("/users", userRouter);


// Middleware that logs the url extension to console
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
};

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port 5000");
});