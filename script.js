let balance = 5000;
let currentBet = 100;
let currentColor = '';
let timerInterval;
let timeLeft = 30;

const balanceEl = document.getElementById('balance');
const timerEl = document.getElementById('timer');
const historyEl = document.getElementById('history');

function updateBalance() {
  balanceEl.textContent = balance.toFixed(2);
  document.getElementById('modalBalance').textContent = '₹' + balance.toFixed(2);
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  timerEl.textContent = timeLeft;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      generateResult();
      setTimeout(startTimer, 2000); // next round
    }
  }, 1000);
}

function setBet(amount) {
  currentBet = amount;
}

function placeBet(color) {
  if (balance < currentBet) {
    alert("Not enough balance! Deposit first.");
    return;
  }
  currentColor = color;
  balance -= currentBet;
  updateBalance();
  alert(`Bet placed on \( {color} for ₹ \){currentBet}`);
}

function generateResult() {
  const colors = ['Red', 'Green', 'Violet'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Add to history
  const div = document.createElement('div');
  div.className = `result-circle ${randomColor.toLowerCase()}`;
  div.textContent = randomColor[0];
  historyEl.prepend(div);
  
  // Keep only last 10
  if (historyEl.children.length > 10) historyEl.removeChild(historyEl.lastChild);
  
  // Check win
  if (currentColor === randomColor) {
    let winAmount = currentBet * (randomColor === 'Violet' ? 4.5 : 2);
    balance += winAmount;
    alert(`🎉 You Win! +₹${winAmount}`);
  } else if (currentColor) {
    alert(`You lost this round.`);
  }
  
  currentColor = '';
  updateBalance();
}

function showDepositModal() {
  document.getElementById('depositModal').classList.remove('hidden');
}

function showWithdrawModal() {
  document.getElementById('withdrawModal').classList.remove('hidden');
}

function showWalletModal() {
  document.getElementById('walletModal').classList.remove('hidden');
}

function hideModals() {
  document.querySelectorAll('.fixed.inset-0').forEach(modal => {
    modal.classList.add('hidden');
  });
}

function makeDeposit() {
  const amount = parseInt(document.getElementById('depositAmount').value) || 100;
  balance += amount;
  updateBalance();
  hideModals();
  alert(`₹${amount} deposited successfully!`);
}

function makeWithdraw() {
  const amount = parseInt(document.getElementById('withdrawAmount').value) || 0;
  const upi = document.getElementById('upiId').value;
  
  if (amount > balance) {
    alert("Insufficient balance!");
    return;
  }
  if (!upi) {
    alert("Enter UPI ID");
    return;
  }
  
  balance -= amount;
  updateBalance();
  hideModals();
  alert(`Withdrawal request of ₹${amount} to ${upi} submitted. It will be processed in 24 hours.`);
}

// Initialize
updateBalance();
startTimer();

// Auto add some history on load
setTimeout(() => {
  ['Red','Green','Violet','Green','Red'].forEach(c => {
    const div = document.createElement('div');
    div.className = `result-circle ${c.toLowerCase()}`;
    div.textContent = c[0];
    historyEl.appendChild(div);
  });
}, 500);
