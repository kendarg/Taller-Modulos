export default function formatearPrecoi(precio){
    return precio.totalString("es-CO",{
        style: "currency",
        currency: "COP",
        minimumFactionDigits: 0
    });
}
function esEmailValido(email){
if(email.includes("@")){
    return true;
}else{
    return false;
}
}
function calcularDescuento(precio,porcentaje){
   return precio = precio * 1.19;
}