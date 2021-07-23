"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    const modal = document.querySelector(".modal"),
          modal_content = document.querySelector(".modal__content"),
          btn_hamburger = document.querySelector(".hamburger"),
          close = document.querySelector(".modal__close"),
          overlay = document.querySelector(".modal__overlay");

    function modalClose(){
        modal.classList.remove("modal_active");
        modal_content.classList.remove("modal__content_active");
    }
    
    btn_hamburger.addEventListener('click', ()=>{
    modal.classList.add("modal_active");
    modal_content.classList.add("modal__content_active");
    });

    close.addEventListener('click', () =>{
        modalClose();
    });

    overlay.addEventListener("click", (e)=>{
        if (e.target == overlay){
            modalClose();
        }
    });

   document.addEventListener("keypress", (e)=>{
       console.log(e.code);
        if (modal && e.code == "Enter"){
            modalClose();
        }
    });
});