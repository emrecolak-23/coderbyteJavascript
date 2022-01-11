// Challenge
// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be
//two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes
//between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output
//should be 60. If str is 1:00pm-11:00am the output should be 1320.
// Sample Test Cases
// Input:"12:30pm-12:00am"
// Output:690
//
// Input:"1:23am-1:08am"
// Output:1425

function CountingMinutes(str) { 
  var times = str.split('-');	
  var from = times[0];
  var to = times[1];

function timer(num){
  var hrs = num.split(':');  
  var min = hrs[1].slice(0,2);
  var ampm = hrs[1].slice(2);
  var totalMins = 0;

var pmMins = ampm === 'pm' ? 720 : 0;

 var totalMins = Number(hrs[0])*60+ Number(min) + pmMins ;
    return totalMins;
}
  var diff = timer(from) - timer(to);
  return diff;
}


console.log(CountingMinutes("12:30pm-12:00am"))