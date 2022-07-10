// alert('BUlbul Ahmed')
// document.write('I love Myself')
// console.log('I Love finalnd')

// var num = 2.5648
// console.log(num.toPrecision(3))

// var text =('Bangladesh')

// document.write(text.charAt(2))
// text = text.toUpperCase()
// document.write(text)

// var text1 = text.slice(2, 5)
// document.write(text1)

// var firstName = 'Bulbul '
// var lastName = ' Ahmed'

// var finalName = document.write(firstName +  lastName);
// document.write(finalName)

/*
 Calculator Project 
 */

// var num1 = prompt('Enter first number : ')
// var num2 = prompt('Enter second number : ')

// num1 = parseInt(num1, 10)
// num2 = parseInt(num2, 10)

// sum = num1 + num2;
// document.write(num1 + ' + ' + num2 + ' = '+sum + '</br>')

// sub = num1 - num2;
// document.write(num1 + ' - ' + num2 + ' = '+sub + '</br>')

// multiplication = num1 * num2
// document.write(num1 + ' * ' + num2 + ' = '+multiplication + '</br>')

// division = num1 / num2
// document.write(num1 + ' / ' + num2 + ' = '+division + '</br>')

// rem = num1 % num2
// document.write(num1 + ' % ' + num2 + ' = '+rem + '</br>')

/*
 area of shapes
 */

//  var base = parseFloat(prompt('Enter First Input :'))
//  var height = parseFloat(prompt('Enter Second Input :'))

//  square = base * height
//  document.write('Total Square Area' + ' = ' + square + '</br>')

//  rectangle = base * height
//  document.write('Total Rectangle Area' + ' = ' + rectangle + '</br>')

//  triangle = (base * height) / 2
//  document.write('Total Square Area' + ' = ' + triangle + '</br')

//  var trapezoidBase1 = parseFloat(prompt('Please enter base1 of trapezoid :'))
//  var trapezoidBase2 = parseFloat(prompt('Please enter base2 of trapezoid :'))
//  var trapezoidHeight = parseFloat(prompt('Please enter height of trapezoid :'))

//  areaOfTrapezoid = (trapezoidBase1 + trapezoidBase2) * trapezoidHeight /2
//  document.write('Total Trapezoid Area' + ' = ' + areaOfTrapezoid + '</br')

//  var farn = parseFloat(prompt('Enter Fahrenheit :'))

//  cels = (farn-32) * (5/9)

//  document.write('celsius : ' + cels)

/*
 letter grading
 */

// var num = parseInt(prompt("Enter Result Number"));

// if (num >= 80) {
//   document.write("You Got : A+");
// } else if (num >= 70) {
//   document.write("You Got : A");
// } else if (num >= 60) {
//   document.write("You Got : A-");
// } else if (num >= 50) {
//   document.write("You Got : B");
// } else if (num >= 40) {
//   document.write("You Got: C");
// } else if (num >= 33) {
//   document.write("You Got : D");
// } else if (num > 100 || num < 0) {
//   document.write("Invalid Marks");
// } else {
//   document.write("You Fail");
// }

/*
 identify large number
 */

// var num1 = prompt("Enter Number 1 : ");
// var num2 = prompt("Enter Number 2 : ");
// var num3 = prompt("Enter Number 3 : ");

// if (num1 > num2 && num1 > num3) {
//   document.write("Large Number 1 = "  + num1);
// } else if (num2 > num1 && num2 > num3) {
//   document.write("Large Number 2 = "  + num2);
// } else document.write("Large Number 3 = "  + num3)

/*
 identify Vowel & Consonant
 */

 var letter = prompt('Enter a Letter : ')

 letter.toLowerCase()

 if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
  document.write('This is a Vowel letter : ' + letter + '</br>')
 } else document.write('This is a Consonant letter : ' + letter )
