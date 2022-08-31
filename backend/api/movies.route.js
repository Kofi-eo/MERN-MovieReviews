import express from "express";
import MoviesController from "./movies.controller.js";

const router = express.Router();
router.route("/").get(MoviesController.apiGetMovies);

router.route("/action").get((req, res) => {
  res.send("Welcome to Action Movies");
});
export default router;
