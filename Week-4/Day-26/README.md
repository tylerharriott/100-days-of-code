# Day - 26 
## HTML Input Types

- Calling the function to get the values

```javascript
var input = UICtrl.getInput();
```


- The code for returning the information added into the fields

```javascript
  return {
      getInput: function (){

          return {
              type: document.querySelector(DOMstrings.inputType).value,
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: document.querySelector(DOMstrings.inputValue).value
          }
      },

        getDOMstrings: function() {

          return DOMstrings;


        }

    };
```
