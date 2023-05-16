function calculate(value) {
    var result = document.getElementById('result');
   
    if (value === '=') {
     result.value = eval(result.value);
    } else if (value === 'C') {
     result.value = '';
    } else if (value === '%') {
     result.value = eval(result.value + '/100');
    } else if (value === '^') {
     result.value = Math.pow(result.value, 2);
    } else {
     result.value += value;
    }
   }
   
   function clearResult() {
    document.getElementById('result').value = '';
   }
   
   function deleteChar() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
   }
   
   