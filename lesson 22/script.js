let name = prompt('Ваще имя?')
let score = prompt('Назвите номер счета?')
let money = prompt('Сколько хотите обноличить')
let procent = 100 / score * money
if (name == "Alex") {
    let score2 = prompt('Назвите номер счета?')

    if(procent >= 90){
        console.log('Сколько я получил: + money / 100 * 93');
        console.log("Сколько получил банк :" + money / 100 * 7);
        console.log("Сколько осталось на счету :" + (balance - get));
    }
} else {
    alert('Вход запрешен')
}
