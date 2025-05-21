const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      input = '';
    } else if (value === '=') {
      if (input !== '') {
        input = eval(input).toString();
      }
    } else {
      input += value;
    }

    display.value = input;
  });
});
