
let successful = []
let unSuccessful = []
let gov = []
let govMax = 0
let govMin = 0

let bank = [
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
// bank[0].expensesPerMonth
// let expensesPerMonth = 0
// item.expensesPerMonth = item.expensesPerMonth
// console.log(bank);
for (let item of bank) {
    item.expensesPerMonth = 0

    for (let expens of item.expensesPerYear) {
        item.expensesPerMonth += expens.total
    }

    console.log(item.expensesPerMonth / 12)

    
    item.expensesPerYear ={ procent : ''}
    for (let procent1 of item.expensesPerYear){
        item.expensesPerYear += procent1.total
    }

}

console.log(bank);



// 1. Высчитать месячные траты, создав ключ expensesPerMonth
// 2. Высчитать процент трат в месяц, создав ключ procent
// 3. Создать два массыва successful и unsuccessful и добавить туда фирмы
// 4. В массив gov cколько получает государство от каждого (массив с цифрами)
// 5. govMax и govMin
// 6. Добавить ключ totalMoney, вычитав процент налога и все траты