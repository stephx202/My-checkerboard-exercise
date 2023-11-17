
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


// function littleblackbox(){
//     for(let i=0; i < 8; i++){

//         for(let j = 0; j< 8; j++){
//             //console.log(`i = ${i}, j = ${j}`)
//             let littleBox  = document.createElement("div")
//            // column.textContent= i;
//             // littleBox.style.outline = "solid white 1px"
//             // littleBox.style.width= "12.5%";
//             // littleBox.style.height = "12.5%";
//             // littleBox.style.display = "flex"
//             // littleBox.style.flexwrap = "wrap";
//             // littleBox.style.backgroundColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`
//             // console.log(littleBox)
//             // box.appendChild(littleBox);
//             // if((i %2 ===0) && (j %2===0)){
//             //  column.style.background = "black";
//             // }else if((i % 2===1) && (j %2===1)){
//             //     column.style.background = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`;
//             // }
//         }
        
//     }
// }
// document.addEventListener("click", function() {
//     alert("You clicked on the page!");
// });
  
// littleblackbox()

