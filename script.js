
let box = document.createElement("div")
box.style.display = "flex";
box.style.flexWrap = "wrap";
box.style.width= "800px";
box.style.height = "800px";
box.style.background = "red"
document.body.appendChild(box);

function littleblackbox(){
    for(let i=0; i<8; i++){
         
        for(let j = 0; j< 8; j++){
            //console.log(`i = ${i}, j = ${j}`)
            let column  = document.createElement("div")
           // column.textContent= i;
            column.style.outline = "solid white 1px"
            column.style.width= "12.5%";
            column.style.height = "12.5%";
            column.style.display = "flex"
            column.style.flexwrap = "wrap"
            box.appendChild(column);
            if((i %2 ===0) && (j %2===0)){
             column.style.background = "black";
            }else if((i % 2===1) && (j %2===1)){
                column.style.background = "black";
            }

        }

  
    }
    

    
}
littleblackbox()