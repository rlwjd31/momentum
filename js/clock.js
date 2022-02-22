const clock = document.querySelector("#clock");

// function convert2Digits(date) {
//     date = String(date);
//     if (date.length !== 2) {
//         return `0${date}`;
//     } else {
//         return date;
//     }
// }

function getCustomClockFormat() {
    const nowDate = new Date();
    const year = String(nowDate.getHours()).padStart(2, "0");
    const minutes = String(nowDate.getMinutes()).padStart(2, "0");
    const seconds = String(nowDate.getSeconds()).padStart(2, "0");
    return `${year}:${minutes}:${seconds}`;
}

function printClock() {
    const currentTime = getCustomClockFormat();
    const icon = document.createElement("i");
    icon.className = "fa-regular fa-clock";
    clock.innerText = currentTime;
    clock.prepend(icon);
}

// 처음에 새로고침할 때 시계가 보이지 않으므로
printClock();
setInterval(printClock, 1000);