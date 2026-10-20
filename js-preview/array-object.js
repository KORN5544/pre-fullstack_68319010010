// Array
const students = ["Earth", "Tho", "Silapakorn", "Ood", "Matus"];

console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ทำการาแสดงผลลัพธ์ที่อัพเดต ${students} จำนวนรายชื่อ ${students.length}คน`);

// Objiect
const student = {
    id: 101,
    name: "Ice",
    age: 20,
    major: "Information",
};
console.log(`Name ${student.name}`);
console.log(`Major ${student.major}`);

// Array and Object
const studentList = [
    {id: 101, name: "Korn", age:20, major: "IT"},
    {id: 102, name: "Ice", age:20, major: "IT Roblox"},
    {id: 103, name: "Ball", age:20, major: "IT PUBG"},
]

// map : แปลงทุกตัว ให้ได้ array ใหม่ในการแสดงผล
const names = studentList.map((s) => `ชื่อ ${s.name} อายุ ${s.age} Id ${s.id} แผนกวิชา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map : ${names}`);