// Constructor


// Weak practice: Object
// Very repetitive if there is more than one object that needs to be created

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


// Best Practice: Object
// Allows less code, and dynamic copies to be issued
var Person = function (name,yearOfBirth,job){

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2019 - this.yearOfBirth);
    };

};



// Another way to add a method to a object constructor
Person.prototype.calculateAge  =
    function(){
    console.log(2019 - this.yearOfBirth);
};




// Dynamic objects can now be created
var john = new Person('John',1990,'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');



// Function call
john.calculateAge();
jane.calculateAge();
mark.calculateAge();








