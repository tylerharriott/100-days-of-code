/********************************************
    Function Statements and Expressions
 *******************************************/



//Function declaration

    function whatDoYouDo(job,firstName){
        
        console.log(job,firstName);
        
    }

//////////////////////////////////////////////////////////////////////

//Function Expression

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

    //Statements perform actions, they do not immediately provide a result.  ex: (If else/ while loop /function declaration)

    //Expressions, anything that produces a result.         ex: (return)
