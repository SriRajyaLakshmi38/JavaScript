let taskList = []
class Task {
    constructor(name, dueDate, isDone) {
        this.taskId = Date.now();
        this.name = name;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }

    toString() {
        let htmlText = '<li class="task" ><div>'
        htmlText += this.name
        htmlText += ", " + this.dueDate.getDate() 
                 + "/" + this.dueDate.getMonth();
        htmlText += '<input type="checkbox" name="isDone" id="isDone">'
        htmlText += '<button onclick="deleteTask(';
        htmlText += this.taskId;
        htmlText += ')">Delete</button>';
        htmlText += '</div></li>';
        return htmlText;
    }
}

function render() {
    const listUI = document.getElementById("todolist")
    listUI.innerHTML = "";
    if (taskList.length === 0) listUI.innerHTML = "No tasks todo :-)"
    taskList.forEach((task) => {
        listUI.innerHTML += task.toString();
    })
}

function deleteTask(taskId) {
    taskList = taskList.filter(
        (t) => {
            if(t.taskId != taskId) 
            return t;
        }
    );
    render()
    console.log(taskList);
}

function createTask() {
    const taskName = document.getElementById("taskName").value;
    addTask(new Task(taskName, new Date(), false));
}

function addTask(t) {
    taskList.push(t)
    render();
    console.log(taskList)
}

function init() {
    console.log("init called");

    task = new Task("welcome Task", new Date("May 30, 2020"), false);
    addTask(task);
    console.log(task);
}

init();