export default class Usuarios{
    constructor(nombre,email,esVip){
        this.nombre = nombre;
        this.email = email;
        this.esVip = esVip;
    }
    saludo(){
      console.log(`Hola bien benido usuario: ${this.nombre}👤\nCorreo de Ingreso: ${this.email}✉️\nNivel de Cliente: ${this.esVip}💎\n------------`)}
}
const p = new Usuarios("p","p","vip");
// p.saludo();
