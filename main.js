// General Rules

/* if (condition) {
    code to run if condition is true.
} else {
    run this code id above is not true.
} */

document.querySelector('html').style.backgroundcolor = 'blue';

const checkBox = document.querySelector('input');
      const para = document.querySelector('p');
      let shoppingDone = false;

      checkBox.addEventListener('change',function() {
        checkBox.disabled = true;
        shoppingDone = true;
        updateAllowance();
      });

      function updateAllowance() {
        if(shoppingDone === true) {
          var childsAllowance = 10;
        } else {
          var childsAllowance = 5;
        }

        para.textContent = 'Child has earned $' + childsAllowance + ' this week.';
      }

      updateAllowance();