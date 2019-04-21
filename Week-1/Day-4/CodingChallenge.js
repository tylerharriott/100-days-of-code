/****************************************
            Coding Challenge 5
 ****************************************/

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

john.calcTip(john.bills);


