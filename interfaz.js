var alumno = /** @class */ (function () {
function alumno(a, b, c) {
    this.nombre = a;
this.edad = b;
this.colegio = c;
}
alumno.prototype.saludo = function () {
console.log("Hola Mundo, soy " + this.nombre);
};
return alumno;
}());
var alumno1 = new alumno("Juan", 13, "CP Marcelino Domingo");
alumno1.saludo();