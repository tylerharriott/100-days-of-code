# Pig-Game

### Encounter two rolls of 6


* This piece of code changes the rules of the game.

* Now if the user rolls two 6's in a row, their round score will be deleted.

```javascript
var doubleSix = 0;

    if(dice == 6) {
         doubleSix++;
    }

if(doubleSix == 2){
            document.getElementById('score-' + activePlayer).textContent = 0;
            doubleSix = 0;
        }

        if (dice !== 1) {
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;


        } else {

            nextPlayer();
            doubleSix = 0;
        }
```        


