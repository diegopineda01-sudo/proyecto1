let demo = document.getElementById("app")

let tareas;

let texto = "Lista de Tareas"

demo.innerHTML += texto

let formu = document.createElement("form")

let label = document.createElement("label")
label.innerHTML = "Tarea: "
let input = document.createElement("input")
input.type = "text"

let label1 = document.createElement("label")
label1.innerHTML = " Description: "
let input1 = document.createElement("input")
input1.type = "text"

let boton = document.createElement("button")
boton.innerHTML = "añadir"
boton.type = "submit"

formu.append(label, input, label1, input1)

demo.appendChild(formu)

demo.appendChild(boton)

boton.addEventListener("click", function (e) {
  e.preventDefault();

  let tareas = JSON.parse(localStorage.getItem("tareasSave")) || [];
  let contadorId = parseInt(localStorage.getItem("contadorId")) || 1;

  let nuevaTarea = {
    id: contadorId,
    tarea: input.value,
    description: input1.value,
    Estado: "Incompleta"
  };

  tareas.push(nuevaTarea);
  localStorage.setItem("tareasSave", JSON.stringify(tareas));
  localStorage.setItem("contadorId", contadorId + 1);

  
  let form2 = document.createElement("form")

  let labelIncompleta = document.createElement("label")
  labelIncompleta.innerHTML = "incompleta"
  let incompleta = document.createElement("input")
  incompleta.type = "radio"
  incompleta.checked = true
  incompleta.name = "Estado_" + contadorId
  incompleta.value = "Incompleta"

  let labelCompleta = document.createElement("label")
  labelCompleta.innerHTML = "completa"
  let completa = document.createElement("input")
  completa.type = "radio"
  completa.name = "Estado_" + contadorId
  completa.value = "Completa"

  form2.append(incompleta, labelIncompleta, completa, labelCompleta)

  let li = document.createElement("li")
  li.textContent = `Tarea: ${input.value} Descripción: ${input1.value}`

  li.appendChild(form2)

  demo.appendChild(li)

  input.value = "";
  input1.value = "";

  form2.addEventListener("change", function () {
    let seleccionado = form2.querySelector('input[name="Estado_' + contadorId + '"]:checked');

    if (!seleccionado) return;

    for (let i = 0; i < tareas.length; i++) {
      if (tareas[i].id === contadorId) {
        tareas[i].Estado = seleccionado.value;
        break;
      }
    }

    localStorage.setItem("tareasSave", JSON.stringify(tareas));
  })
})


window.addEventListener("load", function () {
  let tareasGuardadas = JSON.parse(localStorage.getItem("tareasSave")) || [];

  for (let i = 0; i < tareasGuardadas.length; i++) {
    let tarea = tareasGuardadas[i];

    let form2 = document.createElement("form")

    let labelIncompleta = document.createElement("label")
    labelIncompleta.innerHTML = "incompleta"
    let incompleta = document.createElement("input")
    incompleta.type = "radio"
    incompleta.name = "Estado_" + tarea.id
    incompleta.value = "Incompleta"
    if (tarea.Estado === "Incompleta") incompleta.checked = true

    let labelCompleta = document.createElement("label")
    labelCompleta.innerHTML = "completa"
    let completa = document.createElement("input")
    completa.type = "radio"
    completa.name = "Estado_" + tarea.id
    completa.value = "Completa"
    if (tarea.Estado === "Completa") completa.checked = true

    form2.append(incompleta, labelIncompleta, completa, labelCompleta)

    let li = document.createElement("li")
    li.textContent = `Tarea: ${tarea.tarea} Descripción: ${tarea.description}`
    li.appendChild(form2)

    demo.appendChild(li)

    form2.addEventListener("change", function () {
      let seleccionado = form2.querySelector('input[name="Estado_' + tarea.id + '"]:checked');
      if (!seleccionado) return;

      let tareas = JSON.parse(localStorage.getItem("tareasSave")) || [];
      for (let j = 0; j < tareas.length; j++) {
        if (tareas[j].id === tarea.id) {
          tareas[j].Estado = seleccionado.value;
          break;
        }
      }
      localStorage.setItem("tareasSave", JSON.stringify(tareas));
    })
  }
});
