
var cars = ["HTML tags","CSS classes","Js.net"];
var x = 1000;
var y = 2000;
var z = x + y;
var answer1 = "300 pages";
var answer2 = "450 pages";
var answer3 = '500 pages';
var a = false;        
var b = new Boolean(true);
var person = {
  firstName: "Saleem Ahmad",
  lastName : "Khalid Ali",
  id     :  5566 ,
};


console.log(cars);
document.getElementById("demo").innerHTML = 
"Book Name: " + cars[0] + "<br>" + "Book price: " + "Rs." + z + "<br>" + "In this book: " 
+ answer3 + "<br>" + "Book writer name: " + person.firstName + "<br>" + "Made in England: " 
+ (a==b);
