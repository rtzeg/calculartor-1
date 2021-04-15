// let garage = [
//     'gentra','tahoe', 'matiz'
// ]
// for(let car of garage){
//     console.log(car);
// }

// Массивы
let people = [
    {
        name: 'Mansur',
        age: 17,
        isMarried: false,
        phone: 123548496,
        cars: [
            "nexia3", "black"
        ],
        work: {
            name: 'Mansur',
            posotion: "Frontend_developerm",
            street: 'Selskiy ',
            money: 100000

        }


    },
    {
        name: 'Davlat',
        age: 22,
        isMarried: true,
        phone: 123548496,
        cars: [
            "nexia3", "black"
        ],
        work: {
            name: 'Davlat',
            posotion: "Frontend_developerm",
            street: 'Gagarin ',
            money: 1000000

        }
    },
    {
        name: 'Damir',
        age: 21,
        isMarried: false,
        phone: 45658548,
        cars: [
            "Spark", "blue"
        ],
        work: {
            name: 'Damir',
            posotion: "Frontend_developerm",
            street: 'Marhaba ',
            money: 3000000

        }
    }
    
]
// console.log(people);

// for(let item of people){
//     fil
// }
let filteredArray = people.filter(item=> item.isMarried == true)
console.log(filteredArray);