let arr_cards = [];


//назание сервивсов
let arr_servis = [
	{
		id: Math.random().toString().substr(2, 10),
		name: "Элкетричество",
		money: 0
	},
	{
		id: Math.random().toString().substr(2, 10),
		name: "Paynet",
		money: 0
	},
	{
		id: Math.random().toString().substr(2, 10),
		name: "Steam",
		money: 0
	}
]

// работа с транкзакциями
let arr_transactions = [
	{
		id: Math.random().toString().substr(2, 10),
		plus: true,
		money: 1500, 
		id_service: 'id_service',
		id_card: 'id_card',
		titele: 'stem',
	},
	{
		id: Math.random().toString().substr(2, 10),
		plus: true,
		balance: 1700, 
		arr_servis: 'id_service',
		card: 'id_card',
		service: 'Электричество',
	},
	{
		id: Math.random().toString().substr(2, 10),
		plus: true,
		money: 1500, 
		id_service: data.se,
		id_card: data.card,
		title: 'Paynet',
	}
]

for (let item3 of arr_transactions) {
	let transacations = document.querySelector(".transacations")
	
	let reload_services = () => {
		
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
	
		new_transaction_block_info_1_h3.innerText = "Steam"
		new_transaction_block_info_1_h4.innerText = "Игры"
		new_transaction_block_info_2_h3.innerText = "200$"
		new_transaction_block_info_2_h2.innerText = "Дебетовая карта"
		transacations.append(new_transaction_block)
		new_transaction_block.append(new_transaction_block_icon)
		new_transaction_block.append(new_transaction_block_info)
		new_transaction_block_info.append(new_transaction_block_info_1)
		new_transaction_block_info_1.append(new_transaction_block_info_1_h3)
		new_transaction_block_info_1.append(new_transaction_block_info_1_h4)
		new_transaction_block_info.append(new_transaction_block_info_2)
		new_transaction_block_info_2.append(new_transaction_block_info_2_h3)
		new_transaction_block_info_2.append(new_transaction_block_info_2_h2)
		
		let formDataServise = new formDataServise(event.target)
		let dataSrv = {}
	
		formDataServise.forEach((value, key) => {
			data[key] = value
		})
		// списание денег
		let card_id = data.card
		let filter_pay = arr_cards.filter(item => item.id == card_id)[0]
		let find_service = arr_service.filter(item => item.id == service_id)[0]
			
		filter_pay.balance -= data.money
	
		find_service.money += parseFloat(data.money)
		
		console.log(filter_pay);
		reload_card()
		reload_services()
		
	}

}

let cards = document.querySelector(".cards");

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
let form_pay = document.querySelector(".selected")
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
			new_card.balance = 0;

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
// добавление услуги 
let trance_menu = document.querySelector(".menu_item2")
let trance_remov = document.querySelector(".btnremove")
trance_menu.onclick = () => {
	event.preventDefault();

	form_pay.classList.add("select");

	// селекыт с картами
	let card_select = document.querySelector(".add_transactions .cardspay")
	let servicePayment = document.querySelector(".add_transactions .service")

	//доб неск элем
	for (let item of arr_servis) {
		//клоуны карды
		let card_option = form_pay.children[1].children[0].cloneNode(true)

		//земена
		card_option.innerText = item.name
		card_option.setAttribute("value", item.id)
		servicePayment.append(card_option)

		servicePayment.append(card_option)
	}
	for (let item of arr_cards) {
		event.preventDefault()
		//клоуны карды
		let card_option = form_pay.children[0].children[0].cloneNode(true)
		//земена
		card_option.innerText = item.name
		card_option.setAttribute("value", item.id)
		card_select.append(card_option)

		card_select.append(card_option)
	}
};

// событие трансакции
let btn_pay = document.querySelector(".add_transactions")

btn_pay.onsubmit = () => {
	event.preventDefault()

	let formData = new FormData(event.target)
	let data = {}

	formData.forEach((value, key) => {
		data[key] = value
	})
	// списание денег
	let card_id = data.card
	let filter_pay = arr_cards.filter(item => item.id == card_id)[0]
    let find_service = arr_service.filter(item => item.id == service_id)[0]
		
	filter_pay.balance -= data.money

	find_service.money += parseFloat(data.money)
	
	console.log(filter_pay);
	reload_card()
}
















