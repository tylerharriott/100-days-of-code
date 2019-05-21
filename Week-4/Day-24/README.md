## Day 24: Modules


### Coding in Modules
* Important aspect ofany robust application's architecture.

* Keep the units of code for a project both clearly seperated and organized.

* Encapsulate same data into privacy and expose other data publicly.

---
### Planning and Architecture

|           UI Module          |
|:----------------------------:|
| - Get input values           |
| - Update UI                  |
| - Add the new item to the UI |

</br>

|                Data Module                |
|:-----------------------------------------:|
| - Add the new item to our data structure  |
| - Calculate budget                        |



</br>

|      Controller     |
|:-------------------:|
| - Add event handler |

---

### Implementing Modules

```javascript
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
```

```javascript
/***************************************
            View Controller
 ***************************************/
var UIController = (function (){

    //Some code for later

}) ();

```


```javascript
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


```









