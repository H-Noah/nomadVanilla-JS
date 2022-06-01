const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"


let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){

  const li = e.target.parentElement;
  //toDos의 element 중 id가 같은놈은 리턴하지 않고 어레이를 생성한다.
  toDos = toDos.filter((ele) => ele.id !== parseInt(li.id));
  li.remove();
  saveToDos();

}


function paintToDo(newTodoObj){
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");

  button.innerText = 'X';
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);  

  button.addEventListener("click", deleteToDo)

}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log(item)
}

const saveToDo = localStorage.getItem(TODOS_KEY);
if(saveToDo !== null){
  const parsedToDos = JSON.parse(saveToDo);
  //parsedToDos.forEach((item) => paintToDo(item));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}



 