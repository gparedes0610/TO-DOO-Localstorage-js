document.getElementById("formTask").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  console.log("enviado");
  const tareas = {
    title,
    description,
  };
  if (localStorage.getItem("tareas") === null) {
    let arreglotareas = [];
    arreglotareas.push(tareas);
    localStorage.setItem("tareas", JSON.stringify(arreglotareas));
  } else {
    let arreglotareas = JSON.parse(localStorage.getItem("tareas"));
    arreglotareas.push(tareas);
    localStorage.setItem("tareas", JSON.stringify(arreglotareas));
  }
  document.getElementById("formTask").reset();
  //getTasks();
  getTaks(); // este es mio
});

function getTaks() {
  let TareasObtenidas = JSON.parse(localStorage.getItem("tareas"));
  const task = document.getElementById("tasks");
  task.innerHTML = "";

  //console.log(TareasObtenidas);
  TareasObtenidas.forEach((tarea, i) => {
    const { title, description } = tarea;
    let div = document.createElement("div");
    div.className = "row mt-3";
    div.innerHTML += `
                        <div class="d-flex justify-content-end">
                            <div class="card w-75">
                                <div class="card-body">
                                    <p><strong>Tarea:</strong> ${title}</p>
                                    <p><strong>Descripcion:</strong> ${description}</p>
                                    <button class="btn btn-danger eliminar"
                                    onclick="eliminarTarea('${title}')">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    
    `;
    task.appendChild(div);
  });
}
getTaks(); // lo ponemos afuera para q se ejecuta apenas inicia nuestra aplicacion

/* function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tareas"));
  let tasksView = document.getElementById("tasks");
  tasksView.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
          <div class="card-body">
            <p>${title} - ${description}
            <a href="#" onclick="eliminarTarea('${title}')" class="btn btn-danger ml-5">Delete</a>
            </p>
          </div>
        </div>`;
  }
}

getTasks(); */

function eliminarTarea(titulo) {
  // console.log("se elimino");
  let TareasObtenidas = JSON.parse(localStorage.getItem("tareas"));
  //console.log(TareasObtenidas);
  TareasObtenidas.forEach((tarea, i) => {
    if (tarea.title == titulo) {
      TareasObtenidas.splice(i, 1);
    }
  });
  localStorage.setItem("tareas", JSON.stringify(TareasObtenidas));
  getTaks();
}
