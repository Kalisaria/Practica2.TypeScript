export class Telefono {
    constructor(tipo, numero) {
        this._tipoTelf = tipo;
        this._numTelf = numero;
    }
    get tipo() {
        return this._tipoTelf;
    }
    set tipoTelf(value) {
        this._tipoTelf = value;
    }
    get numero() {
        return this._numTelf;
    }
    set numero(value) {
        this._numTelf = value;
    }
    printTelf() {
        return ("El telefono" + " " + this._tipoTelf + " " + "es" + " " + this._numTelf);
    }
}
