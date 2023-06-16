import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

let agenda: Array<Persona> = [];

function Agenda(): Array<Persona> {

  const person1: Persona = new Persona(
    'Dana Annette',
    'Meyer',
    24,
    'x3791773Q',
    '02/06/1999',
    'morado',
    'Mujer',
    new Direccion('Calle ramos',18,1,"A",45314,'Ciruelos', 'Toledo'),
    new Mail('Personal', 'danameyergame@gmail.com'),
    new Telefono('Personal', 680495883),
    'Nada que anotar'
  );

  const person2: Persona = new Persona(
    'Mario',
    'Mario',
    37,
    '50473600X',
    '13/09/1985',
    'Blanco',
    'Hombre',
    new Direccion('Calle tokio', 15, 1, 'S', 16700, 'Murcia','Murcia'),
    new Mail('Personal', 'mariobrospro@gmail.com'),
    new Telefono('Personal', 926576982),
    'El teléfono es de casa'
  );

  const person3: Persona = new Persona(
    'Peach',
    'Toad Humana',
    32,
    '45223870E',
    '13/2/1990',
    'Rosa',
    'Mujer',
    new Direccion('Castillo toad', 13, 1, 'A', 28004, 'Madrid', 'Madrid'),
    new Mail('Personal', 'peachbest@gmail.com'),
    new Telefono('Personal', 641345648),
    'Es una princesa letal'
  );

  agenda.push(person1);
  agenda.push(person2);
  agenda.push(person3);
  
  changeData(agenda)
  return agenda
  
}


function changeData(agenda): Array<Persona>{

  let newAgenda: Array<Persona> = agenda;
  const dni: string = '45110653Z'
  const newDireccion: Direccion = new Direccion(
    'Calle Perseo', 20, 2, 'C', 28007, 'Madrid', 'Madrid'
  )
  const newTelefono : Telefono = new Telefono(
    'Personal', 666555444
  )
  const newMail: Mail = new Mail(
    'Trabajo', 'mariamateo@empresa.com'
  )
  newAgenda.map(
    person => {
      if(person.get dni=== dni){
        Persona.set Direccion(new Direccion);
        Persona.set Mail(new Mail);
        Persona.set Telefono(new Telefono);
      }
    }
  )
  return agenda = newAgenda
}

function showAgenda(agenda: Array<Persona>): void {
  Agenda()
  agenda.forEach(
    person => { console.log(person.printPersonas())}
  )
}

showAgenda(agenda)