# Day 21
## Closures

* An inner function has always access to the variables and parameters of its outer 
function, even after the outer function has returned.
```javascript
function retirement (retirementAge){
    var a = ' years left until retirement.';

    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge-age) + a);
    }

}

var retirementUS = retirement(66);
retirementUS(1990);

//or

retirement(66)(1990);

```





