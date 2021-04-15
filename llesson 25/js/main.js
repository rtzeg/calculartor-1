// let age = prompt('Введите свой возвраст ?')
// let ansAge = () => {
//     if (age >= 18) {
//         return true
//     } else if (age <= 18) {
//         return false
//     }
// }

// console.log(ansAge());

// let group = [
//     {
//         name: 'Alex',
//         age: 18
//     },
//     {
//         name: 'Barbara',
//         age: 21
//     },
//     {
//         name: 'John',
//         age: 20
//     },
//     {
//         name: 'Michael',
//         age: 19
//     },
//     {
//         name: 'Susan',
//         age: 22
//     },
// ]
// group.map(item => item.id = Math.random().toString().substr(2, 15))
// console.log(group()); 
// let btn1 = ducument.quarySelector('button ')
// let btnId = document.getElementById('a')
// let btnClass = document.getElementsByClassName('b')

// let btn = ducument.quarySelector('Button')
// let btnId = ducument.getElementById('a')
// let btnClass = ducument.getElementByClassName('b')




let btn1 = document.querySelector('.btn1')


btn1.onclick = () => {
    let age = prompt('Ваш возвраст?')
    if (age >= 18) {
        alert('Welcome')
    } else {
        alert('Go out')
    }
}


form.onsubmit = (event) => {
    alert(123)
}
h.onmouseenter = () => {
    console.log('Я вощел');
}
h.onmousуleave = () => {
    console.log('Я выщёл');
}
h.onmousemove = () => {
    console.log('Я Двигаюсь');
}
//     prompt('Сколько хотите Внести?')
// }

// btn1.addEventListener('click', () => {
//     alert(123)
// })


