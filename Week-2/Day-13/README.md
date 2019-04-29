# Pig-Game

### Encounter two rolls of 6

```javascript
if(doubleSix == 2){
            document.getElementById('score-' + activePlayer).textContent = 0;
           // doubleSix = 0;
        }

        if (dice !== 1) {
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;


        } else {

            nextPlayer();
           // doubleSix = 0;
        }
```        


