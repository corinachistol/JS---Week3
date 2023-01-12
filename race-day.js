let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistration = false;
const runnerAge = 18;
if(runnerAge > 18 && earlyRegistration ){
 raceNumber += 1000;
 console.log(raceNumber + ' Your race at 9:30am' );
} else if (runnerAge > 18 && !earlyRegistration ) {
  console.log(raceNumber + ' Your race at 11:00am');
} else if (runnerAge < 18){
  console.log(raceNumber + ' Youth registrants run at 12:30pm');
} else if (runnerAge === 18)  {
  console.log('Please check the registration desk');
} 