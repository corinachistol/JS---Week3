let step = 3

let n = 10
while(n >= 0){
  console.log(n);
  if(step == n){
    console.log('FOUND!')
    break
  }
  n--
}