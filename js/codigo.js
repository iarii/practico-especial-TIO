"use strict";

let btn = document.querySelector("#btn-enviar");
btn.addEventListener("click",agregar);
let select= document.querySelector("#combustible");
let input= document.querySelector("#litros");
let lista = document.querySelector("#listado");

let suma = document.querySelector("#sumalitros");
suma.addEventListener('change', () => {sumar_litros});
let total = document.querySelector("#total_litros");

function agregar(e) {
    e.preventDefault();
    
    let tipoDeCombustible = select.value;
    let litros = input.value;
    let valor = 0;
    switch (tipoDeCombustible) {
        case 'diesel':
            valor = 95;
            break;
        case 'super':
            valor = 100;
            break;
        case 'premium':
            valor = 110;
            break;
        default:
            break;
    }
    cargarLista(tipoDeCombustible,litros,valor)
}

function cargarLista(tipo,litros,valor){
   lista.innerHTML += `<li>litros = ${litros} tipo = ${tipo} total = ${litros*valor}</li>`
}

function sumar_litros () {
    if (agregar > 0 ) {
        total.innerHTML += `Total de litros: ${tipoDeCombustible + litros}`;
    }
    console.log ("Ejecuta funcion");
}
    