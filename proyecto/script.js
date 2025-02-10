//Modificado por Raúl Miras para DAW
//Modificado desde otra cuenta Github

// Creado por Raúl Miras Vidal

 // Función para generar una clave aleatoria de 5 caracteres
 function generarClave() {
    const caracteres = '123456ABC'; //Caracteres permitidos
    let clave = '';
    //Se coge un caracter aleatorio 5 veces y se compone la clave
    for (let i = 0; i < 5; i++) {
        clave += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    return clave;
}

// Mezclar los botones aleatoriamente
function mezclarBotones() {
    const botones = ['1', '2', '3', '4', '5', '6', 'A', 'B', 'C'];
    return botones.sort(() => Math.random() - 0.5);
}

//Creo la interfaz

//Contenedor principal
const contenedorPrincipal = document.createElement('div');
contenedorPrincipal.style.display = 'flex'; // Alinear elementos horizontalmente
contenedorPrincipal.style.gap = '20px'; // Espacio entre los elementos
contenedorPrincipal.style.margin = '20px';

const clave = generarClave();
const botonesMezclados = mezclarBotones();

//Div para el texto de la clave aleatoria
const contenedorPass = document.createElement('div');

//Div para los botones
const contenedorDerecha = document.createElement('div');
contenedorDerecha.style.width = "300px",

contenedorDerecha.style.border = "10px solid black";
contenedorDerecha.style.backgroundColor = "rgb(220, 218, 255)";

contenedorDerecha.style.borderRadius = "10px";
contenedorDerecha.style.padding = "10px";
contenedorDerecha.style.alignContent = "center";

//Input para la clave
const inputClave = document.createElement('input');
inputClave.type = 'text';
inputClave.value = clave;
inputClave.disabled = true;
inputClave.style.height = "40px";
inputClave.style.border = "3px solid darkgrey";
inputClave.style.borderRadius = "4px";
inputClave.style.fontSize = "large",
inputClave.style.fontWeight = "bold";
inputClave.style.textAlign = "center";

//Input para el display
const inputDisplay = document.createElement('input');
inputDisplay.type = 'text';
inputDisplay.disabled = true;
inputDisplay.style.width = "290px";
inputDisplay.style.height = "40px";
inputDisplay.style.marginBottom = "10px";
inputDisplay.style.fontSize = "large";
inputDisplay.style.fontWeight = "bold";
inputDisplay.style.textAlign = "center";
inputDisplay.style.backgroundColor = "rgb(235, 235, 235)";

//Div para los botones
const contenedorBotones = document.createElement('div');
contenedorBotones.style.display = "grid";
contenedorBotones.style.gridTemplateColumns = 'repeat(3, 1fr)'; // 3 columnas de igual tamaño
contenedorBotones.style.gap = '10px'; // Espacio entre los botones

//Creo un botón por cada caracter mezclado, le pongo un event listener y lo añado al contenedor de botones
botonesMezclados.forEach(caracter => {
    const boton = document.createElement('button');
    boton.textContent = caracter;
    boton.style.height = "40px";

    boton.addEventListener('click', () => {
        inputDisplay.value += '*';
        secuenciaUsuario += caracter;
    });
    contenedorBotones.appendChild(boton);
});

//Botón borrar
const botonBorrar = document.createElement('button');
botonBorrar.textContent = 'X';
botonBorrar.style.height = "50px";
botonBorrar.style.fontSize = "large";
botonBorrar.style.fontWeight = "bold";
botonBorrar.style.backgroundColor = "rgb(209, 70, 19)";

botonBorrar.addEventListener('click', () => {
    //Borrar el caracter del final
    inputDisplay.value = inputDisplay.value.slice(0, -1);
    secuenciaUsuario = secuenciaUsuario.slice(0, -1);
});

contenedorBotones.appendChild(botonBorrar);

//Botón Validar
const botonValidar = document.createElement('button');
botonValidar.textContent = 'Validar';
botonValidar.style.backgroundColor ="rgb(0, 141, 206)";

botonValidar.style.gridColumn = "span 2";
botonValidar.style.height = "50px";
botonValidar.style.fontSize = "large";
botonValidar.style.fontWeight = "bold";

const parrafoValidacion = document.createElement('p');
let secuenciaUsuario = '';

//Funcionalidad del botón Validar
botonValidar.addEventListener('click', () => {

    if (secuenciaUsuario === clave) {
        parrafoValidacion.textContent = '¡Código correcto!';
        parrafoValidacion.style.color = 'green';
        parrafoValidacion.style.fontWeight = "bold";

    } else {
        parrafoValidacion.textContent = 'Código incorrecto. Inténtalo de nuevo.';
        parrafoValidacion.style.color = 'red';
    }
});

//Se añade todo a la pantalla dentro de sus respectivos contenedores
contenedorBotones.appendChild(botonValidar);

contenedorPass.appendChild(inputClave);
contenedorDerecha.appendChild(inputDisplay);
contenedorDerecha.appendChild(contenedorBotones);

contenedorPrincipal.appendChild(contenedorPass);

contenedorPrincipal.appendChild(contenedorDerecha);

document.body.appendChild(contenedorPrincipal);
document.body.appendChild(parrafoValidacion);

