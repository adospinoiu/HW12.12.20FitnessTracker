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
        Workout.findByIdAndUpdate(params.id, { $push: { exercises: body }})
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
                console.log(err);
            });
    });


}






