function addTask(){
    let tasklist = document.getElementById("tasklist");
    let addTask = document.getElementById("newtask");
    let newTask = document.createElement("li");
    let done = document.createElement("button");
    let del = document.createElement("button");
    let btnContainer = document.createElement("span")
    let addTaskVal = addTask.value;
    let addedTask = addTaskVal;

    newTask.textContent = addedTask;
    done.classList.add("done");
    done.textContent = "Done";
    del.classList.add("del");
    del.textContent = "Delete";
    btnContainer.classList.add("btn-container");
    btnContainer.append(done, del);
    newTask.append(btnContainer);
    tasklist.appendChild(newTask);


    function completedTask(){
        if (done.textContent == "Done"){
            newTask.classList = "completed";
            done.textContent = "Undo";
        }else{
            newTask.classList.remove("completed");
            done.textContent ="Done"
        }
    }
    
    done.addEventListener("click", completedTask);

    function removeTask(){
        let delTask = btnContainer.parentElement;
        tasklist.removeChild(delTask);
    }

    del.addEventListener("click", removeTask);
}
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addTask);

