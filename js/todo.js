const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDoArray = [];
const TODO_KEYNAME = "toDoList";

function saveToDo2LocalStorage() {
    localStorage.setItem(TODO_KEYNAME, JSON.stringify(toDoArray));
}

function removeToDo(event) {
    const li = event.target.parentElement;
    toDoArray = toDoArray.filter((todo) => todo.id !== parseInt(li.id));
    saveToDo2LocalStorage();
    li.remove();
}

function addToDoList(willAppendedtodoObject) {
    const li = document.createElement("li");
    li.id = willAppendedtodoObject.id;
    const span = document.createElement("span");
    span.innerText = willAppendedtodoObject.content;
    li.appendChild(span);
    const button = document.createElement("button");
    button.addEventListener("click", removeToDo);
    button.innerText = "❌";
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    // 이 코드파일에서는 preventDefault()가 필요하다.
    // Greeting.js에서는 localStorage로 값을 저장하기 때문에 새로고침해도 문제가 없지만,
    // 이 부분에서는 새로고침을 하면 todoList가 다 날아가기 때문에 기본 동작을 막아주어야 한다.
    event.preventDefault();
    const willAppendedtodo = toDoInput.value;
    const willAppendedtodoObject = {
        content: willAppendedtodo,
        id: Date.now(),
    };
    toDoInput.value = "";
    addToDoList(willAppendedtodoObject);
    // localStorage에 저장하기 위한 todo를 todoarray에 저장.
    toDoArray.push(willAppendedtodoObject);
    saveToDo2LocalStorage();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 새로고침하면 toDoList가 사라지는 것을 방지하기위해 만든 코드.
const savedToDo = localStorage.getItem(TODO_KEYNAME);

if (savedToDo) {
    const parsedToDoList = JSON.parse(savedToDo);
    toDoArray = parsedToDoList;
    parsedToDoList.forEach(addToDoList);
}