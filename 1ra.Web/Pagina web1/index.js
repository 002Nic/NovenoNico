window.onload = () => {
    const formulario = document.getElementById("Formulario-2022");
    formulario.onsubmit = (e) => {
        e.preventDefault();
        const pendiente = document.getElementById("pendiente");
        const contenido = pendiente.value;
        alert(contenido);
    }
}