using System;
var enteredString = "14/12/2009";
DateTime enteredDate = DateTime.Parse(enteredString).AddYears(1);
var xdate = DateTime.ParseExact(enteredString,"dd/MM/yyyy",null).AddYears(1);

var exp = xdate.ToString("dd/MM/yyyy");
return exp;
Console.WriteLine(exp);
//return enteredString;