/* ==================================================
   VARIABLES
================================================== */

let nombreElegido = "";
let nivelElegido = "";
let amorElegido = "";
let mandoElegido = "";
let peleaElegida = "";
let distanciaElegida = "";
let comidaElegida = "";

let promesaEscrita = "";
let mensajeEspecialEscrito = "";

let contadorIniciado = false;
let acepto = false;


/* ==================================================
   CAMBIAR PANTALLA
================================================== */

function mostrarPantalla(id) {

    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");

    window.scrollTo(0, 0);
}


/* ==================================================
   100.000 TE AMO
================================================== */

function iniciar100MilTeAmo() {

    mostrarPantalla("pantallaTeAmo");

    if (contadorIniciado) {
        return;
    }

    contadorIniciado = true;

    let contador = 0;

    const objetivo = 100000;

    const contadorElemento =
        document.getElementById("contadorTeAmo");

    const boton =
        document.getElementById("botonDespuesTeAmo");


    const intervalo = setInterval(() => {

        contador += 1000;

        if (contador >= objetivo) {

            contador = objetivo;

            clearInterval(intervalo);

            boton.classList.remove("oculto");
        }

        contadorElemento.textContent =
            contador.toLocaleString("es-CO");

        crearTeAmo();

    }, 40);
}


/* ==================================================
   TE AMO FLOTANTES
================================================== */

function crearTeAmo() {

    const contenedor =
        document.getElementById("lluviaTeAmo");

    for (let i = 0; i < 3; i++) {

        const elemento =
            document.createElement("div");

        elemento.className =
            "te-amo-flotante";

        elemento.textContent =
            "TE AMO ❤️";

        elemento.style.left =
            Math.random() * 100 + "%";

        elemento.style.fontSize =
            (12 + Math.random() * 18) + "px";

        elemento.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        contenedor.appendChild(elemento);

        setTimeout(() => {
            elemento.remove();
        }, 6000);
    }
}


/* ==================================================
   IR AL REGISTRO
================================================== */

function irRegistro() {

    mostrarPantalla("pantalla2");

    document
        .getElementById("nombre")
        .focus();
}


/* ==================================================
   MOSTRAR SIGUIENTE PREGUNTA
================================================== */

function mostrarSiguiente(actual, siguiente) {

    document
        .getElementById(actual)
        .classList.add("bloque-oculto");

    const siguienteElemento =
        document.getElementById(siguiente);

    siguienteElemento.classList.remove("bloque-oculto");

    setTimeout(() => {

        siguienteElemento.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);
}


/* ==================================================
   NOMBRE
================================================== */

function validarNombre() {

    const campo =
        document.getElementById("nombre");

    const nombre =
        campo.value.trim();

    const mensaje =
        document.getElementById("mensajeNombre");


    if (!nombre) {

        mensaje.textContent =
            "🚨 El sistema necesita saber quién es el culpable de tanto amor.";

        campo.focus();

        return;
    }


    nombreElegido = nombre;


    mensaje.textContent =
        `✅ Identidad confirmada: ${nombre}. El sospechoso acepta continuar. 😂`;


    setTimeout(() => {

        mostrarSiguiente(
            "preguntaNivel",
            "preguntaNivel"
        );

    }, 900);
}


/* ==================================================
   NIVEL DE AMOR
================================================== */

function seleccionarNivel(valor, boton) {

    nivelElegido = valor;

    marcarBoton(boton);

    document.getElementById("mensajeNivel").textContent =
        "❤️ Respuesta registrada. El sistema sospecha que estás enamorado.";

    setTimeout(() => {

        mostrarSiguiente(
            "preguntaNivel",
            "preguntaAmor"
        );

    }, 900);
}


/* ==================================================
   QUIÉN AMA MÁS
================================================== */

function seleccionarAmor(valor, boton) {

    amorElegido = valor;

    marcarBoton(boton);

    document.getElementById("mensajeAmor").textContent =
        "😂 Respuesta guardada. No se aceptan reclamaciones posteriores.";

    setTimeout(() => {

        mostrarSiguiente(
            "preguntaAmor",
            "preguntaMando"
        );

    }, 900);
}


/* ==================================================
   QUIÉN MANDA
================================================== */

function seleccionarMando(valor, boton) {

    mandoElegido = valor;

    marcarBoton(boton);

    document.getElementById("mensajeMando").textContent =
        "🚨 Respuesta registrada y enviada a las autoridades correspondientes. 👮😂";

    setTimeout(() => {

        mostrarSiguiente(
            "preguntaMando",
            "preguntaPelea"
        );

    }, 900);
}


/* ==================================================
   PELEAS
================================================== */

function seleccionarPelea(valor, boton) {

    peleaElegida = valor;

    marcarBoton(boton);

    document.getElementById("mensajePelea").textContent =
        "✅ Excelente. El departamento de conflictos amorosos aprueba este protocolo. 😂";

    setTimeout(() => {

        mostrarSiguiente(
            "preguntaPelea",
            "preguntaDistancia"
        );

    }, 900);
}


/* ==================================================
   DISTANCIA
================================================== */

function seleccionarDistancia(valor, boton) {

    distanciaElegida = valor;

    marcarBoton(boton);

    document.getElementById("mensajeDistancia").textContent =
        "📍 Distancia detectada. ❤️ Amor activado.";

    setTimeout(() => {

        mostrarSiguiente(
            "preguntaDistancia",
            "preguntaComida"
        );

    }, 900);
}


/* ==================================================
   COMIDA
================================================== */

function seleccionarComida(valor, boton) {

    comidaElegida = valor;

    marcarBoton(boton);

    document.getElementById("mensajeComida").textContent =
        "🍕 Elección aceptada. El hambre será parte oficial de esta relación. 😂";

    setTimeout(() => {

        mostrarSiguiente(
            "preguntaComida",
            "preguntaPromesa"
        );

    }, 900);
}


/* ==================================================
   MARCAR BOTÓN
================================================== */

function marcarBoton(boton) {

    const contenedor =
        boton.parentElement;

    contenedor
        .querySelectorAll("button")
        .forEach(b => {
            b.classList.remove("seleccionado");
        });

    boton.classList.add("seleccionado");
}


/* ==================================================
   GUARDAR PROMESA
================================================== */

function guardarPromesa() {

    const campo =
        document.getElementById("promesa");

    const texto =
        campo.value.trim();

    const mensaje =
        document.getElementById("mensajePromesa");


    if (!texto) {

        mensaje.textContent =
            "🚨 ¿Promesa? El sistema detecta que todavía no has escrito nada. 😂";

        campo.focus();

        return;
    }


    if (texto.length < 5) {

        mensaje.textContent =
            "👀 Eso estuvo demasiado corto. Escribe algo más, señor.";

        campo.focus();

        return;
    }


    promesaEscrita = texto;


    mensaje.textContent =
        "💍 Promesa registrada. Esthefany podrá usar esto como evidencia en el futuro. 😂";


    setTimeout(() => {

        mostrarSiguiente(
            "preguntaPromesa",
            "preguntaMensaje"
        );

    }, 1100);
}


/* ==================================================
   GUARDAR MENSAJE
================================================== */

function guardarMensaje() {

    const campo =
        document.getElementById("mensajeEspecial");

    const texto =
        campo.value.trim();

    const mensaje =
        document.getElementById("mensajeEspecialAviso");


    if (!texto) {

        mensaje.textContent =
            "💌 El sistema esperaba unas palabras bonitas. No seas tímido. 😂";

        campo.focus();

        return;
    }


    if (texto.length < 5) {

        mensaje.textContent =
            "🥹 Eso fue muy poquito. Puedes hacerlo mejor.";

        campo.focus();

        return;
    }


    mensajeEspecialEscrito = texto;


    mensaje.textContent =
        "💗 Mensaje guardado. Advertencia: puede provocar lágrimas. 🥹❤️";


    setTimeout(() => {

        mostrarSiguiente(
            "preguntaMensaje",
            "declaracionFinal"
        );

    }, 1200);
}


/* ==================================================
   BOTÓN NO
================================================== */

function escaparBoton() {

    const boton =
        document.getElementById("botonNo");


    const mensajes = [

        "¿Seguro? 🤨",

        "Ese botón está dañado 😂",

        "No puedes escapar tan fácilmente. ❤️",

        "ERROR 404: opción NO no encontrada.",

        "El sistema sabe que quieres decir que sí. 👀",

        "Intenta otra vez... si te atreves 😂",

        "Demasiado tarde, Danilo. 💍",

        "Tu intento de escape ha sido registrado. 🚨😂"

    ];


    const mensaje =
        mensajes[
            Math.floor(
                Math.random() * mensajes.length
            )
        ];


    boton.textContent =
        mensaje;


    const ancho =
        window.innerWidth -
        boton.offsetWidth -
        30;


    const alto =
        window.innerHeight -
        boton.offsetHeight -
        30;


    const x =
        Math.max(
            15,
            Math.random() * ancho
        );


    const y =
        Math.max(
            15,
            Math.random() * alto
        );


    boton.style.position =
        "fixed";

    boton.style.left =
        x + "px";

    boton.style.top =
        y + "px";
}


/* ==================================================
   ACEPTAR
================================================== */

function aceptar() {

    acepto = true;


    const botonSi =
        document.getElementById("botonSi");

    const botonNo =
        document.getElementById("botonNo");

    const mensaje =
        document.getElementById("mensajeAceptado");

    const botonCertificado =
        document.getElementById("botonCertificado");


    botonSi.classList.add("oculto");

    botonNo.classList.add("oculto");

    mensaje.classList.remove("oculto");

    botonCertificado.classList.remove("oculto");
}


/* ==================================================
   CREAR CERTIFICADO
================================================== */

function crearCertificado() {

    if (!acepto) {

        alert(
            "Primero debes aceptar. 😌❤️"
        );

        return;
    }


    /*
     * Llenar página 1
     */

    document.getElementById("nombreFinal")
        .textContent = nombreElegido;

    document.getElementById("firmaDanilo")
        .textContent = nombreElegido;

    document.getElementById("nivelFinal")
        .textContent = nivelElegido;

    document.getElementById("amorFinal")
        .textContent = amorElegido;

    document.getElementById("mandoFinal")
        .textContent = mandoElegido;

    document.getElementById("peleaFinal")
        .textContent = peleaElegida;

    document.getElementById("distanciaFinal")
        .textContent = distanciaElegida;

    document.getElementById("comidaFinal")
        .textContent = comidaElegida;


    /*
     * Llenar página 2
     */

    document.getElementById("promesaFinal")
        .textContent = promesaEscrita;

    document.getElementById("mensajeEspecialFinal")
        .textContent = mensajeEspecialEscrito;


    mostrarPantalla("pantalla3");
}


/* ==================================================
   GENERAR PDF
   EXACTAMENTE 2 PÁGINAS
================================================== */

async function descargarCertificado() {

    const pagina1 =
        document.querySelector(
            ".pagina-certificado"
        );

    const pagina2 =
        document.querySelector(
            ".pagina-mensajes"
        );

    const boton =
        document.querySelector(
            ".boton-pdf"
        );


    if (!pagina1 || !pagina2) {

        alert(
            "No se encontraron las dos páginas del certificado."
        );

        return;
    }


    if (
        typeof html2canvas === "undefined" ||
        !window.jspdf
    ) {

        alert(
            "No se pudo cargar el generador de PDF. Revisa tu conexión a Internet."
        );

        return;
    }


    try {

        boton.disabled = true;

        boton.textContent =
            "⏳ GENERANDO PDF...";


        /*
         * CONTENEDOR TEMPORAL
         */

        const contenedor =
            document.createElement("div");


        contenedor.style.position =
            "fixed";

        contenedor.style.left =
            "-100000px";

        contenedor.style.top =
            "0";

        contenedor.style.width =
            "210mm";

        contenedor.style.background =
            "#fffdf9";


        document.body.appendChild(
            contenedor
        );


        /*
         * COPIAR PÁGINA 1
         */

        const copia1 =
            pagina1.cloneNode(true);


        copia1.style.width =
            "210mm";

        copia1.style.height =
            "297mm";

        copia1.style.minHeight =
            "297mm";

        copia1.style.maxHeight =
            "297mm";

        copia1.style.margin =
            "0";

        copia1.style.transform =
            "none";


        /*
         * COPIAR PÁGINA 2
         */

        const copia2 =
            pagina2.cloneNode(true);


        copia2.style.width =
            "210mm";

        copia2.style.height =
            "297mm";

        copia2.style.minHeight =
            "297mm";

        copia2.style.maxHeight =
            "297mm";

        copia2.style.margin =
            "0";

        copia2.style.transform =
            "none";


        contenedor.appendChild(
            copia1
        );

        contenedor.appendChild(
            copia2
        );


        /*
         * Esperar render
         */

        await new Promise(resolve => {

            requestAnimationFrame(() => {

                requestAnimationFrame(
                    resolve
                );

            });

        });


        /*
         * CAPTURA PÁGINA 1
         */

        const canvas1 =
            await html2canvas(
                copia1,
                {

                    scale: 2,

                    useCORS: true,

                    allowTaint: true,

                    backgroundColor:
                        "#fffdf9",

                    logging: false,

                    width:
                        copia1.offsetWidth,

                    height:
                        copia1.offsetHeight

                }
            );


        /*
         * CAPTURA PÁGINA 2
         */

        const canvas2 =
            await html2canvas(
                copia2,
                {

                    scale: 2,

                    useCORS: true,

                    allowTaint: true,

                    backgroundColor:
                        "#fffdf9",

                    logging: false,

                    width:
                        copia2.offsetWidth,

                    height:
                        copia2.offsetHeight

                }
            );


        /*
         * CREAR PDF
         */

        const { jsPDF } =
            window.jspdf;


        const pdf =
            new jsPDF({

                orientation:
                    "portrait",

                unit:
                    "mm",

                format:
                    "a4",

                compress:
                    true

            });


        const anchoA4 =
            210;

        const altoA4 =
            297;


        /*
         * PÁGINA 1
         */

        const imagen1 =
            canvas1.toDataURL(
                "image/jpeg",
                1
            );


        pdf.addImage(
            imagen1,
            "JPEG",
            0,
            0,
            anchoA4,
            altoA4
        );


        /*
         * PÁGINA 2
         */

        pdf.addPage();


        const imagen2 =
            canvas2.toDataURL(
                "image/jpeg",
                1
            );


        pdf.addImage(
            imagen2,
            "JPEG",
            0,
            0,
            anchoA4,
            altoA4
        );


        /*
         * NOMBRE
         */

        const nombre =
            nombreElegido ||
            "Danilo";


        const nombreSeguro =
            nombre
                .replace(
                    /[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]/g,
                    ""
                )
                .trim()
                .replace(
                    /\s+/g,
                    "_"
                );


        /*
         * DESCARGAR
         */

        pdf.save(
            `Certificado_Matrimonio_${nombreSeguro}.pdf`
        );


        /*
         * LIMPIAR
         */

        contenedor.remove();


        boton.textContent =
            "✅ PDF GENERADO";


        setTimeout(() => {

            boton.textContent =
                "📄 DESCARGAR CERTIFICADO PDF";

            boton.disabled = false;

        }, 2500);


    } catch (error) {

        console.error(
            "ERROR AL GENERAR PDF:",
            error
        );


        alert(
            "Hubo un problema al generar el PDF."
        );


        const temporal =
            document.querySelector(
                'body > div[style*="-100000px"]'
            );


        if (temporal) {
            temporal.remove();
        }


        boton.textContent =
            "📄 DESCARGAR CERTIFICADO PDF";


        boton.disabled = false;
    }
}