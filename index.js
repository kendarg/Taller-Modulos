import createPrompt from "prompt-sync";
const prompt = createPrompt({ sigint: true });

import Usuarios from "./usuario.js";
import Producto from "./productos.js";
import Carrito from "./carrito.js";
import formatearPrecoi,{ esEmailValido } from "./utilidades.js";
import carrito from "./carrito.js";

function iniciar(){
    console.log(`--------Registro--------\nIngresa tu nombre`);
    const nombre = prompt(">");
    console.log(`Ingresa tu Correo:`);
    let email = prompt(">");

    while (!esEmailValido(email)) {
        console.log(`El correo debe de tener un "@"`); //*Busacar como solucionar este error me sale un bucle casi que infinito si falla 
        email = prompt(`Intente de nuevo\n> `);
    }
    let esVip;
    const vipPregunta = Number(prompt(`Eres un usuario VIP 1) Si 2) No\n> `))
    switch (vipPregunta) {
        case 1:
            esVip = true;
            break;
        case 2:
            esVip = false;
            break;
        default:
            return`Opcion No Valida se dejara como Usuario NO VIP`;
            esVip = false;  
            break;
    }
    const usu1 = new Usuarios(nombre,email,esVip);
    usu1.saludo();
    const carro = new carrito(usu1);
    const televisor = new Producto("LG 4k / 80 Pg",10000000,"Electronico",5);
    const audifonos = new Producto("Audifonos Xiaomi Bluetooh", 150000,"Electronico",0);
    const camisa = new Producto("Camisa Talla m", 350000,"Ropa",10);
    const pantalon = new Producto("Pantalon Talla 32", 250000,"Ropa", 10);
    console.log(carro.agregar(televisor,2));
    console.log(carro.agregar(audifonos,2));
    console.log(carro.agregar(camisa,7));
    console.log(carro.agregar(pantalon,5));
    console.log(carro.recibo());

}
iniciar();