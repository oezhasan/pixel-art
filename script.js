const grid = document.querySelector(".grid-container");
const sizeSlider = document.querySelector("#size-slider");
const sizeValue = document.querySelector("#size-value");
const colorPicker = document.querySelector("#color-picker");
let selectedColor = colorPicker.value;


create_grid(16);

sizeSlider.oninput = function() {
    sizeValue.innerHTML = this.value+ " X "+this.value;
    create_grid(this.value) 
}

colorPicker.oninput = function() {
    selectedColor = this.value;
    console.log(selectedColor);
}


function create_grid(x){

    grid.innerHTML = "";
    
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    for(let i = 0; i < x; i++){

        for(let j = 0; j < x; j++){
            
            var div = document.createElement('div');
            div.className = 'grid-item';
           
            grid.appendChild(div);
        }
        
    }
    const gridItems = document.querySelectorAll(".grid-item");

    
    gridItems.forEach(item => item.addEventListener("mouseover", function(){ item.style.backgroundColor =selectedColor; }));
}




