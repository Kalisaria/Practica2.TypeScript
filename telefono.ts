export class Telefono {
    private _tipoTelf: string;
    private _numTelf: number

    constructor(tipo: string, numero: number) {
        this._tipoTelf = tipo;
        this._numTelf = numero;
    }
    public gettipo() {
        return this._tipoTelf;
    }
    public settipoTelf(value) {
        this._tipoTelf = value;
    }

    public getnumero(): number {
        return this._numTelf;
    }
    public setnumero(value: number) {
        this._numTelf = value;
    }

    public printTelf (){
        return ("El telefono" + " "+ this._tipoTelf+" "+"es"+ " " + this._numTelf)
         }
}