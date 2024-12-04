document.getElementById("calculate-btn").addEventListener("click", function () {
  const dob = document.getElementById("dob").value;

  if (!dob) {
    document.getElementById("result").innerText = "Please select a valid date!";
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();

  // Check if the entered date is in the future
  if (dobDate > today) {
    document.getElementById("result").innerText = "The date cannot be in the future!";
    return;
  }

  let ageYears = today.getFullYear() - dobDate.getFullYear();
  let ageMonths = today.getMonth() - dobDate.getMonth();
  let ageDays = today.getDate() - dobDate.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  document.getElementById("result").innerText = 
    `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
