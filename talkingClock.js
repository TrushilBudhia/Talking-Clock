function renderTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const timeString = `${hour}:${minute}`

    document.querySelector('#time').innerHTML = timeString
}

setInterval(function() {
    renderTime();
}, 1000);

renderTime();