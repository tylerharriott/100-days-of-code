/************************************
        Loops and Iteration
 ************************************/





var john = ['John','Smith','teacher','blue',1,'rexy'];


//For loops (Continue)
for (var i=0;i < 10;i++){


    if( typeof john[i] !== 'string'){
        console.log("Found a non string!!")
        continue;                       //Continue syntax, goes to the next iteration
    }

    console.log(john[i]);
}


//For loops (Break)
for (var i=0;i < 10;i++){


    if( typeof john[i] !== 'string'){
        console.log("Found a non string!!")
        break;
    }

    console.log(john[i]);
}


/////////////////////////////////////////////////////////////////////////////////



//While loop

var x = 0;
while(x < john.length){

    console.log(x);
    x++;


}
