const pendientes = [];
window.onload = () => {
    const formulario = document.getElementById("Formulario-2022");
    formulario.onsubmit = (e) => {
        e.preventDefault();
        const pendiente = document.getElementById("pendiente");
        const contenidoPendiente = pendiente.value;
        pendiente.value = "";
        pendientes.push (contenidoPendiente);
        pendiente.innerHTML = "";
        const listado = document.getElementById("por-hacer");
        listado.innerHTML = "";
        for (let i = 0; i < pendientes.length; i++) {
            const e = pendientes[i];
            listado.innerHTML += "<li>" + e + "</li>"
        }
        const Elementos= document.querySelectorAll("#por-hacer li");
        Elementos.forEach((elemento, i) =>{
            elemento.addEventListener("click", () => {
                elemento.parentNode.removeChild(elemento);
                pendientes.splice(i)
                console.log(elemento, i)
            })
        })
    }
}