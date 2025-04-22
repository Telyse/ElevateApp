import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  exerciseRoutine: [
    {
      muscle: {
        type: String,
        required: true,
        enum: [
          "chest",
          "lower_back",
          "middle_back",
          "biceps",
          "triceps",
          "abdominal",
          "abductors",
          "adductors",
          "calves",
          "forearms",
          "glutes",
          "hamstrings",
          "lats",
          "quadriceps",
          "traps",
          "neck"
        ]
      },
      name: {
        type: String,
        required: true,
        validate: /^[A-Za-z ]*$/
      },
      type: {
        type: String,
        required: true,
        enum: [
          "cardio",
          "olympic_weightlifting",
          "plyometrics",
          "powerlifting",
          "strength",
          "stretching",
          "strongman"
        ]
      },
      difficulty: {
        type: String,
        required: true,
        enum: ["beginner", "intermediate", "expert"]
      },
      equipment: {
        type: String,
        required: false,
        validate: /^[A-Za-z0-9 ]*$/
      },
      instructions: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9,.' ]*$/
      }
    }
  ]
});
const workout = mongoose.model("workout", workoutSchema);
export default workout;
