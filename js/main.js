const title = document.querySelector(".title")
const btn = document.querySelector(".btn")
const btn2 = document.querySelector(".btn2")


btn.addEventListener("click" , ()=> {
    title.innerHTML = "Hello <span> Sarvarbek </span>"
    // title.classList.toggle("active")//ezganda ozgaradi qayta qayta
})
btn2.addEventListener("click" , ()=> {
    title.innerHTML = "Hello <span> codial </span>"

})

// title.innerHTML = "Hello <span> Sarvarbek </span>" // buni imkoniyatlari ko'p
// title.textContent = "Hello Sarvarbek"  // bunda shundeyicha chiqaradi
// title.innerHTML += " Hello <span> Sarvarbek </span>" // davomidan qo'shish uchun kere bo'ladi


// JS YORDAMIDA STYLE O'ZGARTIRISH
// title.style.color = "green"
// title.style = " color :green; border : 2px solid black "
title.classList.add("active")