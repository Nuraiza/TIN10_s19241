
module.exports = function () {
  const input = parseFloat(document.getElementById('tinput').value);
  const from = document.getElementById('tempfrom').value;
  const to = document.getElementById('tempto').value;

  
  if (from === 'celsius') {
    switch (to) {
      case 'fahrenheit' :
        return (9 / 5 * (input) + 32);
      case 'kelvin':
        return (input + 273);
      default:
        return input; 
    }
  } else if (from === 'fahrenheit') {
    switch (to) {
      case 'celsius' :
        return (5 / 9 * (input - 32));
      case 'kelvin':
        return (5 / 9 * (input - 32) + 273);
      default:
        return input; 
    }
  } else if (from === 'kelvin') {
    switch (to) {
      case 'celsius' :
        return (input - 273);
      case 'fahrenheit':
        return (9 / 5 * (input - 273) + 32);
      default:
        return input; 
    }
  }
}



