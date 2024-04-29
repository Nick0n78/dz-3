// Порівняння двох чисел
function compareNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
  
    if (isNaN(number1) || isNaN(number2)) {
      document.getElementById('result').innerText = 'Будь ласка, введіть обидва числа.';
      return;
    }
  
    if (number1 > number2) {
      document.getElementById('result').innerText = `Більше число: ${number1}`;
    } else if (number2 > number1) {
      document.getElementById('result').innerText = `Більше число: ${number2}`;
    } else {
      document.getElementById('result').innerText = 'Числа рівні між собою.';
    }
  }
  
  // Перевірка пароля
  function checkPassword() {
    const password = document.getElementById('password').value;
  
    if (password.length < 8 || password.length > 16) {
      document.getElementById('passwordResult').innerText = 'Пароль повинен бути від 8 до 16 символів.';
    } else {
      document.getElementById('passwordResult').innerText = 'Пароль відповідає вимогам.';
    }
  }
  
  // Перевірка числа на парність
  function checkEvenOdd() {
    const number = parseInt(document.getElementById('number').value);
  
    if (isNaN(number)) {
      document.getElementById('evenOddResult').innerText = 'Будь ласка, введіть число.';
      return;
    }
  
    if (number % 2 === 0) {
      document.getElementById('evenOddResult').innerText = 'Число парне.';
    } else {
      document.getElementById('evenOddResult').innerText = 'Число непарне.';
    }
  }
  
  // Перевірка року на високосність
  function checkLeapYear() {
    const year = parseInt(document.getElementById('year').value);
  
    if (isNaN(year)) {
      document.getElementById('leapYearResult').innerText = 'Будь ласка, введіть рік.';
      return;
    }
  
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      document.getElementById('leapYearResult').innerText = 'Рік високосний.';
    } else {
      document.getElementById('leapYearResult').innerText = 'Рік не є високосним.';
    }
  }
  