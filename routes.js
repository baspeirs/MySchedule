const passport = require("passport");
const express = require("express");
const path = require("path");
const router = express.Router();
const db = require("./models");
const timeOffController = require("./controllers/timeOffController");
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
        if (err) next(err);
        if (!user) res.json(info);
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

router.get("/api/authorized", isAuthenticated, function (req, res) {
    res.json(req.user);
});

// ===== Time off Requests =====
router.post("/api/timeoffpost", (req, res) => {
    db.TimeOffRequest.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

router.get("/api/timeoffrequests", (req, res) => {
    db.TimeOffRequest.find({})
        .then(request => {
            res.json(request)
        })
        .catch(err => console.log(err))
})

router.put("/api/timeoffclaim/:id", (req, res) => {
    console.log(req.body)
    db.TimeOffRequest.findOneAndUpdate({ _id: req.params.id }, { $push: { users: req.body.user } }, { new: true })
        .then(result => {
            console.log("Router.put log: ")
            console.log(result)
        })
        .catch(err => console.log(err))
})


module.exports = router;