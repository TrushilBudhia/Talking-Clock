function parseTime(time) {
    // Using the ':' as the indicator of where to split the numbers to create the timeSplit array
    const timeSplit = time.split(':').map(Number)
    // If the value of the first index of the timeSplit array is great than 12, subtract 12 from the value to bring it down to the 12 hour context
    // If the hour is strictly equal to 0, set the hour value to 12
    // Otherwise the hour value is the first index of the timeSplit array
    const hours = timeSplit[0] > 12 ? timeSplit[0] - 12 : timeSplit[0] === 0 ? 12 : timeSplit[0];
    const minutes = timeSplit[1] === 0 ? 60 : timeSplit[1];
    // Determining if the hour in the timeSplit value is an am or pm value
    const ampm = timeSplit[0] >= 12 ? 'pm' : 'am'
    return { hours, minutes, ampm }
}

function timeToText ({ hours, minutes, ampm }) {
    const hoursArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    const minutesArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty', 'forty one', 'forty two', 'forty three', 'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight', 'forty nine', 'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine', ''];

    const displayHours = hoursArray[hours - 1];
    const displayMinutes = minutesArray[minutes - 1];
    // If the minutes value is less than ten, the adjoining word will be 'oh', otherwise it will be empty ('')
    const displayAdjoiningWord = minutes < 10 ? 'oh' : '';

    // Returning the display statement the user will view
    return `It's ${displayHours} ${displayAdjoiningWord} ${displayMinutes} ${ampm}`
}

// The function to render the time into words
function renderTime() {
    // Getting the current date and time
    const date = new Date();
    // Getting the hour and minute from the date value
    const hour = date.getHours();
    const minute = date.getMinutes();
    // Creating a time string in a 24hour format
    const timeString = `${hour}:${minute}`;
    const textTime = timeToText(parseTime(timeString));
    
    // Setting the innerHTML of the div element with the id "time" to that of the time in text
    document.querySelector('#time').innerHTML = textTime;
}

// Using setInterval to invoke the renderTime function every second so that the time updates as the minute and hour changes
setInterval(function() {
    renderTime();
}, 1000);

// Invoking the renderTime function
renderTime();