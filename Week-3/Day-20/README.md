## Day 20: IIFE

### Right/Wrong Way

* If it was done without the parenthesis then it would never do anything.

* The Javascript Parser would view it as a declaration instead of being an expression.

```javascript
//Wrong way
function (){

    var score = Math.random() * 10;
    console.log(score >= 5);
}();
```


* The IIFE provides data security and protection. Provides the ability to create a new scope that is hidden from the outside scope. Where you can safely put variables.

```javascript
//Normal - Correct Way
(function (){

    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();
```

* Can only provide a function once.


--- 
### Parameter

* This is a IIFE with a paramter
```javascript
//With Parameter
(function (goodluck){

    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
}) (5);
```
