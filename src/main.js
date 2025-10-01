
let demo = document.getElementById("app")

let texto = "Lista de Tareas"

demo.innerHTML += texto

let formu = document.createElement("form")

let label = document.createElement("label")
label.innerHTML = "Tarea: "
let input = document.createElement("input")
input.type = "text"

let label1 = document.createElement("label")
label1.innerHTML = " Descripcion: "
let input1 = document.createElement("input")
input1.type = "text"

let boton = document.createElement("button")
boton.innerHTML = "añadir"
boton.type = "submit"

formu.append(label, input, label1, input1)

demo.appendChild(formu)

demo.appendChild(boton)

boton.addEventListener("click", function () {

  let form2 = document.createElement("form")

  let label = document.createElement("label")
  label.innerHTML = "incompleta"
  let incompleta = document.createElement("input")
  incompleta.type = "radio"
  incompleta.checked = true
  incompleta.name = "Estado"
  incompleta.value = "Incompleta"

  let label1 = document.createElement("label")
  label1.innerHTML = "completa"
  let completa = document.createElement("input")
  completa.type = "radio"
  completa.name = "Estado"
  completa.value = "Completa"

  let li = document.createElement("li")
  let ol = document.createElement("lo")

  ol.innerHTML = "Tarea: " + input.value + " Descripcion: " + input1.value

  form2.append(incompleta, label, completa, label1)

  li.append(ol, form2)

  let botonGuardar = document.createElement("button")
  botonGuardar.value = "Guardar Tareas"
  botonGuardar.innerHTML = "Guardar"
  botonGuardar.type = "submit"

  botonGuardar.addEventListener("click", function () {
    let seleccionado = form2.querySelector('input[name="Estado"]:checked');

    let tareas;
    if (localStorage.getItem("tareasSave")) {
      tareas = JSON.parse(localStorage.getItem("tareasSave"));
    } else {
      tareas = [];
    }

    let tareasObj = {

      tarea: input.value,

      descripcion: input1.value,

      Estado: seleccionado.value,

    }

    tareas.push(tareasObj)

    localStorage.setItem("tareasSave", JSON.stringify(tareas))

  })

  demo.append(li, botonGuardar)

})