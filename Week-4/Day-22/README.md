## Day 22: Bind, Call, and Apply


**Object setup:**
```javascript
var john = {
    name: 'John',
    age: 16,
    job:'teacher',
    presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log("Good " + timeOfDay + " Ladies and Gentlemen! I \'m " + this.name + ". I\'m a " + this.job + " and I\'m " + this.age + " years old." );
        }

        if(style === 'friendly'){
            console.log("Hey what\'s up I \'m " + this.name + ". I\'m a " + this.job + " and I\'m " + this.age + " years old. Have a nice" + timeOfDay);
        }
    }
};



var emily = {

    name: 'Emily',
    age: 35,
    job: 'designer'

};

```

**Normal Execution:**
```javascript
john.presentation('formal','morning');
```

**Bind, Call, and Apply:**
```javascript
//Regular
john.fucntionName.call(objectName,paramter1,paramter2,etc);
john.fucntionName.apply(objectName,[paramter1,paramter2,etc]);
var name = john.fucntionName.bind(objectName,paramter1,paramter2,etc);

//Default
john.fucntionName.call(this,paramter1,paramter2,etc);
john.fucntionName.apply(this,[paramter1,paramter2,etc]);
var name = john.fucntionName.bind(this,paramter1,paramter2,etc);
```

**Examples:**
```javascript
/* 
  Call
  This is called method borrowing
*/
john.presentation.call(emily,'friendly','afternoon');

/*
  Apply
*/
john.presentation.apply(emily, ['friendly','afternoon']);



/*
  Bind              
  Does not store function, but instead creates a copy of it
  Bind returns a function
  Also called carrying, you are allowed to preset parameters
*/
var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('afternoon');
johnFriendly('night');




```


