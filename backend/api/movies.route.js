import express from "express";

const router = express.Router();
router.route("/").get((req, res) => res.send("hello world"));

router.route("/action").get((req, res) => {
  res.send("Welcome to Action Movies");
});
export default router;
