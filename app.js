// create variables for the buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// define variables to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables for setInterval() method and timer status
let timerInterval = null;
let timerStatus = "stopped";
// these 2 variables can be applied to the startStopBtn

// create function for stopwatch
function stopWatch() {

    seconds++

    if(seconds / 60 === 1) {
         seconds = 0;
         minutes++;

         if(minutes / 60 === 1) {
             minutes = 0;
             hours++;
         }
    }  
    // conditionals to include leading zeros
    if(seconds < 10)  {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if(minutes < 10)  {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
     if(hours < 10)  {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }
// now we need to create a variable to display the if statement in the browser 
    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// setInterval() takes a function and the increment of time
/*window.setInterval(stopWatch, 1000); */
// we don't want the Window Object to start the stopwatch as soon as the page loads

startStopBtn.addEventListener('click', function() {

    if(timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        //change play button to pause button
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        // change value of status
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});

// add Event Listener to the reset button
resetBtn.addEventListener('click', function() {

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
});