//modal test seguridad / asignar puntaje/ mostrar mensaje
$(document).ready(function() {
    $("#testSeguridad").on("submit", function(e) {
        e.preventDefault();

        const resp1 = $('input[name="preg1"]:checked').val();
        const resp2 = $('input[name="preg2"]:checked').val();
        const resp3 = $('input[name="preg3"]:checked').val();

        let puntaje = 0;

        if (resp1 === "falso") puntaje++;
        if (resp2 === "falso") puntaje++;
        if (resp3 === "verdadero") puntaje++;

        let mensaje = '';

        if (puntaje === 3) {
            mensaje = "3 puntos. ¡Felicidades 🎉! Sabes mucho sobre seguridad.";
        } else if (puntaje === 2) {
            mensaje = "2 puntos. ¡Buen trabajo 👋! Aunque puedes mejorar algunos aspectos.";
        } else if (puntaje === 1) {
            mensaje = "1 punto. Sería bueno repasar los consejos sobre seguridad 💡"
        } else {
            mensaje = "0 puntos. ¡Definitivamente necesitas aprender sobre seguridad! 🚨"
        }

        // mostrar resaultado
        $("#resultadoTest").text(mensaje).removeClass("d-none");
        $("#btnVolverIntentar").removeClass("d-none");
    });

    // btn volver a intentar
    $("#btnVolverIntentar").on("click", function() {
        // reset test
        $("#testSeguridad")[0].reset();

        // ocultar resultado
        $("#resultadoTest").addClass("d-none");

        // volver a ocultar btn volver a intentar
        $("#btnVolverIntentar").addClass("d-none");
    });

    // cerrar modal
    $("#cerrarModal").on("click", function() {
        // limpiar test
        $("#testSeguridad")[0].reset();

        // volver a ocultar btn volver a intentar
        $("#btnVolverIntentar").addClass("d-none");
    });
});


// mostrar form contacto
$("#btnContacto").on("click", function() {
    // console.log("btn click");
    $("#formContacto").removeClass("d-none");
});


// form contacto
$("#formContacto").on("submit", function(e) {
    e.preventDefault();
    const nombre = $("#nombre").val().trim();
    const correo = $("#correo").val().trim();
    const comentario = $("#comentario").val().trim();
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || correo === "" || comentario === "") {
        alert("Debes ingresar todos los datos");
        return;
    };

    if (!correoRegex.test(correo)) {
        alert("Ingresa un correo válido");
        return;
    };

    alert(`Mensaje enviado. ${nombre}, muchas gracias por contactarnos!`);
    $("#formContacto").addClass("d-none");
});
