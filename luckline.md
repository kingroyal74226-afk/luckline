# luckline
<!DOCTYPE html>  <html lang="hi">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Gareeb Bhai Gaming</title>  
    <style>  
        /* डिज़ाइन (CSS) */  
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #121212; color: white; margin: 0; padding: 0; }  
        .header { background: #ffcc00; color: black; padding: 15px; font-weight: bold; font-size: 20px; position: sticky; top: 0; }  
        .wallet-card { background: linear-gradient(45deg, #1e1e1e, #333); margin: 15px; padding: 20px; border-radius: 15px; border-left: 5px solid #ffcc00; }  
        .balance-amt { font-size: 30px; color: #4caf50; margin: 10px 0; }  
        .btn-group { display: flex; justify-content: space-around; margin-top: 10px; }  
        .btn { padding: 10px 25px; border-radius: 5px; border: none; font-weight: bold; cursor: pointer; width: 45%; }  
        .dep-btn { background: #ffcc00; color: black; }  
        .wd-btn { background: #fff; color: black; }  
        .game-zone { padding: 20px; }  
        .color-box { width: 100%; height: 100px; background: #333; border-radius: 10px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-size: 24px; }  
        .bet-btns { display: flex; gap: 10px; }  
        .bet-btn { flex: 1; padding: 15px; border: none; border-radius: 5px; color: white; font-weight: bold; }  
        .red { background: #e74c3c; }  
        .green { background: #2ecc71; }  
    </style>  
</head>  
<body>  <div class="header">RAJA GAMING CLONE</div>  

<div class="wallet-card">  
    <div>आपका बैलेंस (Wallet)</div>  
    <div class="balance-amt">₹ <span id="balance">0.00</span></div>  
    <div class="btn-group">  
        <button class="btn dep-btn" onclick="addMoney()">रिचार्ज (Deposit)</button>  
        <button class="btn wd-btn" onclick="alert('निकासी के लिए ₹500 जरूरी हैं')">निकासी (Withdraw)</button>  
    </div>  
</div>  

<div class="game-zone">  
    <h3>कलर प्रेडिक्शन (Color Prediction)</h3>  
    <div id="result-box" class="color-box">?</div>  
    <div class="bet-btns">  
        <button class="bet-btn red" onclick="placeBet('RED')">RED पर लगाओ</button>  
        <button class="bet-btn green" onclick="placeBet('GREEN')">GREEN पर लगाओ</button>  
    </div>  
</div>  

<script>  
    // गेम का दिमाग (JavaScript)  
    let balance = 0;  

    function addMoney() {  
        let amt = prompt("कितने पैसे जमा करने हैं?");  
        if(amt) {  
            balance += parseInt(amt);  
            document.getElementById('balance').innerText = balance.toFixed(2);  
            alert("पैसे जुड़ गए! (यह डेमो है)");  
        }  
    }  

    function placeBet(choice) {  
        if(balance < 10) {  
            alert("बैलेंस कम है! कम से कम ₹10 चाहिए।");  
            return;  
        }  
        balance -= 10;  
        document.getElementById('balance').innerText = balance.toFixed(2);  
          
        let colors = ['RED', 'GREEN'];  
        let winner = colors[Math.floor(Math.random() * colors.length)];  
          
        document.getElementById('result-box').innerText = "Wait...";  
          
        setTimeout(() => {  
            document.getElementById('result-box').innerText = winner;  
            document.getElementById('result-box').style.background = (winner === 'RED') ? '#e74c3c' : '#2ecc71';  
              
            if(choice === winner) {  
                balance += 20;  
                alert("बधाई हो! आप जीत गए।");  
            } else {  
                alert("ओह! आप हार गए। फिर कोशिश करें।");  
            }  
            document.getElementById('balance').innerText = balance.toFixed(2);  
        }, 2000);  
    }  
</script>

</body>  
</html>  
