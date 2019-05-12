/************************************
                IIFE
 ************************************/


//Normal
(function (){

    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();


//With Parameter
(function (goodluck){

    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
}) (5);



//Less efficient way for data privacy
function(){


}

// If it was done without the parenthesis then it would never do anything.

//The Javascript Parser would view it as a declaration instead of being an expression.

// The IIFE provides data security and protection. Provides the ability to create a new scope that is hidden from the outside scope. Where you can safely put variables.

// Can only provide a function once.
