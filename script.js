const input = document.getElementById("encript-input");
let resEncript = document.getElementById("getEncript");
let DresEncript = document.getElementById("getEncript");
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

function desencriptt(mensajeDes) {
    const conversionDes = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u",
        " ": " ",
    };
   let messageDesEncriptCheck = "";
   for (let i = 0; i < mensajeDes.length; i++) {
       const desLetter = mensajeDes[i];
       const desLetterEn = conversionDes[desLetter] || desLetter;
       messageDesEncriptCheck += desLetterEn;
   }
   return messageDesEncriptCheck;
}


const encriptarBtn = document.getElementById("encriptar-btn"); // Obtener el botón
encriptarBtn.addEventListener("click", () => {
    const textToEncript = input.value;
    const encriptRes = encriptt(textToEncript);
    resEncript.value = encriptRes;
});

const desencriptarBtn = document.getElementById("descriptar-btn");
desencriptarBtn.addEventListener("click", () => {
    const textToEncriptd = input.value;
    const encriptRes = desencriptt(textToEncriptd);
    DresEncript.value = encriptRes;
})





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
    "     _/                       \ns")
