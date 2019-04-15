/*********************************************
 Truthy and Falsy values and equality operators
 *********************************************/





//falsy values: undefined, null , 0 , '', NaN

//truthy values: NOT falsy values


//Examples

var height;
height = 23;



if(height || height === 0){
    console.log('Variable is defined');
}
else{
    console.log('The variable is not defined');
}


// A handy way to test if a variable is defined.



///////////////////////////////////////////////////////////////////////////////

//Equality Operator


if(height == '23'){
    console.log('The == operator does type coercion!')
}

// === is a strict equality.   ** Best practice in Javascript
// == is NOT s
