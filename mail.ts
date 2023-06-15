export class Mail {
    private _tipoM: string;
    private _direccionM: string;

    constructor(tipo: string, direccion: string) {
        this._tipoM = tipo;
        this._direccionM = direccion;
    }

    public get tipo() {
        return this._tipoM;
    }
    public set tipo(value) {
        this._tipoM = value;
    }

    public get direccion() {
        return this._direccionM;
    }
    public set direccion(value) {
        this.direccion = value;
    }
    printMail (){
        return ("El mail" + " "+ this._tipoM + " " + "es"+ " " + this._direccionM)
        }
}