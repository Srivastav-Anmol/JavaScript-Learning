let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

const display = document.getElementById('stopwatch');
const startButton = document.getElementById('startbutton');
const stopButton = document.getElementById('stopbutton');
const resetButton = document.getElementById('resetbutton');


//function for start button
startButton.addEventListener('click', function() {
    if (!interval) {
        interval = setInterval(updateTime, 1000);
    }
});
function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    display.textContent = formatDate(hours, minutes, seconds);
}
function formatDate(hours, minutes, seconds) {
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}
function addZero(number) {
    return number < 10 ? '0' + number : number;
}


//function for stop button

stopButton.addEventListener('click',function(){
    clearInterval(interval)
    interval=null
})

//function for reset button
resetButton.addEventListener('click',function(){
    seconds=0
    minutes=0
    hours=0
    display.textContent=formatDate(hours,minutes,seconds)
})

