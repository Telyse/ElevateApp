import { Router } from "express";
import training from "../models/training.js";

const router = Router();

// Create workout route
router.post("/", async (request, response) => {
  try {
    const newTraining = new training(request.body);

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
  try {
    const query = request.query;
    console.log("query", request.query);

    const data = await training.find(query);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single workout by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await training.findById(request.params.id);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});
