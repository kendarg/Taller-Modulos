import productos, {producto} from './producto.js';
import usurio,  {usuario} from './usuario.js';


export default function formatearPrecoi(precio){
    return precio.totalString("es-CO",{
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    });
}
export function esEmailValido(email){
if(email.includes("@")){
    return true;
}else{
    return false;
}
}
export function calcularDescuento(precio,porcentaje){
   const descuento = precio * (porcentaje / 100);
    return precio - descuento;
}