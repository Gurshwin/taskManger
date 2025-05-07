class Task {
    constructor(text) {
      this.text = text;
      this.completed = false;
    }
  }
  
  class TaskManager {
    constructor() {
      this.tasks = [];
      this.taskList = document.getElementById("taskList");
    }
  
    addTask() {
      const input = document.getElementById("taskInput");
      const newTask = new Task(input.value);
      this.tasks.push(newTask);
      this.render();
      input.value = "";
    }
  
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.render();
    }
  
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.render();
    }
  
    render() {
      this.taskList.innerHTML = "";
      this.tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task.text;
        li.style.textDecoration = task.completed ? "line-through" : "none";
  
        li.addEventListener("click", () => this.toggleTask(index));
  
        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = (e) => {
          e.stopPropagation();
          this.deleteTask(index);
        };
  
        li.appendChild(delBtn);
        this.taskList.appendChild(li);
      });
    }
  }
  
  const taskManager = new TaskManager();
  