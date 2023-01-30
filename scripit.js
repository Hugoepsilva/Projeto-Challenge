const textarea = document.querySelector(".caixa-texto1");
const mensagem = document.querySelector(".caixa-texto2");

function btnEncriptar() {
  const textoEncriptado = encriptar(textarea.value);
  mensagem.value = textoEncriptado;
  textarea.value = "";
}

function encriptar(stringEncripitar) {
  let matrixCodigo = [
    ["e", "enter"],
    ["i", "ines"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufal"],
  ];

  stringEncripitar = stringEncripitar.toLowerCase();

  for (let i = 0; i < matrixCodigo.length; i++) {
    if (stringEncripitar.includes(matrixCodigo[i][0])) {
      stringEncripitar = stringEncripitar.replaceAll(
        matrixCodigo[i][0],
        matrixCodigo[i],
        [1]
      );
    }
  }
  return stringEncripitar;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textarea.value);
  mensagem.value = textoEncriptado;
  textarea.value = "";
}

function desencriptar(stringDesencriptar) {
  let matrixCodigo = [
    ["e", "enter"],
    ["i", "ines"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufal"],
  ];

  stringDesencriptar = stringDesencriptar.toLowerCase();

  for (let i = 0; i < matrixCodigo.length; i++) {
    if (stringDesencriptar.includes(matrixCodigo[i][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(
        matrixCodigo[i][1],
        matrixCodigo[i],
        [0]
      );
    }
  }
  return stringDesencriptar;
}

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
