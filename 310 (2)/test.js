let arr_cards = [];

let add_new_card = () => {
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
    let cr_delet = document.createElement("div") 
    cr_delet.setAttribute("onclick", "deleteCard()")
    cr_delet.classList.add("delet")
    // cr_div_bottom_h2.innerText.substr(0,2)
    cards.append(cr_div);
    cr_div.append(cr_div_top);
    cr_div.append(cr_div_bottom);
    cr_div_bottom_month_year_chertochka.append(cr_delet)

    cr_div_top.append(cr_div_top_print);
    cr_div_top.append(cr_div_top_num);
    cr_div_bottom.append(cr_div_bottom_h1);
    cr_div_bottom.append(cr_div_bottom_h4); 
    cr_div_bottom.append(cr_div_bottom_month_year);  
    cr_div_bottom_month_year.append(cr_div_bottom_h2)
    cr_div_bottom_month_year.append(cr_div_bottom_month_year_chertochka)
    cr_div_bottom_month_year.append(cr_div_bottom_h2_2); 
  }
};
let deleteCard = () => {
 let et = event.target()
 let div = document.querySelector("div")
 let id = et.parentElement.getAtribute('id')
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

let cards = document.querySelector(".cards");

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
      start.children[1].value.length == 16
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

      add_new_card()
      let icon = document.querySelector('.print')
      icon.classList.add(item.name)
      
      
      console.log(arr_cards);
      start.children[0].value = "";
      start.children[1].value = "";
      form_add_form.classList.remove("active");
    } else if (start.children[0].value == "Шахзод") {
      let main = document.querySelector("main");
      let new_div = document.createElement("div");
      new_div.classList.add("easterEgg");
      main.append(new_div);
      form_add_form.classList.remove("active");
    } else console.log("Карта не действительна");
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
