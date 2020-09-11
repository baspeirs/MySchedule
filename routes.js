const passport = require("passport");
const express = require("express");
const path = require("path");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthendticated");

// register user route
router.post("/api/register", (req, res) => {
    console.log("registering user.");

    db.User.register(
        new db.User({
            username: req.body.username,
            email: req.body.email,
            created: req.body.created,
            name: req.body.name,
            phoneNumber: req.body.number,
            manager: req.body.manager
        }),
        req.body.password,
        (err, user) => {
            if (err) {
                console.log(err);
                return res.json(err)
            }
            passport.authenticate("local")(req, res, (data) => {
                res.json(user);
            })
        }
    )
})

// user login route (use a post request for log in)
router.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if(err) next(err);
        if(!user) res.json(info);
        req.logIn(user, err => {
            if (err) next(err);
            return res.json(user)
        });
    })(req, res, next);
});

// user log out route (get request for logout function)
router.get("/api/logout", (req, res) => {
    req.logout();
    res.json({ message: "logged out" });
})



module.exports = router;