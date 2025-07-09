// Get todos from localStorage or initialize empty array
const todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// Function to save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to render todos
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";

    const filteredTodos = todos.filter((todo) => {
        if (currentFilter === 'completed') return todo.completed;
        if (currentFilter === 'active') return !todo.completed;
        return true; // 'all'
    });

    filteredTodos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <div class="todo-content">
                <span class="todo-text">${todo.text}</span>
            </div>

            <div class="todo-actions">
                <button data-index="${index}" class="action-btn complete-btn">
                    <i class="fas ${todo.completed ? "fa-rotate-left" : "fa-check"}"></i>
                </button>

                <button data-index="${index}" class="action-btn delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo() {
    const input = document.getElementById('inputTodos');
    const text = input.value.trim();
    if (text) {
        todos.push({
            text: text,
            completed: false
        });
    }
    input.value = "";
    saveTodos();
    renderTodos();
}

// Function to toggle todo completion
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

// Event listeners
document.getElementById('addTodoBtn').addEventListener("click", addTodo);

document.getElementById("inputTodos").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

document.getElementById('todoList').addEventListener('click', function(e) {
    const target = e.target.closest("button");
    if (!target) return;

    const todoIndex = parseInt(target.dataset.index);
    if (isNaN(todoIndex)) return;

    if (target.classList.contains('complete-btn')) {
        toggleTodo(todoIndex);
    } else if (target.classList.contains('delete-btn')) {
        deleteTodo(todoIndex);
    }
});

// Initial render
renderTodos();
