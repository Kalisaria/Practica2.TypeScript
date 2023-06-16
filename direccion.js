export class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._CP = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    getcalle() {
        return this._calle;
    }
    setcalle(value) {
        this._calle = value;
    }
    getnumero() {
        return this._numero;
    }
    setnumero(value) {
        this._numero = value;
    }
    getpiso() {
        return this._piso;
    }
    setpiso(value) {
        this._piso = value;
    }
    getletra() {
        return this._letra;
    }
    setletra(value) {
        this._letra = value;
    }
    getCP() {
        return this._CP;
    }
    setCP(value) {
        this._CP = value;
    }
    getpoblacion() {
        return this._poblacion;
    }
    setpoblacion(value) {
        this._poblacion = value;
    }
    getprovincia() {
        return this._provincia;
    }
    setprovincia(value) {
        this._provincia = value;
    }
    printDireccion() {
        return "Vive en" + " " + this._calle + " " + this._numero + ", Piso " + this._piso + ", " + this._letra + "," + this._poblacion + "," + this._provincia + ", CP " + this._CP;
    }
}
