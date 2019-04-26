## DOM Manipulation: Part 2

### Lecture 1


**What the ternary operator is:**

* Ternary operator is a useful way to write a simple if/else statement.

* Mostly used for non-comple if statements

```javascript
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
```

---


**How to add, remove and toggle HTML classes:**

* Using this process you can add, remove, and or toggle on and off a class in HTML code.

```javascript
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
```
