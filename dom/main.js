// Crear una variable que identifique a mi div de ID "contenedor"
let contenedor = document.getElementById("contenedor");
// Agregamos una clase de estilo al contenedor
contenedor.classList.add("contenedorInicial");

// Creamos una etiqueta desde el JS de tipo "h1"
let titulo = document.createElement("h1");
titulo.classList.add("titulo");

// Le damos un contenido o texto
titulo.textContent = "Actividad 1 - DOM";

// .appendChild permite agregar el título dentro del contenedor
contenedor.appendChild(titulo);

let subtitulo = document.createElement("h2");
subtitulo.style.color = "blue";

subtitulo.textContent = "Programación I :D";

contenedor.appendChild(subtitulo);

/* -------------- TABLA ----------------- */
let tabla = document.createElement("table");
tabla.classList.add("tabla");

/* ----------- Encabezado --------------- */
let header = document.createElement("thead");

/* --------- Fila encabezado -------------- */
let filaEncabezado = document.createElement("tr");

/* -------------- Columnas ---------------- */
let th1 = document.createElement("th"); // columna header -> TH
th1.textContent = "Título";
th1.style.color = "red";

let th2 = document.createElement("th");
th2.style.color = "green";
th2.textContent = "Año";

filaEncabezado.appendChild(th1); // agregamos columna 1
filaEncabezado.appendChild(th2); // agregamos columna 2
header.appendChild(filaEncabezado);
tabla.appendChild(header);

/* -------------- Cuerpo --------------- */
let body = document.createElement("tbody");

/* ---------- 1er fila del cuerpo de la tabla ---------- */
let filaBody1 = document.createElement("tr"); // fila del cuerpo

let td1 = document.createElement("td"); // columna body -> TD
td1.textContent = "Harry Potter";

let td2 = document.createElement("td");
td2.textContent = "2001";

filaBody1.appendChild(td1);
filaBody1.appendChild(td2);
body.appendChild(filaBody1);

/* ------ 2da fila del cuerpo de la tabla -------- */
let filaBody2 = document.createElement("tr");

let td3 = document.createElement("td");
td3.textContent = "Robots";

let td4 = document.createElement("td");
td4.textContent = "2005";

filaBody2.appendChild(td3);
filaBody2.appendChild(td4);
body.appendChild(filaBody2);

/* -------------- Fin cuerpo --------------- */
tabla.appendChild(body);

contenedor.appendChild(tabla);
