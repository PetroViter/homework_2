let num1 = +prompt('Enter first number');
let select = prompt('Select an action +-/*');
let num2 = +prompt ('Enter second number');
let results;

switch (select) {
    case '+':
        results = num1 + num2;
        alert(results);
            break;

    case '-':
        results = num1 - num2;
        alert(results);
            break;

    case '/':
        results = num1 / num2;
        alert(results);
            break;

    case '*':
        results = num1 * num2;
        alert(results);
            break;
}
