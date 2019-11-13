/* A clock has 360 degree which is divided into 12 parts and each 12parts are also divided into 5 parts. */
const degree = 360/(12*5); /* 6 degrees */  
const hours = document.getElementById("hr");
const mins = document.getElementById("mn");
const secs = document.getElementById("sc");

/* This function sets hour, minute and seconds as per current time */
const startClock = () => {
  let day = new Date()
  // total 12 hrs so rotation is 360/12*hour
  let hh = day.getHours()*30;
  // minutes ans seconds calculation is same as degree
  let mm = day.getMinutes() * degree;
  let ss = day.getSeconds() * degree;
  // need to add minute parts to show needle between two hrs.
  hours.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  mins.style.transform = `rotateZ(${mm}deg)`;
  secs.style.transform = `rotateZ(${ss}deg)`;
}

// start the clock
let timer = setInterval(startClock);

/* Created Pause / Resume buttons functionality in the commented code */
/* const pause = document.getElementById('pause');
const resume = document.getElementById('resume');

pause.addEventListener('click', function() {
  clearInterval(timer);
})

resume.addEventListener('click', function() {
  timer = setInterval(startClock);
})  */

const checkPause = document.getElementById('check-pause');
checkPause.addEventListener('change', function() {
	// if checkbox is checked
  if (this.checked === true) {
  	// pausing the clock
  	clearInterval(timer);
  }
  else {
  // resuming the clock
  timer = setInterval(startClock);
  }
})

