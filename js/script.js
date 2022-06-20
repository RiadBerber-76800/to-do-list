document.getElementById("push").onclick = function () {
  let elInput = document.getElementById("todo-input").value;
  // coditions validate form
  // si le champ d'input est vide
  if (elInput == "") {
    alert("Ajoute une tâche");
  } else if (elInput.length < 3) {
    alert("Tâche trop courte");
  } else if (elInput.length > 35) {
    alert("Tâche trop longue");
  } else {
    console.log("Tout est ok");
    // selectionne la div là est les taches vont être affichées
    document.getElementById(
      "tasks"
    ).innerHTML += `<div class="d-flex justify-content-between align-items-center mb-3 border-bottom py-3">
     <span class="my-o taskname">${elInput}</span>
     <button class="btn btn-danger delete">Delete</button>
    </div>`;
  }
  // delete task
  let tasksDelete = document.querySelectorAll(".delete");
  for (let i = 0; i < tasksDelete.length; i++) {
    tasksDelete[i].onclick = function () {
      this.parentNode.remove();
    };
  }
  // task done
  let tasksDone = document.querySelectorAll(".taskname");
  for (let i = 0; i < tasksDone.length; i++) {
    tasksDone[i].onclick = function () {
      this.classList.toggle("completed");
    };
    document.querySelector("#todo-input").value = ""
  }
};
