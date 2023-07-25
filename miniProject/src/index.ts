interface Todo {
    text: string,
    status: boolean
}

const button = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

var toDoList: Todo[] = readToDoFromLocalStorage();
Array.from(toDoList).forEach(createToDoOnPage)

function readToDoFromLocalStorage(): Todo[] {
    const todo = localStorage.getItem("todos");
    if(todo === null) 
        return [];
    return JSON.parse(todo);
}


function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(toDoList))
}

//handling submit event
function handleSubmit(e: SubmitEvent){
    e.preventDefault();
    const newToDo: Todo = {
        text: input.value,
        status: false
    }
    createToDoOnPage(newToDo);
    toDoList.push(newToDo);

    saveToLocalStorage();
    input.value = ""
}


//adding to do list items on web page
function createToDoOnPage(todo: Todo){
     //creating a new item in the list
     const newLI = document.createElement("li");
     //creating a checkbox beside the input
     const checkbox = document.createElement("input")
     checkbox.type = "checkbox";
     checkbox.checked = todo.status;
     checkbox.addEventListener("change", function(){
        todo.status = checkbox.checked;
        saveToLocalStorage();
     })
     //appending input value and checkbox
     newLI.append(todo.text)
     newLI.append(checkbox);

     //adding these to the ToDoList
     list.append(newLI)
}

form.addEventListener("submit", handleSubmit)

//printing button text on console
console.log("Button text is " +button.textContent)
console.log(localStorage)
console.log(toDoList)