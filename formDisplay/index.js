document.addEventListener("DOMContentLoaded",()=>{
    const textForm = document.getElementById("task-form")
    const addButton = document.getElementById("addButton")
    const taskStats = document.getElementById("task-stats")
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const emptyList = document.querySelector(".empty-list")
    const totalTasksSpan = document.getElementById("totalTasks");
    const completedTasksSpan = document.getElementById("completedTasks");
    

    function getTaskstats(){
        const tasks = Array.from(taskList.querySelectorAll("li.task-item"))
        const totalTasks = tasks.length
        const completeTask = tasks.filter(task=>task.querySelector(".task-check").checked).length
       
        totalTasksSpan.textContent = `Total tasks: ${totalTasks}`
        completedTasksSpan.textContent = `completedTasks: ${completeTask}`

    }

    const taskUpdate = ()=>{
      const tasks =  taskList.querySelectorAll("li.task-item")
       emptyList.style.display = tasks.length ===0?"block":"none"
  updatetaskStats()
    }
        

    function updatetaskStats(){
        getTaskstats()
    }

       function addTask(){
        const taskText = taskInput.value.trim() 
        if(!taskText) return alert("Enter a task")
       

    const newTask = document.createElement("li")
    newTask.className = "task-item"
    newTask.innerHTML =`<input type = "checkbox" class="task-check">
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>`

    taskList.appendChild(newTask)
    taskInput.value = ""
     updatetaskStats()
  
       
    const checkBox = newTask.querySelector(".task-check")
    checkBox.addEventListener("change",function(){
        if(this.checked){
            newTask.style.backgroundColor = "#d3ffd3"
        }else{
            newTask.style.backgroundColor = ""
        }
        updatetaskStats()
    })

    newTask.querySelector(".delete-btn").addEventListener("click",()=>{
        newTask.remove()
        taskUpdate()
        updatetaskStats()
    })
    
}   
    addButton.addEventListener("click", addTask)

    taskInput.addEventListener("keypress",(event)=>{
      if (event.key === "Enter"){
        addTask()
      }
    })

    taskUpdate()

   
    }

     
)