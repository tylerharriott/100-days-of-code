var  years = [1990, 1965, 1937 , 2005, 1998];


function aryCalc(ary, fn){

    var aryRes = [];


    for(var x=0;x<ary.length;x++){
        aryRes.push(fn(ary[x]));
    }

    return aryRes;

}


function calculateAge(el) {

    return 2019 - el;

}



function isFullAge(el) {


    return el >= 18;
}


function maxHeartRate(el){
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return -1;
    }
}




//Callback function example
var ages = aryCalc(years,calculateAge);
var fullAges = aryCalc(ages, isFullAge);
var heartRate = aryCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(heartRate);
