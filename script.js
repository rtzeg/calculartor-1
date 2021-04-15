let courses = [
    {
        title: 'SMM',
        howLong: 4
    },
    {
        title: 'Dev',
        howLong: 5
    },
    {
        title: 'Graph',
        howLong: 3
    },
]

let money = {
    total: 0,
    max: 0,
    min: 0
}

let m = 0
let w = 0

let smm = 0
let dev = 0
let graph = 0

let lc = [
    {
        sex: 'm',
        age: 18,
        payment: 220000,
        course: {
            title: 'SMM'
        }
    },
    {
        sex: 'm',
        age: 24,
        payment: 245000,
        course: {
            title: 'Graph'
        }
    },
    {
        sex: 'w',
        age: 27,
        payment: 190000,
        course: {
            title: 'Dev'
        }
    },
    {
        sex: 'm',
        age: 19,
        payment: 210000,
        course: {
            title: 'Graph'
        }
    },
    {
        sex: 'w',
        age: 16,
        payment: 195000,
        course: {
            title: 'Dev'
        }
    },
    {
        sex: 'm',
        age: 24,
        payment: 290000,
        course: {
            title: 'SMM'
        }
    },
    {
        sex: 'w',
        age: 26,
        payment: 215000,
        course: {
            title: 'SMM'
        }
    },
    {
        sex: 'w',
        age: 22,
        payment: 160000,
        course: {
            title: 'Dev'
        }
    },
    {
        sex: 'm',
        age: 24,
        payment: 245000,
        course: {
            title: 'Graph'
        }
    },
    {
        sex: 'w',
        age: 26,
        payment: 230000,
        course: {
            title: 'Dev'
        }
    }
]

let midle_age = 0

let age_numbers = 0

let howNumber = 0

let payment_numbers = 0

let payment_numbers2 = []

for (let item of lc) {
    //1 Задание
    age_numbers = age_numbers + item.age
    midle_age = age_numbers / lc.length
    // 2 Задание
    for (let item2 of courses) {
        if (item.course.title == item2.title) {
            item.course.howLong = item2.howLong
        }
    }
    //3 Задание
    if (item.course.title == 'Dev') {
        dev++
    } if (item.course.title == 'Graph') {
        graph++
    } if (item.course.title == 'SMM') {
        smm++
    }
    //4 Задание
    payment_numbers += item.payment
    //5 Задание
    payment_numbers2.push(item.payment)

    //6 Задание
    payment_numbers2.push(item.payment)

    //7 Задание
    if (item.sex == 'm') m++
    if (item.sex == 'w') w++
}
 console.log(payment_numbers2)
 console.log(w, m)
 console.log(payment_numbers)
 console.log(lc)

 console.log(dev)
 console.log(graph)
 console.log(smm)