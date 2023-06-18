import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _DNI:string;
    private _cumpleanos: string;
    private _colorFav: string;
    private _sexo: string;
    private _direcciones: Direccion;
    private _mails: Mail;
    private _telefonos: Telefono;
    private _notas: string;

    constructor( Nombre: string,  Apellidos: string, Edad: number, DNI:string, Cumpleanos: string, ColorFavorito: string, Sexo: string, Direcciones: Direccion, Mails: Mail,  Telefonos: Telefono, Notas: string) {

        this._nombre= Nombre;
        this._apellidos= Apellidos;
        this._edad= Edad;
        this._DNI= DNI;
        this._cumpleanos= Cumpleanos;
        this._colorFav= ColorFavorito;
        this._sexo= Sexo;
        this._direcciones=  Direcciones;
        this._mails= Mails;
        this._telefonos= Telefonos;
        this._notas= Notas;      
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    
    public get cumpleanos(): string {
        return this._cumpleanos;
    }
    public set cumpleanos(value: string) {
        this._cumpleanos = value;
    }

    public get colorFav(): string {
        return this._colorFav;
    }
    public set colorFav(value: string) {
        this._colorFav = value;
    }

    public get DNI(): string {
        return this._DNI;
    }
    public set DNI(value: string) {
        this._DNI = value;
    }

    public get Sexo(): string {
        return this._sexo
    }
    public set Sexo (value:string) {
        this._sexo= value;
    }

    public get Direcciones(): Direccion {
        return this._direcciones
    }
    public set Direcciones (value:Direccion) {
        this._direcciones= value;
    }

    public get Notas(): string {
        return this._notas
    }
    public set Notas (value:string) {
        this._notas= value;
    }

    public get Mails(): Mail {
        return this._mails
    }
    public set Mails (value: Mail) {
        this._mails= value;
    }

    
    public get Telefonos(): Telefono {
        return this._telefonos
    }
    public set Telefonos (value: Telefono) {
        this._telefonos= value
    }

    public printPersonas () {
        return ("Nombre:" + this._nombre + "\n" + "Apellidos:" + this._apellidos + "\n" + "Fecha de nacimiento:" + this._cumpleanos + "\n" + "Edad:" + this._edad + "\n" + "DNI:" + this._DNI + "\n" + "Sexo:" + this._sexo + "\n" + "Direccion:" + this._direcciones.printDireccion  + "\n" + "Mail:" + this ._mails.printMail + "\n" + "Telefono:" + this._telefonos.printTelf+ "\n" + "Su color favorito es:" + this ._colorFav + "\n" + "Notas:" + this ._notas)
    }

}