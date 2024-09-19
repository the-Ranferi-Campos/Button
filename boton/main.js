// creacion de funcion flecha
const saludar = () => {
    alert("Hola, y bienvenido a este cuatrimestre");
};

//creacion de alerta moderna con sweet alert 2
const saludarNuevo = () => {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
};

//llamado de la funciones
saludar();
saludarNuevo();
saludarNuevo2();