export class Persona {
    constructor(Nombre, Apellidos, Edad, DNI, Cumpleanos, ColorFavorito, Sexo, Direcciones, Mails, Telefonos, Notas) {
        this._nombre = Nombre;
        this._apellidos = Apellidos;
        this._edad = Edad;
        this._DNI = DNI;
        this._cumpleanos = Cumpleanos;
        this._colorFav = ColorFavorito;
        this._sexo = Sexo;
        this._direcciones = Direcciones;
        this._mails = Mails;
        this._telefonos = Telefonos;
        this._notas = Notas;
    }
    getnombre() {
        return this._nombre;
    }
    setnombre(value) {
        this._nombre = value;
    }
    getapellidos() {
        return this._apellidos;
    }
    setapellidos(value) {
        this._apellidos = value;
    }
    getedad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get cumpleanos() {
        return this._cumpleanos;
    }
    set cumpleanos(value) {
        this._cumpleanos = value;
    }
    get colorFav() {
        return this._colorFav;
    }
    set colorFav(value) {
        this._colorFav = value;
    }
    get DNI() {
        return this._DNI;
    }
    setDNI(value) {
        this._DNI = value;
    }
    get Sexo() {
        return this._sexo;
    }
    setSexo(value) {
        this._sexo = value;
    }
    getDirecciones() {
        return this._direcciones;
    }
    setDirecciones(value) {
        this._direcciones = value;
    }
    getNotas() {
        return this._notas;
    }
    setNotas(value) {
        this._notas = value;
    }
    getMails() {
        return this._mails;
    }
    setMails(value) {
        this._mails = value;
    }
    getTelefonos() {
        return this._telefonos;
    }
    setTelefonos(value) {
        this._telefonos = value;
    }
    printPersonas() {
        return ("Nombre:" + this._nombre + "\n" + "Apellidos:" + this._apellidos + "\n" + "Fecha de nacimiento:" + this._cumpleanos + "\n" + "Edad:" + this._edad + "\n" + "DNI:" + this._DNI + "\n" + "Sexo:" + this._sexo + "\n" + "Direccion:" + this._direcciones.printDireccion + "\n" + "Mail:" + this._mails.printMail + "\n" + "Telefono:" + this._telefonos.printTelf + "\n" + "Su color favorito es:" + this._colorFav + "\n" + "Notas:" + this._notas);
    }
}
