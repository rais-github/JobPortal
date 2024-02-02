// jobRoutes.js
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/Jobs");
const validateJob = require("../middleware/validateJob");

// GET all jobs
router.get("/all-jobs", jobController.getAllJobs);

// POST a new job
router.post("/post-job", validateJob, jobController.postJob);

module.exports = router;
