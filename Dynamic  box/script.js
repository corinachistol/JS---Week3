//global variable
let size = 100  //number


//declare a function
 function increase() {
   size += 10
   console.log(size)
   container.innerHTML = `
      <div 
      class="box"
      style="
         width:${size}px;
         height:${size}px;
      "
      ></div>

   `
}

function decrease(){
   size -= 10
   console.log(size)
   container.innerHTML = `
      <div 
      class="box"
      style="
         width:${size}px;
         height:${size}px;
      "
      ></div>

   `
    
}

function red() {
   container.innerHTML = `
   <div
   class="box"
   style="background-color:red;"
   ></div>
   `
   
}



function blue(){
   container.innerHTML = `
   <div 
   class="box"
   style="background-color:blue;"
   ></div>

   `

}

function yellow(){
   container.innerHTML =  `
   <div 
   class="box"
   style="background-color:yellow;"
   ></div>

   `
}





