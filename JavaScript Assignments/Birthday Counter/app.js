function startCountdown() {
  const birthdayInput = document.getElementById('input').value;

  if (!birthdayInput) {
    alert("Please select your birthday!");
    return;
  }

  const timerEl = document.getElementById("timer");

  function updateCountdown() {
    const now = new Date();
    let target = new Date(birthdayInput);
    
    target.setFullYear(now.getFullYear());

    if (target < now) {
      target.setFullYear(now.getFullYear() + 1);
    }

    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.innerHTML = 
      days + " Days | " + hours + " h : " + min + " m : " + sec + " s";
  }

  updateCountdown(); 
  setInterval(updateCountdown, 1000); 
}
