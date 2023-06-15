export class Telefono {
    private _tipoTelf: string;
    private _numTelf: number

    constructor(tipo: string, numero: number) {
        this._tipoTelf = tipo;
        this._numTelf = numero;
    }
    public get tipo() {
        return this._tipoTelf;
    }
    public set tipoTelf(value) {
        this._tipoTelf = value;
    }

    public get numero(): number {
        return this._numTelf;
    }
    public set numero(value: number) {
        this._numTelf = value;
    }

    printTelf (){
        return ("El telefono" + " "+ this._tipoTelf+" "+"es"+ " " + this._numTelf)
         }
}