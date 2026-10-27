// จำลองการรับข้อมูลจาก server

const wait = (ms) => new Promise ((resolve) => setTimeout(resolve));

async function demo() {
    console.log("1) Start Loading. . . ");
    await wait(2000);
    console.log("2) Complete");
    // await getUsers();
    await getPosts();
}

// async function getUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//             throw new Error(`HTTP ${response.status}`);
//         }
//         const users = await response.json();
//         console.log(`Get data ${users.length}`);
//         users.forEach((u) => console.log(u.id, u.name, "-", u.email));
//     }catch (error) {
//         console.error("Error Found :", error.message);
//     }
// }

async function getPosts() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const posts = await response.json();
        console.log(`Get data ${posts.length}`);
        posts.forEach((u) => console.log(u.id, u.title, u.body));
    }catch (error) {
        console.error("Error Found :", error.message);
    }
}

demo();
console.log("3) ShowData");