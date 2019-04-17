/********************************
            Arrays
 ********************************/


//Initialize new array
var names = ['John','Mark','Jane'];         //More widely used
var years = new Array(1990,1969,1948);



console.log(names[0]);
console.log(names.length);




//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';               //Adds Mary to the end of the array



//Different data types
var john = ['John ','Smith', 1990 , 'teacher', false];



//Array Method
john.push('blue');                //Adds element to the end
john.unshift('Mr.');       //Adds elements to the beginning
john.pop();                       //Removes element from the end
john.shift();                     //Removes the first element in the array

john.indexOf(1990);               //Shows the position of the element in the array. If not present then it will return '-1';



