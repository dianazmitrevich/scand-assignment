!function(){const e=document.querySelector(".header");document.addEventListener("scroll",(()=>{(self.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop)>0?e.classList.add("header-scroll"):e.classList.remove("header-scroll")}));const o=document.querySelectorAll(".burger-btn"),c=document.querySelector(".header__col-burger .burger"),t=document.querySelector("body");o.forEach((e=>{e.addEventListener("click",(()=>{let e=c.classList;e.contains("show")?e.remove("show"):e.add("show"),e.contains("show")?t.classList.add("overflow-hidden"):t.classList.remove("overflow-hidden")}))}))}();