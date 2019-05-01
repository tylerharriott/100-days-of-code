# Javascript Objects

## OOP

* Objects interacting with one anothe through methods nd properties.

* Used to store data, structure applications into modules and keeping code clean.


Basic Javascript constructor:
```javascript
// Function constructors -> best practice is to start it off Upper Case
var Person = function (name,yearOfBirth,job){

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2019 - this.yearOfBirth);
    };
    
};
```
---
## Inheritance

* Inheritance in Javascript is made possible, through the **Prototype** Property.

* The prototype property of an object is where methods and properties go in which other objects can inherit.

```javascript

Person.prototype.calculateAge  =
    function(){
    console.log(2019 - this.yearOfBirth);
};
```

* Adding a method to **Prototype** is another way to allow objects to inherit.

---
## Protoype Chain

* Makes all inheritance possible

* When a certain method is called, the search starts in the object itself, and if it cannot be found, the search moves on to the objects prototype. (Parent "Classes")
