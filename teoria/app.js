let numero1 = document.getElementById('n1');
let numero2 = document.getElementById('n2');
let btnCalcular = document.getElementById('btnCalcular');
let respuesta = document.getElementById('respuesta');

btnCalcular.addEventListener('click', calcular);


function calcular() {
    const op1 = parseFloat(numero1.value);
    const op2 = parseFloat(numero2.value);
    let res = op1 + op2;

    respuesta.innerText = `La suma es ${res}`
}
