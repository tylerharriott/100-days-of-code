# Day 2: Functions, Arrays, and Objects
---
## Functions

Simple function declaration
```javascript
//Defining a function
function yearsUntilRetirement(year, firstName){

    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0){
        console.log(firstName + ' retires in:  ' + retirement + ' years!');
    }
    else{
        console.log(firstName + ' is already retired');
    }



}
```

Statements perform actions,they do not immediately provide a result. Forexample, a function that just changes a string or checks a value.

Expressions, are anything that produce a resut. For example, a function that returns a value.

```javascript
//Function expression
var whatDoYouDo = function(job,firstName) {

            switch(job){

                case 'teacher':
                    return firstName + ' teaches kids how to code';

                case 'driver':
                    return  firstName + ' drives a cab in America';


                case 'designer':
                    return firstName + ' designs beautiful websites';

                default:
                    return firstName + ' does something else';

            }

    }

    console.log(whatDoYouDo('teacher','John'));

```

---
## Arrays

Ways to Initalize an array:

```javascript
var names = ['John','Mark','Jane'];           //More widely used
```

```javascript
var years = new Array(1990,1969,1948);        //Less commonly used
```

Methods available to mutate Arrays
```javascript

//Array Methods
john.push('blue');                //Adds element to the end
john.unshift('Mr.');              //Adds elements to the beginning
john.pop();                       //Removes element from the end
john.shift();                     //Removes the first element in the array

john.indexOf(1990);               //Shows the position of the element in the array. If not present then it will return '-1';

```

---
## Objects

Initialize a Object:

```javascript

var john = {
    firstName: 'John',
    lastName: 'Smith',                      //An object can contain any type of data
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false


};
```

You can also mutate and change data in Objects:
```javascript
//Mutate
john.job = 'designer';
john['isMarried'] = true;       
```

Objects can also contain functions:
```javascript
var john = {
    firstName: 'John',
    lastName: 'Smith',                      //An object can contain any type of data
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){                    //An object can contain functions
        return 2019 - this.birthYear;
    }

};
```

