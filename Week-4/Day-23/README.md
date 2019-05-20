## Day 23: Coding Challenge 7

* The code in its entirety, is surrounded by an IIFE. This is to make sure that whatever variable names and logic inside the function don't mess or interfere with any of a developers other code.

```javascript

(function (){

    //Code goes here

}) (paramter);

```



* Next, we have the function consrtuctor

```javascript

//Function Constructor
    function interviewQuestion(question, answers, correctAnswer) {

        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
```


 
* Prototypes are used in this case in order to assign a function to a function constructor without actually being attached to it, but instead it is just a copy and will be called during the prototype chain.
  
```javascript
    interviewQuestion.prototype.showQuestion = function(){
        console.log(this.question);

        for(var i=0;i<this.answers.length;i++){
            console.log(i + ": " + this.answers[i]);


        }

    }

    interviewQuestion.prototype.checkAnswer = function(answer){

        if(answer === this.correctAnswer){
            console.log("Correct!!")
        }
        else{
            console.log("Wrong!!")
        }

    }
    
```




