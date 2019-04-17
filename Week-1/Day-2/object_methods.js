/**************************************
        Object and Methods
 **************************************/


//Only objects have methods

    
//Object
//Object Literal Syntax
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


//Methods
var age = john.calcAge(1960);
john.age = age;



