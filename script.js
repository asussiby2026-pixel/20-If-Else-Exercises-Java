/* ============================================================
   20 If / Else Exercises - Clean & Simple JavaScript Logic
   ============================================================ */

// Helper to format currency numbers cleanly (e.g. 150000 -> "150,000")
function formatRp(num) {
  return new Intl.NumberFormat('id-ID').format(num);
}

// Helper to display results in output box with styling
function setResult(boxId, message, type = 'info') {
  const box = document.getElementById(boxId);
  if (!box) return;

  // Clear previous state
  box.className = 'output-box';
  
  if (type === 'pass') box.classList.add('res-pass');
  else if (type === 'fail') box.classList.add('res-fail');
  else if (type === 'warn') box.classList.add('res-warn');
  else box.classList.add('res-info');

  box.innerHTML = message;
}

/* ============================================================
   LEVEL 1: BASIC CONDITIONS (1 - 5)
   ============================================================ */

// 1. Positive or Negative
function solveEx1() {
  const val = document.getElementById('input1').value;
  if (val === '') {
    setResult('output1', '⚠️ Please enter a number.', 'warn');
    return;
  }
  const number = parseFloat(val);

  if (number > 0) {
    setResult('output1', '✅ Result: <strong>"Positive"</strong>', 'pass');
  } else if (number < 0) {
    setResult('output1', 'ℹ️ Result: <strong>"Negative"</strong>', 'info');
  } else {
    setResult('output1', 'ℹ️ Result: <strong>"Zero"</strong> (Neither positive nor negative)', 'info');
  }
}

// 2. Even or Odd
function solveEx2() {
  const val = document.getElementById('input2').value;
  if (val === '') {
    setResult('output2', '⚠️ Please enter an integer.', 'warn');
    return;
  }
  const number = parseInt(val, 10);

  if (number % 2 === 0) {
    setResult('output2', `✅ ${number} is <strong>Even</strong>`, 'pass');
  } else {
    setResult('output2', `ℹ️ ${number} is <strong>Odd</strong>`, 'info');
  }
}

// 3. Pass or Fail
function solveEx3() {
  const val = document.getElementById('input3').value;
  if (val === '') {
    setResult('output3', '⚠️ Please enter a score.', 'warn');
    return;
  }
  const score = parseFloat(val);

  if (score >= 60) {
    setResult('output3', `🎉 <strong>"Pass"</strong> (Score: ${score} &ge; 60)`, 'pass');
  } else {
    setResult('output3', `❌ <strong>"Fail"</strong> (Score: ${score} &lt; 60)`, 'fail');
  }
}

// 4. Age Check
function solveEx4() {
  const val = document.getElementById('input4').value;
  if (val === '') {
    setResult('output4', '⚠️ Please enter an age.', 'warn');
    return;
  }
  const age = parseInt(val, 10);

  if (age >= 17) {
    setResult('output4', '🪪 <strong>"Eligible for an ID card"</strong>', 'pass');
  } else {
    setResult('output4', '🚫 <strong>"Not eligible for an ID card"</strong> (Age < 17)', 'fail');
  }
}

// 5. Free Shipping
function solveEx5() {
  const val = document.getElementById('input5').value;
  if (val === '') {
    setResult('output5', '⚠️ Please enter total purchase.', 'warn');
    return;
  }
  const amount = parseFloat(val);

  if (amount >= 100000) {
    setResult('output5', `🚚 <strong>"Free Shipping"</strong> (Total Rp ${formatRp(amount)} &ge; 100,000)`, 'pass');
  } else {
    setResult('output5', `📦 <strong>"Shipping Fee Applies"</strong> (Need Rp ${formatRp(100000 - amount)} more for free shipping)`, 'warn');
  }
}

/* ============================================================
   LEVEL 2: IF / ELSE IF / ELSE (6 - 10)
   ============================================================ */

// 6. Grade Category
function solveEx6() {
  const val = document.getElementById('input6').value;
  if (val === '') {
    setResult('output6', '⚠️ Please enter a score.', 'warn');
    return;
  }
  const score = parseFloat(val);

  let grade = '';
  let type = 'info';

  if (score >= 80 && score <= 100) {
    grade = 'A';
    type = 'pass';
  } else if (score >= 70 && score < 80) {
    grade = 'B';
    type = 'pass';
  } else if (score >= 60 && score < 70) {
    grade = 'C';
    type = 'info';
  } else if (score >= 50 && score < 60) {
    grade = 'D';
    type = 'warn';
  } else if (score < 50 && score >= 0) {
    grade = 'E';
    type = 'fail';
  } else {
    setResult('output6', '⚠️ Please enter a score between 0 and 100.', 'warn');
    return;
  }

  setResult('output6', `📊 Score ${score} &rarr; Grade: <strong>${grade}</strong>`, type);
}

// 7. Largest Number
function solveEx7() {
  const aVal = document.getElementById('input7a').value;
  const bVal = document.getElementById('input7b').value;

  if (aVal === '' || bVal === '') {
    setResult('output7', '⚠️ Please enter both numbers.', 'warn');
    return;
  }
  const a = parseFloat(aVal);
  const b = parseFloat(bVal);

  if (a > b) {
    setResult('output7', `🏆 Number <strong>a (${a})</strong> is larger than b (${b})`, 'pass');
  } else if (b > a) {
    setResult('output7', `🏆 Number <strong>b (${b})</strong> is larger than a (${a})`, 'pass');
  } else {
    setResult('output7', `⚖️ <strong>"Both numbers are equal"</strong> (${a} = ${b})`, 'info');
  }
}

// 8. Age Category
function solveEx8() {
  const val = document.getElementById('input8').value;
  if (val === '') {
    setResult('output8', '⚠️ Please enter age.', 'warn');
    return;
  }
  const age = parseInt(val, 10);

  if (age < 0) {
    setResult('output8', '⚠️ Age cannot be negative.', 'warn');
    return;
  }

  let category = '';
  if (age >= 0 && age <= 5) {
    category = 'Toddler (0-5)';
  } else if (age >= 6 && age <= 12) {
    category = 'Child (6-12)';
  } else if (age >= 13 && age <= 17) {
    category = 'Teenager (13-17)';
  } else if (age >= 18 && age <= 59) {
    category = 'Adult (18-59)';
  } else {
    category = 'Senior (≥ 60)';
  }

  setResult('output8', `👤 Age ${age} &rarr; Category: <strong>${category}</strong>`, 'info');
}

// 9. Shopping Discount
function solveEx9() {
  const val = document.getElementById('input9').value;
  if (val === '') {
    setResult('output9', '⚠️ Please enter purchase amount.', 'warn');
    return;
  }
  const total = parseFloat(val);
  let discountRate = 0;

  if (total >= 1000000) {
    discountRate = 0.20;
  } else if (total >= 500000) {
    discountRate = 0.10;
  } else if (total >= 250000) {
    discountRate = 0.05;
  } else {
    discountRate = 0.0;
  }

  const discountAmount = total * discountRate;
  const finalPrice = total - discountAmount;

  setResult('output9', `
    <div>Discount: <strong>${discountRate * 100}%</strong> (- Rp ${formatRp(discountAmount)})</div>
    <div>Final Price: <strong>Rp ${formatRp(finalPrice)}</strong></div>
  `, discountRate > 0 ? 'pass' : 'info');
}

// 10. Day from Number
function solveEx10() {
  const val = document.getElementById('input10').value;
  if (val === '') {
    setResult('output10', '⚠️ Please enter a number.', 'warn');
    return;
  }
  const day = parseInt(val, 10);

  let dayName = '';
  let isInvalid = false;

  if (day === 1) dayName = 'Monday';
  else if (day === 2) dayName = 'Tuesday';
  else if (day === 3) dayName = 'Wednesday';
  else if (day === 4) dayName = 'Thursday';
  else if (day === 5) dayName = 'Friday';
  else if (day === 6) dayName = 'Saturday';
  else if (day === 7) dayName = 'Sunday';
  else {
    dayName = 'Invalid day';
    isInvalid = true;
  }

  if (isInvalid) {
    setResult('output10', `⚠️ <strong>"${dayName}"</strong> (Only numbers 1 to 7 are valid)`, 'fail');
  } else {
    setResult('output10', `📅 Day ${day} &rarr; <strong>"${dayName}"</strong>`, 'pass');
  }
}

/* ============================================================
   LEVEL 3: MULTIPLE CONDITIONS (11 - 15)
   ============================================================ */

// 11. Simple Login
function solveEx11() {
  const user = document.getElementById('input11User').value.trim();
  const pass = document.getElementById('input11Pass').value;

  if (user === 'admin' && pass === '12345') {
    setResult('output11', '🔓 <strong>"Login successful"</strong>', 'pass');
  } else if (user !== 'admin') {
    setResult('output11', '❌ <strong>"Incorrect username"</strong>', 'fail');
  } else {
    setResult('output11', '❌ <strong>"Incorrect password"</strong>', 'fail');
  }
}

// 12. Student Passing Check
function solveEx12() {
  const scoreVal = document.getElementById('input12Score').value;
  const attVal = document.getElementById('input12Att').value;

  if (scoreVal === '' || attVal === '') {
    setResult('output12', '⚠️ Please fill both score and attendance.', 'warn');
    return;
  }

  const score = parseFloat(scoreVal);
  const attendance = parseFloat(attVal);

  if (score >= 60 && attendance >= 75) {
    setResult('output12', '🎓 <strong>"Pass"</strong> (Score &ge; 60 AND Attendance &ge; 75%)', 'pass');
  } else {
    setResult('output12', '❌ <strong>"Fail"</strong> (Requirements not met)', 'fail');
  }
}

// 13. Free Shipping + Membership
function solveEx13() {
  const amountVal = document.getElementById('input13Amount').value;
  if (amountVal === '') {
    setResult('output13', '⚠️ Please enter total purchase.', 'warn');
    return;
  }
  const purchase = parseFloat(amountVal);
  const isMember = document.getElementById('input13Member').checked;

  if (purchase >= 100000 || isMember) {
    let reason = purchase >= 100000 && isMember 
      ? 'Amount ≥ 100,000 and Customer is Member' 
      : isMember ? 'Customer is a Member' : 'Purchase amount ≥ 100,000';
    setResult('output13', `🎁 <strong>"Free Shipping"</strong> (${reason})`, 'pass');
  } else {
    setResult('output13', '📦 <strong>"Shipping fee applies"</strong> (Purchase < 100,000 and not a member)', 'warn');
  }
}

// 14. Traffic Light
function solveEx14() {
  const color = document.getElementById('input14').value.toLowerCase().trim();

  if (color === 'red') {
    setResult('output14', '🛑 <strong>"Stop"</strong>', 'fail');
  } else if (color === 'yellow') {
    setResult('output14', '⚠️ <strong>"Get Ready"</strong>', 'warn');
  } else if (color === 'green') {
    setResult('output14', '🟢 <strong>"Go"</strong>', 'pass');
  } else {
    setResult('output14', '❓ <strong>"Invalid Color"</strong>', 'info');
  }
}

// 15. Login and Account Status
function solveEx15() {
  const user = document.getElementById('input15User').value.trim();
  const pass = document.getElementById('input15Pass').value;
  const isActive = document.getElementById('input15Active').checked;

  if (user !== 'admin' || pass !== '12345') {
    setResult('output15', '❌ <strong>"Invalid username or password"</strong>', 'fail');
  } else if (!isActive) {
    setResult('output15', '🔒 <strong>"Account inactive"</strong> (Credentials correct, but account is deactivated)', 'warn');
  } else {
    setResult('output15', '✅ <strong>"Login successful"</strong> (Credentials correct & Account active)', 'pass');
  }
}

/* ============================================================
   LEVEL 4: ANALYTICAL (16 - 20)
   ============================================================ */

// 16. Parking Fee
function solveEx16() {
  const val = document.getElementById('input16').value;
  if (val === '') {
    setResult('output16', '⚠️ Please enter hours.', 'warn');
    return;
  }
  const hours = parseInt(val, 10);

  let fee = 0;
  if (hours <= 0) {
    fee = 0;
  } else if (hours === 1) {
    fee = 5000;
  } else {
    fee = 5000 + (hours - 1) * 3000;
    if (fee > 20000) {
      fee = 20000;
    }
  }

  const cappedNote = (hours > 5 && fee === 20000) ? ' (Capped at Maximum Rp 20,000)' : '';
  setResult('output16', `🚗 Duration: ${hours} hour(s)<br>Fee: <strong>Rp ${formatRp(fee)}</strong>${cappedNote}`, 'info');
}

// 17. Student Assessment System
function solveEx17() {
  const scoreVal = document.getElementById('input17Score').value;
  const attVal = document.getElementById('input17Att').value;
  const assignVal = document.getElementById('input17Assign').value;

  if (scoreVal === '' || attVal === '' || assignVal === '') {
    setResult('output17', '⚠️ Please enter all 3 assessment fields.', 'warn');
    return;
  }

  const score = parseFloat(scoreVal);
  const attendance = parseFloat(attVal);
  const assignments = parseFloat(assignVal);

  const passScore = score >= 60;
  const passAtt = attendance >= 75;
  const passAssign = assignments >= 80;

  if (passScore && passAtt && passAssign) {
    setResult('output17', '🎉 <strong>Student Passed!</strong> All 3 requirements fulfilled.', 'pass');
  } else {
    let reasons = [];
    if (!passScore) reasons.push(`Score is ${score} (Requires &ge; 60)`);
    if (!passAtt) reasons.push(`Attendance is ${attendance}% (Requires &ge; 75%)`);
    if (!passAssign) reasons.push(`Assignments completion is ${assignments}% (Requires &ge; 80%)`);

    setResult('output17', `
      <div>❌ <strong>Student Failed</strong></div>
      <div style="font-size:0.85rem; margin-top:4px;">Reason(s):</div>
      <ul style="font-size:0.85rem; padding-left:18px; margin-top:2px;">
        ${reasons.map(r => `<li>${r}</li>`).join('')}
      </ul>
    `, 'fail');
  }
}

// 18. Cashier Program
function solveEx18() {
  const totalVal = document.getElementById('input18Total').value;
  const payVal = document.getElementById('input18Pay').value;

  if (totalVal === '' || payVal === '') {
    setResult('output18', '⚠️ Please enter total purchase and payment.', 'warn');
    return;
  }

  const total = parseFloat(totalVal);
  const payment = parseFloat(payVal);
  const isMember = document.getElementById('input18Member').checked;

  let finalAmount = total;
  let discountText = 'None (0%)';

  if (isMember) {
    finalAmount = total * 0.90; // 10% discount
    discountText = '10% Member Discount';
  }

  if (payment < finalAmount) {
    const shortage = finalAmount - payment;
    setResult('output18', `
      <div>❌ <strong>"Insufficient payment"</strong></div>
      <div style="font-size:0.85rem;">Bill: Rp ${formatRp(finalAmount)} | Paid: Rp ${formatRp(payment)}</div>
      <div style="font-size:0.85rem; color:#991b1b;">Missing: Rp ${formatRp(shortage)}</div>
    `, 'fail');
  } else {
    const change = payment - finalAmount;
    setResult('output18', `
      <div>🧾 <strong>Payment Successful!</strong></div>
      <div style="font-size:0.85rem;">Discount: ${discountText}</div>
      <div style="font-size:0.85rem;">Final Amount: <strong>Rp ${formatRp(finalAmount)}</strong></div>
      <div style="font-size:0.85rem;">Change: <strong>Rp ${formatRp(change)}</strong></div>
    `, 'pass');
  }
}

// 19. Password Validation
function solveEx19() {
  const pwd = document.getElementById('input19').value;
  if (!pwd) {
    setResult('output19', '⚠️ Please enter a password to evaluate.', 'warn');
    return;
  }

  let strength = '';
  let badgeType = 'info';

  if (pwd.length < 8) {
    strength = 'Too short';
    badgeType = 'fail';
  } else if (pwd.length <= 11) {
    strength = 'Moderate';
    badgeType = 'warn';
  } else {
    strength = 'Strong';
    badgeType = 'pass';
  }

  // Bonus: Check if password contains a number
  const hasNumber = /\d/.test(pwd);

  setResult('output19', `
    <div>Strength: <strong>"${strength}"</strong> (${pwd.length} chars)</div>
    <div style="font-size:0.85rem; margin-top:4px;">
      Contains number? <strong>${hasNumber ? '✅ Yes' : '❌ No'}</strong>
    </div>
  `, badgeType);
}

// 20. Mini Scholarship System
function solveEx20() {
  const scoreVal = document.getElementById('input20Score').value;
  const attVal = document.getElementById('input20Att').value;
  const incomeVal = document.getElementById('input20Income').value;

  if (scoreVal === '' || attVal === '' || incomeVal === '') {
    setResult('output20', '⚠️ Please enter all scholarship criteria.', 'warn');
    return;
  }

  const score = parseFloat(scoreVal);
  const attendance = parseFloat(attVal);
  const income = parseFloat(incomeVal);
  const isActive = document.getElementById('input20Active').checked;

  if (score >= 85 && attendance >= 90 && income <= 5000000 && isActive) {
    setResult('output20', '🌟 <strong>"Full Scholarship"</strong> Awarded! (All high criteria met)', 'pass');
  } else if (score >= 75 && attendance >= 80 && income <= 8000000) {
    setResult('output20', '🎖️ <strong>"Partial Scholarship"</strong> Awarded!', 'info');
  } else {
    setResult('output20', '🚫 <strong>"No scholarship"</strong> (Does not meet criteria)', 'fail');
  }
}

/* ============================================================
   UI HELPERS: ACCORDION, LEVEL FILTERS, SEARCH
   ============================================================ */

// Toggle Java Code view
function toggleCode(codeId, button) {
  const pre = document.getElementById(codeId);
  const isOpen = pre.classList.contains('show');

  if (isOpen) {
    pre.classList.remove('show');
    button.classList.remove('open');
    button.querySelector('span:first-child').textContent = 'View Java Code';
  } else {
    pre.classList.add('show');
    button.classList.add('open');
    button.querySelector('span:first-child').textContent = 'Hide Java Code';
  }
}

// Filter sections by Level
function setFilter(levelId, buttonEl) {
  // Update active pill button
  const pills = document.querySelectorAll('.filter-pills .pill');
  pills.forEach(p => p.classList.remove('active'));
  
  if (buttonEl) {
    buttonEl.classList.add('active');
  } else if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }

  const sections = document.querySelectorAll('.level-section');
  sections.forEach(sec => {
    if (levelId === 'all' || sec.getAttribute('data-level') === levelId) {
      sec.style.display = 'flex';
    } else {
      sec.style.display = 'none';
    }
  });
}

// Live search filter across cards
function filterExercises() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initialise defaults on page load
window.addEventListener('DOMContentLoaded', () => {
  // Run all 20 solvers with default values so outputs are populated nicely
  solveEx1();
  solveEx2();
  solveEx3();
  solveEx4();
  solveEx5();
  solveEx6();
  solveEx7();
  solveEx8();
  solveEx9();
  solveEx10();
  solveEx11();
  solveEx12();
  solveEx13();
  solveEx14();
  solveEx15();
  solveEx16();
  solveEx17();
  solveEx18();
  solveEx19();
  solveEx20();
});
