## Day 5: Execution Stack

Javascript code:
```javascript
let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');
```

Execution Process:
![Execution](img/execution.png)



