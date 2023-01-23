//global variable
let size = 100  //number
let color1 = red
let color2 = blue
let color3 = yellow



function showBox(){
   container.innerHTML = `
      <div 
      class="box"
      style="
         width:${size}px;
         height:${size}px;
         background-color:red;
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


function red() {
  //let color = red
   console.log(color1)
   showBox()
   
}


function blue(){
   let color = blue
   console.log(color)
   showBox()

}


function yellow(){
   //let color = yellow
   console.log(`${color3}`)
   showBox()
}





