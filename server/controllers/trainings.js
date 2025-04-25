import { Router } from "express";
import Workout from "../models/training.js";

const router = Router();

// Create workout route
router.post("/", async (request, response) => {
  console.log(request.data);
  try {
    const newTraining = new Workout(request.body);
    console.log("newWorkout", newTraining);

    const data = await newTraining.save();
    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all workout route
router.get("/", async (request, response) => {
  console.log("everything", request.data);
  try {
    const data = await Workout.find();
    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single workout by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Workout.findById(request.params.id);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
