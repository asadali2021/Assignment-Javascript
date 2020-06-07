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









