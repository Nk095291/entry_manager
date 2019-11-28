
function getTime(time) {
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let clock = hour > 12 ? ' PM ' : ' AM ';
    hour = hour > 12 ? hour - 12 : hour;
    if(hour<10)
        hour = '0'+hour;
    if(minutes<10)
        minutes = '0'+minutes;

    return hour + " : " + minutes + clock + 'IST';
}
module.exports = getTime;
console.log(" entdatery fine");
