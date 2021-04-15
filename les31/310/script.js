let cashback = 5
let PIN = 7777

let cards = [
    {
        id: Math.random().toString().substr(2, 10),
        number: Number,
        title: String,
        money: Number,
        active: Boolean,
        CVV: Number,
        year: Number,
        month: Number
    }
]

let transactions = [
    {
        id: Math.random().toString().substr(2, 10),
        money: Number,
        comission: Number,
        service: Number,
        cashback: Number,
        time: new Date().toLocaleTimeString(),
        date: new Date()
    }
]

let service = [
    {
        id: Math.random().toString().substr(2, 10),
        title: String,
        comission: Number,
        money: Number
    }
]

let income = [
    {
        id: Math.random().toString().substr(2, 10),
        name: String,
        money: Number
    }
]
