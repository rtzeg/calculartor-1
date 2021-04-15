let arr_cards = [];

let service = [
	{
		id: Math.random().toString().substr(2, 10),
		title: "Электричество",
		category: "Категория",
		comission: 3,
		money: 0,
		cashback: 1,
		img: 'https://www.iconfinder.com/icons/4753017/electricity_energy_estate_house_power_real_icon'
	},
	{
		id: Math.random().toString().substr(2, 10),
		title: "Вода",
		category: "Категория",
		comission: 5,
		money: 0,
		cashback: 1,
		img: 'https://www.iconfinder.com/icons/5041100/blood_droplet_health_healthcare_medic_medical_water_icon'
	},
	{
		id: Math.random().toString().substr(2, 10),
		title: "Питание",
		category: "Категория",
		comission: 1,
		money: 0,
		cashback: 1,
		img: 'https://www.iconfinder.com/icons/7531254/cheat_day_food_unhealthy_eating_cheat_meal_fast_food_junk_food_icon'
	},
]

let arr_transactions = [
	// {
	// },
	// {
	// 	id: Math.random().toString().substr(2, 10),
	// 	plus: false,
	// 	title: "Steam",
	// 	money: 4200,
	// 	service: "id_service",
	// 	card: "id_card"
	// },
	// {
	// 	id: Math.random().toString().substr(2, 10),
	// 	plus: false,
	// 	title: "light",
	// 	money: 2505,
	// 	id_service: "id_service",
	// 	card: "id_card"
	// },
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
		let cr_div_top = document.createElement("div");
		let cr_div_top_print = document.createElement("div");
		let cr_div_top_button = document.createElement("div")
		let cr_div_top_num = document.createElement("div");
		let cr_div_bottom = document.createElement("div");
		let cr_div_bottom_h1 = document.createElement("h1");
		let cr_div_bottom_h4 = document.createElement("h4");
		let cr_div_bottom_month_year = document.createElement("div")
		let cr_div_bottom_month_year_chertochka = document.createElement("h2")
		let cr_div_bottom_h2 = document.createElement("h2")
		let cr_div_bottom_h2_2 = document.createElement("h2")

		cr_div.setAttribute("id", item_2.id)
		cr_div.classList.add("item");
		cr_div_top.classList.add("top_card");
		cr_div_top_print.classList.add("print");
		cr_div_top_button.setAttribute("onclick", "deleteCard()")
		cr_div_top_button.classList.add("delete_butt")
		cr_div_top_num.classList.add("num");
		cr_div_top_num.setAttribute('onclick', 'editcard()')
		cr_div_bottom.classList.add("bottom-card");
		cr_div_bottom_h4.classList.add("balance")
		cr_div_bottom_month_year.classList.add("cr_div_bottom_month_year")

		cr_div_bottom_month_year_chertochka.innerText = "/"
		cr_div_bottom_h1.innerText = item_2.name;
		cr_div_top_num.innerText = item_2.number;
		cr_div_bottom_h4.innerText = item_2.balance;
		cr_div_bottom_h2.innerText = item_2.month
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
];


// Функция для добавления/удаления/изменения карт

//Работа с формами
let form_add_form = document.querySelector(".add_form");
let form_edit_form = document.querySelector(".edit_form");
//Открытие модельного окна формы
let show_form = document.querySelector(".show_form");
let remove_form = document.querySelector(".remove_form");

show_form.onclick = () => {
	event.preventDefault();

	form_add_form.classList.add("active");
};
let editcard = () => {
	event.preventDefault();

	form_edit_form.classList.add("active");
}

// id 
let id = event.target.parentElement.parentElement.

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


			// console.log(arr_cards);
			// start.children[0].value = "";
			// start.children[1].value = "";
			form_add_form.classList.remove("active");
		} else if (start.children[0].value === "smth") {
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
	console.log(data);

	//Списание денег с карты
	let card_id = data.card

	let find_card = arr_cards.filter(item => item.id == card_id)[0]
	// меняем баланс на карте
	find_card.balance -= data.money

	//Добавление денег в услугу для статистики
	let service_id = data.service

	let find_service = service.filter(item => item.id == service_id)[0]


	//////////////////////////////////////
	//new transaction
	let new_transaction = {
		id: Math.random().toString().substr(2, 10),
		plus: false,
		title: find_service.title,
		money: data.money,
		service: service_id,
		card: card_id
	}


	let find_card_in_arr = arr_cards.filter(item => item.id == card_id)[0]

	let reload_services = () => {
		let transacations = document.querySelector(".transacations")
		transacations.innerHTML = ""
		for (let transaction of arr_transactions) {
			//creating
			let new_transaction = document.createElement("div")
			let new_transaction_icon = document.createElement("div")
			let new_transaction_info = document.createElement("div")
			let new_transaction_info_1 = document.createElement("div")
			let new_transaction_info_1_h3 = document.createElement("h3")
			let new_transaction_info_1_h4 = document.createElement("h4")
			let new_transaction_info_2 = document.createElement("div")
			let new_transaction_info_2_h3 = document.createElement("h3")
			let new_transaction_info_2_h2 = document.createElement("h2")
			//Classlists
			new_transaction.classList.add("transaction-first")
			new_transaction_icon.classList.add("transaction-icon")
			new_transaction_info.classList.add("transaction-info")
			new_transaction_info_1.classList.add("transaction-info-1")
			new_transaction_info_1_h4.classList.add("category")
			//InnerText
			new_transaction_info_1_h3.innerText = transaction.title
			new_transaction_info_2_h3.innerText = transaction.money + "$"
			new_transaction_info_2_h2.innerText = find_card_in_arr.name

				//Append
			transacations.append(new_transaction)
			new_transaction.append(new_transaction_icon)
			new_transaction.append(new_transaction_info)
			new_transaction_info.append(new_transaction_info_1)
			new_transaction_info_1.append(new_transaction_info_1_h3)
			new_transaction_info_1.append(new_transaction_info_1_h4)
			new_transaction_info.append(new_transaction_info_2)
			new_transaction_info_2.append(new_transaction_info_2_h3)
			new_transaction_info_2.append(new_transaction_info_2_h2)
		}
	}

	
	arr_transactions.unshift(new_transaction)
	find_service.money += parseFloat(data.money)
	//Change el in mas
	reload_card()

	let cards_form_removed = document.querySelector("#cards_form")
	let services_form_removed = document.querySelector("#services_form")
	let removed_money = document.querySelector("#removed_money")

	cards_form_removed.innerHTML = ""
	services_form_removed.innerHTML = ""
	removed_money.value = ""

	services_form.classList.remove("active")
	reload_services()

	let new_transaction_info_1_h4 = document.querySelector(".category")
	
	//new_transaction_info_1_h4.innerText = find_service.category
	//new_transaction_icon.style.backgroundImage = find_service.img
}



