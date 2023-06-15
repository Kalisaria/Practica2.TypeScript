export class Mail {
    constructor(tipo, direccion) {
        this._tipoM = tipo;
        this._direccionM = direccion;
    }
    get tipo() {
        return this._tipoM;
    }
    set tipo(value) {
        this._tipoM = value;
    }
    get direccion() {
        return this._direccionM;
    }
    set direccion(value) {
        this.direccion = value;
    }
    printMail() {
        return ("El mail" + " " + this._tipoM + " " + "es" + " " + this._direccionM);
    }
}
