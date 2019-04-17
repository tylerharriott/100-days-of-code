/****************************
            Objects
 ****************************/


//Objects -> Key and Value 
//Object Literal Syntax
var john = {
    firstName: 'John',
    lastName: 'Smith',                      //An object can contain any type of data
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false


};

console.log(john.firstName);

//To read the value of the keys, just have to use "." and then the key name.

console.log(john['lastName']);



//Mutate
john.job = 'designer';
john['isMarried'] = true;       //The



//new Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = '1969';
jane['lastName'] = 'Smith'
