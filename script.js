let timeLeft = 30;
let balance = 100;

function startTimer() {
    setInterval(() => {
        timeLeft--;
        document.getElementById('countdown').innerText = "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);
        
        if (timeLeft <= 0) {
            timeLeft = 30;
            generateResult();
        }
    }, 1000);
}

function bet(color) {
    alert(color + " पर दांव लग गया!");
}

function generateResult() {
    const colors = ['#28a745', '#dc3545', '#6f42c1']; // Green, Red, Violet
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const history = document.getElementById('history');
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.backgroundColor = randomColor;
    history.prepend(dot);
}

startTimer();
