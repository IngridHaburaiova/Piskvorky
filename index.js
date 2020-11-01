'use strict'

let action='circle';

const hraje=document.getElementById("volnePole");

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click',() => {
  let currentAction = action; 
  
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
    if (isWinningMove(buttons[i]) ){
     alert(`${currentAction} Vyhral!`);
   }
});
}

//PISKVORKY-ZADANI-5


const boardSize = 10 
const fields = document.querySelectorAll('button') 

const getPosition = (field) => {
  let fieldIndex = 0; 
  while(fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break
    }
    fieldIndex++
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  }
}


const getField = (row, column) => {
  return fields[row * boardSize + column];
}

const getSymbol = (field) => {
   if(field.children.length > 0) {
     let srcImg = ""+field.children[0].getAttribute("src");
    if (srcImg.indexOf('cross') !== 0) {
      return 'cross'
    } else if (srcImg.contains('circle') !== 0) {
      return 'circle'
    }
  }
}


const symbolsToWin = 5
const isWinningMove = (field) => {
  const origin = getPosition(field)
  const symbol = getSymbol(field)
  let i
  let inRow = 1 // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++
    i--
  }

  // Koukni doprava
  i = origin.column
  while (i < boardSize - 1 && symbol === getSymbol(getField(origin.row, i + 1))) {
    inRow++
    i++
  }

  if (inRow >= symbolsToWin) {
    return true
  }

  let inColumn = 1
  // Koukni nahoru
  i = origin.row
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++
    i--
  }

  // Koukni dolu
  i = origin.row
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++
    i++
  }

  if (inColumn >= symbolsToWin) {
    return true
  }

  return false
}


