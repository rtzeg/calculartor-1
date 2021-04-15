
let remove_form = document.querySelectorAll(".remove_form")

let form_wrapper = document.querySelector(".form_wrapper")

let buttons = document.getElementsByClassName("btn")

let forms = document.getElementsByClassName("form")

let active = () => {
    event.preventDefault()
    form_wrapper.classList.add("active")
}

buttons[0].onclick = () => {
    active()
    forms[0].classList.remove("non_active")
    forms[1].classList.add("non_active")
    forms[2].classList.add("non_active")
}

buttons[1].onclick = () => {
    active()
    forms[1].classList.remove("non_active")
    forms[2].classList.add("non_active")
    forms[0].classList.add("non_active")
}

buttons[2].onclick = () => {
    active()
    forms[1].classList.add("non_active")
    forms[0].classList.add("non_active")
    forms[2].classList.remove("non_active")
}

buttons[3].onclick = () => {
    active()
    forms[0].classList.remove("non_active")
    forms[1].classList.remove("non_active")
    forms[2].classList.add("non_active")
}

buttons[4].onclick = () => {
    active()
    forms[0].classList.remove("non_active")
    forms[1].classList.add("non_active")
    forms[2].classList.remove("non_active")
}

let remove_all_forms = document.querySelector(".remove_all_forms")

remove_all_forms.onclick = () => {
    form_wrapper.classList.remove("active")
}