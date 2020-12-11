// If a user sends data to add a new character...
const Workout = require("../models/Workout.js");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findById(params.id)
            .then(totalDuration => {
                console.log(totalDuration)
                const newDuration = body.duration + totalDuration.totalDuration;
                Workout.findByIdAndUpdate(params.id, { $push: { exercises: body }, totalDuration: newDuration })
                    .then(dbUser => {
                        res.json(dbUser);
                    })
                    .catch(err => {
                        res.json(err);
                        console.log(err);
                    });

            })
    });


}






