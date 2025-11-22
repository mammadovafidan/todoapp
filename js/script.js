
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
    const pendingTasks = document.getElementById("pending-tasks");
    const clearAllButton = document.getElementById("clear-all");
  
    // Initialize AOS
    AOS.init();
  
    function updatePendingTasks() {
      const count = todoList.childElementCount;
      pendingTasks.textContent = `You have ${count} pending tasks`;
    }
  
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText === "") return;
  
      const todoItem = document.createElement("li");
      todoItem.className = "todo-item";
      todoItem.setAttribute("data-aos", "fade-right");
      todoItem.setAttribute("data-aos-duration", "1000"); 
      todoItem.innerHTML = `
        <span>${todoText}</span>
        <button class="delete-btn">🗑</button>
      `;
      todoList.appendChild(todoItem);
  
      
      todoInput.value = "";
      updatePendingTasks();
  
      
      todoItem.querySelector(".delete-btn").addEventListener("click", () => {
        todoItem.setAttribute("data-aos", "fade-left");
        todoItem.setAttribute("data-aos-duration", "800");
  
        
        setTimeout(() => {
          todoItem.remove();
          updatePendingTasks();
        }, 800); 
      });
    }
  
    addButton.addEventListener("click", addTodo);
    todoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTodo();
    });
  
    clearAllButton.addEventListener("click", () => {
      
      Array.from(todoList.children).forEach((item) => {
        item.setAttribute("data-aos", "fade-left");
        item.setAttribute("data-aos-duration", "800");
  
        setTimeout(() => {
          item.remove();
          updatePendingTasks();
        }, 800);
      });
    });
  
    updatePendingTasks();
  });
  