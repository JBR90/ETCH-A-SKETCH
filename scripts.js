const gridContainer = document.querySelector('#grid-container');

// create a function that takes row and col
function gridMaker(row,col){
    
    //set css variable for grid rows and grid col
    gridContainer.style.setProperty('--grid-rows',row);
    gridContainer.style.setProperty('--grid-cols',col); 
    //loop for number of cells in grid
    console.log(row)
    console.log(col)
    for(let i = 0;i < (row*col);i++){
        //create a cell div for the grid
        const cell = document.createElement('div');
        //add textcontent to div
        // cell.textContent = 'x';
        //append div to gridContainer with classs
        gridContainer.appendChild(cell).className = "grid-item";
    }
     
}

//Add event listeners 
function addHover(){
    const cells = document.querySelectorAll('.grid-item');

    cells.forEach(element => {
        // console.log(element) 
        element.addEventListener('mouseover', (e) =>{
            let colourInput = document.getElementById('colour')
            let theColor = colourInput.value;
            e.target.style.background = (theColor)
        })
    });
}
// Clears screen - sets all divs white
function clearScreen(){
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', () => {
        const cells = document.querySelectorAll('.grid-item');
        console.log(cells)
        cells.forEach(element => {
            element.style.backgroundColor = 'white'
        });
});


}

function updateGridSize(){
 

    r = document.getElementById("input-rows").value
    c = document.getElementById("input-cols").value
   
     gridMaker(r,c);
    
}




// document.getElementById("input-rows").onkeyup = updateGridSize;
// document.getElementById("input-cols").onkeyup = updateGridSize;


let gridRowInput = 40;
let colRowInput = 40;

const gridBtn = document.querySelector('#grid-input');
gridBtn.addEventListener('click', () => {
        const myNode = document.getElementById("grid-container");
       
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild);
        }
      

    gridRowInput = document.getElementById("input-rows").value
    colRowInput = document.getElementById("input-cols").value
    if(gridRowInput >100 || colRowInput >100){
        gridRowInput = 100;
        colRowInput = 100;
    }
    gridMaker(gridRowInput,colRowInput);
    addHover()


    });




gridMaker(gridRowInput,colRowInput);

addHover()
clearScreen()
    


//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript      