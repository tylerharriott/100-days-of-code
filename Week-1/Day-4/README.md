## Day 4 - Coding Challenge
Task: To show an understanding of all the subjects that where covered in each of the basics course. 
 ```javascript
 
 
 var john = {

    bills: [124,48,268,180,42],
    calcTip: function(money){

        var tipsAry = [];
        var finalAry = [];

        for(var i=0; i<money.length; i++){

            if(money[i] < 50){
                tipsAry.push(money[i] * .20);
                finalAry.push(money[i] + tipsAry[i]);
            }
            else if(money[i] >= 50 || money[i] <= 200){
                tipsAry.push(money[i] * .15);
                finalAry.push(money[i] + tipsAry[i]);
            }
            else{
                tipsAry.push(money[i] * .10);
                finalAry.push(money[i] + tipsAry[i]);
            }

        }

        console.log('Tips ary: ' + tipsAry);
        console.log('Final Price: ' + finalAry);

    }


};
```
---
### Bills
```javascript
 bills: [124,48,268,180,42]
 ```
 
 ---
 ### Checks what % tip to give
 
```javascript
            if(money[i] < 50){
                tipsAry.push(money[i] * .20);
                finalAry.push(money[i] + tipsAry[i]);
            }
            else if(money[i] >= 50 || money[i] <= 200){
                tipsAry.push(money[i] * .15);
                finalAry.push(money[i] + tipsAry[i]);
            }
            else{
                tipsAry.push(money[i] * .10);
                finalAry.push(money[i] + tipsAry[i]);
            }
```

