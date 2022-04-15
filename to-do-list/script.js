"use strict";

// root root root root root root root root root root root root root root root root root root root
// root root root root root root root root root root root root root root root root root root root
// root root root root root root root root root root root root root root root root root root root

const allBlack = "var(--allBlack)";
const darkBlack = "var(--darkBlack)";
const lightBlack = "var(--lightBlack)";
const allWhite = "var(--allWhite)";
const darkWhite = "var(--darkWhite)";
const lightWhite = "var(--lightWhite)";
const lightBlue = "var(--lightBlue)";
const wrongRed = "var(--wrongRed)";
const greenDollar = "var(--greenDollar)";

// main main main main main main main main main main main main main main main main main
// main main main main main main main main main main main main main main main main main
// main main main main main main main main main main main main main main main main main

// date elements date elements date elements date elements date elements date elements
// date elements date elements date elements date elements date elements date elements
// date elements date elements date elements date elements date elements date elements

const dateDayName = document.querySelector(".date-day-name");
const dateMonth = document.querySelector(".date-month");
const dateDayNumber = document.querySelector(".date-day-number");
const dateYear = document.querySelector(".date-year");

const date = new Date();

dateDayName.innerHTML = date.toLocaleString(`en`, {weekday: `long`});
dateMonth.innerHTML = date.toLocaleString(`en`, {month: `long`});
dateDayNumber.innerHTML = date.toLocaleString(`en`, {day: `numeric`});
dateYear.innerHTML = date.toLocaleString(`en`, {year: `numeric`});

// inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs
// inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs
// inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs inputs

const toDoCtn = document.querySelector(".to-do-ctn");
const inputText = document.querySelector(".input-text");
const addTask = document.querySelector(".add-task");
const order = document.querySelector(".order");
const taskCtn = document.querySelector(".task-ctn");
const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const allTasks = [];

class Task{
    constructor(){
        this.id;
        this.text;
    }

    createTask(a){
        this.id = a;
        const documentFragment = document.createDocumentFragment();
    
        const task = document.createElement("div");
        task.setAttribute("id", `task-${this.id}`);
        task.classList.add("task");
    
        const taskNameCtn = document.createElement("DIV");
        taskNameCtn.setAttribute("id", `task-name-ctn-${this.id}`);
        taskNameCtn.classList.add("task-name-ctn");
    
            const taskName = document.createElement("H1");
            taskName.onpaste = function(e){ e.preventDefault() };
            taskName.setAttribute("id", `task-name-${this.id}`);
            taskName.classList.add("task-name");
            taskName.innerHTML = inputText.value;
            this.text = inputText.value;
    
            taskNameCtn.appendChild(taskName);
    
        const taskButtons = document.createElement("DIV");
        taskButtons.setAttribute("id", `task-buttons-${this.id}`);
        taskButtons.classList.add("task-buttons");
    
            const editTask = document.createElement("BUTTON");
            editTask.setAttribute("id", `edit-task-${this.id}`);
            editTask.classList.add("edit-task");
            editTask.innerHTML = "Edit";
    
            editTask.addEventListener("click", ()=>{
                if(document.getElementById(`task-name-${this.id}`).childElementCount > 0){
                    document.getElementById(`task-name-${this.id}`).removeChild(document.getElementById(`task-name-${this.id}`).firstElementChild);
                }

                if(taskName.getAttribute("contenteditable") == "true"){
                    taskName.removeAttribute("contenteditable");
                    taskName.setAttribute("placeholder", "Set name");
                    taskName.style.border = `transparent`;
                    taskName.style.borderRadius = `8px`;
                    taskName.style.color = darkBlack;
                    taskName.style.fontWeight = `800`;
                    taskName.innerHTML = taskName.innerHTML;
                    editTask.innerHTML = `Edit`;
                    editTask.style.background = lightBlue;
                    this.text = taskName.innerHTML;
                    
                }else{
                    if(taskName.innerHTML.length > 0){
                        taskName.setAttribute("contenteditable", "true");
                        taskName.style.border = `0.5px solid ${darkWhite}`;
                        taskName.style.borderRadius = `8px`;
                        taskName.style.color = darkWhite;
                        taskName.style.fontWeight = `500`;
                        taskName.innerHTML = taskName.innerHTML;
                        editTask.innerHTML = `Save`;
                        editTask.style.background = greenDollar;

                        taskName.addEventListener("keydown", (e)=>{
                            if(e.key == "Enter"){
                                taskName.removeAttribute("contenteditable");
                                taskName.setAttribute("placeholder", "Set name");
                                taskName.style.border = `transparent`;
                                taskName.style.borderRadius = `8px`;
                                taskName.style.color = darkBlack;
                                taskName.style.fontWeight = `800`;
                                taskName.innerHTML = taskName.innerHTML;
                                editTask.innerHTML = `Edit`;
                                editTask.style.background = lightBlue;
                                this.text = taskName.innerHTML;
                            }else{

                            }
                        })
                    }else{
                        taskName.placeholder = `Please type something.`;
                    }
                }
            })
    
            const removeTask = document.createElement("BUTTON");
            removeTask.setAttribute("id", `remove-task-${this.id}`);
            removeTask.classList.add("remove-task");
            removeTask.innerHTML = "Remove";
    
            removeTask.addEventListener("click", ()=>{
                taskCtn.removeChild(document.getElementById(`task-${this.id}`));
                allTasks.pop(this.id);
            })
    
            taskButtons.appendChild(editTask);
            taskButtons.appendChild(removeTask);
            
        task.appendChild(taskNameCtn);
        task.appendChild(taskButtons);
        documentFragment.appendChild(task);
        taskCtn.appendChild(documentFragment);
    }
}

let tasksCounter = 0;

addTask.addEventListener("click", ()=>{

    if(inputText.value.includes("<") || inputText.value.includes(">")){
        inputText.value = null;
        inputText.placeholder = `Characters "<" and ">" are not allowed.`;
    }else{
        if(inputText.value.length > 0){
            inputText.setAttribute("placeholder", "Task");
            const newTask = new Task();
            newTask.createTask(tasksCounter);
            allTasks.push(newTask);
            tasksCounter++;
            inputText.value = null;
        }else{
            inputText.setAttribute("placeholder", "Please type something.");
        }
    }
})

inputText.addEventListener("keydown", (e)=>{
    if(inputText.value.includes("<") || inputText.value.includes(">")){
        inputText.value = null;
        inputText.placeholder = `Characters "<" and ">" are not allowed.`;
    }else{
        if(inputText.value.length > 0){
            if(e.key == "Enter"){
                inputText.setAttribute("placeholder", "Task");
                    const newTask = new Task();
                    newTask.createTask(tasksCounter);
                    allTasks.push(newTask);
                    tasksCounter++;
                    inputText.value = null;
            }else{
                inputText.setAttribute("placeholder", "Please type something.");
            }
        }else{
            inputText.setAttribute("placeholder", "Please type something.");
        }
    }
})