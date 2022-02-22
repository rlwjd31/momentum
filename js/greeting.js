const loginForm = document.querySelector("body form");
const loginInput = document.querySelector("body input");
const HIDDEN_CLASSNAME = "hidden";

const greeting = document.querySelector("body h1");
const USERNAME_KEY = "username";

function removeHidden() {
    const divs = document.querySelectorAll("#main-container div");
    const form = document.querySelector("#todo-form");
    const ul = document.querySelector("#todo-list");
    divs.forEach((div) => div.classList.remove(HIDDEN_CLASSNAME));
    form.classList.remove(HIDDEN_CLASSNAME);
    ul.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreeting(username) {
    removeHidden();
    // const uls = document.querySelector("#main-container uls");
    greeting.innerText = `You are the best ${username} ❤️`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // divs.classList.remove(HIDDEN_CLASSNAME);
    // uls.classList.remove(HIDDEN_CLASSNAME);
}

function onSubmit(event) {
    // 구지 안 해도 돼보임....;
    // 해당 코드파일에서는 preventDefault를 새로고침을 할 것인지 말 것인지에 대한 차이밖에 없어 보임.
    // event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

loginForm.addEventListener("submit", onSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else if (savedUsername !== null) {
    paintGreeting(savedUsername);
}