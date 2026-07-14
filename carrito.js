import formatearPrecoi,{calcularDescuento} from "./utilidades.js";
export default class carrito{
    items =[];
    agregar(producto,cantidad){
        if(producto.hayStock(cantidad) === true){
            this.items.push({producto, cantidad});
            producto.stock -= cantidad;
            return `Item gregado al carrito🛒 con Exito`
        }else{
            return `Sin Stock`;
        }
    }

    subtotal(){
        let totalSinDescuento = 0;
        for (let item of this.items) {
          totalSinDescuento += item.producto.precio * item.precio;
        }
        return totalSinDescuento;
    }

    total(esVip){
        const sub = this.subtotal();
        if(esVip === true){
            return calcularDescuento(sub,10);
        }else{
            return sub;
        }
    }
    recibo(){
        let salu = `${this.usuario}\nEstos son los detalles de tu compra:\n------------`;
        for(const item of this.items){
            const nuevoValor = formatearPrecoi(item.producto.precio * item.cantidad);
        }
        const valor = formatearPrecoi(this.total());
        salu +=`Total: ${valor}`;
        
        return salu;
    }
    
        
}
