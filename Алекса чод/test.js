let arr_cards = [];

let service = [
	{
		id: Math.random().toString().substr(2, 10),
		title: "Питание",
		comission: 3,
		money: 0,
		cashback: 1,
	},
	{
		id: Math.random().toString().substr(2, 10),
		title: "Steam",
		comission: 5,
		money: 0,
		cashback: 1,
	},
	{
		id: Math.random().toString().substr(2, 10),
		title: "Aliэчпресс",
		comission: 1,
		money: 0,
		cashback: 1,
	},
]

let cards = document.querySelector(".cards");
//Удаление карты
let deleteCard = () => {
	let et = event.target
	let id = et.parentElement.getAttribute('id')
	let find = arr_cards.filter(item => item.id === id)
	arr_cards.splice(arr_cards.indexOf(find) - 1, 1)
	reload_card()
}

let reload_card = () => {
	cards.innerHTML = "";

	for (let item_2 of arr_cards) {
		// Создание карточки
		let cr_div = document.createElement("div");
		cr_div.setAttribute("id", item_2.id)
		cr_div.classList.add("item");
		let cr_div_top = document.createElement("div");
		cr_div_top.classList.add("top_card");
		let cr_div_top_print = document.createElement("div");
		cr_div_top_print.classList.add("print");
		let cr_div_top_button = document.createElement("div")
		cr_div_top_button.setAttribute("onclick", "deleteCard()")
		cr_div_top_button.classList.add("delete_butt")
		let cr_div_top_num = document.createElement("div");
		cr_div_top_num.classList.add("num");
		cr_div_top_num.innerText = item_2.number;
		let cr_div_bottom = document.createElement("div");
		cr_div_bottom.classList.add("bottom-card");
		let cr_div_bottom_h1 = document.createElement("h1");
		cr_div_bottom_h1.innerText = item_2.name;
		let cr_div_bottom_h4 = document.createElement("h4");
		cr_div_bottom_h4.innerText = item_2.balance;
		cr_div_bottom_h4.classList.add("balance")
		let cr_div_bottom_month_year = document.createElement("div")
		cr_div_bottom_month_year.classList.add("cr_div_bottom_month_year")
		let cr_div_bottom_month_year_chertochka = document.createElement("h2")
		cr_div_bottom_month_year_chertochka.innerText = "/"
		let cr_div_bottom_h2 = document.createElement("h2")
		cr_div_bottom_h2.innerText = item_2.month
		let cr_div_bottom_h2_2 = document.createElement("h2")
		cr_div_bottom_h2_2.innerText = item_2.year
		cards.append(cr_div);
		cr_div.append(cr_div_top);
		cr_div.append(cr_div_bottom);


		cr_div_top.append(cr_div_top_print);
		cr_div_top.append(cr_div_top_num);

		cr_div_bottom.append(cr_div_bottom_h1);
		cr_div_bottom.append(cr_div_bottom_h4);
		cr_div_bottom.append(cr_div_bottom_month_year);
		cr_div_bottom_month_year.append(cr_div_bottom_h2)
		cr_div_bottom_month_year.append(cr_div_bottom_month_year_chertochka)
		cr_div_bottom_month_year.append(cr_div_bottom_h2_2);
		cr_div_bottom.append(cr_div_top_button);
	}

};

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
];



// Функция для добавления/удаления/изменения карт


//Работа с формами
let form_add_form = document.querySelector(".add_form");
//Открытие модельного окна формы
let show_form = document.querySelector(".show_form");
let remove_form = document.querySelector(".remove_form");

show_form.onclick = () => {
	event.preventDefault();

	form_add_form.classList.add("active");
};

form_add_form.onsubmit = () => {
	event.preventDefault();
	let start = document.querySelector(".data");
	for (let item of corporations) {
		if (
			item.num.toString() == start.children[1].value.substr(0, 4) &&
			start.children[0].value !== "" &&
			start.children[1].value.length <= 16
		) {
			let formData = new FormData(form_add_form);
			let new_card = {};
			//Значение по умолчанию
			new_card.id = Math.random().toString().substr(2, 10);
			new_card.balance = 1000;

			//Автоматическое добавление из формы
			formData.forEach((value, key) => {
				new_card[key] = value;
			});


			arr_cards.unshift(new_card);

			reload_card()
			let icon = document.querySelector('.print')
			icon.classList.add(item.name)


			console.log(arr_cards);
			// start.children[0].value = "";
			// start.children[1].value = "";
			form_add_form.classList.remove("active");
		} else if (start.children[0].value == "Шахзод") {
			let main = document.querySelector("main");
			let new_div = document.createElement("div");
			new_div.classList.add("easterEgg");
			main.append(new_div);
			form_add_form.classList.remove("active");
		}
	}
};

let cards_1 = [];

let card = {
	id: Math.random().toString().substr(2, 10),
	number: Number,
	name: String,
	balance: 0,
	type: Object,
	img: String,
};
let show_services_form = document.querySelector("#services")
let services_form = document.querySelector(".transactions")



show_services_form.onclick = () => {
	event.preventDefault()
	services_form.classList.add("active")

	for (let item_5 of arr_cards) {
		let new_card_in_form = document.createElement("option")
		new_card_in_form.setAttribute("value", item_5.id)
		let cards_form = document.querySelector("#cards_form")
		new_card_in_form.innerText = item_5.name
		cards_form.append(new_card_in_form)
	}
	for (let item_6 of service) {
		let new_service_in_form = document.createElement("option")
		new_service_in_form.setAttribute("value", item_6.id)
		let services_form = document.querySelector("#services_form")
		new_service_in_form.innerText = item_6.title

		services_form.append(new_service_in_form)
	}
}
let remove_services_form = document.querySelector(".transactions")

remove_services_form.onsubmit = () => {
	event.preventDefault()

	let formData = new FormData(event.target)

	let data = {}

	formData.forEach((value, key) => {
		data[key] = value
	})

	//Списание денег с карты
	let card_id = data.card

	let find_card = arr_cards.filter(item => item.id == card_id)[0]

	// меняем баланс на карте
	find_card.balance -= data.money

	//Добавление денег в услугу для статистики
	let service_id = data.service

	let find_service = service.filter(item => item.id == service_id)[0]

	find_service.money += parseFloat(data.money)
	//меняем эелемент в массиве
	reload_card()

	console.log(find_card)

	console.log(find_service);

	services_form.classList.remove("active")
}

let reload_services = () => {
	let transacations = document.querySelector(".transacations")
	let new_transaction_block = document.createElement("div")
	new_transaction_block.classList.add("transaction-first")
	let new_transaction_block_icon = document.createElement("div")
	new_transaction_block_icon.classList.add("transaction-icon")
	let new_transaction_block_info = document.createElement("div")
	new_transaction_block_info.classList.add("transaction-info")
	let new_transaction_block_info_1 = document.createElement("div")
	new_transaction_block_info_1.classList.add("transaction-info-1")
	let new_transaction_block_info_1_h3 = document.createElement("h3")
	let new_transaction_block_info_1_h4 = document.createElement("h4")
	let new_transaction_block_info_2 = document.createElement("div")
	new_transaction_block_info_2.classList.add("transaction-info-2")
	let new_transaction_block_info_2_h3 = document.createElement("h3")
	let new_transaction_block_info_2_h2 = document.createElement("h2")

	new_transaction_block_info_1_h3.innerText = "sad"
	new_transaction_block_info_1_h4.innerText = "sad"
	new_transaction_block_info_2_h3.innerText = "sad"
	new_transaction_block_info_2_h2.innerText = "sad"
	transacations.append(new_transaction_block)
	new_transaction_block.append(new_transaction_block_icon)
	new_transaction_block.append(new_transaction_block_info)
	new_transaction_block_info.append(new_transaction_block_info_1)
	new_transaction_block_info_1.append(new_transaction_block_info_1_h3)
	new_transaction_block_info_1.append(new_transaction_block_info_1_h4)
	new_transaction_block_info.append(new_transaction_block_info_2)
	new_transaction_block_info_2.append(new_transaction_block_info_2_h3)
	new_transaction_block_info_2.append(new_transaction_block_info_2_h2)

}

reload_services()
reload_services()