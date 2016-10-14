var Person = function (name) {
    this.name = name;
    console.log('Creant un objecte');
}

Person.prototype.sayHello = function() {
    console.log("Hello " + this.name);
}

console.log(Person);

var personeta = new Person("Sylver");

console.log(personeta.sayHello());