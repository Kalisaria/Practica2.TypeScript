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
    
    public get calle(): string {
        return this._calle;
    }
    public set calle(value: string) {
        this._calle = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    public get piso(): number {
        return this._piso;
    }
    public set piso(value: number) {
        this._piso = value;
    }

    public get letra(): string {
        return this._letra;
    }
    public set letra(value: string) {
        this._letra = value;
    }
    
    public get CP(): number {
       return this._CP;
    }
    public set CP(value: number){
        this._CP = value;
    }

    public get poblacion(): string {
        return this._poblacion;
    }
    public set poblacion(value: string) {
        this._poblacion = value;
    }

    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia = value;
    }

    printDireccion (){
        return "Vive en" + " " + this._calle +  " "+ this._numero + ", Piso " + this._piso + ", " + this._letra + "," +  this._poblacion + "," + this._provincia + ", CP " + this._CP
    }

}