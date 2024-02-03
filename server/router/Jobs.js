// jobRoutes.js
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/Jobs");
const validateJob = require("../middleware/validateJob");

// GET all jobs
router.get("/all-jobs", jobController.getAllJobs);

//GET a job
router.get("/all-jobs/:id",jobController.getJob);

// POST a new job
router.post("/post-job", validateJob, jobController.postJob);

router.get("/my-job/:email",jobController.myJobs);

//Patch
router.patch("/edit-job/:id",jobController.updateJob);

//Delete
router.delete("/job/:id",jobController.delJobs);

module.exports = router;
