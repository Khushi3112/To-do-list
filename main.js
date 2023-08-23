const input = document.querySelector("#task-text");
const btn_submit = document.querySelector("#btn-submit");
const task_list = document.querySelector(".task-list");

btn_submit.addEventListener('click', (e) => {
    e.preventDefault();
    const task_text = input.value;  
    console.log(task_text);

    if(task_text === ""){
        alert("Task cannot be empty.");
    }
    else {
        const task = document.createElement("div");
        task.classList.add("task");
        task_list.appendChild(task);

        const content = document.createElement("span");
        content.classList.add("content");
        task.appendChild(content);
        content.innerText = task_text;

        const btn = document.createElement("div");
        btn.classList.add("buttons");
        task.appendChild(btn);

        const check = document.createElement("button");
        check.classList.add("btn-check");
        btn.appendChild(check);
        check.innerHTML = '<i class="fas fa-check"></i>';

        const del = document.createElement("button");
        del.classList.add("btn-delete");
        btn.appendChild(del);
        del.innerHTML = '<i class="fas fa-trash"></i>';


        del.addEventListener('click', () => {
            task_list.removeChild(task);

        })

        check.addEventListener('click', () => {
            
            if(content.style.textDecoration == 'line-through'){
                content.style.textDecoration='none';
            }
            else{
                content.style.textDecoration='line-through';
            }
        })

        input.value = "";

    }
})