const form = document.querySelector('form');
const todoInput = document.querySelector('[type="text"]');
const listContainer = document.getElementById('list-container');

let savedItems = JSON.parse(localStorage.getItem("task saved"));

if (savedItems != null) {
    savedItems.forEach(item => {
        const li = document.createElement('li');
        const taskItem = document.createElement('input');
        taskItem.value = item;
        taskItem.setAttribute('readonly', '');
        li.appendChild(taskItem);
        const btnContainer = document.createElement('div');
        btnContainer.className = "btn-container";
        const editBtn = document.createElement('span');
        editBtn.className = "edit-btn";
        const deleteBtn = document.createElement('span');
        deleteBtn.className = "delete-btn";
        editBtn.innerText = "Edit";
        deleteBtn.innerText = "Delete";
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        li.appendChild(btnContainer);
        listContainer.appendChild(li);

        deleteBtn.addEventListener("click", function () {
            let myIndex = todoItems.indexOf(taskItem.value);
            todoItems.splice(myIndex,1);
            localStorage.setItem("task saved", JSON.stringify(todoItems));
            li.remove();
        });

        editBtn.addEventListener("click", function () {
            if (taskItem.hasAttribute('readonly')) {
                taskItem.removeAttribute('readonly');
                taskItem.focus();
                editBtn.innerText = "OK";
            } else {
                if (taskItem.value.trim() == "") {
                    alert("task cannot be empty");
                    taskItem.focus();
                } else {
                    taskItem.setAttribute('readonly','');
                    editBtn.innerText = "Edit";
                    todoItems = [];
                    inputs = listContainer.getElementsByTagName('input');
                    for (let i = 0; i < inputs.length; i++) {
                        todoItems.push(inputs[i].value);
                    }
                    localStorage.setItem("task saved", JSON.stringify(todoItems));
                }
            }
        });
    });
}

if (savedItems != null) {
    todoItems = [].concat(savedItems);
} else {
    todoItems = [];
}


form.onsubmit = function (event) {
    if (!todoInput.value.trim()) {
        alert("Task cannot be empty");
    } else {
        event.preventDefault();
        todoItems.push(todoInput.value.trim());
        localStorage.setItem("task saved", JSON.stringify(todoItems));
        const li = document.createElement('li');
        const taskItem = document.createElement('input');
        taskItem.value = todoInput.value.trim();
        taskItem.setAttribute('readonly', '');
        li.appendChild(taskItem);
        const btnContainer = document.createElement('div');
        btnContainer.className = "btn-container";
        const editBtn = document.createElement('span');
        editBtn.className = "edit-btn";
        const deleteBtn = document.createElement('span');
        deleteBtn.className = "delete-btn";
        editBtn.innerText = "Edit";
        deleteBtn.innerText = "Delete";
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        li.appendChild(btnContainer);
        listContainer.appendChild(li);
        todoInput.value = "";

        deleteBtn.addEventListener("click", function () {
            let myIndex = todoItems.indexOf(taskItem.value);
            todoItems.splice(myIndex,1);
            localStorage.setItem("task saved", JSON.stringify(todoItems));
            li.remove();
        });

        editBtn.addEventListener("click", function () {
            if (taskItem.hasAttribute('readonly')) {
                taskItem.removeAttribute('readonly');
                taskItem.focus();
                editBtn.innerText = "OK";
            } else {
                if (taskItem.value.trim() == "") {
                    alert("task cannot be empty");
                    taskItem.focus();
                } else {
                    taskItem.setAttribute('readonly','');
                    editBtn.innerText = "Edit";
                    todoItems = [];
                    inputs = listContainer.getElementsByTagName('input');
                    for (let i = 0; i < inputs.length; i++) {
                        todoItems.push(inputs[i].value);
                    }
                    localStorage.setItem("task saved", JSON.stringify(todoItems));
                }
            }
        });
    }
};