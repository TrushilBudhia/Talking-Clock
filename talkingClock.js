function parseTime(time) {
    const timeSplit = time.split(':').map(Number)
    const hours = timeSplit[0] > 12 ? timeSplit[0] - 12 : timeSplit[0] === 0 ? 12 : timeSplit[0];
    const minutes = timeSplit[1] === 0 ? 60 : timeSplit[1];
    const ampm = timeSplit[0] >= 12 ? 'pm' : 'am'
    return { hours, minutes, ampm }
}

function timeToText ({ hours, minutes, ampm }) {
    const hoursArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    const minutesArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty', 'forty one', 'forty two', 'forty three', 'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight', 'forty nine', 'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine', ''];

    const displayHours = hoursArray[hours - 1];
    const displayMinutes = minutesArray[minutes - 1];
    const displayAdjoiningWord = minutes < 10 ? 'oh' : '';

    return `It's ${displayHours} ${displayAdjoiningWord} ${displayMinutes} ${ampm}`
}

function renderTime() {
    // Getting the current date and time
    const date = new Date();
    // Getting the hour and minute from the date value
    const hour = date.getHours();
    const minute = date.getMinutes();
    // Creating a time string in a 24hour format
    const timeString = `${hour}:${minute}`;
    const textTime = timeToText(parseTime(timeString));

    document.querySelector('#time').innerHTML = textTime;
}

setInterval(function() {
    renderTime();
}, 1000);

renderTime();