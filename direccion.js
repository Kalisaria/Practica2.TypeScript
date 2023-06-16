export class direcion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._CP = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    set calle(value) {
        this._calle = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get piso() {
        return this._piso;
    }
    set piso(value) {
        this._piso = value;
    }
    get letra() {
        return this._letra;
    }
    set letra(value) {
        this._letra = value;
    }
    get CP() {
        return this._CP;
    }
    set CP(value) {
        this._CP = value;
    }
    get poblacion() {
        return this._poblacion;
    }
    set poblacion(value) {
        this._poblacion = value;
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(value) {
        this._provincia = value;
    }
    printDireccion() {
        return "Vive en" + " " + this._calle + " " + this._numero + ", Piso " + this._piso + ", " + this._letra + "," + this._poblacion + "," + this._provincia + ", CP " + this._CP;
    }
}
