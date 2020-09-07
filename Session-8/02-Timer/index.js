let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");

let numberInput = document.getElementById("numberCount");

// var seconds = 0;
var timer = document.getElementById('timer');
var timeCount;


btnStart.addEventListener("click", () => {
    btnStart.disabled = true;
    btnStop.disabled = false;
    if (numberInput.value == 0) {
        numberInput.value = 5;
        count(5);
    } else if (numberInput.value < 0) {
        alert("Number input must >= 0");
        btnStart.disabled = false;
    } else {
        var num = Number(numberInput.value);
        count(num);
    }
});

btnStop.addEventListener("click", () => {
    btnStart.disabled = false;
    btnStop.disabled = true;
    timer.innerHTML = "Stopped";
    clearInterval(timeCount);
});

function count(seconds) {
    timer.innerHTML = seconds;
    timeCount = setInterval(() => {
        seconds -= 1;
        timer.innerText = seconds;
        if (seconds < 0) {
            timer.innerHTML = "Time's up";
            clearInterval(timeCount);
        }
    }, 1000);
}
