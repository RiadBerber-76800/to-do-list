document.getElementById("push").onclick=function(){

let elInput = document.getElementById("todo-input").value;
    // coditions validate form
    // si le champ d'input est vide
if (elInput=="") {
    alert("Ajoute une tâche")
    
} else if (elInput.length < 3) {
    alert ("Tâche trop courte")
    
} else if(elInput.length > 35) {
    alert ("Tâche trop longue")
} else {
    console.log("Tout est ok");
    // selectionne la div là est les taches vont être affichées
    document.getElementById("tasks").innerHTML +=
    `<div class="d-flex justify-content-between align-items-center mb-3">
     <p>${elInput}</p>
     <button class="btn btn-danger">Delete</button>
    </div>`
     ;
}     
};
