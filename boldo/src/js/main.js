// const sum = require("./module/sum.js");

// console.log(sum(2, 10));

const header = document.querySelector(".header");

document.addEventListener("scroll", () => {
    if (getBodyScrollTop() > 0) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});

function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

const burgerBtns = document.querySelectorAll(".burger-btn");
const burger = document.querySelector(".header__col-burger .burger");
const body = document.querySelector("body");

burgerBtns.forEach(element => {
    element.addEventListener("click", () => {
        let item = burger.classList;

        item.contains("show") ? item.remove("show") : item.add("show");
        item.contains("show") ? body.classList.add("overflow-hidden") : body.classList.remove("overflow-hidden");
    });
});