const prisma = require("../prisma");


// ดึงข้อมูลทั้งหมด และ ค้นหาจากชื่อ
exports.getAllSubject = async (req, res) => { 
    try {
        const search = req.query.search || "";
        const subjects = await prisma.subject.findMany({
            where: {
                name: {
                    contains: search
                }},
                orderBy: {
                    id: "asc"
                },
        });
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
// ดึงข้อมูลตามไอดี
exports.getSubjectById = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const subject = await prisma.subject.findUnique({
            where : {id}
        });
        if (!subject) {
            res.status(404).json({
                message : "Subject Not Found"
            });
        }
        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({
            message : "Internal Server Error"
        });
    }
}
// เพิ่มข้อมูลใหม่
exports.createSubject = async (req, res) => {
    try {
        const { subjectCode, name, objective, description, theoryHours, practiceHours, credit, teacher } = req.body;
        if (!subjectCode || !name || !objective || theoryHours == null || practiceHours == null || credit == null || !teacher) {
            return res.status(400).json({
                message : "Please Field Information"
            });
        }
        const newSubject = await prisma.subject.create({
            data : {
                subjectCode,
                name,
                objective,
                description : description || null,
                theoryHours : Number(theoryHours),
                practiceHours : Number(practiceHours),
                credit :  Number(credit),
                teacher,
            },
        });
        res.status(201).json(newSubject)
    } catch {
        res.status(500).json({
            message : "Internal Server Error"
        });
    }
}
// แก้ไขข้อมูล
exports.updateSubject =  async (req, res) => {
    try {
        const id = Number(req.params.id)
        const { subjectCode, name, objective, description, theoryHours, practiceHours, credit, teacher } = req.body;
        if (!subjectCode || !name || !objective || theoryHours == null || practiceHours == null || credit == null || !teacher) {
            return res.status(400).json({
                message : "Please Field Information"
            });
        }
        const updateSubject = await prisma.subject.update({
            where : {id},
            data : {
                subjectCode,
                name,
                objective,
                description,
                theoryHours : Number(theoryHours),
                practiceHours : Number(practiceHours),
                credit :  Number(credit),
                teacher,
            },
        });
        res.status(200).json(updateSubject);
    } catch {
        res.status(404).json({
            message : "Student Not Found"
        });
    }
}
// ลบข้อมูล
exports.deleteSubject = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const deleteSubject = await prisma.subject.delete({
            where: { id }
        })
        res.status(200).json({
            message : `ลบรายวิชา ${id} สำเร็จ`,
            data : deleteSubject
        });
    } catch {
        res.status(404).json({
            message : "Subject Not Found"
        });
    }
}