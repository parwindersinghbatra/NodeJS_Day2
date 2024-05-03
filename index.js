const fs = require("node:fs")
const path = require('path');
const packegeJSON = fs.readFileSync('package.json');
const package = JSON.parse(packegeJSON);
const author = package.author

const date  = new Date()
const format = date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
const str = "User: " + author + " LoggedInAt : "+ format
const filePath = "text.txt"

// const writeDataToFile = (filePath, str) => {
//     fs.writeFile(filePath, str, (err) =>{
//         if(err) throw err ;
//         console.log("file created successfully")
//     })
// }
// writeDataToFile()

// const readFileData = () => {

//     fs.readFile(filePath, "utf-8", (err, data) =>{
//         if(err) throw err ;
//         console.log(data)
//     })
// }

// readFileData()

// const readFileSynce = () => {

//     const data  = fs.readFileSync(filePath, 'utf8')
//         console.log(data)
//     }

// readFileSynce()

// const appendFile =()=>{
// fs.appendFile(filePath,"\n" +str, (err, data) => {
//     if (err) throw err ;

// })

// }

// appendFile()


const fullPath = path.join(__dirname, './', 'users.json');

// const writeDataToFile = (filePath, str) => {
//     fs.writeFile(filePath, str, (err) =>{
//         if(err) throw err ;
//         console.log("file created successfully")
//     })
// }


// const users = [
//     {
//         Taskname: 'Task 1',
//         Description:'Write a program in NodeJS',
//         Comment: 'Pending'
//     },
//     {
//         Taskname: 'Task 2',
//         Description:'Write a program in JavaScript',
//         Comment: 'Pending'
//     }
// ]

// const fullPath = path.join(__dirname, './', 'users.json');
// const readFileData = (filePath) => {
//     fs.readFile(filePath, "utf-8", (err, data) =>{
//         if(err) throw err ;
//         console.log(data)
//     })
// }

// readFileData(fullPath)

// writeDataToFile(fullPath, JSON.stringify(users)) ; return

// const fileData = fs.readFileSync(fullPath, 'utf8');
// const data = JSON.parse(fileData)
// const updateData = data.map((user) =>{
//     if(user.Taskname === "Task 1"){
//         return {
//             ...user,
//             Comment: 'Mark as Completed'
//         }
//     }
//     else{
//         return user
//     }
// })

// console.log(updateData)
// writeDataToFile(fullPath, JSON.stringify(updateData))


const deleteData = (filename) =>{
    fs.unlink(filename, (err) =>{
        if (err) throw err
        console.log("File deleted successfully")
    })
}
deleteData("text.txt")