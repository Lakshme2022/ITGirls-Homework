

const add = document.querySelector('.add');
const task = document.querySelector('.task');
const addTask = document.querySelector('.addTask');
const clear = document.querySelector('.clear');

clear.disabled = true

let empty = true;

function ADD(){
    if(!task.value) {
        return
    }
    if(empty) {
        empty = false;
        addTask.innerHTML = "";
        clear.disabled = false;
    }
    addTask.innerHTML += `<div class="taskList">
    <div class="newTask">${task.value}</div>
    <input type="checkbox">
    <div class="del" onclick="DEL(this)">x</div>
    </div>`;
    task.value = "";
}

function ENTER(e){
    if(e.key === "Enter") {
        ADD();
    }
}

task.addEventListener('keydown', ENTER);
add.addEventListener('click', ADD);

function CLEAR(){
    empty = true;
    clear.disabled = true;
    addTask.innerHTML = `<div class="noTask">
        <div class="no">Нет задач</div>
    </div>`;
}

function DEL(del_element){
    addTask.removeChild(del_element.parentElement);
    if (addTask.children.length === 0) {
        CLEAR();
    }
}

clear.addEventListener('click', CLEAR);
