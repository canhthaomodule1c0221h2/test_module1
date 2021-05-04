function isFibonacci(num) {
    let a = 0;
    let b = 1;
    if (num === a || num === b) {
        return true;
    }
    let c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

let num1 = isFibonacci(4);
let num2 = isFibonacci(3);
let num3 = isFibonacci(7)
document.write(num1);
document.write("<br>");
document.write(num2);
document.write("<br>");
document.write(num3);