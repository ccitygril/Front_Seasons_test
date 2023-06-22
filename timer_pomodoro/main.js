// timer код 
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var startTimer;

if (start && reset && stop && wm && ws && bm && bs) {
    start.addEventListener('click', function() {
        if (startTimer === undefined) {
            startTimer = setInterval(timer, 1000);
        } else {
            alert("Таймер запущен");
        }
    });

    stop.addEventListener('click', function() {
        clearInterval(startTimer);
        startTimer = undefined;
    });

    reset.addEventListener('click', function() {
        clearInterval(startTimer);
        startTimer = undefined;
        wm.innerText = 25;
        ws.innerText = "00";
        bm.innerText = 5;
        bs.innerText = "00";
        document.getElementById('counter').innerText = "0";
    });

    function timer() {
        if (ws.innerText != 0) {
            ws.innerText--;
        } else if (wm.innerText != 0 && ws.innerText == 0) {
            ws.innerText = 59;
            wm.innerText--;
        }

        if (wm.innerText == 0 && ws.innerText == 0) {
            if (bs.innerText != 0) {
                bs.innerText--;
            } else if (bm.innerText != 0 && bs.innerText == 0) {
                bs.innerText = 59;
                bm.innerText--;
            }
        }

        if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0 ) {
            wm.innerText = 25;
            ws.innerText = "00";
            bm.innerText = 5;
            bs.innerText = "00";
            document.getElementById('counter').innerText++;
        }
    }
} else {
    console.error("Не удалось найти все элементы на странице");
}

//to-do код
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Вы должны написать название задачи")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }
    inputBox.value = "";
   
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHtml);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
