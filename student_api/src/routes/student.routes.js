const express = require("express");
const studentController = require("../controllers/student.controller")
const router = express.Router();

router.get("/",  studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);

module.exports = router;