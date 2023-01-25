//global variable
let size = 100  //number
let color = "black"




function showBox(){
   container.innerHTML = `
      <div 
      class="box"
      style="
         width:${size}px;
         height:${size}px;
         background-color:${color};
      "
      ></div>

   `
}


//declare a function
 function increase() {
   size += 10
   console.log(size)
   showBox()
}

function decrease(){
   size -= 10
   console.log(size)
   showBox()
    
}


function changeRed() {
   color = "red"
   showBox()
   console.log(color)
   
}


function changeBlue(){
   color = "blue"
   showBox()
   console.log(color)

}


function changeYellow(){
   color = "yellow"
   showBox()
   console.log(color)
}





