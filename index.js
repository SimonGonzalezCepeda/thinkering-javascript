// OOP : Object Oriented Programing

//Object Literal Notation

var Person = {
    name : "Sylver",

    constructor: function(){

    },
    hello: function(){
        return 'Hi '+ this.name + '!';
    },
    bye: function(){
        return 'Bye ' + this.name + '!';
    }
};

console.log(Person.name);
console.log(Person.hello());