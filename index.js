'use strict'

let action='circle';

const hraje=document.getElementById("volnePole");

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click',() => {
   
    if (action==='circle') {
      
      buttons[i].innerHTML=' <img class="ikonka1" src="Ukol-Piskvorky-2-main/podklady/circle.svg">';
      action='cross';
      
      hraje.innerHTML=' <img class="volnePole2" src="Ukol-Piskvorky-2-main/podklady/cross.svg">';
      hraje.className="volnePole";
   
    } else {
     
      buttons[i].innerHTML=' <img class="ikonka1" src="Ukol-Piskvorky-2-main/podklady/cross.svg">';
      action='circle';

      hraje.innerHTML=' <img class="volnePole2" src="Ukol-Piskvorky-2-main/podklady/circle.svg">';
      hraje.className="volnePole";

    } 

    buttons[i].disabled=true
   
});
}

