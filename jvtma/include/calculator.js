/*
js. file for index.html 
Created by David Sajdl
Date: 14/02/2013
for Javascript TMA
userName: dsajdl01
Tutor name: Dionisis Dimakopoulos 
*/

// function init is called when the page is load. 
//It disables calculate loan and clear all buttons
function init()
{
	document.getElementById("disable").disabled = true;
	document.getElementById("Clearbtn").disabled = true;
}
window.onload=init;

/* getValues function call other functions and then check if the values in the label text box are valied
 and if they are greater than 1000 and smaller then 1,000,000,000
*/
function getValues()
{	
	var x = document.userForm.loanAmount.value;
	var check = checkInputNumbers(x); // called checkInputNumbers function with parameter string value.
	if(x.substring(0,1)!= '0')
		if(check == true) // if condition whether enters values are numbers then:
		{
			document.getElementById("error").innerHTML="";
			var amounts = getSumInLabel(x);
			if (amounts == "OK") //if numbers are between 1000 and 1000000000  then:
			{
				document.getElementById("disable").disabled = false;
				document.getElementById("error").innerHTML="";
				document.getElementById("worningMessage2").innerHTML="x";
				document.getElementById("worningMessage2").parentNode.style.color = "#efefef";
				document.getElementById("smaller").innerHTML="x"
				document.getElementById("smaller").parentNode.style.color = "#efefef";
			}
			else if (amounts == "smallAmount") // if numbers are smaller than 1000 then:
			{
				document.getElementById("disable").disabled = true;
				document.getElementById("error").innerHTML="*";
				document.getElementById("worningMessage2").innerHTML="x";
				document.getElementById("worningMessage2").parentNode.style.color = "#efefef";
				document.getElementById("smaller").innerHTML="The amount is too small.It must be greater than 1000"
				document.getElementById("smaller").parentNode.style.color = 'red';
			}
			else // if numbers are greater than 1000000000 then:
			{
				if ( x == "") // if amount is equal to bigAmount and text label is empty then
					{
						document.getElementById("disable").disabled = true;
						document.getElementById("error").innerHTML="";
						document.getElementById("worningMessage2").innerHTML="x";
						document.getElementById("worningMessage2").parentNode.style.color = "#efefef";
						document.getElementById("smaller").innerHTML="x"
						document.getElementById("smaller").parentNode.style.color = "#efefef";
					}
					else // otherwise, if is not and empty and amount is equal to bigAmount
					{
						document.getElementById("disable").disabled = true;
						document.getElementById("error").innerHTML="*";
						document.getElementById("worningMessage2").innerHTML="x";
						document.getElementById("worningMessage2").parentNode.style.color = "#efefef";
						document.getElementById("smaller").innerHTML="The amount is too big.It must be smaller than 1,000,000,000"
						document.getElementById("smaller").parentNode.style.color = 'red';
					}
			}
		}
		else // if the values are characters then:
		{
			document.getElementById("worningMessage2").innerHTML="Do not input any character letter or space e.g: {&#163; . , '}";
			document.getElementById("worningMessage2").parentNode.style.color = 'red';
			document.getElementById("disable").disabled = true;
			document.getElementById("error").innerHTML="*";
		}
	else // if first element is 0 then:
	{
		document.getElementById("disable").disabled = true;
		document.getElementById("error").innerHTML="*";
		document.getElementById("worningMessage2").innerHTML="x";
		document.getElementById("worningMessage2").parentNode.style.color = "#efefef"
		document.getElementById("smaller").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first digit cannot start with 0!"
		document.getElementById("smaller").parentNode.style.color = 'red';
	}
}
/* checkInputNumbers function with parameter check if the parameter values are numbers:
*/
function checkInputNumbers(z)
{
	for(var i = 0; i <z.length;i++) // for loop get all character in string from the parameter value z
	{
		if((z.charAt(i)<"0")||(z.charAt(i)>"9")) // if character is not between 0 to 9 then
		{
			return false; // if is not between 0 and 9 then return false
		}
	}
	return true; //otherwise return true 
}
/* getSumInLabel function check if the argument parameter value is greater than 1000 or smaller then 1000000000
*/
function getSumInLabel(input)
{
	var sums = parseInt(input); // it convert string into integer
	var totals = "";
	if (sums < 1000) // if the amount is smaller than 1000 then
	{
		totals = "smallAmount"; // totals get value smallAmount
	}
	else if (sums <= 1000000000) // if amount is smaller or equal than 1000000000 
	{
		totals = "OK"; // totals get value OK
	}
	else // else if amount is greater than 1000000000 
	{
		totals = "bigAmount"; // totals get value bigAmount
	}
	return totals; // return totals
}
/* getSum function get value from users input from text label, check box and protection 
then call other function called get result with three input parameter values

*/
function getSum()
{
	var amount = document.userForm.loanAmount.value;
	var year = document.userForm.yearsDropDown.value;
	var protecter = document.getElementById("insurence").checked;
	getResult(amount,year,protecter);
}
 /* getResult function have three arguments 
it ckeck input values and print out results 
*/
 function getResult(loan,years,protect)
{
	// initialize variables
	var num = parseInt(loan);
	var year1 = parseInt(years);
	var baseRate = 0.0425;
	var rate = 0.0;
	var totalRate = 0.0;
	var totalSum = 0.0;
	var months = year1 * 12;
	var monthlyInterest = 0.0;
	var monthlyPay = 0.0;
	var prt = 0.0;
	
	if(num <= 10000) // check if num is smaller or equal than 10,000 then
	{
		rate = 0.055;
		totalRate = num * (rate + baseRate);
		monthlyInterest = totalRate * year1;
		totalSum = num + monthlyInterest;
		monthlyPay = totalSum / months;
		if(protect == true) // check if protection has been selected if yes then
		{
			prt = (num * 0.05)/months;
			monthlyPay = monthlyPay + prt;
		}
	}
	else if(num <= 50000) // check if num is smaller or equal than 50,000 then 
	{
		rate = 0.045;
		totalRate = num * (rate + baseRate);
		monthlyInterest = totalRate * year1;
		totalSum = num + monthlyInterest;
		monthlyPay = totalSum / months;
		if(protect == true) // check if protection has been selected if yes then
		{
			prt = (num * 0.05)/months;
			monthlyPay = monthlyPay + prt;
		}
	}
	else if(num <= 100000) // check if num is smaller or equal than 100,000 then
	{
		rate = 0.035;
		totalRate = num * (rate + baseRate);
		monthlyInterest = totalRate * year1;
		totalSum = num + monthlyInterest;
		monthlyPay = totalSum / months;
		if(protect == true) // check if protection has been selected if yes then
		{
			prt = (num * 0.05)/months;
			monthlyPay = monthlyPay + prt;
		}
	}
	else if(num > 10000) // check if num is greater than 100,000 the
	{
		rate = 0.025;
		totalRate = num * (rate + baseRate);
		monthlyInterest = totalRate * year1;
		totalSum = num + monthlyInterest;
		monthlyPay = totalSum / months;
		if(protect == true)
		{
			prt =(num * 0.05)/months; // check if protection has been selected if yes then
			monthlyPay = monthlyPay + prt;
		}
	} // end of if statement
	
	// print out results
	document.getElementById("Clearbtn").disabled = false;
	document.getElementById("baseRate2").innerHTML=(baseRate * 100).toFixed(2)+"&#37;";
	document.getElementById("rate2").innerHTML=(rate * 100).toFixed(2) +"&#37;";
	document.getElementById("totalRate2").innerHTML=((rate + baseRate) * 100).toFixed(2) +"&#37;";
	if(year1 == 1) // check if selested year is equal to 1 then print year
	{
		document.getElementById("yearPayment2").innerHTML=year1 + " year";
	}
	else //if more than 1 year print years
	{
		document.getElementById("yearPayment2").innerHTML=year1 + " years";
	}
	document.getElementById("monthPayment2").innerHTML=months + " months";
	document.getElementById("monthlyInterest2").innerHTML="&#163;"+monthlyInterest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	if(protect == true) //check if protection has been checked if yes then print: 
	{
		var totalSumPrt = totalSum+(prt * months);
		document.getElementById("protection2").innerHTML="&#163;"+prt.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		document.getElementById("totalProtection2").innerHTML="&#163;"+(prt * months).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		document.getElementById("totalSumWithPrt2").innerHTML=totalSumPrt.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	else //if has not been checked then print:
	{
		document.getElementById("protection2").innerHTML="N/A";
		document.getElementById("totalProtection2").innerHTML="N/A";
		document.getElementById("totalSumWithPrt2").innerHTML="N/A";
		
	}
	document.getElementById("totalSum2").innerHTML="&#163;"+totalSum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById("monthlyPayment2").innerHTML="&#163;"+monthlyPay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/* getClear function clear text label, check box, disable buttons and clear print out from getSum function
*/
function getClear()
{
	document.getElementById("baseRate2").innerHTML="";
	document.getElementById("rate2").innerHTML="";
	document.getElementById("totalRate2").innerHTML="";
	document.getElementById("yearPayment2").innerHTML="";
	document.getElementById("monthPayment2").innerHTML="";
	document.getElementById("monthlyInterest2").innerHTML="";
	document.getElementById("protection2").innerHTML=""
	document.getElementById("totalSum2").innerHTML="";
	document.getElementById("monthlyPayment2").innerHTML="";
	document.getElementById("totalProtection2").innerHTML="";
	document.getElementById("totalSumWithPrt2").innerHTML="";
	frm1.loanAmount.value ="";
	frm1.loanAmount.focus();
	document.getElementById("insurence").checked =false;
	document.getElementById("disable").disabled = true;
	document.getElementById("Clearbtn").disabled = true;
	document.userForm.yearsDropDown.value = 1;
}