// OOP : Object Oriented Programing

//Module Pattern

var Person = (function (){
    name : "Sylver";

    return {
        hello: function () {
            return 'Hi ' + this.name + '!';
        },
        bye: function () {
            return 'Bye ' + this.name + '!';
        }
    };
})();

console.log(Person.bye());