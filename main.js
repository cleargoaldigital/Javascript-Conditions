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

// Weather Report


const select = document.querySelector('select');
const comment = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    comment.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    comment.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    comment.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    comment.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    comment.textContent = '';
  }
}
