export class Direccion{
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _CP: number;
    private _poblacion: string;
    private _provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._CP = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    
    public getcalle(): string {
        return this._calle;
    }
    public setcalle(value: string) {
        this._calle = value;
    }

    public getnumero(): number {
        return this._numero;
    }
    public setnumero(value: number) {
        this._numero = value;
    }

    public getpiso(): number {
        return this._piso;
    }
    public setpiso(value: number) {
        this._piso = value;
    }

    public getletra(): string {
        return this._letra;
    }
    public setletra(value: string) {
        this._letra = value;
    }
    
    public getCP(): number {
       return this._CP;
    }
    public setCP(value: number){
        this._CP = value;
    }

    public getpoblacion(): string {
        return this._poblacion;
    }
    public setpoblacion(value: string) {
        this._poblacion = value;
    }

    public getprovincia(): string {
        return this._provincia;
    }
    public setprovincia(value: string) {
        this._provincia = value;
    }

    printDireccion (){
        return "Vive en" + " " + this._calle +  " "+ this._numero + ", Piso " + this._piso + ", " + this._letra + "," +  this._poblacion + "," + this._provincia + ", CP " + this._CP
    }

}