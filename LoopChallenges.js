// 1. Print Odds 1-20
for (i = 1; i <= 20; i++) {
    // let's divide the value by 2
    // if the remainder is not a zero then it's an odd number

    if (i % 2 != 0) {
        console.log(i);
    }
}

//2. Decrease by 3
for (var num = 1; num < 101; num++) {
    // check if the number is divisible by 3
    var checkForThree = num % 3;
    if (checkForThree == 0) {
        console.log(num);
    }
}

//3. Print the Sequence
var arr = ['4', '2.5', '1', '-0.5', '-2', '-3.5'];

console.log(arr);

//4. Sigma
function numSum(n) {
    var sum = 0;
    for (i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum)
}
numSum(100);

//5. Factorial 
var product = 1;
for(var i=1; i<13; i++) {
    product *= i;
}
console.log(product);