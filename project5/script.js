// Generate a random color
const colorFunction = function() {
    const colorString = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorString[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalId = null
document.querySelector('#start').addEventListener('click', function() {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = colorFunction();
        }, 1000);
    }
});

document.querySelector('#stop').addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null
});
