let bank = [ //Массив
    {
        name: 'Apple',
        budget: 1000000,
        tax: 28,
        expensesPerYear: [
            {
                title: 'Furniture',
                total: 125000
            },
            {
                title: 'Water',
                total: 18000,
            },
            {
                title: 'Rent',
                total: 258000
            }
        ]
    },
    {
        name: 'Microsoft',
        budget: 9880000,
        tax: 21,
        expensesPerYear: [
            {
                title: 'Furniture',
                total: 148000
            },
            {
                title: 'Water',
                total: 124000,
            },
            {
                title: 'Rent',
                total: 314000
            }
        ]
    },
    {
        name: 'HP',
        budget: 609000,
        tax: 14,
        expensesPerYear: [
            {
                title: 'Furniture',
                total: 414000
            },
            {
                title: 'Water',
                total: 19000,
            },
            {
                title: 'Rent',
                total: 114400
            }
        ]
    },
    {
        name: 'Xiomi',
        budget: 889500,
        tax: 17,
        expensesPerYear: [
            {
                title: 'Furniture',
                total: 318000
            },
            {
                title: 'Water',
                total: 14000,
            },
            {
                title: 'Rent',
                total: 169000
            }
        ]
    },
    {
        name: 'Samsung',
        budget: 889500,
        tax: 12,
        expensesPerYear: [
            {
                title: 'Furniture',
                total: 650400
            },
            {
                title: 'Water',
                total: 29000,
            },
            {
                title: 'Rent',
                total: 212000
            }
        ]
    }
]
//1 задание  и 2 задания
for (let item of bank) {
    let expensesPerYearNumbers = 0

    for (let item2 of item.expensesPerYear) {
        expensesPerYearNumbers = (expensesPerYearNumbers + item2.total)

    }
    item.expensesPerMonth = expensesPerYearNumbers / 12

    item.procent = item.expensesPerMonth / (expensesPerYearNumbers / 100)

}

//3 задание и 6 задание

let successful_companies = []

let unsuccessful_companies = []

for (let item of bank) {
    let expensesPerYearNumbers = 0

    for (let item2 of item.expensesPerYear) {
        expensesPerYearNumbers = (expensesPerYearNumbers + item2.total)

    }
    item.expensesPerMonth = expensesPerYearNumbers / 12
    item.procent = item.expensesPerMonth / (expensesPerYearNumbers / 100)

    item.totalMoney = item.budget - ((item.budget / 100) * item.tax + expensesPerYearNumbers)
    if (item.totalMoney > 0) {
        successful_companies.push(item)

    }
    else unsuccessful_companies.push(item)



}

// 4 задание
let tax_numbers = 0

let gov = []

for (let item of bank) {
    gov.push(tax_numbers = tax_numbers + (item.budget / 100) * item.tax)
}

// 5 задание 
let pharms = []

for (let item of bank) {
    pharms.push(item.tax)
}
let govMax = (pharms) => {
    console.log("Максимальное число:  " + Math.max.apply(null, pharms))
}
let govMin = (pharms) => {
    console.log("Минимальное число:  " + Math.min.apply(null, pharms))
}

//Консоль

//успешные
console.log(successful_companies);
//не успешные
console.log(unsuccessful_companies);
//консоль банка 
console.log(bank)
//Налоги компаний
console.log("Сколько получило государство со всех компаний:  " + gov)

//Вызов функций 
govMax(pharms)
govMin(pharms)