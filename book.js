var books = ["HTML Tags","CSS Classes","Js.net"];
var x = 1000;
var y = 2000;
var z = x + y;
var d = "1st-Mar-2019";
var answer1 = "600 pages";
var answer2 = "450 pages";
var answer3 = '300 pages';
var a = false;        
var b = new Boolean(true);
var person = {
  firstName: "Saleem Ahmed",
  lastName : "Khalid Ali",
  id     :  5566 ,
};


console.log(books);
document.getElementById("demo").innerHTML = 
"Book Name: " + books[0] + "<br>" + "Book Writer Name: " + person.firstName + "<br>" + 
"Book Publish Date: " + d + "<br>" + "Book price: " + "Rs." + z + "<br>" + "In this book: " 
+ answer1 + "<br>" + "Made in England: " 
+ (a==b);
