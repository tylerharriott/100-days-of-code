# Day 16: Advance Objects and Functions

## Object.create

* This is another way to create an object in Javascript.

* The **function constructor**,is still the best practice though.

```javascript

//Object.create
var personProto = {

    calculateAge: function (){
        console.log(2019 - this.yearOfBirth);
    }

};


// Creates new Object
var john = Object.create(personProto);



//Assigns all the variables to John object
john.name = 'john';
john.yearOfBirth = 1990;
john.teacher = 'teacher';


// Use case of making another Object of personProto
var jane = Object.create(personProto,{

    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}

});
```

---

## Primitive vs. Objects

* Javascript primitives actually save a copy of the variable in memory.

```javascript
// Primitives
var a = 23;
var b = a;

a = 46;
console.log(a,b);
```


* Javascript objects only save a refrence to the spot in memory. 

* So when console.log(some_object) --> Returns (Spot in Memory)

```javascript
//Objects
var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);
```


