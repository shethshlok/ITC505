document.addEventListener('DOMContentLoaded', function() {
    // Existing code for the problem solver...
    const calculateButton = document.createElement('button');
    calculateButton.textContent = 'Calculate Factorial';
    document.querySelector('.content').appendChild(calculateButton);

    const inputElement = document.createElement('input');
    inputElement.type = 'number';
    inputElement.placeholder = 'Enter a number';
    document.querySelector('.content').appendChild(inputElement);

    const resultElement = document.createElement('p');
    document.querySelector('.content').appendChild(resultElement);

    calculateButton.addEventListener('click', function() {
        const number = parseInt(inputElement.value, 10);
        if (!isNaN(number)) {
            const factorial = calculateFactorial(number);
            resultElement.textContent = `The factorial of ${number} is ${factorial}.`;
        } else {
            resultElement.textContent = 'Please enter a valid number.';
        }
    });

    function calculateFactorial(n) {
        if (n === 0) return 1;
        return n * calculateFactorial(n - 1);
    }

});

