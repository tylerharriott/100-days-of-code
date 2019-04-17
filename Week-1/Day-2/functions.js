/***************************************
                Functions
 **************************************/



//Simple Function

function calculateAge(birthYear){

    var currentYear = 2019;

    return currentYear - birthYear;

}

var ageJohn = calculateAge(1997);
var ageMike = calculateAge(1984);
var ageJane = calculateAge(1969);
console.log(ageJohn,ageMike,ageJane);


/////////////////////////////////////////////////////////////////////////

//Complex Function

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

yearsUntilRetirement(1974,'John');
yearsUntilRetirement(1990,'Mike');
yearsUntilRetirement(1940,'Jane');
