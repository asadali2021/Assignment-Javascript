//ALert | Javascript
// Note: Question 6 and 7 done in HTML file.
//Question 1
alert("Welcome To This Website.");
//Question 2
window.alert("Error! Please enter a valid password.");
//Question 3
alert("Welcome to JS Land..." + "\n" + "Happy Coding!");
//Question 4
alert("Welcome to JS Land...");
alert("Happy Coding!");
//Question 5
console.log("Hello... I can run JS through my web browser's console");

// Variables for Strings
// Question 1
var userName;
// Question 2
var myName = "Syed Asad Ali Niazi";
// Question 3
var message;
message = "Hello World";
alert(message);
// Question 4
var studentName = "John Doe";
var studentAge = "15 years old";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);
// Question 5
var pizza = "PIZZA" +"\n" +"PIZZ"+"\n"+"PIZ"+"\n"+"PI"+"\n"+"P";
alert(pizza);
// Question 6
var email;
email = "asadalif13@gmail.com";
alert("My Email is : " + email);
// Question 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn form the Book " + book);
// Question 8
document.write("Yah! I can write HTML content through JavaScript");
// Question 9
var design = "“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”";
alert(design);
document.write(design);
// Chapter 3 Variables for numbers
// Question 1
var age;
age = 25;
alert("I am "+ age + " years old");
// Question 2
var visit = 14;
alert("You have visited this site " + visit);
// Question 3
var birthyear = 1994;
document.write("My birthyear is " + birthyear + '<br>' + "Data type of my declared variable is number");
// Question 4
var visitorName= "<strong>John Doe</strong>";
var productTitle= "<strong>T-Shirt</strong>(s)";
var quantity = "<strong>5</strong>";
document.write("<br>"+visitorName+ " " + "ordered " + quantity+ " " + productTitle + " on XYZ Clothing store");

// Variable names : LEGAL AND ILLEGAL
// Question 1
var syed, asad, ali;
// Question 2
var asadAli,_four,trip1,sr_71_BlackBird,$work;
// var ?name,!age,3pizzas,@theSky,*starLight;
// ILLEGAL NAMES ARE IN THE COMMENT BECAUSE THEY WILL STOP THE EXECUTION OF THE PROGRAM
// Question 3
document.write("<h2>Rules for naming JS variables</h2>");
document.write("<br><br><br><br>");
document.write("Variable names can only contain, number,$ and _.For example: $my1<sup>st</sup>Variable");
document.write("<br>");
document.write("Variable must begin with a letter, $ or _ . For example: $name, _name or name");
document.write("<br>");
document.write("Variable names are case sensitive");
document.write("<br>");
document.write("Variable names should not be JS keywords");

// Chapter 5 Math Expressions
// Question 1
var a = +prompt("Enter 1st number: ");
var b = +prompt("Enter 2nd number:");
var c = a + b;
document.write("Sum of "+ a + " and " +  b + " is " + c);
document.write("<br>");
// Question 2
var a = +prompt("Enter 1st number: ");
var b = +prompt("Enter 2nd number:");
var c = a - b;
document.write("Sum of "+ a + " and " +  b + " is " + c);
document.write("<br>");
var a = +prompt("Enter 1st number: ");
var b = +prompt("Enter 2nd number:");
var c = a * b;
document.write("Sum of "+ a + " and " +  b + " is " + c);
document.write("<br>");
var a = +prompt("Enter 1st number: ");
var b = +prompt("Enter 2nd number:");
var c = a / b;
document.write("Sum of "+ a + " and " +  b + " is " + c);
document.write("<br>");
var a = +prompt("Enter 1st number: ");
var b = +prompt("Enter 2nd number:");
var c = a % b;
document.write("Sum of "+ a + " and " +  b + " is " + c);
document.write("<br>");
// // Question 3
var number;
var declare = document.write("Value after variable declaration is :" + number);
number = 5;
document.write("<br>");
document.write("Initial value: " + number);
number++;
document.write("<br>");
document.write("Value after increment is: " + number);
document.write("<br>");
var x = 7;
number = number + x;
document.write("Number after addition is: " + number);
document.write("<br>");
number--;
document.write("Value after decrement is: " + number);
document.write("<br>");
number = number/3;
document.write("The remainder is: " + number);
document.write("<br>");
// // Question 4
var ticketPrice = 600; 
ticketPrice = ticketPrice*5;
document.write("Total cost to buy 5 tickets to a movie is: " + ticketPrice + " PKR");
document.write("<br>");
// Question 5
document.write("Table of <b>5</b>"+ "<br>");
for(var i=1 ; i<=10; i++){
   document.write("5" + "x" + i + "=" + 5*i + "<br>");
}
document.write("<br>");
// Question 6
document.write("<h2>Temperature converter: </h2>");
var C = +prompt("Enter value in C: ");
var F = +prompt("Enter value in F: ");
var Cd;
var Fd;
Cd = (F-32)*5/9;
Fd = (C*9/5)+32;
document.write("&deg;",Cd + " is: " + Fd + "<br>");
document.write(Fd +" is: " + "&deg;",Cd);
document.write("<br>");
// Question 7
var d = prompt("Price of item 1: ");
var e = prompt("Price of item 2: ");
var f = prompt("Ordered quantitiy of item 1: ");
var g = prompt("Ordered quantity of item 2: ");
var h =  "Shipping charges";
var p = (d * f + e * g);
var z = 100;
var j = p+z;
document.write("<h1>Shopping Cart </h1>");
document.write("<br> <br>");
document.write("Price of item 1: " + d + "<br>");
document.write("Quantity of item 1: " + f + "<br>");
document.write("Price of item 2: " + e + "<br>");
document.write("Quantity of item 2: " + g + "<br>");
document.write("Shipping Charges: " + "100" + "<br>");
document.write("<br> <br>");
document.write("Total cost of your order is: "+j + "<br>");
document.write("<br>");
// Question 8
var totMarks=  980;
var marksObt = 804;
document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("Total marks: " + totMarks);
document.write("<br>");
document.write("Marks obtained: " + marksObt);
document.write("<br>");
var per = (marksObt/totMarks)*100;
document.write("Percentage: " + per + "%");

document.write("<br>");
// Question 9
document.write("<h1>Currency in PKR</h1>");
document.write("<br>");
var A = +prompt("Enter US Dollars: ");
var B = +prompt("Enter Saudi Riyal: ");
var a = 104.80;
var b = 28;
var C = (A*a)+(B*b);
var pak = document.write("Total Currency in PKR is: " + C + "PKR");
document.write("<br>");
// Question 10
var a = 5;
var b=5;
var c = (a+b*10)/2;
document.write(c);

// Question 11
var currentYear = 2020;
var birthYear = +prompt("Enter your birth year: ");
var age = currentYear - birthYear;
document.write("<br>");
document.write("<h1>Age Calculator: </h1>" + "<br><br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age + " years old");
document.write("<br>");
// Question 12
var radiusOfCircle = 20;
var pi = 3.142;
var circumferenceOfCircle = 2*pi*radiusOfCircle;
var areaOfCircle = pi*(radiusOfCircle*radiusOfCircle);
document.write("<h1>The Geometrizer: </h1>" + "<br><br>");
document.write("Radius of a circle: " + radiusOfCircle + "<br><br>");
document.write("The circumference is: " + circumferenceOfCircle + "<br><br>");
document.write("The area is: " + areaOfCircle + "<br>");

// Question 13

var favSnack = "Burger";
var curAge = 15;
var maxAge = 65;
var perDay = 3;
var calc = (maxAge - curAge) * 3;
document.write("<h1>The Lifetime Supply Calculator: </h1>"+"<br><br>");
document.write("Favourite Snack: " + favSnack + "<br>");
document.write("CurrentAge: " + curAge +"<br>");
document.write("Esitimated Maximum Age: "+ maxAge + "<br>");
document.write("Amount of snacks per day: " + 3 +"<br>");
document.write("You will need " + calc + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>");
// Chapter 6 to 9
// Question 1
var a = +prompt("Enter a number: ");
document.write("The value of a is: " + a + "<br> <br>");
document.write(".............................."+ "<br><br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br> <br>");
document.write("The value of a++ is : " + a++ + "<br>");
document.write("The value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("The value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("The value of a is: " + a + "<br><br>");

// Question 2
document.write("<h3>Given that: </h3>" +"<br>");
document.write("var a = 2, b = 1 "+"<br>"); 
document.write("var result = --a - --b + ++b + b--" +"<br>");
document.write("<h3>To find: </h3>" +"<br>");
document.write("Stage 1: " +"<br>"); 
document.write("--a,  that is: --a is 1 so a = 1" +"<br>");
document.write("Stage 2: " +"<br>"); 
document.write("--a - --b , that is : a is 1 and b is 0" + "<br>");
document.write("Stage 3: " + "<br>");
document.write("--a - --b + ++b, that is: a is 1 ,b is 0 then b is 1" +"<br>");
document.write("Stage 4:" + "<br>");
document.write("--a - --b + ++b + b--, that is: a is 1, b is 0 b is 1 then b is 1 but is decreased to 0." +"<br>");
document.write("The output is : 3" +"<br>");

// Question 3
var z = prompt("Enter your name: ", "Enter your name here. . . ");
document.write("Hey " + z + " Welcome To Our Website And Have A Nice Day." + "<br>");
// Question 4
// var x = prompt("Enter a number you want to see table of..." , "Enter table number");
var num = prompt("Enter Number", "0") //prompt user to enter the number

var num = parseInt(num); //parse the num to number
var i = 0;

document.write('<table border="1" cellspacing="0">');
for(i=1;i<=10;i++) {
    document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
}
var w = 5;
document.write("</table>");
if(c = NaN){
        for(var i = 1; i<=10; i++){
        document.write(w + " x " + i + " = " + i*w + "<br>");
        }
    }
// var b = 1;
// var f = 2
// var c = a + b;
// var d = a + f;


//     for(var i = 1; i<=10; i++){
//         if(c===(parseInt(a) +b) ){
//             document.write(a + " x " + i + " = " + i*a + "<br>");
//         }
//         else if(d!==(parseInt(a)+f) ) {
//             document.write(5 + " x " + i + " = " + i*5 + "<br>");
//         }
        
    

// }
// var i = 1;
// var d = x ++;
// var c = parseInt(x) ++;  
// console.log(typeof(x));
// if(typeof(b)==typeof(x)){
//     document.write(a + " x " + i + " = " + i*x + "<br>");
// }
// else if(typeof(b)!=typeof(x)) {
// Chapter 6 to 9
// Question 1
var a = +prompt("Enter a number: ");
document.write("The value of a is: " + a + "<br> <br>");
document.write(".............................."+ "<br><br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br> <br>");
document.write("The value of a++ is : " + a++ + "<br>");
document.write("The value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("The value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("The value of a is: " + a + "<br><br>");

// Question 2
document.write("<h3>Given that: </h3>" +"<br>");
document.write("var a = 2, b = 1 "+"<br>"); 
document.write("var result = --a - --b + ++b + b--" +"<br>");
document.write("<h3>To find: </h3>" +"<br>");
document.write("Stage 1: " +"<br>"); 
document.write("--a,  that is: --a is 1 so a = 1" +"<br>");
document.write("Stage 2: " +"<br>"); 
document.write("--a - --b , that is : a is 1 and b is 0" + "<br>");
document.write("Stage 3: " + "<br>");
document.write("--a - --b + ++b, that is: a is 1 ,b is 0 then b is 1" +"<br>");
document.write("Stage 4:" + "<br>");
document.write("--a - --b + ++b + b--, that is: a is 1, b is 0 b is 1 then b is 1 but is decreased to 0." +"<br>");
document.write("The output is : 3" +"<br>");

// Question 3
var z = prompt("Enter your name: ", "Enter your name here. . . ");
document.write("Hey " + z + " Welcome To Our Website And Have A Nice Day." + "<br>");
// Question 4
// var x = prompt("Enter a number you want to see table of..." , "Enter table number");
var num = prompt("Enter Number", "0") //prompt user to enter the number

var num = parseInt(num); //parse the num to number
var i = 0;

document.write('<table border="1" cellspacing="0">');
for(i=1;i<=10;i++) {
    document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
}
var w = 5;
document.write("</table>");
if(c = NaN){
        for(var i = 1; i<=10; i++){
        document.write(w + " x " + i + " = " + i*w + "<br>");
        }
    }
// var b = 1;
// var f = 2
// var c = a + b;
// var d = a + f;


//     for(var i = 1; i<=10; i++){
//         if(c===(parseInt(a) +b) ){
//             document.write(a + " x " + i + " = " + i*a + "<br>");
//         }
//         else if(d!==(parseInt(a)+f) ) {
//             document.write(5 + " x " + i + " = " + i*5 + "<br>");
//         }
        
    

// }
// var i = 1;
// var d = x ++;
// var c = parseInt(x) ++;  
// console.log(typeof(x));
// if(typeof(b)==typeof(x)){
//     document.write(a + " x " + i + " = " + i*x + "<br>");
// }
// else if(typeof(b)!=typeof(x)) {
//     document.write(5 + " x " + i + " = " + i*5 + "<br>");
// }

// if(c !=NaN){
//     for(var i = 1; i<=10; i++){
//     document.write(x + " x " + i + " = " + i*x + "<br>");
//     }
// }
// else if(c = N) {
//     for(var j = 1; j<=10; j++){
//     document.write(5 + " x " + j + " = " + j*5 + "<br>");
//     }
//     c != parseInt(x) ++;
// }
// Question 6

var l = prompt("Enter any subject name: " , "Enter subject here... ");
var m = prompt("Enter any subject name: " , "Enter subject here... ");
var n = prompt("Enter any subject name: " , "Enter subject here... ");
var totMarks= 100; 
var marksOtained1 =+prompt("Enter subject marks: " , "Enter marks here... ");
var marksOtained2 =+prompt("Enter subject marks: " , "Enter marks here... ");
var marksOtained3 =+prompt("Enter subject marks: " , "Enter marks here... ");
var percentage1 = (marksOtained1/totmarks)*100;
var percentage2 = (marksOtained2/totmarks)*100;
var percentage3 = (marksOtained3/totmarks)*100;
document.write('<table border="1" cellspacing="0">');
document.write("<tr>");
document.write("<td>Subject</td> <td>Total Marks</td> <td>Obtained Marks</td> <td>Percentage</td>");
document.write("</tr>");





document.write('</table>');
// table(rows, cols){
    document.write('<table border="1">');
      for (var i=0; i < rows; i++){
       document.write('<tr>');
    
      for (var j=0; j < cols; j++) {
        document.write('<td>' + 'cell' + '</td>');
       }
       document.write('</tr>');
     }
    document.write('</table>');
    // Chapter 9 to 11
// Question 1

var arr = ["Karachi", "karachi"];
var p = prompt("Enter city name: " , "city name here...");
if(p === "Karachi"){
    alert("Welcome to city of lights");
}
else if(p === "karachi"){
    alert("Welcome to city of lights");
}
else
alert("Please Enter Karachi");


// Question 2
var gender = ["Male", "male","female", "Female"];
var q = prompt("Enter gender: " , "your gender here...");
if(q === "male" || q === "Male"){
    alert("Good Morning Sir");
}
else if(q === "FemaLe" || q === "female"){
    alert("Good Morning Ma'am");
}
else
alert("Please Enter Valid Gender");
// Question 3

var color1 = ["red","Red", "yellow", "Yellow" , "green" , "Green"];
var u = prompt("Enter color of road traffic signal", "Enter color here...");
if(u === "red" || u === "Red"){
    alert("Must Stop");
}
else if(u === "yellow" || u === "Yellow"){
    alert("Reday to move");
}
else if(u === "green" || u === "Green"){
    alert("Move now");
}

// Question 4

var r = prompt("Enter remaining fuel in car: " , "enter fuel in liters...");
if(r <= 0.25){
    alert("Please refill the fuel in your car");
}

//  Question 5

var a = 4; if (++a === 5){
     alert("given condition for variable a is true"); 
    }

 var b = 82; if (b++ === 83){ 
     alert("given condition for variable b is true"); 
    }
 var c = 12;
  if (c++ === 13){ 
     alert("condition 1 is true");
    }
     if (c === 13){ 
        alert("condition 2 is true"); 
    } 
    if (++c < 14){
         alert("condition 3 is true"); 
        } 
        if(c === 14){
             alert("condition 4 is true"); 
            }
 var materialCost = 20000; 
 var laborCost = 2000;
  var totalCost = materialCost + laborCost; 
  if (totalCost === laborCost + materialCost){
       alert("The cost equals"); 
    }
 if (true){
      alert("True");
 }
  if (false){
      alert("False"); 
}
 if("car" < "cat"){ 
     alert("car is smaller than cat"); 
}

// Chapter 9 to 11
// Question 1

var arr = ["Karachi", "karachi"];
var p = prompt("Enter city name: " , "city name here...");
if(p === "Karachi"){
    alert("Welcome to city of lights");
}
else if(p === "karachi"){
    alert("Welcome to city of lights");
}
else
alert("Please Enter Karachi");


// Question 2
var gender = ["Male", "male","female", "Female"];
var q = prompt("Enter gender: " , "your gender here...");
if(q === "male" || q === "Male"){
    alert("Good Morning Sir");
}
else if(q === "FemaLe" || q === "female"){
    alert("Good Morning Ma'am");
}
else
alert("Please Enter Valid Gender");




// Question 4
// var gender = ["Male", "male","female", "Female"];
var r = prompt("Enter remaining fuel in car: " , "enter fuel in liters...");
if(r <= 0.25){
    alert("Please refill the fuel in your car");
}
//  Question 5

var a = 4; if (++a === 5){
     alert("given condition for variable a is true"); 
    }

 var b = 82; if (b++ === 83){ 
     alert("given condition for variable b is true"); 
    }
 var c = 12;
  if (c++ === 13){ 
     alert("condition 1 is true");
    }
     if (c === 13){ 
        alert("condition 2 is true"); 
    } 
    if (++c < 14){
         alert("condition 3 is true"); 
        } 
        if(c === 14){
             alert("condition 4 is true"); 
            }
 var materialCost = 20000; 
 var laborCost = 2000;
  var totalCost = materialCost + laborCost; 
  if (totalCost === laborCost + materialCost){
       alert("The cost equals"); 
    }
 if (true){
      alert("True");
 }
  if (false){
      alert("False"); 
}
 if("car" < "cat"){ 
     alert("car is smaller than cat"); 
}


// Question 6
document.write("<h1>Marks Sheet</h1>" + "<br> <br>");
var totMarks= 100; 
var marksObtained1 =+prompt("Enter subject marks: " , "Enter marks here... ");
var marksObtained2 =+prompt("Enter subject marks: " , "Enter marks here... ");
var marksObtained3 =+prompt("Enter subject marks: " , "Enter marks here... ");
var allMarks = totMarks*3;
var percentage1 = ((marksObtained1/totMarks)*100).toFixed(2);
var percentage2 = ((marksObtained2/totMarks)*100).toFixed(2);
var percentage3 = ((marksObtained3/totMarks)*100).toFixed(2);
var r1, r2,r3,r4;
r1 = "Excellent";
r2 = "Good";
r3 = "You need to improve";
r4 = "Sorry";
var allMarks2 = parseInt(marksObtained1+marksObtained2+marksObtained3);
var allPercentage = parseInt(percentage1+percentage2+percentage3);
if(allMarks2 >= 80){
    document.write("Total Marks: " + allMarks + "<br>");
    document.write("Marks Obtained: " + allMarks2 + "<br>");
    document.write("Percentage: " +  allPercentage+  "%" + "<br>");
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: " + r1);

}
else if(allMarks2 >= 70){
    document.write("Total Marks: " + allMarks + "<br>");
    document.write("Marks Obtained: " + allMarks2 + "<br>");
    document.write("Percentage: " +  allPercentage+  "%" +"<br>");
    document.write("Grade: A" + "<br>");
    document.write("Remarks: " + r2);

}
else if(allMarks2 >= 60){
    document.write("Total Marks: " + allMarks + "<br>");
    document.write("Marks Obtained: " + allMarks2 + "<br>");
    document.write("Percentage: " +  allPercentage+  "%" +"<br>");
    document.write("Grade: B" + "<br>");
    document.write("Remarks: " + r3);

}
else if(allMarks2 < 60){
    document.write("Total Marks: " + allMarks + "<br>");
    document.write("Marks Obtained: " + allMarks2 + "<br>");
    document.write("Percentage: " +  allPercentage+  "%" +"<br>");
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: " + r4);

}
// Question 7
var secretNum = 4;
var guess = +prompt("Guess the number" , "Enter number here...");
if(guess === 4){
    alert("Bingo! Correct Answer");
}
else if(guess === secretNum+1){
    alert("Close enough to the correct answer");
}

// Question 8

// Question 9
var num = prompt("Enter any number: ");
if((num % 2) === 0){
    document.write("It is an even number");

}
 else{
     document.write("It is an odd number");
 }

//  Question 10
var temp = prompt("Enter temperature: ");
if(temp > 40){
    document.write("It too hot outside");
}
else if(temp > 30){
    document.write("The weather today is normal");
}
else if(temp < 20){
    document.write("Today's weather is cool");
}
else if(temp < 10){
    document.write("OMG! Today's weather is so cool.");
}

// Question 11


 var a = +prompt("Enter first number");
 var b =  +prompt("Enter second number");
 var c =  prompt("Enter operator (+,-,*,/)");
 if( c == "+"){
    var d = a + b;
    document.write(d); 
 }
else if( c == "-"){
    var d = a - b;
    document.write(d); 
 }
 else if( c == "*"){
    var d = a * b;
    document.write(d); 
 }
 else if( c == "/"){
    var d = a / b;
    document.write(d); 
 }
// Chapter 11- 12
// Question 1


// Question 2
var a = +prompt("Enter 1st number");
var b = +prompt("Enter 2nd number");
if(a > b){
    document.write(a);
}
else if(b > a){
    document.write(b);

}
else if( b == a){
    document.write("Both numbers are equal");
}
// Question 3
var c = +prompt("Enter a number");
if(c == "+c"){
    document.write(c + "Number is Positive");
}
else if(c == "-c"){
    document.write(c + "Number is Negative");
}
else if(c == "0"){
    document.write(c + "Zero");
}
// Question 4
var vowel = prompt("Enter a character");
var alpha = ["a","A", "e", "E", "i","I", "o","O","u", "U"];

if(alpha === vowel && vowel === "a" || vowel === "A"){
    document.write("true");
} 
else if(alpha === vowel && vowel === "e" || vowel === "E"){
    document.write("true");
} 
else if(alpha === vowel && vowel === "i" || vowel === "I"){
    document.write("true");
} 
else if(alpha === vowel && vowel === "o" || vowel === "O"){
    document.write("true");
} 
else if(alpha === vowel && vowel === "u" || vowel === "U"){
    document.write("true");
} 
else{
    document.write("false");
}
// Question 5

// Question 6

var greeting; 
var hour = 13; 
if (hour < 18){ 
    greeting = "Good day";
    document.write(greeting);
     
}
else{
    greeting = "Good evening";
    document.write(greeting);

}  
// Question 7
var time24 = prompt("Enter time in 24Hrs Format");
if(time24 >= 17 && time <= 21){
    document.write("Good Evening");
}
//  Chapter 14 to 16
// Question 1
var studentNames = [];
// Question 2
var  studntNames = {

};
//  Question 3
var str = ["Syed","asad" , "ali", "Engineer"];
// Question 4
var numb = [1 , 2 , 3 , 4 , 5 , 6, 7, 8, 9, 10];
// Question 5
var bool = [true , false];
// Question 6
var mixedArray= {
    name: "asad",
    age: 26,
    gender: "male",
    qualification: "Graduate",
} ;
// Question 7
var Qualify = ["1) SSC" , "2) HSC" , "3) BCS" , "4) BS" , "5) BCOM" , "6) MS" , "7) M.Phil." , "8) PhD"];
document.write("<h3>Qualifications: </h3>" + "<br>");
document.write(Qualify[0] + "<br>");
document.write(Qualify[1] + "<br>");
document.write(Qualify[2] + "<br>");
document.write(Qualify[3]+ "<br>");
document.write(Qualify[4]  + "<br>");
document.write(Qualify[5] + "<br>");
document.write(Qualify[6] + "<br>");
document.write(Qualify[7]  + "<br>");

// Question 8
var stNames=["asad" , "ahmed" , "Yousuf"];
var totMarks= 500;
var obtMaarks1= 322;
var obtMaarks2= 232;
var obtMaarks3= 480;
var stMarks=[obtMaarks1 , obtMaarks2 , obtMaarks3];
var percentage1= ((obtMaarks1/totMarks)*100).toFixed(2);
var percentage2= ((obtMaarks2/totMarks)*100).toFixed(2);
var percentage3= ((obtMaarks3/totMarks)*100).toFixed(2);
var stPercent = [percentage1 , percentage2 , percentage3];
document.write("Score of "+ stNames[0] + " is " +  stMarks[0] + " Percentage: " + percentage1 +" % " + "<br>");
document.write("Score of "+ stNames[1] + " is " +  stMarks[1] + " Percentage: " + percentage2 +" % "+ "<br>");
document.write("Score of "+ stNames[2] + " is " +  stMarks[2] + " Percentage: " + percentage3 +" % "+ "<br>");


// Question 9

var color= ["blue" ,"red", "yellow" , "Cream" , "green", "aqua" , "orange", "white"];
var user1 = prompt("Enter colors at the beginning ... ");
user1.toString;
color.unshift(user1);
document.write(color + "<br>");
var user2 = prompt("Enter colors at the ending ... ");
color.push(user2);
alert("Adding 2 more colors: Violet & Indigo");
color.unshift("Violet", "Indigo");
document.write(color + "<br>");
color.shift();
document.write(color + "<br>");
color.pop();
document.write(color + "<br>");
var user3 = +prompt("array is (0 to 11) .If you want to add color at any position... " , "Enter any 1 position from 0 to 11");
if(user3 == 1){}

// Question 10 
var stScores=[320 , 230 , 480, 120];
document.write("Scores Of Students: " + stScores + "<br>");
var done = stScores.sort();

document.write("Ordered Scores of Students: " + done+ "<br>");
// Question 11
var cityNames=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities List: " +"<br>");
document.write(cityNames +"<br>");
var selectedCities= ["Karachi", "Lahore"];
document.write("Selected Cities list: " +"<br>");
document.write(selectedCities +"<br>");
var anotherList = cityNames.slice(0,4);
document.write(selectedCities+ anotherList +"<br>");

// Question 12
var arr = ["This", "is", "my", "cat"];
document.write(arr + "<br>");
var final = arr.join();
document.write(final + "<br>");
//  Question 13
var newarr1= ["keyboard","mouse","printer","monitor"];
// Question 14
var newarr2= ["keyboard","mouse","printer","monitor"];
// Question 15
var manufact = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" & "Haier"];
document.write("<select>"+ '<options>'+manufact+'</options>'+"</select>"+ "<br>");

//  Chapter 17 to 20
// Question 1
var multiarr= [
    "cat", "dog", "lion"
];
var arr5=[multiarr];
    
// Question 2
var mult= [0, 1 ,2 ,3 + "<br>"+ 1, 0, 1, 2 + "<br>" + 2, 1, 0 ,1 + "<br>"];
    num1=[mult];
    document.write(num1);

 
// Question 3

for(var i=0 ; i<=10 ; i++){
    document.write(i + "<br>");
};
//  Question 4
var tab = prompt("Enter number for multiplication table");
var length= prompt("Enter length you want of the table to be...");
for(var p=1 ; p<=length; p++){
    document.write(tab + " " + " x " + p + " " + "=" + tab*p + "<br>");

}
// Question 5
var fruits = ["apple" , "banana" , "orange", "mango" , "strawberry"];
var fresh = fruits.toString;
for(fresh=fruits[0] ; fresh<=fruits[4]; fresh++){
    document.write(fresh +"<br>");
    
}
document.write("Element at index 0 is " + fruits[0] 
    +"<br>" + "Element at index 1 is " + fruits[1] +"<br>" +"Element at index 2 is " + fruits[2]
    +"<br>"+ "Element at index 3 is " + fruits[3] + "<br>" + "Element at index 4 is " + fruits[4] +"<br>");
// Question 6
document.write("<h2>Counting: </h2>" +"<br>");
for(var num=0 ; num<=10 ; num++){
    document.write(" "+num+",");
}
document.write("<br>");
document.write("<h2>Reverse Counting: </h2>" +"<br>");
for(var numOne=10 ; numOne>=0 ; numOne--){
    document.write(" "+numOne+",");
}
 document.write("<br>");
 document.write("<h2>Even: </h2>" +"<br>");
for(var numtwo=0 ; numtwo<=20; numtwo=numtwo+2){
    
        document.write( " " + numtwo+",");
    
    
};

document.write("<br>");
document.write("<h2>Odd: </h2>" +"<br>");
for(var numthree=1 ; numthree<=19; numthree=numthree+2){
    document.write(" " + numthree+",");
}
document.write("<br>");
document.write("<h2>Series: </h2>" +"<br>");
for(var series=2 ; series<=20 ; series=series+2){
    document.write(" "+series+"k"+",");
}
document.write("<br>");
// Question 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var welCome = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
if(welCome === "cake" || welCome === "apple pie" || welCome === "cookie" || welCome === "chips" || welCome === "patties"){
    document.write(welCome + " is <b>available</b> at index " + " 0  "+" in our bakery" +"<br>");
}
else if(welCome === "cake" || welCome === "apple pie" || welCome === "cookie" || welCome === "chips" || welCome === "patties"){
    document.write(welCome + " is <b>available</b> at index " + " 1 "  + " in our bakery" +"<br>");
}
else if(welCome === "cake" || welCome === "apple pie" || welCome === "cookie" || welCome === "chips" || welCome === "patties"){
    document.write(welCome + " is <b>available</b> at index " + " 2 "  + " in our bakery" + "<br>");
}
else if(welCome === "cake" || welCome === "apple pie" || welCome === "cookie" || welCome === "chips" || welCome === "patties"){
    document.write(welCome + " is <b>available</b> at index " + " 3 " + " in our bakery"+ "<br>");
}
else if(welCome === "cake" || welCome === "apple pie" || welCome === "cookie" || welCome === "chips" || welCome === "patties"){
    document.write(welCome + " is <b>available</b> at index " + " 04" + " in our bakery"+ "<br>");
}
else if(welCome !== A){
    document.write("We are Sorry." + welCome + " is <b>not available</b> in our bakery. " +"<br>");
}
// Question 8
var B = [24, 53, 78, 91, 12];
document.write("Array items: " + B);
if(B[0]>B[1] && B[0]>B[2] && B[0]>B[3] && B[0]>B[4]){
    document.write("<br>" + "Larger number is: "+ B[0]);

}
else if(B[1]>B[0] && B[1]>B[2] && B[1]>B[3] && B[1]>B[4]){
    document.write("<br>"+ "Larger number is: " + B[1]);

}
else if(B[2]>B[0] && B[2]>B[1] && B[2]>B[3] && B[2]>B[4]){
    document.write("<br>" + "Larger number is: "+ B[2]);

}
else if(B[3]>B[0] && B[3]>B[1] && B[3]>B[2] && B[3]>B[4]){
    document.write("<br>"+ "Larger number is: " + B[3]);

}
else if(B[4]>B[0] && B[4]>B[1] && B[4]>B[2] && B[4]>B[3]){
    document.write("<br>"+  "Larger number is: " +B[4] +"<br>");
}
// Question 9 
var S = [24, 53, 78, 91, 12];
document.write("<br>"+"Array items: " + S +"<br>");
if(S[0]<S[1] && S[0]<S[2] && S[0]<S[3] && S[0]<S[4]){
    document.write("<br>" + "Smaller number is: "+ S[0]);

}
else if(S[1]<S[0] && S[1]<S[2] && S[1]<S[3] && S[1]<S[4]){
    document.write("<br>" + "Smaller number is: "+ S[1]);

}
else if(S[2]<S[0] && S[2]<S[1] && S[2]<S[3] && S[2]<S[4]){
    document.write("<br>" + "Smaller number is: "+ S[2]);

}
else if(S[3]<S[0] && S[3]<S[1] && S[3]<S[2] && S[3]<S[4]){
    document.write("<br>" + "Smaller number is: "+ S[3]);

}
else if(S[4]<S[0] && S[4]<S[1] && S[4]<S[2] && S[4]<S[3]){
    document.write("<br>"  +  "Smaller number is: "+S[4]);
}
document.write("<br>");
// Question 10
for(var mul5=5; mul5<=100; mul5=mul5+5){
    document.write(" "+mul5);
}









