const { readSync } = require("node:fs");
const prisma = require("../prisma");
const { resolveMx } = require("node:dns");


//ดึงข้อมูลทั้งหมด เเละ ค้นหาจากชื่อ
exports.getAllStudents = async (req, res) => {
    try{
        const search = req.query.search || "";
        const students = await prisma.student.findMany({
            where: { name: {contains: search}},
            orderBy: { id: "asc" },
        });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Error"});
    }
}

//ดึงข้อมูลรายคน
exports.getStudentById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const student = await prisma.student.findUnique({
            where: {id}
        });
           if (!student) {
            return res.status(404).json({ message : 'Students not found'});
           } 
           res.json(student);
    } catch {
        res.status(500).json({ message : 'Internal Server Error' })
    }
};

exports.createStudent = async (req, res) => {
    try {
        const { name, age, major } = req.body;
        if (!name || !age || !major) {
            return res.status(400).json( { message : 'Please Field Information'});
        }

        const newStudent = await prisma.student.create({
            data: { name, age: Number(age), major },
        });

        res.status(201).json(newStudent);
    } catch {
        res.status(500).json ({ message : 'Fail'});
    }
};