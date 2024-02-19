
const input = document.getElementById("encript-input");
let resEncript = document.getElementById("getEncript");
let resDesEncript =document.getElementById("getEncript");
const resetInput =document.getElementById("resetInput");

function validarCaracter(input) {
    const caracteresPermitidos = /[a-z ]/;
    const ultimoCaracter = input.value.charAt(input.value.length - 1);
    const caracterValido = caracteresPermitidos.test(ultimoCaracter);

    if (!caracterValido) {
        input.value = input.value.slice(0, -1);
    } else {
        input.value = input.value.toLowerCase();
    }
}

function encriptt(mensaje) {
    const conversion = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat",
        " ": " ",
    };
    let messageEncriptCheck = "";
    for (let i = 0; i < mensaje.length; i++) {
        const letter = mensaje[i];
        const letterEn = conversion[letter] || letter;
        messageEncriptCheck += letterEn;
    }
    return messageEncriptCheck;
}

function analizarTexto(texto) {
    const conversion = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u",
        " ": " ",
    };

    const patron = /enter|imes|ai|ober|ufat| /g;
    const resultado = texto.replace(patron, (match) => conversion[match]);
    return resultado;
}

const dEncriptarBtn =document.getElementById("descriptar-btn");
dEncriptarBtn.addEventListener("click", () => {
    const textoAnalizadoInverso = input.value;
    const textoAnalizadoCheck = analizarTexto(textoAnalizadoInverso);
    resDesEncript.value = textoAnalizadoCheck;
    resetInput.reset();
});

const encriptarBtn = document.getElementById("encriptar-btn"); // Obtener el botón
encriptarBtn.addEventListener("click", () => {
    const textToEncript = input.value;
    const encriptRes = encriptt(textToEncript);
    resEncript.value = encriptRes;
    resetInput.reset();
});

const copyBtn = document.getElementById("clipboard");
copyBtn.addEventListener("click", () => {
    let textoGenerado = resEncript;
    navigator.clipboard.writeText(textoGenerado.value).then(() => {
        console.log("texto copiado 🫶🏻");
    });
});

console.log(" |\\---/|\n" +
    " | o_o |\n" +
    "  \\_^_/\n" +
    " / 'o' \\\n" +
    "/       \\___     \n" +
    "\\_(_|_)___  \\\n" +
    "         (__/ \n" +
    "                   _          \n" +
    " /|,/._     _  /    /_   _ __ \n" +
    "/  ///_//_//_'/  (_//_|_\\_\\/_/\n" +
    "     _/                       \n");
