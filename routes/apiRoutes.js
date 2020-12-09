// If a user sends data to add a new character...
const Workout = require("../models/Workout.js");

module.exports = function (app) {

    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workout/:id", ({ body }, res) => {
        Workout.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
    });


}






