## Day 18 - Passing functions as a parameter

### Tips to know about functions

* A function is an instance of the Object type

* A function behaves like any other object

* We can store functions in a variable

* We can pass a function as an argument to another function 
```javascript
myFunction (param1, funcName){          //No " () " is needed 
    //Code
}

```
* We can return a function from a function


---

### Pasing functions

* Makes code more modular

* Allows other developers to easily understand your code

```javascript
var  years = [1990, 1965, 1937 , 2005, 1998];



function aryCalc(ary, fn){
    var aryRes = [];

    for(var x=0;x<ary.length;x++){
        aryRes.push(fn(ary[x]));
    }

    return aryRes;
}





//Callback function example
var ages = aryCalc(years,calculateAge);

console.log(ages);

```
