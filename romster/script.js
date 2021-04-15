let arr_cards = []
let arr_service = [
	{
		id: Math.random().toString().substr(2, 10),
		img: 'Image',
		name: 'Электричество',
		money: 0
	},
	{
		id: Math.random().toString().substr(2, 10),
		img: 'Image',
		name: 'Вода',
		money: 0
	},
	{
		id: Math.random().toString().substr(2, 10),
		img: 'Image',
		name: 'Аренда помещения',
		money: 0
	},
]
let arr_transactions = [
	// {
	// 	id: Math.random().toString().substr(2, 10),
	// 	plus: false,
	// 	title: 'За свет',
	// 	money: 1500,
	// 	id_service: 'id_service',
	// 	id_card: 'id_card',
	// },
	// {
	// 	id: Math.random().toString().substr(2, 10),
	// 	plus: false,
	// 	title: 'Steam',
	// 	money: 4200,
	// 	service: 'id_service',
	// 	card: 'id_card',
	// },
]

let card_select = document.querySelector('.select1')
let cards = document.querySelector(".cards")
let transactions = document.querySelector(".transactions-list")
let services = document.querySelector(".services")


// PIN-code
let pin_numbers = document.querySelectorAll('.pin-number')
let CURRENT_PIN = ''
let RIGHT_PIN = '7777'
let PIN_SCREEN = document.querySelector('.pin')
let PIN_SCREEN_TITLE = document.querySelector('.pin h1')
let PIN_REMOVE_TITLE = document.querySelector('.remove')

if(localStorage.getItem('PIN') != '7777') PIN_SCREEN.style.display = 'flex'

for(let item of pin_numbers) {
	item.onclick = () => {
		CURRENT_PIN = CURRENT_PIN + item.innerText
		PIN_SCREEN_TITLE.innerText = CURRENT_PIN

		// Стоп + Проверка
		if(CURRENT_PIN.length >= 4) {
			if(CURRENT_PIN === RIGHT_PIN) {
				// Все хорошо - PIN правильный
				PIN_SCREEN.classList.add('no-active')

				// Сохранить новый PIN
				localStorage.setItem('PIN', CURRENT_PIN)
			}
		}
	}
}

// СТЕРЕТЬ PIN-КОД
PIN_REMOVE_TITLE.onclick = () => {
	// Переопределить переменную в JS
	CURRENT_PIN = PIN_SCREEN_TITLE.innerText.substring(0, PIN_SCREEN_TITLE.innerText.length - 1)
	// Удалить букву из HTML
	PIN_SCREEN_TITLE.innerText = PIN_SCREEN_TITLE.innerText.substring(0, PIN_SCREEN_TITLE.innerText.length - 1)

	console.log(PIN_SCREEN_TITLE.innerText)
}

let deletecard = () => {
	let et = event.target
	let id = et.parentElement.getAttribute('id')
	let find = arr_cards.filter(item => item.id === id)[0]

	arr_cards.splice(arr_cards.indexOf(find), 1)
	
	reload_cards()
}

let reload_cards = () => {
	cards.innerHTML = ""

	for (let item_2 of arr_cards) {
		// Создание карточки
		let cr_div = document.createElement("div")
		let cr_div_top = document.createElement("div")
		let cr_div_top_print = document.createElement("div")
		let cr_div_top_num = document.createElement("div")
		let cr_div_bottom = document.createElement("div")
		let cr_div_bottom_h1 = document.createElement("h1")
		let cr_div_bottom_h4 = document.createElement("h4")
		let cr_div_bottom_month_year = document.createElement("div")
		let cr_div_bottom_h2_2 = document.createElement("h2")
		let delete_icon = document.createElement('div')
		let cr_div_bottom_h2 = document.createElement("h2")

		cr_div.setAttribute('id', item_2.id)
		cr_div.classList.add("item")
		cr_div_top.classList.add("top_card")
		cr_div_top_print.classList.add("print")
		cr_div_top_num.classList.add("num")
		cr_div_top_num.innerText = item_2.number
		cr_div_bottom.classList.add("bottom-card")
		cr_div_bottom_h1.innerText = item_2.name
		cr_div_bottom_h4.innerText = item_2.balance
		cr_div_bottom_month_year.classList.add("cr_div_bottom_month_year")
		cr_div_bottom_h2.innerText = item_2.month
		cr_div_bottom_h2_2.innerText = item_2.year
		delete_icon.classList.add('del_btn')
		delete_icon.setAttribute('onclick', 'deletecard()')
		cr_div_top_num.setAttribute('onclick', 'editcard()')
		
		cards.append(cr_div)
		cr_div.append(delete_icon)
		cr_div.append(cr_div_top)
		cr_div.append(cr_div_bottom)
		cr_div_top.append(cr_div_top_print)
		cr_div_top.append(cr_div_top_num)
		cr_div_bottom.append(cr_div_bottom_h1)
		cr_div_bottom.append(cr_div_bottom_h4)
		cr_div_bottom.append(cr_div_bottom_month_year)
		cr_div_bottom_month_year.append(cr_div_bottom_h2)
		cr_div_bottom_month_year.append(cr_div_bottom_h2_2)
	}
}

let reload_transactions = () => {
	services.innerHTML = ''

	for(let item of arr_transactions) {
		let cr_div = document.createElement('div')
		let cr_div_div_1 = document.createElement('div')
		let cr_div_div_2 = document.createElement('div')
		let cr_div_div_1_1 = document.createElement('div')
		let cr_div_div_1_2 = document.createElement('div')
		let cr_h3_1 = document.createElement('h3')
		let cr_h4_1 = document.createElement('h4')
		let cr_h3_2 = document.createElement('h3')
		let cr_h4_2 = document.createElement('h4')
	
		// Классы
		cr_div.classList.add('transaction-first')
		cr_div_div_1.classList.add('transaction-icon')
		cr_div_div_2.classList.add('transaction-info')
		cr_div_div_1_1.classList.add('transaction-info-1')
		cr_div_div_1_2.classList.add('transaction-info-2')

		// Добавляем инфу из объекта услуг
		cr_h3_1.innerText = item.title
		cr_h4_1.innerText = item.id_service
		cr_h3_2.innerText = item.money
		cr_h4_2.innerText = item.id_card

		// Аппендим
		transactions.append(cr_div)
		cr_div.append(cr_div_div_1)
		cr_div.append(cr_div_div_2)
		cr_div_div_2.append(cr_div_div_1_1)
		cr_div_div_2.append(cr_div_div_1_2)
		// текста
		cr_div_div_1_1.append(cr_h3_1)
		cr_div_div_1_1.append(cr_h4_1)
		cr_div_div_1_2.append(cr_h3_2)
		cr_div_div_1_2.append(cr_h4_2)
	}
}

//форма транзакций
let modal_bg = document.querySelector('.modal_bg')
let transaction_form = document.querySelector('.transaction-form')
let transaction_btn = document.querySelector('.menu_item_payment')
let trans_btn = document.querySelector('.trans-btn')

transaction_btn.onclick = () => {
	event.preventDefault()

	let select_cards = document.querySelector('.select_cards')
	let select_service = document.querySelector('.select_service')

	transaction_form.classList.add('active')
	modal_bg.classList.add('active')
	
	for (let item of arr_service) {
		let card_option = transaction_form.children[1].children[1].children[0].cloneNode(true)
		
		card_option.innerText = item.name
		card_option.setAttribute('value', item.id)
		select_service.append(card_option)
	}
	for (let item of arr_cards) {
		let card_option = transaction_form.children[1].children[2].children[0].cloneNode(true)
		
		card_option.innerText = item.name
		card_option.setAttribute('value', item.id)
		select_cards.append(card_option)
	}
}

let editcard = () => {
	event.preventDefault()
   //модальное окно
	form_edit_form.classList.add("active")

	//id 
	let id = event.target.parentElement.parentElement.getAttribute('id')
	
	//Поиск в массиве
	let card = arr_cards.filter(item => item.id == id)[0]

   // изменить импуты
   document.querySelector('.edit_form #name').value = card.name
   document.querySelector('.edit_form #number').value = card.number
   document.querySelector('.edit_form #balance').value = card.balance
   document.querySelector('.edit_form #month').value = card.month
   document.querySelector('.edit_form #year').value = card.year 

   

}
let edit_frm_btn = document.querySelector('.edit_form')
    edit_frm_btn.onsubmit = () => {
	event.preventDefault()
	let formData1 = new FormData(event.target)
	let data = {}
	
	formData1.forEach((value, key) => {
		data[key] = value
	})

	let find = arr_cards.filter(item => item.id == card_id)[0]

	find.name = new_card.name
	find.number = new_card.number
	find.balance = new_card.balance
	find.month = new_card.month
	find.year = new_card.year

	
	reload_cards()
}
transaction_form.onsubmit = () => {
	event.preventDefault()

	let formData = new FormData(event.target)
	let data = {}
	
	formData.forEach((value, key) => {
		data[key] = value
	})

	let card_id = data.card
	let card_find = arr_cards.filter(item => item.id == card_id)[0]
	// Меняем баланс на карте
	card_find.balance -= parseFloat(data.money)
	// Меняем элемент в массиве

	// Добавление денег в услугу для статистики
	let service_id = data.service
	let service_find = arr_service.filter(item => item.id == service_id)[0]
	// Меняем баланс в услуге
	service_find.money += parseFloat(data.money)

	// Добавить элемент в транзакции
	arr_transactions.unshift({
		id: Math.random().toString().substr(2, 10),
		plus: false,
		title: 'Title of service',
		money: data.money,
		id_service: data.service,
		id_card: data.card
	})

	// Все работает
	reload_cards()
	reload_transactions()
	
	console.log(data)
	// transaction_form.classList.remove('active')
	// modal_bg.classList.remove('active')
}

// Цвета фона
let corporations = [
	{
		name: "VISA",
		num: 4278,
		img: "",
	},
	{
		name: "Mastercard",
		num: 1234,
		img: "",
	},
	{
		name: "Uzcard",
		num: 8600,
		img: "",
	},
	{
		name: "HUMO",
		num: 9860,
		img: "",
	},
]

// Функция для добавления/удаления/изменения карт


//Работа с формами
let form_add_form = document.querySelector(".add_form")
let form_edit_form = document.querySelector(".edit_form");
//Открытие модельного окна формы
let show_form = document.querySelector(".show_form")
let remove_form = document.querySelector(".remove_form")

show_form.onclick = () => {
	event.preventDefault()

	form_add_form.classList.add('active')
	modal_bg.classList.add('active')
}


form_add_form.onsubmit = () => {
	event.preventDefault()
	let start = document.querySelector(".data")
	for (let item of corporations) {
		if (
			item.num.toString() == start.children[1].value.substr(0, 4) &&
			start.children[0].value !== "" &&
			start.children[1].value.length == 16
		) {
			let formData = new FormData(form_add_form)
			let new_card = {}
			//Значение по умолчанию
			new_card.id = Math.random().toString().substr(2, 10)
			new_card.balance = 0

			//Автоматическое добавление из формы
			formData.forEach((value, key) => {
				new_card[key] = value
			})


			arr_cards.unshift(new_card)

			reload_cards()
			let icon = document.querySelector('.print')
			icon.classList.add(item.name)
			// start.children[0].value = ""
			// start.children[1].value = ""
			form_add_form.classList.remove("active")
		} else if (start.children[0].value == "Шахзод") {
			let main = document.querySelector("main")
			let new_div = document.createElement("div")
			new_div.classList.add("easterEgg")
			main.append(new_div)
			form_add_form.classList.remove("active")
		}
	}
}

let cards_1 = []

let card = {
	id: Math.random().toString().substr(2, 10),
	number: Number,
	name: String,
	balance: 0,
	type: Object,
	img: String,
}

let close_all_modals = () => {
	let all_modals = document.querySelectorAll('form')

	for(let item of all_modals) {
		item.classList.remove('active')
	}

	modal_bg.classList.remove('active')
}

// Закрыть все окна
modal_bg.onclick = close_all_modals
