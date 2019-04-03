var number = 5;
var myfirstobject = {FirstName: "Tom \"T-Dog\"", LastName: "Miller"}
var mysecondobject = myfirstobject
mysecondobject.FirstName = "Tim\"T-Dog\""
mysecondobject.MiddleName = "Hans"
number = 6;
number /= 2;
number = number % 2;
console.log("Hello from JavaScript"+number); // This is an inline comment
console.log("My First name is: "+myfirstobject.FirstName + "\nMiddle Name: "+myfirstobject.MiddleName)
console.log("My Middle name is: "+myfirstobject.MiddleName)
