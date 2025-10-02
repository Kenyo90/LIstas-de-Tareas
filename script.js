let form = document.getElementById("formulario");
let aviso = document.getElementsByClassName("aviso")[0];
let listas = document.getElementById("listaTareas");
let tarea = document.getElementsByClassName("descripcion")[0];
let usuario = document.getElementsByClassName("usuario")[0];
// let crear = document.getElementsByTagName("button")[0];
let li = document.getElementsByClassName("lista")[0];
let comentario=document.getElementById('comentario');
let actualiza=document.getElementsByClassName('actualizar')[0];
let elimina=document.getElementsByClassName('eliminar')[0];
let contar=0

form.addEventListener("submit", function(event) {
  event.preventDefault();
  listas.style.display = 'block';
  if (aviso) {
    aviso.style.display = "none";
  }
  //------- SessionStorage guardar ---------->
    let nuevaTarea = {
      texto: tarea.value,
      usuario: usuario.value,
    };
    sessionStorage.setItem("tarea", JSON.stringify(nuevaTarea));

  listas.innerHTML += `
  <div class="lista">
    <p id="comentario"> La Tarea es: <b>${tarea.value}</b> - <b>${usuario.value}</b></p>
    <button class="actualizar" type="button"">Actualizar</button>
    <button class="eliminar" type="button">Eliminar</button>
    </div>`;
    form.reset(); 
    alert(`Se a creado un nuevo evento ${contar+=1}`)
    console.log("contarrr agregar.",contar)
    let formula={'comentario':comentario}
});

listas.addEventListener("click", function (event) {
  console.log("Voy a eliminar:", event.target.parentElement);
  // Saber qué botón fue clickeado
  console.log("listas..", listas);
  console.log("evento", event);
  //   console.log("listasssss",listas.lang)
  if (event.target.classList.contains("eliminar")) {
    // Eliminar el div que contiene la tarea (el padre directo del botón)
    event.target.parentElement.remove();

    alert(`Se elimino una tarea ${(contar -= 1)}`);
    console.log("contarrr. eliminar", contar);
     let nuevaTarea = {
      texto: tarea.value,
      usuario: usuario.value,
    };
    //------- SessionStorage Eliminar ---------->
    
    sessionStorage.removeItem("tarea", JSON.stringify(nuevaTarea));

    if (contar == 0) {
      listas.style.display = "none";
      console.log("else");
      aviso.style.display = "block";
    } else {
      listas.style.display = "block";
      console.log("if", listas);
    }
  } else if (event.target.classList.contains("actualizar")) {
    // Aquí puedes poner la lógica para actualizar la tarea
    let tarea = event.target.parentElement.querySelector("p");
    console.log("tarea", tarea);
    let nuevaTarea = prompt("Actualiza la tarea:", tarea.innerText);
    if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
      tarea.innerText = nuevaTarea;
    }
  }
});




