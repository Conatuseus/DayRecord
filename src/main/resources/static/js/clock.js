const clockContainer = document.querySelector(".js-clock"),
    dateTitle = clockContainer.querySelector("h2");
    clockTitle = clockContainer.querySelector("h3");

const daysArray = ["일", "월", "화", "수", "목", "금", "토"];

function calDay(days) {
    return daysArray[days];
}

function getDate() {
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth();
    const dates = date.getDate();
    const days = calDay(date.getDay());

    dateTitle.innerText = `${years}년 ${months}월 ${dates}일 ${days}요일`;
}

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}`: seconds
    }` ;
}

function init() {
    getDate();
    getTime();
    setInterval(getTime, 1000);
}

init();