const grid = document.querySelector(".grid-container");
const sizeSlider = document.querySelector("#size-slider");
const sizeValue = document.querySelector("#size-value");
const colorPicker = document.querySelector("#color-picker");
const imgName = document.querySelector("#img-name");
let selectedColor = colorPicker.value
let mode = 'color';
let gridItems;
const settingsLeft = document.querySelector(".settings-container-left");
const settings = settingsLeft.querySelectorAll("button");

const color = document.querySelector("#color")
const eraser = document.querySelector("#eraser")
const rainbow = document.querySelector("#rainbow")
const clear = document.querySelector("#clear")

settings.forEach(mode => mode.addEventListener("click", function() {
    changeMode(this.id);
}
));


create_grid(16);

sizeSlider.oninput = function() {
    sizeValue.innerHTML = this.value+ " X "+this.value;
    create_grid(this.value) 
}

colorPicker.oninput = function() {
    selectedColor = this.value;
    console.log(selectedColor);
}

function changeMode(mode){
    if (mode === 'eraser'){
        gridItems.forEach(item => item.addEventListener("mouseover", function(){ item.style.backgroundColor ='white'; }));
        eraser.className = "button-active";
        color.className  ="";
        rainbow.className = "";
    }
    else if(mode === 'color'){
        gridItems.forEach(item => item.addEventListener("mouseover", function(){ item.style.backgroundColor =colorPicker.value; }));

        color.className = "button-active";
        eraser.className  ="";
        rainbow.className = "";
    }
    else if(mode === 'rainbow'){
        rainbow.className = "button-active";
        color.className = "";
        eraser.className  ="";
        gridItems.forEach(item => item.addEventListener("mouseover", function(){ item.style.backgroundColor ='rgb(' +Math.floor(Math.random() * 256)+','+
                                                                                                                    Math.floor(Math.random() * 256)+','+ 
                                                                                                                    Math.floor(Math.random() * 256)+')' ; }));

        
    }
    else if(mode === 'clear'){
        gridItems.forEach(item => item.style.backgroundColor = 'white' );
    }
}
function getScreenShot(){

    html2canvas(document.querySelector("#pixelart")).then(canvas => {
        var img = canvas.toDataURL();
        
        saveBase64AsFile(img, imgName.value)
    });
}

function saveBase64AsFile(base64, fileName) {
    var link = document.createElement("a");


    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
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
    gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => item.addEventListener("mouseover", function(){ item.style.backgroundColor =selectedColor; }));
}

window.onload = () => {
    create_grid(16);
}


