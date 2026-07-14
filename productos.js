export default class Producto{
    constructor(nombre,precio,categoria,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
    hayStock(){
        if(this.stock <= 0){
            return`El producto no se tiene en el momento`,false,"\n------------------";
        }else{
            return `El producto si esta disponible\nLa cantidad disponible es de: ${this.stock}`,true,"\n----------------" ;

        }
        }

    ficha(){
        console.log(`Producto: ${this.nombre}\nPrecio: ${this.precio} 💵\nCategoria: ${this.categoria}\nStock: ${this.stock}\n-------------`);

    }

}
const p = new Producto("p",15000,"p",10);
const w = new Producto("w",15000,"w",0);
// p.ficha();
// w.ficha();
// p.hayStock();
// w.hayStock();
