/*const cars = ["bmw","audi","jeep"];
cars[1] = "mercedes"
console.log(cars)

 const giochi = ["pallone","volley","basket"];
 giochi[0] = "cavallo";
 console.log(giochi)

 function myfunction (p1,p2){
    return p1 * p2 ;
 }
 let result= myfunction(5,2);
 console.log (result);

 const person = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };
 console.log 
("The last name is " + person.lastName);
let text = "ciao sono mirko"
console.log(text.length)

let x = "mario"
let y = "franco"
console.log (x===y)

 //onvertire in maiuscolo con touppercase//
 function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toUpperCase();
  }

    //ciclo for//
 let data = ["milano","lecce","torino","roma"]
 for (i=0; i<data.length ; i++){
    console.log(data[i])
 }

    //trovare il primo numero maggiore di 18 - metodo find//
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
return value > 18;
  }
console.log(first)

//metodo per ordinare in ordine alfabetico//
const fruits = [ "banana", "mango", "arancia", "mela"];
fruits.sort();
console.log (fruits);*/

//setter e getter//
class Utente {
   #job;

   constructor(name, age, job){
       this.name = name;
       this.age = age;
       this.#job = job;
   }

   #hello(){
       console.log('ciao a tutti')
   }

   useHello(){
       this.#hello()
   }

   descrizione(){
       return l'utente ${this.name} ha ${this.age} anni ed è ${this.#job}
   }

   get getJob(){
       console.log(this.#job)
   }

   set setJob(newJob){
       this.#job = newJob
   }
}

const mario = new Utente('Mario', 33, 'Sviluppatore')

console.log(mario.descrizione())

class Admin extends Utente {
   constructor(name, age, job, role){
       super(name, age, job);
       this.role = role;
   }

   descrizione(){
       console.log(super.descrizione() +  il suo ruolo è ${this.role})
   }
}

const firstAdmin = new Admin('Pippo', 20, 'Astronauta', 'admin');

firstAdmin.descrizione()
NOVITÀ


Invia un messaggio in @Manfredi Marrone (Tutor)
