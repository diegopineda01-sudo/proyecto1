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

  let li = document.createElement("li")
  let ol = document.createElement("lo")

  ol.innerHTML = "Tarea: " + input.value + " Descripcion: " + input1.value

  li.appendChild(ol)

  demo.appendChild(li)
})