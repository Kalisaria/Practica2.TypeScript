interface ficha {
    nombre: string;
    edad: number;
    saludo();
    }
    class alumno implements ficha{
    nombre: string;
    edad: number;
    colegio: string;
    constructor (a:string, b:number, c:string) {
    this.nombre=a;
    this.edad=b;
    this.colegio=c;
    }
    saludo() {
    console.log("Hola Mundo, soy " + this.nombre );
    }
    }
    let alumno1= new alumno("Juan" , 13 ,"CP Marcelino Domingo");
    alumno1.saludo();