"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    const menu = document.querySelector(".menu"),
          menu_content = document.querySelector(".menu__content"),
          btn_hamburger = document.querySelector(".hamburger"),
          close = document.querySelector(".menu__close"),
          overlay = document.querySelector(".menu__overlay"),
        //   procent_text = document.querySelectorAll(".skill__kind-work_procent"),
        //   procent_graf = document.querySelectorAll(".skill__kind-work_graf span"),
          skill = document.querySelector(".skill__wrapper"),
          skill_added = document.querySelector(".skill__add"),
          skill_back_main = document.querySelector(".skill__main"),
          skill_add = document.querySelectorAll(".skill__add_kind"),
          skill_main = document.querySelectorAll(".skill__kind"),
          skill_item = document.querySelectorAll(".skill__item"),
          skill_item_add = document.querySelectorAll(".skill__item_additional"),
          skill_menu =  document.querySelectorAll(".skill__kind, .skill__add_kind"),
          btn_skill_main = document.querySelector(".skill__main"),
          btn_skill_add = document.querySelector(".skill__add");
          
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
        if (menu && e.code == "Escape"){
            menuClose();
        }
    });

    // procent_text.forEach((item, i) =>{
    //     let k = item.innerHTML.split(''),
    //         x,
    //         n = 0;
    //     k.pop();
    //     x = k.join("");

    //     setInterval(function(){
    //         if (n < x){
    //             n++;
    //             item.innerHTML = n + '%';
    //             procent_graf[i].style.width =  n + '%';
    //         }
    //     }, 10);

        
    //     //animate
    //     window.addEventListener("scroll", ()=>{
    //         if (window.scrollY > item.offsetTop + document.documentElement.clientHeight){
                // console.log("scroll " + window.scrollY);
                // console.log("scrollTop " + document.documentElement.scrollTop);
                // console.log("clientHeight " + document.documentElement.clientHeight);
                // console.log("pageYOffeset " + window.pageYOffset);
                // console.log("elem.position " + item.offsetTop);
                // console.log("elem " + item);
                
            //    setInterval( drawGraf(i, item.innerHTML),500);
    //         }
    //     });
    // });

    // skill menu
    function showSkill( i = 0) {
        skill_menu[i].classList.add("skill__menu_active");
        skill_item[i].classList.add("skill__item_active");
    }
    showSkill();

    function hiddenSkill() {
        skill_menu.forEach( item =>{
            item.classList.remove("skill__menu_active");
        });
        skill_item.forEach( item =>{
            item.classList.remove("skill__item_active");
        });
    }

    skill.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(event.target);
        skill_menu.forEach( (item, i) => {
            console.log(item);
            if (item == event.target){
                hiddenSkill();
                showSkill(i);
            }
        });
    });   


    skill_added.addEventListener("click", (event) =>{
        event.preventDefault();
        skill_main.forEach( i =>{
            i.style.display = "none";
        });
        btn_skill_add.style.display = "none";
        skill_add.forEach(i =>{
            i.style.display = "block";
        });
        btn_skill_main.style.display = "block";
    });

    skill_back_main.addEventListener("click", (event) =>{
        event.preventDefault();
        skill_main.forEach(i =>{
            i.style.display = "block";
        });
        btn_skill_add.style.display = "block";
        skill_add.forEach(i =>{
            i.style.display = "none";
            btn_skill_main.style.display = "none";
        });
    });

});