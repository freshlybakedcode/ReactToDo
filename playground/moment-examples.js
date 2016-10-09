var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();
var currentTimestamp = now.unix();
console.log('Current timestamp', currentTimestamp);

//var timestamp = 1475852591;
var currentMoment = moment.unix(currentTimestamp);

console.log('Formatted timestamp: ', currentMoment.format('DD MMM \'YY @ H:mm'));

console.log('Challenge timestamp: ', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
