// let obj = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": [
//             {
//                 a: true
//             }
//         ]
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": [
//             {
//                 a: false
//             }
//         ]
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": [
//             {
//                 a: true
//             }
//         ]
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": [
//             {
//                 a: false
//             }
//         ]
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": [
//             {
//                 a: true
//             }
//         ]
//     },
// ]
// let todoFilterArray = obj.filter(item => item.completed[0].a == true)
// let todoFilterArray2 = obj.filter(item => item.completed[0].a == false)

// console.log(todoFilterArray)
// console.log(todoFilterArray2)




let people = [
    {
        year: 1990
    },
    {
        year: 1995
    },
    {
        year: 1998
    },
    {
        year: 2004
    },
    {
        year: 2008
    },
]
people.map(item => item.year = item.year + 3)
console.log(people);