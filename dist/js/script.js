"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    const menu = document.querySelector(".menu"),
          menu_content = document.querySelector(".menu__content"),
          btn_hamburger = document.querySelector(".hamburger"),
          close = document.querySelector(".menu__close"),
          overlay = document.querySelector(".menu__overlay"),
          skill_more = document.querySelector(".skill__more"),
          skill_item_add = document.querySelectorAll(".skill__item_additional");

    function menuClose(){
        menu.classList.remove("menu_active");
        menu_content.classList.remove("menu__content_active");
    }
    
    btn_hamburger.addEventListener('click', ()=>{
    menu.classList.add("menu_active");
    menu_content.classList.add("menu__content_active");
    });

    close.addEventListener('click', () =>{
        menuClose();
    });

    overlay.addEventListener("click", (e)=>{
        if (e.target == overlay){
            menuClose();
        }
    });

   document.addEventListener("keypress", (e)=>{
       console.log(e.code);
        if (menu && e.code == "Escape"){
            menuClose();
        }
    });

    skill_more.addEventListener("click", () =>{
        skill_more.style.display = "none";
        skill_item_add.forEach(item => {
            item.style.display = "block";
        });
    });
});