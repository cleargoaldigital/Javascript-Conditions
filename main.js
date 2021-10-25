// General Rules

/* if (condition) {
    code to run if condition is true.
} else {
    run this code id above is not true.
} */



const checkBox = document.querySelector('input');
const para = document.querySelector('p');
let homeworkDone = false;

checkBox.addEventListener('change', function() {
  checkBox.disabled = true;
  homeworkDone = true;
  updateAllowance();
});

function updateAllowance() {
  if (homeworkDone === true) {
    var childsAllowance = 10;
  } else {
    var childsAllowance = 5;
  }

  para.textContent = 'Abdulhayy has completed his homework and has now earned $' + childsAllowance + ' this week.';
}

updateAllowance();