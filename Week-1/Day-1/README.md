## Day 1: Beginning Javascript

### If/Else statement

Basic if statement to evluate if the variable isMarried is true or flase. 

```javascript
var isMarried = true;

if(isMarried){
    console.log(" He is married!");
}
else{
    console.log("Not married , but hopefully will marry soon!");
}
```
---
### Ternary operator
Ternary operators are used for when less complex if conditions will be used.
It helps to consolidate an if statment into just one line.

```javascript

condition ? true : false

```

```javascript
var firstName = 'John';
var age = 16;

//Ternary Operator
age >= 18 ? console.log(firstName + " drinks beer!") : console.log(firstName + " drinks juice!");


//Simplified Ternary Operator
var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);
```

---
### Truthy/Falsly

This is the output if you face any of these results in the condition parameter.

```javascript
//falsy values: undefined, null , 0 , '', NaN

//truthy values: NOT falsy values
```
