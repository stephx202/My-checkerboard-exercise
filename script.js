
let box = document.createElement("div")
box.style.display = "flex";
box.style.flexWrap = "wrap";
box.style.width= "800px";
box.style.height = "800px";
box.style.background = "red"
document.body.appendChild(box);


function randomColorBox(){
    for (let i = 0; i < 64; i++) {
   
    let littleColorBox = document.createElement("div");
    let redColorValue = Math.floor(Math.random() * 255);
    let greenColorValue = Math.floor(Math.random() * 255);
    let blueColorValue = Math.floor(Math.random() * 255);


    littleColorBox.style.outline = "solid white 1px"
    littleColorBox.style.width= "12.5%";
    littleColorBox.style.height = "12.5%";
    littleColorBox.style.display = "flex"
    littleColorBox.style.flexwrap = "wrap";
    littleColorBox.style.backgroundColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`
    box.appendChild(littleColorBox)
    }
}
console.log(randomColorBox())


