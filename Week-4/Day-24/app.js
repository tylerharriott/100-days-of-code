/***************************************
        Model Controller
 ***************************************/
var budgetController = (function (){


     var x = 23;

         var add = function (a){

           return x + a ;

         }

         return {
             publicTest: function(b){
                 return add(b);
             }
         }


 }) ();







/***************************************
            View Controller
 ***************************************/
var UIController = (function (){

    //Some code for later

}) ();







/***************************************
                Controller
 ***************************************/
var controller = (function(budgetCtrl,UICtrl){


    var z =budgetCtrl.publicTest(5);
        return {
            anotherPublicMethod: function (){
                console.log(z);
            }
}


}) (budgetController,UIController  );
