const toDoForm = document.getElementById("todo-form");
// document에서 찾을 수도 있지만 input 의 상위태그를 이미 갖고있으니 활용
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// ToDo를 저장할 배열
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  console.log(JSON.parse(localStorage.getItem(TODOS_KEY)));
}

function deleteToDo(event) {
  const li = event.target.parentElement; // parentNode 또는 parentElement 에서 부모 요소를 얻을 수 있다

  const filtered = JSON.parse(localStorage.todos).filter((e) => {
    return e.id !== Number(li.id);
  });

  localStorage.setItem("todos", JSON.stringify(filtered));
  console.log(filtered);

  li.remove(); // 아주 간단하게 삭제 가능
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);

  li.appendChild(button);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;

  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((e) => {
    paintToDo(e);
  });
  console.log(parsedToDos);
}

//! localStorage는 문자열만 저장 가능
/* 그래서 웹브라우저 기본 기능을 활용해
객체/ 배열을 JSON.stringify(object) 를 사용해 문자열로 변환해 저장
반대로 불러올 때는 JSON.parse(object) 를 사용해 변환
*/

//! Date.now()를 id로 활용하기
