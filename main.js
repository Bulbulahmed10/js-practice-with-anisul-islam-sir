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

//  var letter = prompt('Enter a Letter : ')

//  letter.toLowerCase()

//  if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//   document.write('This is a Vowel letter : ' + letter + '</br>')
//  } else document.write('This is a Consonant letter : ' + letter )

/*
 switch
 */

// switch, case, break, default

// var digit = prompt("Enter any digit: ");

// switch (digit) {
//   case "0":
//     document.write("Zero");
//     break
//   case "1":
//     document.write("One");
//     break

//   case "2":
//     document.write("Two");
//     break

//   case "3":
//     document.write("Three");
//     break

//   case "4":
//     document.write("Four");
//     break

//   case "5":
//     document.write("Five");
//     break

//     default:
//       document.write('Please Provide a Valid Number (1-5)')
// }

// task 5----- input a letter and check it is vowel or consonant using switch.

// var identify = prompt('Enter a letter: ')
//  identify = identify.toLowerCase()

// switch (identify) {
//   case 'a':
//     document.write('Vowel')
//     break

//     case 'e':
//     document.write('Vowel')
//     break

//     case 'i':
//     document.write('Vowel')
//     break

//     case 'o':
//     document.write('Vowel')
//     break

//     case 'u':
//     document.write('Vowel')

//     default:
//       document.write('Consonant')
// }

/*
 Loop in javascript
 */

// for loop //

//  for (var i = 100; i >= 1; i--) {
//   if (i % 2 == 1) {
//     document.write(' ' + i)
//   }
//  }
// var n = parseInt(prompt('Enter the starting number: '));
// var m = parseInt(prompt('Enter the ending number: '));
// var sum = 0;

// for (var i = n; i <= m; i++) {
//   sum = sum + i
// }

// document.write(sum);

//while loop//

// var i = 1

// while(i <= 10) {

//   document.write(' '+ i)

//   i++;
// }

// sum = 0;

// for (i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     sum += i;
//   }
// }

// document.write(sum);

// do while loop//

// var i = 1

// do{
//   document.write(i)
//   i++
// } while (i <= 10)

/*
 ternary operator in javascript
 */

// var number = parseInt(prompt('Enter a number: '))
// var result =  number > 0 ? 'positive' : 'negative'
// document.write(result)

// var number1 = parseInt(prompt('Enter a First Number'))
// var number2 = parseInt(prompt('Enter a Second Number'))
// var number3 = parseInt(prompt('Enter a Third Number'))
// var result = number1 > number2 && number3 ? 'This is Big number (1) = ' + number1 : number2 > number1 && number3 ? 'This is Big number (2) = ' + number2 :'This is Big number (3) = ' + number3

// document.write(result)

/*
 function in javascript
 */

//  var x = parseInt(prompt('Enter First Input: '))
//  var y = parseInt(prompt('Enter Second Input: '))

//  function calculate(x, y) {
//   var sum = x + y;
//   document.write('Sum = ' + sum + '<br>')
//   var sub = x - y;
//   document.write('Sub = ' + sub + '<br>')
//   var multi = x * y;
//   document.write('Multi = ' + multi + '<br>')
//   var divide = x / y;
//   document.write('Divide = ' + divide + '<br>')
//  }

//  calculate(x, y)

// IIFEs (Immediately Invocable Function Expressions)

// (function display( ) {
//   console.log('hello');
// })()

// (function sum(x, y) {
//   console.log(x + y);
// })(15, 45)

/*
 Array in javascript
 */

//  var country1 = ['Bangladesh', 'India']
//  var country2 = ['Pakistan', 'Thailand']

// var country = country1.concat(country2)

// console.log(country);

// var num = [10, 24, 76, 86, 45, 87];
// var sum = 0;
// for (var i = 0; i < 6; i++) {
//   console.log(num[i]);
//   sum = sum + num[i]

// }

// console.log(sum);

// var num = new Array()
// var sum = 0

// for (var i = 0; i < 5; i++) {
//   num[i] = parseInt(prompt('Enter a number: '))
//   console.log(num[i]);
//   sum += num[i]
// }

// console.log('sum = ' + sum);

// Array methods
// shift(), unshift(), splice(pos,noe,ele1,ele2...)
//short(), reverse()

// var names = ["Anis", "Rabeya", "Kolpona"];

// shift opposite of pop
// names.shift()
// console.log(names);

// unshift opposite of push
// names.unshift('Bulbul')
// console.log(names);

// adding elements using splice

// names.splice(2,1,'karim', 'Rahim')
// console.log(names);

//removing elements using splice

// names.splice(1,2)
// console.log(names);

// console.log(names
//   );

//  var newArray =  names.slice(1)
//  console.log(newArray);
//  console.log(names);

// var sortedName = names.sort()
// var reverseName = names.reverse()
// console.log(reverseName);
// console.log(sortedName);

// var numbers = [20, 43, 3, 64, 64, 34]
// numbers.sort(function(a, b) {
//   return a - b
// })

// console.log(numbers);

// Create a function called highestScore that will receive a 1d array called scores and return the highest score

// var scores = [45, 34, 54, 64, 75, 34, 86];

// function highestScore(scores) {
//   var max = scores[0];
//   for (var i = 1; i < scores.length; i++) {
//     if (max < scores[i]) {
//       max = scores[i];
//     }
//   }
//   return max;
// }

// var maxScore = highestScore(scores);
// console.log(maxScore);

// var playersInfo = [
//   ["Ashraful", 95],
//   ["Mizan", 45],
//   ["Rakib", 62],
//   ["Neloy", 109],
// ];

// function highestRunScorer(playersInfo) {
//   var highestScorer = playersInfo[0][0];
//   var highestScore = playersInfo[0][1];

//   for (i = 1; i < playersInfo.length; i++) {
//     if (highestScore < playersInfo[i][1]) {
//       highestScore = playersInfo[i][1];
//       highestScorer = playersInfo[i][0];
//     }
//   }
//  return highestScorer;
// }

// var name = highestRunScorer(playersInfo);
// console.log(name);

// How to create an object
// How to print the value of an object
// Adding a constructor

// function Student(name, age, cgpa, lang) {
//   this.name = name;
//   this.age = age;
//   this.cgpa = cgpa;
//   this.lang = lang;

//   this.display = function() {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.cgpa);
//     console.log(this.lang);
//   }
// }

// var student1 = new Student("Rakib", 21, 3.65, ["Bengali", "Hindi", "English"]);
// var student2 = new Student("sakib", 24, 3.45, ["Bengali", "Urdu", "English"]);
// var student3 = new Student("mohim", 23, 3.56, ["Bengali","English"]);
// var student4 = new Student("Redoy", 24, 3.78, ["Bengali", "Portuguese", "English"]);

// student1.display()

// Guessing Game

// var numOfWon = 0;
// var numOfLost = 0;

// for (i = 1; i < 5; i++) {
//   var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

//   var randomNumber = Math.floor(Math.random() * 5) + 1;

//   if (guessNumber == randomNumber) {
//     console.log("You have Won");
//     numOfWon++
//   } else if (guessNumber > 5) {
//     console.log('Please provide a valid number');
//   } else {
//     console.log("You Lost. Random number was :" + randomNumber);
//     numOfLost++
//   }
// }

// document.write('Number of won = ' + numOfWon + '<br>');
// document.write('Number of lost = ' + numOfLost + '<br>');

//------------ DOM -------------//

//getElementById
// var myHeading = document.getElementById('heading1');var myHeading2 = document.getElementById('heading2')
// myHeading.innerHTML = 'hello'
// myHeading2.innerHTML = 'good bye good bye'
// var myPara = document.getElementById('para')

// myPara.innerHTML = 'hey bro'

// getElementById()
// getElementsByTagName()
// getElementsBYClassName()
// querySelector()

// document.querySelector('#pid').innerHTML = 'this is change'

// document.querySelector('.heading1').innerHTML = 'heading changed'

// document.querySelector('li a').innerHTML = 'new text'
// document.querySelector('.my-div a').innerHTML = 'new link'
// var myVar = document.querySelector("#img1");
// function myMassage() {
//   myVar.src = "img/4K Wallpapers By Sheri Sk (6).jpg";
// }

// function myMassage2() {
//   myVar.src = "img/4K Wallpapers By Sheri Sk (7).jpg";
// }



var heading3 = document.createElement('h1')
var text = document.createTextNode('This is heading 3')

heading3.appendChild(text)

var newDiv = document.getElementsByClassName('my-dev')[0];

newDiv.appendChild(heading3)


var heading2 = document.getElementsByTagName('h1')[1]

newDiv.removeChild(heading2)



var heading0 = document.createElement('h1')
var text0 = document.createTextNode('This is heading 0')

heading0.appendChild(text0)
var heading1 = document.getElementsByTagName('h1')[0]
newDiv.insertBefore(heading0, heading1)