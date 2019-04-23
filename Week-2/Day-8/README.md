## Day-8: DOM Manipulation

### Lecture 1

Generating random number:
```javascript

dice = Math.floor(Math.random() * 6 + 1);           // Gives a random number between 1 and 6
                                                    // Math.floor cuts of the decimal of a #
```

Manipulating the DOM:
```javascript
//Setter
document.querySelector('#current-' + activePlayer).textContent = dice;       //Selects the element from HTML code
```

Read from the DOM:
```javascript
//Getter
var x = document.querySelector('#score-0').textContent;
```

Change CSS style:
```javascript
document.querySelector('.dice').style.display = 'none';        //CSS style is changed through querySelector
```
---

### Lecture 2
