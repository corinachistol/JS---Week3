// 1.
let r = parseInt(prompt("Enter first integer number"));
let s = parseInt(prompt("Enter second integer number"));

if(r > s) {
    console.log(`r: ${r} is the largest`)

} else {
    console.log(`s: ${s} is the largest`)
}


// 2.
//   conditional (if/else)  switch/case
//   3 numbers a,b,c
//    prod = a*b*c 

//     a   b   c
//     +   +   +
//     -   -   +
//     +   -   -
//     -   +   -

let x = parseInt(prompt("Enter first number:"))  //3
let y = parseInt(prompt("Enter second number:"))  //-7
let z = parseInt(prompt("Enter third number:"))   //2

if (x > 0 && y > 0 && z > 0 ) {
    console.log("sign = +")
}else if (x < 0 && y < 0 && z > 0 ) {
    console.log("sign = +")
}else if (x > 0 && y < 0 && z < 0 ) {
    console.log("sign = +")
}else if (x < 0 && y > 0 && z < 0 ) {
    console.log("sign = +")
} else {
    console.log("sign = -")
}


// 3. Conditional
//    sort 3 numbers  ->MAX Min
//     descendant

let m = prompt("Enter a number: m="); 
let n = prompt("Enter a number: n=");  
let p = prompt("Enter a number: p=");  

// if( m > n && m > p && n > p) {     //// ASTA L-AM SCRIS SINGURA
//     console.log(m, n, p );

// }else if (m > n && m > p && p > n) {
//     console.log(m, p, n)

// }else if(n > m && n > p && m > p ) {
//     console.log(n, m, p);

// }else if(n > m && n > p && p > m){
//     console.log(n, p, m)

// }else if(p > m &&  p > n && m > n) {
//     console.log( p, m, n);

// }else if (p > m && p > n && n > m) {
//     console.log(p, n, m);
// };


if(m > n && m > p){        ///// ASTA M-AM INSPIRAT, DAR E MAI COMPACT
    if(n > p){
        console.log(m, n, p)
    }else {
        console.log(m, p, n)
    }
}else if(n > m && n > p){
    if(m > p){
        console.log(n, m, p)
    }else{
        console.log(n, p, m)
    }

}else if (p > m && p > n ){
    if(m > n){
        console.log(p, m, n)
    }else{
        console.log(p, n, m)
    }
}



//4. 
let a = -5
let b = -2 
let c = -6
let d = -1
let e = 0

if ( a>b && a>c && a>d && a>e){
    max =a
}else if (b>a && b>c && b>d && b>e){
    max =b
}else if (c>a && c>b && c>d && c>e){
    max = c
}else if (d>a && d>b && d>c && d>e){
    max = d
}else {
    max = e
}
console.log(max);
