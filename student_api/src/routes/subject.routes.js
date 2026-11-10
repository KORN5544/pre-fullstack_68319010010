const express = require("express");
const subjectcontroller = require("../controllers/subject.controller")
const router = express.Router();

router.get("/", subjectcontroller.getAllSubject);
router.get("/:id", subjectcontroller.getSubjectById);

router.post("/", subjectcontroller.createSubject);

router.put("/:id", subjectcontroller.updateSubject);

router.delete("/:id", subjectcontroller.deleteSubject);

module.exports = router;