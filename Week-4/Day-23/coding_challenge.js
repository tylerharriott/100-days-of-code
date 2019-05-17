/************************************
        Coding Challenge 7
 ***********************************/


//IIFE
(function (){


//Function Constructor
    function interviewQuestion(question, answers, correctAnswer) {

        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;

    }


    /*
    Prototype is used in this case in order to assign this function to any interviewQuestion object
    This method is not actually attached to the object, however it is in their prototype chain.
     */
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



    var question1 = new interviewQuestion("What is my favorite Marvel movie?",['Captain America', 'Black Panther', 'Guardians of the Galaxy'],2);

    var question2 = new interviewQuestion("How many toes do I have?",[10,7,14],0);

    var question3 = new interviewQuestion("Who is in buried in Grant's tomb??",['Robert','Grant','Jacob'],1);



    var ary = [question1,question2,question3];


//Gets random number from 0 - 3
    var questionNumber = Math.floor(Math.random()*3);

    ary[questionNumber].showQuestion();


//parseInt() --> Turns string into Integer
    var userResponse = parseInt(prompt("Please select the correct answer"));


    ary[questionNumber].checkAnswer(userResponse);






}) ();



