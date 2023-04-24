// DOM elements
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("resize").addEventListener("click", resize);

//Calling function to create grid
createGrid(16);

// CREATE GRID
function createGrid(value){
  let totalCells = value*value;
  let cellSize = 500/value;
  
  for (i=0; i<totalCells; i++){
    const cellContainer = document.getElementById("cellContainer");
    const cell = document.createElement('div');
    
    cellContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    cellContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    
    cell.className = "cells";
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    cell.style.cssText = 'border: solid white; border-radius: 5px; transition: .5s; background: #e5e5e5;';        
    cell.onmouseover = function() {
      cell.style.backgroundColor = 'black';    
    }        
    cellContainer.appendChild(cell);
  }
}

// CLEAR GRID
function clear(value){  
  cell = document.querySelectorAll(".cells");
  cell.forEach(cell => {
    cell.style.backgroundColor = '#e5e5e5';
  })
}

// CUSTOM GRID
function resize(){
  let customGridValue =  prompt("Please enter a value between 1 and 50.");
  if (customGridValue <= 0 || customGridValue > 50) {
        alert("Please keep the value between 1 and 50.");
        createGrid(16);
    }
  const clearGrid = document.querySelector('#cellContainer');
  clearGrid.textContent = createGrid();
  createGrid(customGridValue);
}

// RANDOM COLOURS
function randomNum() {
  return  Math.floor(Math.random()*255);
}

function randomColour(){
  randomColourValue = "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")";
  
  const cell = document.querySelector(".cells");
  cell.addEventListener("mouseover", function() {
    cell.onmouseover = function() {
        cell.style.backgroundColor = randomColourValue;
    }
  });    
  console.log(randomColourValue);  
}