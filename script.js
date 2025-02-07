// Question:-1
// You are provided with two numbers A and B. Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.
// Input Format
// The first line contains two integers A and B.
// Output Format = Return the result after adding two numbers.
// Constraints
// 1≤A, B≤5001≤, ≤500
// Example
// Sample Input
// 2 5
// Sample Output
// 7

function addTwoNumbers(a, b){
return a + b;
}

console.log(addTwoNumbers(10,20))

//output 30

// Q2. Find if the conditions are obeyed or not?
// You are given two number first as A� and second as B� and check if both conditions
// (A<10�<10 and A>B�>�) are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input.
// Input Format
// The first line contains two integers A�and B�.
// Output Format
// Return the result as true if the given condition gets satisfied, else false.
// Constraints
// 1≤A,B≤5001≤�,�≤500
// Example
// Sample Input
// 5 3

var a = 10
var b = 20

console.log(a<b)

// output: true

// Q3.Check the conditions
// You are given two numbers A�and B�. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
// Note: You have to complete Check function. No need to take any input.
// Input Format
// The first line contains two natural numbers A�and B�.
// Output Format
// Return the required result.
// Constraints
// 1≤A,B≤100001≤�,�≤10000
// Example
// Sample Input
// 12 20
// Sample Output
// true

var a  = 10
var b = 20

console.log(a%10==0 && b%10==0? "true": "false")

console.log(a%10!=0 && b%10!=0? "true": "false")

console.log(a%10!=0 || b%10==0? "true": "false")

// Q4.Find the first digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the first digit of that
// number.
// Note: You have to complete First_Digit function. No need to take any input.
// Input Format
// The first line contains one four digit natural number N�.
// Output Format
// Return the required result

var n = 5647

const res = Math.floor(n/1000)
console.log(res)

//output : 5


// Q5.Find the last digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the last digit of that
// number.
// Note: You have to complete Last_Digit function. No need to take any input.
// Input Format
// The first line contains one four digit natural number N�.
// Output Format
// Return the required result.
// Constraints
// 1000≤N≤99991000≤�≤9999
// Example
// Sample Input
// 4567
// Sample Output
// 7


var n = 2463

const result = Math.floor(n%10)
console.log(result)

//output : 3

// Q6.Find the remainder
// You are provided with two numbers A�and B�where A�as divisor and B�as dividend.Your
// task is find the remainder.
// Note: You have to complete Find_the_remainder function. No need to take any input.
// Input Format
// The first line of the input contains two integers A�and B�.
// Output Format
// Return the result after finding the remainder.
// Constraints
// 1≤A,B≤10001≤�,�≤1000
// Example
// Sample Input
// 2 9
// Sample Output
// 1

var a = 5
var b = 29

const remainder = b % a
console.log(remainder)

//output: 4

// Q8. Marks Calculator
// Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to
// calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.
// Input Format
// The input contains three numbers A�, B�and C�.
// Output Format
// Return the required result.
// Constraints
// 0≤A,B,C≤1000≤�,�,�≤100
// Example
// Sample Input
// 50 20 100
// Sample Output
// 170 56.67

var english_marks = 76
var math_marks = 89
var computer_marks = 90

const sum = english_marks + math_marks + computer_marks;
const average = sum / 3
console.log(`${sum} is the total marks shyams get`)
console.log(`${average} is the average of shyam's total marks`)

