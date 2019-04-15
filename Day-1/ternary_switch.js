/********************************************
   The Ternary Operator and Switch Statement
 ********************************************/

//Ternary operator

var firstName = 'John';
var age = 16;


//Ternary Operator
age >= 18 ? console.log(firstName + " drinks beer!") : console.log(firstName + " drinks juice!");


//Simplified Ternary Operator
var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);




////////////////////////////////////////////////////////////////////////////////////////

//Switch statement

var job = 'teacher';





switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;

    case 'driver':
        console.log(firstName + ' drives Uber in America');
        break;

    case 'designer':
        console.log(firstName + 'designs beautiful websites');
        break;

    default:
        console.log(firstName + ' does something else');
        break;


}





