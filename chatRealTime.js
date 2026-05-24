const chat = document.querySelector(".chat");
const input_texto = document.getElementById("texto");
const boton = document.getElementById("boton");

const btnModo = document.getElementById("modo");
btnModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const esOscuro = document.body.classList.contains("dark");
    btnModo.textContent = esOscuro ? "Claro" : "Oscuro"
});

const MI_ID = crypto.randomUUID();

if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("swChat.js");
}

function agregarMensaje(texto, clase) {
    const p = document.createElement("p");
    p.textContent = texto;
    p.classList.add(clase);
    chat.appendChild(p);
    chat.scrollTop = chat.scrollHeight;
}

function enviar_mensaje() {
    const texto = input_texto.value.trim();
    if (!texto) return;
    agregarMensaje(texto, "mensaje2");
    navigator.serviceWorker.controller?.postMessage({texto, id: MI_ID});
    input_texto.value = "";
}

boton.addEventListener("click", enviar_mensaje);

navigator.serviceWorker.onmessage = (e) => {
    const {texto, id}=e.data;
    if(id===MI_ID) return;
    agregarMensaje(texto, "mensaje"); 
};










