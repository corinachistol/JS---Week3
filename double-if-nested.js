 // two factor authentication

 let userName = prompt("enter username: ")

 if(userName == "PrettyUser" || userName == "Boy" || userName == "Girl") {
    let smsCode = +prompt("confirm sms code")

    if (smsCode === 123456) {
      console.log(`Welcome ${userName}`)

    } else {
      alert("Wrong confirmation code!")
    }

 } else {
    alert("Wrong Username!")
 }

    
 