
function getTime(time) {
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let clock = hour > 12 ? ' PM ' : ' AM ';
    hour = hour > 12 ? hour - 12 : hour;
    return hour + " : " + minutes + clock + 'IST';
}
module.exports = getTime;