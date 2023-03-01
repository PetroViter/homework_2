function calc() {
    const num1 = +prompt('enter first number');
    const sign = prompt('choose +-/*');
    const num2 = +prompt('enter second number');
    let result;

    switch (sign) {
        case '+':
            result = num1 + num2;
            console.log(result)
            break;
        case '-':
            result = num1 - num2;
            console.log(result)
            break;
        case '/':
            result = num1 / num2;
            console.log(result)
            break;
        case '*':
            result = num1 * num2;
            console.log(result)
            break;
    }
}

calc()

