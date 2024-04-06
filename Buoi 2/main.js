// var : Phạm vi được cả trong lẫn ngoài block
// {
//     var course = " JS intensive"
    
// }
// console.log(course)

//let : Phạm vi chỉ nằm trong block
// {
// let course = " JS intensive"
// console.log(course)
// }
//const : Phạm vi nằm trong block
// {
//     const course = " JS intensive"
//     console.log(course)
// }

// Arrow function : bỏ từ functionn và thêm dấu =>
// function logger(log) {
//     console.log(log);
// }
// logger("Message....")

// const sum = ( a,b ) => {
//     return a+ b;
// }
// console.log(sum(2,2));

//Template String
//c1
// const courseName = " Javascript";
// const description = " Course name : " + courseName;
// console.log(description);

//c2
// const courseName1 = " PHP";
// const description1 = `Course name : ${courseName1} ${courseName}`;
// console.log(description1);

//Backend -> API(url) -> Fetch -> Json -> Json.parser
// -> JS types -> Render ra giao diện với HTML
//Fetch
var postAPI = 'https://jsonplaceholder.typicode.com/posts'

fetch(postAPI)
    .then(function (response) {
        return response.json()
        //Json.parse : Json -> Js
    })
    .then(function (todo) {
        console.log(todo)
    })
    .catch(function (err) {
        alert('Error: ')
    })