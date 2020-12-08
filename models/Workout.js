const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true
      },
      name: {
        type: String,
        trim: true
      },
      distance: {
        type: Number
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workou", WorkoutSchema);

module.exports = Workout;