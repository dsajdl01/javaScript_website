/*
js. file for Yum Juice
Created by David Sajdl
Date: 12/04/2013
for Javascript TMA
userName: dsajdl01
Tutor name: Dionisis Dimakopoulos 
*/

/*-----------------------------------------------------------------------------------------------
CLASS THAT DECLARE INSTANCE VARIABLES
-------------------------------------------------------------------------------------------------*/
function JuicesDescription()
{
	this.name = "";
	this.type = "";
	this.price = "";
}
/*---------------------------------------------------------------------------------------------------------------
On loading page print out juice name 
juice type and juice price 
-----------------------------------------------------------------------------------------------------------------*/

function onPageLoad()
{
	var juices = new Array(10);
	
	for( var i = 0; i < juices.length; i ++)
	{
		juices[i] = new JuicesDescription();
	}
	generateJuices(juices);
	for(var j = 0; j < juices.length; j++)
	{
		if(j == 0)
		{
			document.getElementById("citrusHeading").innerHTML=juices[j].name;
			document.getElementById("type1").innerHTML=juices[j].type;
			document.getElementById("price1").innerHTML="&#163;" + juices[j].price.toFixed(2);
		}
		else if(j == 1)
		{
			document.getElementById("appleHead").innerHTML=juices[j].name;
			document.getElementById("type2").innerHTML=juices[j].type;
			document.getElementById("price2").innerHTML="&#163;" + juices[j].price.toFixed(2);
		}
		else if(j == 2)
		{
			document.getElementById("pearHead").innerHTML=juices[j].name;
			document.getElementById("type3").innerHTML=juices[j].type;
			document.getElementById("price3").innerHTML="&#163;" + juices[j].price.toFixed(2);
		}
		else if(j == 3)
		{
			document.getElementById("bananaHead").innerHTML=juices[j].name;
			document.getElementById("type4").innerHTML=juices[j].type;
			document.getElementById("price4").innerHTML="&#163;" + juices[j].price.toFixed(2);
		}
		else if(j == 4)
		{
			document.getElementById("strowHead").innerHTML=juices[j].name;
			document.getElementById("type5").innerHTML=juices[j].type;
			document.getElementById("price5").innerHTML="&#163;" + juices[j].price.toFixed(2);
		}
		else if(j == 5)
		{
			document.getElementById("mixBerHead").innerHTML=juices[j].name;
			document.getElementById("type6").innerHTML=juices[j].type;
			document.getElementById("price6").innerHTML="&#163;" + juices[j].price.toFixed(2);
		}
		else if(j == 6)
		{
			document.getElementById("carrotHead").innerHTML=juices[j].name;
			document.getElementById("type7").innerHTML=juices[j].type;
			document.getElementById("price7").innerHTML= "&#163;" + juices[j].price.toFixed(2);
		}
		else if(j == 7)
		{
			document.getElementById("tomatoHead").innerHTML=juices[j].name;
			document.getElementById("type8").innerHTML=juices[j].type;
			document.getElementById("price8").innerHTML="&#163;" + juices[j].price.toFixed(2);
		}
		else if(j == 8)
		{
			document.getElementById("kiwiHead").innerHTML=juices[j].name;
			document.getElementById("type9").innerHTML=juices[j].type;
			document.getElementById("price9").innerHTML= "&#163;" + juices[j].price.toFixed(2);
		}
		else
		{
			document.getElementById("bananaSmtHead").innerHTML=juices[j].name;
			document.getElementById("type10").innerHTML=juices[j].type;
			document.getElementById("price10").innerHTML="&#163;" + juices[j].price.toFixed(2);
		}
		document.getElementById("getPaymentIn").style.visibility="hidden";
	}
} window.onload=onPageLoad;
 /*-----------------------------------------------------------------------------------------------------------------------------
 FUNCTION THTA GIVE JUISES VARIABLES VALUE
 --------------------------------------------------------------------------------------------------------------------------*/
function generateJuices(juices)
{
	juices[0].name = "Citrus Juice";
	juices[0].type = "Fruit Juice";
	juices[0].price = 3.95;
	
	juices[1].name = "Apple Juice";
	juices[1].type = "Fruit Juice";
	juices[1].price = 4.00;
	
	juices[2].name = "Pear Juice";
	juices[2].type = "Fruit Juice";
	juices[2].price = 4.35;
	
	juices[3].name = "Banana Juice";
	juices[3].type = "Fruit Juice";
	juices[3].price = 4.60;
	
	juices[4].name = "Strowberry Juice";
	juices[4].type = "Berry Juice";
	juices[4].price = 5.05;
	
	juices[5].name = "Mix Berry Juice";
	juices[5].type = "Berry Juice";
	juices[5].price = 4.95;
	
	juices[6].name = "Carrot Juice";
	juices[6].type = "Vegetable Juice";
	juices[6].price = 3.55;
	
	juices[7].name = "Tomato Juice";
	juices[7].type = "Vegetable Juice";
	juices[7].price = 2.95
	
	juices[8].name = "Kiwi Smoothy";
	juices[8].type = "Smoothy";
	juices[8].price = 5.10;
	
	juices[9].name = "Banana Smoothy";
	juices[9].type = "Smoothy";
	juices[9].price = 5.15;
	
}
/*-----------------------------------------------------------------------------------------------------------------------
CLASS DECLARE INSTANCE VARIABLE  
------------------------------------------------------------------------------------------------------------------------*/
function orderDescription()
{
	this.orderNow ="";
}
/*-------------------------------------------------------------------------------------------------------------------------
function clear message and pass if any other messages or result should be print
---------------------------------------------------------------------------------------------------------------------------*/
function getResult()
{	
	var scrollH=document.body.scrollHeight;
	var offsetH=document.body.offsetHeight;
	if(scrollH>offsetH) window.scrollTo(0,scrollH);
	else window.scrollTo(0,offsetH);


	var newOrder = new Array(10);
	for( var p = 0; p < newOrder.length; p ++)
	{
		newOrder[p] = new orderDescription();
	}
	getQuantity(newOrder);
	
	document.getElementById("CirtusMessage").className="message";
	document.getElementById("AppleMessage").className="message";
	document.getElementById("PearMessage").className="message";
	document.getElementById("StrowMessage").className="message";
	document.getElementById("BananaMessage").className="message";
	document.getElementById("MixBerryMessage").className="message";
	document.getElementById("CarrMessage").className="message";
	document.getElementById("TomatoMessage").className="message";
	document.getElementById("KiwiMessage").className="message";
	document.getElementById("BanSmtMessage").className="message";
	document.getElementById("outcomeName").innerHTML="";
	document.getElementById("outcomeType").innerHTML="";
	document.getElementById("outcomePrice").innerHTML=""; 
	document.getElementById("outcomeQuant").innerHTML="";
	document.getElementById("outcomeTotal").innerHTML="";
	document.getElementById("tableHead").className= "tableLine";
	document.getElementById("billTable").className="billTable2";
	document.getElementById("orderName").innerHTML= ""; 
	document.getElementById("orderType").innerHTML= ""; 
	document.getElementById("orderPrice").innerHTML= ""; 
	document.getElementById("orderQuantity").innerHTML= ""; 
	document.getElementById("orderTotal").innerHTML= "";
	document.getElementById("totalOfOrder").innerHTML= "";
	document.getElementById("discountRate1").innerHTML="";
	document.getElementById("totatWithDiscount").innerHTML="";
	document.getElementById("VATRate1").innerHTML="";
	document.getElementById("totalWithVAT").innerHTML= "";
	document.getElementById("noValuInput").innerHTML="";
	document.getElementById("titleBill").innerHTML="";
	document.getElementById("totalWithVAT").className="totalWithVAT2";
	document.getElementById("totatWithDiscount").className="totatWithDiscount2";
	document.getElementById("totalOfOrder").className="totalOfOrder2";
	document.getElementById("getPaymentIn").style.visibility="hidden";
	var isOnlyNumber = false;
	var countChr = 0;
	var countZero = 0;
	var charPossition =  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
	var zeroPosition = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
	var checkOrder;
	for(var i = 0; i < newOrder.length; i++)
	{
		checkOrder = newOrder[i].orderNow;
		if(checkOrder.length != 0)
		{
			isOnlyNumber = checkIfIsNumder(checkOrder);
			if(isOnlyNumber == false)
			{
				countChr++;
				charPossition[i] = i;
			}
			else if(checkOrder.substring(0,1) =='0')
			{
				countZero++;
				zeroPosition[i] = i;
			}
		}
		else
		{
			newOrder[i].orderNow = 0;
		}
		
	}
	if(countChr == 0 && countZero == 0)
	{
		getPrintResult();
	}
	else
	{ 
		if(countChr !=0)
		{
			printCharErrorMessage(charPossition);
		}
		if(countZero !=0)
		{
			printZeroErrorMessage(zeroPosition);
		}
	}
}
/*----------------------------------------------------------------------------------------------------------------------- 
function declare object newOrder with user intup value
-------------------------------------------------------------------------------------------------------------------------*/
function getQuantity(newOrder)
{
	newOrder[0].orderNow = document.getElementById("citrusPrice").value;
	newOrder[1].orderNow = document.getElementById("applePrice").value;
	newOrder[2].orderNow = document.getElementById("pearPrice").value;
	newOrder[3].orderNow = document.getElementById("bananaPrice").value;
	newOrder[4].orderNow = document.getElementById("strowPrice").value;
	newOrder[5].orderNow = document.getElementById("MixBerryPrice").value;
	newOrder[6].orderNow = document.getElementById("CarrPrice").value;
	newOrder[7].orderNow = document.getElementById("tomatoPrice").value;
	newOrder[8].orderNow = document.getElementById("KiwiPrice").value;
	newOrder[9].orderNow = document.getElementById("BanSmtPrice").value;
}
/*---------------------------------------------------------------------------------------------
FUNCTION THAT PRINT OUT MESSAGE IF THE FIRST ENTERED NUMBER IS ZERO 
----------------------------------------------------------------------------------------------*/
function printZeroErrorMessage(currentZeroPosition)
{
	for(var y = 0; y < currentZeroPosition.length; y++)
	{
		if(currentZeroPosition[y] == 0)
		{
			document.getElementById("CirtusMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("CirtusMessage").className="CirtusMessage";
		}
		else if(currentZeroPosition[y] == 1)
		{
			document.getElementById("AppleMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("AppleMessage").className= "AppleMessage";
		}
		else if(currentZeroPosition[y] == 2)
		{
			document.getElementById("PearMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("PearMessage").className= "PearMessage";
		}
		else if(currentZeroPosition[y] == 3)
		{
			document.getElementById("BananaMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("BananaMessage").className= "BananaMessage";
		}
		else if(currentZeroPosition[y] == 4)
		{
			document.getElementById("StrowMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("StrowMessage").className= "StrowMessage";
		}
		else if(currentZeroPosition[y] == 5)
		{
			document.getElementById("MixBerryMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("MixBerryMessage").className= "MixBerryMessage";
		}
		else if(currentZeroPosition[y] == 6)
		{
			document.getElementById("CarrMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("CarrMessage").className= "CarrMessage";
		}
		else if(currentZeroPosition[y] == 7)
		{
			document.getElementById("TomatoMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("TomatoMessage").className= "TomatoMessage";
		}
		else if(currentZeroPosition[y] == 8)
		{
			document.getElementById("KiwiMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("KiwiMessage").className= "KiwiMessage";
		}
		else if(currentZeroPosition[y] == 9)
		{
			document.getElementById("BanSmtMessage").innerHTML="Order cannot start with 0! Please enter numbers only 1,2,20... or keep it empty";
			document.getElementById("BanSmtMessage").className= "KiwiMessage";
		}
	}
}
/*----------------------------------------------------------------------------------------------------
 FUNCTION THAT PRINT OUT MESSAGE IF ANY ENTERED CHARACTER IS A LETTER
------------------------------------------------------------------------------------------------------*/
function printCharErrorMessage(currentPosition)
{
	for(var x = 0; x < currentPosition.length; x++)
	{
		if(currentPosition[x] == 0)
		{
			document.getElementById("CirtusMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("CirtusMessage").className="CirtusMessage";
		}
		else if(currentPosition[x] == 1)
		{
			document.getElementById("AppleMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("AppleMessage").className= "AppleMessage";
		}
		else if(currentPosition[x] == 2)
		{
			document.getElementById("PearMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("PearMessage").className= "PearMessage";
		}
		else if(currentPosition[x] == 3)
		{
			document.getElementById("BananaMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("BananaMessage").className= "BananaMessage";
		}
		else if(currentPosition[x] == 4)
		{
			document.getElementById("StrowMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("StrowMessage").className= "StrowMessage";
		}
		else if(currentPosition[x] == 5)
		{
			document.getElementById("MixBerryMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("MixBerryMessage").className= "MixBerryMessage";
		}
		else if(currentPosition[x] == 6)
		{
			document.getElementById("CarrMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("CarrMessage").className= "CarrMessage";
		}
		else if(currentPosition[x] == 7)
		{
			document.getElementById("TomatoMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("TomatoMessage").className= "TomatoMessage";
		}
		else if(currentPosition[x] == 8)
		{
			document.getElementById("KiwiMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("KiwiMessage").className= "KiwiMessage";
		}
		else if(currentPosition[x] == 9)
		{
			document.getElementById("BanSmtMessage").innerHTML="Do not enetry any character! Please enter numbers only 1,2,3...";
			document.getElementById("BanSmtMessage").className= "KiwiMessage";
		}
	} 
}
/*------------------------------------------------------------------------------------------------
 FUNCTION THAT CHECK IF ENTERED DATA IS ONLY NUMBERS. 
 IF ALL ENTERED DATA ARE DIGITS (0-9) AND ARE BETWEEN 1 OND 3 DIGITS THEN RETURN TRUE, 
 IF NOT THEN RETURN FALSE
--------------------------------------------------------------------------------------------------*/
function checkIfIsNumder(itIsNumber)
{
	
	var myRegExp = new RegExp(/^[0-9]{1,3}$/g);
	if(myRegExp.test(itIsNumber)==true)
	{
		return true;
	}
	return false;
	
}
/*---------------------------------------------------------------------------------------------------
 FUNCTION THE PRINT RESULT OF JUISES THAT WERE PURCHASES
-----------------------------------------------------------------------------------------------------*/
function getPrintResult()
{
	var juices2 = new Array(10);
	var quantityOrder = 0;
	
	for( var i = 0; i < juices2.length; i ++)
	{
		juices2[i] = new JuicesDescription();
	}
	var newOrder2 = new Array(10);
	for( var w = 0; w < newOrder2.length;w++)
	{
		newOrder2[w] = new orderDescription();
	}
	getQuantity(newOrder2);
	var numOfOrder = 0;
	for(var s = 0; s< newOrder2.length; s++)
	{
		numOfOrder =  parseInt(newOrder2[s].orderNow);
		if(numOfOrder > 0)
		{
			quantityOrder += numOfOrder; 
		}
	}
	if(quantityOrder != 0)
	{
		generateJuices(juices2);
		var getTotal = 0;
		var totalSum = 0;
		document.getElementById("titleBill").innerHTML="Your Bill";
		document.getElementById("tableHead").className= "tableHead";
		document.getElementById("billTable").className="billTable";
		document.getElementById("orderName").innerHTML= "Name"; 
		document.getElementById("orderType").innerHTML= "Type"; 
		document.getElementById("orderPrice").innerHTML= "Price"; 
		document.getElementById("orderQuantity").innerHTML= "Quantity_order"; 
		document.getElementById("orderTotal").innerHTML= "Total"; 
		for(var z = 0; z < newOrder2.length; z ++)
		{
			getRow="";
			if(newOrder2[z].orderNow !=0)
			{
				getTotal = newOrder2[z].orderNow * juices2[z].price;
				totalSum +=getTotal;
				document.getElementById("outcomeName").innerHTML+= juices2[z].name + "<br /> ";
				document.getElementById("outcomeType").innerHTML+=juices2[z].type + "<br /> "; 
				document.getElementById("outcomePrice").innerHTML+= "&#163;" +juices2[z].price.toFixed(2) + "<br/>"; 
				document.getElementById("outcomeQuant").innerHTML+= newOrder2[z].orderNow + "<br/>" ;
				document.getElementById("outcomeTotal").innerHTML+= "&#163;" + getTotal.toFixed(2) + "<br />";
			}
		}
	printTotalSum(totalSum, quantityOrder);
	}
	else
	{
		document.getElementById("noValuInput").innerHTML="None of the product has been enterd!";
	}
}
/*-------------------------------------------------------------------------------------------------------------------------
FUNCTION THAT RECIEVE TWO ARGUMENTS ONE IS TOTAL PURCHASES JUISES AND TOTAL QUANTITY 
THEN FUNFTION CALCULATE TOTAL AND ADD DISCOUNT AND VAT ANT PRINT RESULT
--------------------------------------------------------------------------------------------------------------------------*/

function printTotalSum(sum, totalQuant)
{
	var discount = 0;
	var totalDiscount =0;
	var discountRate = 0.125;
	var totalVAT = 0;
	var VAT = 0.175;
	if(totalQuant > 5)
	{
		discount = sum * discountRate;
	}
	totalDiscount = sum - discount;
	totalVAT = totalDiscount +(totalDiscount * VAT);
	document.getElementById("getPaymentIn").style.visibility="visible";
	if(discount ==0)
	{
		document.getElementById("totalOfOrder").innerHTML= "&#163;" + sum.toFixed(2);
		document.getElementById("totalOfOrder").className="totalOfOrder";
		document.getElementById("VATRate1").innerHTML= "VAT  " +(VAT*100).toFixed(1)+"&#37;";
		document.getElementById("VATRate1").className= "VATRate2"
		document.getElementById("totalWithVAT").innerHTML= "Total of your order  &#163;" + totalVAT.toFixed(2);
		document.getElementById("totalWithVAT").className="totalWithVAT";
	}
	else
	{
		document.getElementById("totalOfOrder").innerHTML= "&#163;" + sum.toFixed(2);
		document.getElementById("totalOfOrder").className="totalOfOrder";
		document.getElementById("discountRate1").innerHTML= "Discount  "+(discountRate*100).toFixed(1) + "&#37;";
		document.getElementById("totatWithDiscount").innerHTML= "Total after discount  &#163;" + totalDiscount.toFixed(2);
		document.getElementById("totatWithDiscount").className="totatWithDiscount";
		document.getElementById("VATRate1").innerHTML= "VAT  "+(VAT*100).toFixed(1)+ "&#37;";
		document.getElementById("VATRate1").className="VATRate1";
		document.getElementById("totalWithVAT").innerHTML= "Total of your order with VAT  &#163;" + totalVAT.toFixed(2);
		document.getElementById("totalWithVAT").className="totalWithVAT";
	}
}
/*-------------------------------------------------------------------------------------------------------------------
FUNCTION THAT LOAD NEW URL OND PASS DATA TO NEW URL
----------------------------------------------------------------------------------------------------------------*/
function getDifferentLocation()
{
	var packed0rder = new Array(10);
	for(var y = 0; y < packed0rder.length; y ++)
	{
		packed0rder[y] = new orderDescription();
	}
	getQuantity(packed0rder)
	var packed0rderToSend = new Array(10);
	for(var d = 0; d < packed0rderToSend.length; d++)
	{
		packed0rderToSend[d] = packed0rder[d].orderNow;
	}
	window.location = "address_form.html?" + packed0rderToSend;
	
}
/*------------------------------------------------------------------------------------------------------------
FUNCTION THAT RETURN TO REVOUSE PAGE
---------------------------------------------------------------------------------------------------------------
*/
function getResultBack()
{
	 window.history.back();
}
/*-----------------------------------------------------------------------------------------------------------------------
FUNCTION THAT SEARCH FOR DATA FORM PREVIOSE PAGE AND PASS THOSE DATA 
------------------------------------------------------------------------------------------------------------------------*/
function getAddresFormOnLoad()
{
	 var query = window.location.search;
	 
		   if (query.substring(0, 1) == '?') {
			 query = query.substring(1);
		   }
		   var data = query.split(','); 
		   for (i = 0; (i < data.length); i++) {
			 data[i] = unescape(data[i]);
		   }
		printAddressFormData(data);
}
/*----------------------------------------------------------------------------------------------------------------------
FUNCTION THAT CALCULATE TOTAL TO BE PAID AND TOTAL QUANTITY AND PRINT RESULT
------------------------------------------------------------------------------------------------------------------------*/
function printAddressFormData(orderData)
{
	var quant = 0;
	var juicesForm = new Array(10);
	var totalSumInForm = 0;
	var sumInInt = 0;
	
	for( var i = 0; i < juicesForm.length; i ++)
	{
		juicesForm[i] = new JuicesDescription();
	}
	generateJuices(juicesForm);
	for(var f = 0; f < orderData.length; f++)
	{
		if(orderData[f].length == 0)
		{
			orderData[f] = 0;
		}
		else
		{
			sumInInt = parseInt(orderData[f]);
			quant += sumInInt;  
			totalSumInForm = totalSumInForm + ( sumInInt * juicesForm[f].price);
		}
	}
	var discount = 0;
	var totalDiscount =0;
	var discountRate = 0.125;
	var totalVAT = 0;
	var VAT = 0.175;
	if(quant > 5)
	{
		discount = totalSumInForm * discountRate;
	}
	totalDiscount = totalSumInForm - discount;
	totalVAT = totalDiscount +(totalDiscount * VAT);
	
	document.getElementById("cratesOrder").innerHTML= quant;
	document.getElementById("totalSumOrder").innerHTML= "&#163;" + totalVAT.toFixed(2)
}
/*---------------------------------------------------------------------------------------------------------
CLASS THAT DECLARE INSTANCE VARIABLIS
----------------------------------------------------------------------------------------------------------*/
function personalDescription()
{
	this.title=""
	this.firstName = "";
	this.secondName = "";
	this.telNum = "";
	this.mailAddress = "";
	this.comMailAddress = "";
	this.address1 ="";
	this.address2 = "";
	this.city = "";
	this.postCode="";
	this.region="";
	this.typeOfCard="";
	this.titleCard="";
	this.cardHolderFirstN="";
	this.cardHolderSecondN="";
	this.cardNumber="";
	this.expiryMonth="";
	this.expiryYear="";
	this.cvv="";
	this.bankAddress1 ="";
	this.bankAddress2 = "";
	this.bankCity = "";
	this.bankPosCodte="";
	this.bankRegion="";
}

function getPersonalDetails()
{
	var str1="";
	var str2="";
	var person = new Array(1);
	person[0] = new personalDescription();
	generatePerson(person);
	var name1 = false;
	var count = 0;
	
	if(person[0].title =="Title")
	{
		document.getElementById("personTitleMessage").innerHTML="Title has not been selested. <br />Please selest title.";
		count++;
	}
	else
	{
		document.getElementById("personTitleMessage").innerHTML="";
	}
	
	if(person[0].firstName == "")
	{
		document.getElementById("firstNameMessage").innerHTML="You have not filled in first name. <br />Please enter your name.";
		count ++;
	}
	else
	{
		name1 = checkIfIsLettersOnly(person[0].firstName);
		if( name1 == false)
		{
			document.getElementById("firstNameMessage").innerHTML="Input name is incorrect! Please do not include any spaces or simbols such as (. , :)";
			count ++;
		}
		else
		{
			document.getElementById("firstNameMessage").innerHTML="";
		}
		
	}

	if(person[0].secondName =="")
	{
		document.getElementById("secondNameMessage").innerHTML="You have not filled in second name. <br />Please enter your name.";
		count ++;
	}
	else
	{
		name1 = checkIfIsLettersOnly(person[0].secondName);
		if(name1 == false)
		{
			document.getElementById("secondNameMessage").innerHTML="Input name is incorrect! Please do not include any spaces or simbols such as (. , :)";
			count ++;
		}
		else
		{
			document.getElementById("secondNameMessage").innerHTML="";
		}
	}
	if(person[0].telNum =="")
	{
		document.getElementById("telNumberMessage").innerHTML="You have not filled in tel. number. Please enter your tel number.";
		count ++;
	}
	else
	{
		name1 = checkIfIsElevenNumder(person[0].telNum);
		if(name1== false)
		{
			document.getElementById("telNumberMessage").innerHTML="Tel. number is not in regular standart. Please enter tel. num. without country code (e.g. +44)";
			count ++;
		}
		else
		{
			document.getElementById("telNumberMessage").innerHTML="";
		}
	}
	
	document.getElementById("comEmailAddressMessage").innerHTML="";
	document.getElementById("EmaiAddressMessage").innerHTML="";
	if((person[0].mailAddress =="" )|| (person[0].comMailAddress == ""))
	{
		count ++;
		if(person[0].mailAddress =="")
		{
			document.getElementById("EmaiAddressMessage").innerHTML="You have not filled in e-mail address. <br />Please enter your e-mail address.";
		}
		else
		{
			document.getElementById("comEmailAddressMessage").innerHTML="You have not comfiermed your e-mail address. <br />Please comfirm your e-mail address.";
			document.getElementById("comEmailAddressMessage").focus();
		}
	}
	else
	{
		name1 = checkifItIsMailAddress(person[0].mailAddress);
		if(name1 == false)
		{
			document.getElementById("EmaiAddressMessage").innerHTML="Your e-mail address in incorrect format. <br />Please check your e-mail address.";
			count ++;
		}
		if(person[0].mailAddress === person[0].comMailAddress)
		{	
			document.getElementById("EmaiAddressMessage").innerHTML="";
			document.getElementById("comEmailAddressMessage").innerHTML="";
		}
		else
		{
			document.getElementById("comEmailAddressMessage").innerHTML="Your comfierm e-mail address do not match with e-mail address. Please check your e-mail addresses.";
			count ++;
		}
	}

	if(person[0].address1 =="")
	{
		document.getElementById("address1Message").innerHTML="You have not filled in your delivery address. <br />Please enter your address.";
		count ++;
	}
	else
	{
		str1 = person[0].address1;
		str2 = str1.replace(/\s/g,"");
		name1 = checkString(str2);
		if(name1 == false)
		{
			document.getElementById("address1Message").innerHTML="The address is in incorrect format. <br />Please check your address and do not use (. , :)";
			count ++;
		}
		else
		{
			document.getElementById("address1Message").innerHTML="";
		}
	}

	str1 = person[0].address2;
	str2 = str1.replace(/\s/g,"");
	name1 = checkString(str2)

	if(name1 == false && person[0].address2 !="")
	{
		document.getElementById("address2Message").innerHTML="The address is in incorrect format. <br />Please check your address";
		count ++;
	}
	else
	{
		document.getElementById("address2Message").innerHTML="";
	}

	if(person[0].city =="")
	{
		document.getElementById("cityMessage").innerHTML="You have not filled in a delivery city. <br />Please enter delivery city.";
		count ++;
	}
	else
	{
		str1 = person[0].city
		str2 = str1.replace(/\s/g,"");
		name1 = checkIfIsLettersOnly(str2);
		if(name1 == false)
		{
			document.getElementById("cityMessage").innerHTML="The city is in incorrect format. <br />Please check the city";
			count ++;
		}
		else
		{
			document.getElementById("cityMessage").innerHTML="";
		}
	}

	if(person[0].postCode =="")
	{
		document.getElementById("postCodeMessage").innerHTML="You have not filled in a post code. <br />Please enter the post code.";
		count ++;
	}
	else
	{
		str1 = person[0].postCode;
		str2 = str1.replace(/\s/g,"");
		name1 = checkPostCode(str2);
		if(name1 == false)
		{
			document.getElementById("postCodeMessage").innerHTML="Post code is in incorrect format. <br />Please check the post code";
			count ++;
		}
		else
		{
			document.getElementById("postCodeMessage").innerHTML="";
		}
	}
	
	if(person[0].region == "Region")
	{
		document.getElementById("RegionMessage").innerHTML="Region has not been selected. <br />Please selest region.";
		count ++;
	}
	else
	{
		document.getElementById("RegionMessage").innerHTML="";
	}
	if(person[0].typeOfCard == "Type of Payment")
	{
		document.getElementById("typeOfPaymentMessage").innerHTML="Type of the card has not been selested. Please select type of card.";
		count++
	}
	else
	{
		document.getElementById("typeOfPaymentMessage").innerHTML="";
	}

	if(person[0].titleCard == "Title")
	{
		document.getElementById("titleMessage").innerHTML="Title has not been selected. <br />Plaese select title.";
		count ++;
	}
	else
	{
		document.getElementById("titleMessage").innerHTML="";
	}
	
	if(person[0].cardHolderFirstN == "")
	{
		document.getElementById("cardHolderFirstNameMessage").innerHTML="You have not filled in first name. <br />Please enter card holder's first name.";
		count ++;
	}
	else
	{
		name1 = checkIfIsLettersOnly(person[0].cardHolderFirstN);
		if( name1 == false)
		{
			document.getElementById("cardHolderFirstNameMessage").innerHTML="Input name is incorrect! Please do not include any spaces or simbols such as (. , :)";
			count ++;
		}
		else
		{
			document.getElementById("cardHolderFirstNameMessage").innerHTML="";
		}
		
	}

	if(person[0].cardHolderSecondN =="")
	{
		document.getElementById("cardHolderSecondNameMessage").innerHTML="You have not filled in second name. <br />Please enter card holder's second name.";
		count ++;
	}
	else
	{
		name1 = checkIfIsLettersOnly(person[0].cardHolderSecondN);
		if(name1 == false)
		{
			document.getElementById("cardHolderSecondNameMessage").innerHTML="Input name is incorrect! Please do not include any spaces or simbols such as (. , :)";
			count ++;
		}
		else
		{
			document.getElementById("cardHolderSecondNameMessage").innerHTML="";
		}
	}
	if(person[0].cardNumber == "")
	{
		document.getElementById("cardNumberMessage").innerHTML="Card number has not been filled in. Please enter card number";
		count ++;
	}
	else
	{
		str1 = person[0].cardNumber;
		str2 = str1.replace(/\s/g,"");
		name1 = checkCardNumber(str2);
		
		if(name1 == false)
		{
			document.getElementById("cardNumberMessage").innerHTML="Card number is in wrong format. Please include only numbers without any character such as ( - / ,)"
			count ++;
		}
		else
		{
			document.getElementById("cardNumberMessage").innerHTML="";
		}
	}
	if(person[0].expiryMonth == "Expiry Month")
	{
		document.getElementById("expiryMonthMessage").innerHTML="Expiry month has not been selested. <br />Please select expiry month.";
		count ++;
	}
	else
	{
		document.getElementById("expiryMonthMessage").innerHTML="";
	}
	if(person[0].expiryYear == "Expiry Year")
	{
		document.getElementById("expiryYearMessage").innerHTML="Expiry year has not been selested. <br />Please select expiry year.";
		count ++;
	}
	else
	{
		document.getElementById("expiryYearMessage").innerHTML="";
	}
	if(person[0].cvv == "")
	{
		document.getElementById("cvvMessage").innerHTML="CVV has not been filled in. <br />Please enter CVV";
		count++;
	}
	else
	{
		name1 = checkIfOnlyThreeNum(person[0].cvv);
		if(name1 == false)
		{
			document.getElementById("cvvMessage").innerHTML="CVV is the last three digits of you back card. <br />Please enter card's CVV.";
			count++;
		}
		else
		{
			document.getElementById("cvvMessage").innerHTML="";
		}
	}
	
	if(person[0].bankAddress1 =="")
	{
		document.getElementById("addressBankMessage").innerHTML="You have not filled in your bank address. <br />Please enter your address.";
		count ++;
	}
	else
	{
		str1 = person[0].bankAddress1;
		str2 = str1.replace(/\s/g,"");
		name1 = checkString(str2);
		if(name1 == false)
		{
			document.getElementById("addressBankMessage").innerHTML="The address is in incorrect format. <br />Please check your address. Do not use (. , :)";
			count ++;
		}
		else
		{
			document.getElementById("addressBankMessage").innerHTML="";
		}
	}
	
	str1 = person[0].bankAddress2;
	str2 = str1.replace(/\s/g,"");
	name1 = checkString(str2)
	if(name1 == false && person[0].bankAddress2 !="")
	{
		document.getElementById("address2BankMessage").innerHTML="The address is in incorrect format. <br />Please check your address. Do not use (, . /)";
		count ++;
	}
	else
	{
		document.getElementById("address2BankMessage").innerHTML="";
	}

	if(person[0].bankCity =="")
	{
		document.getElementById("cityBankMessage").innerHTML="You have not filled in a city. <br />Please entery city.";
		count ++;
	}
	else
	{
		str1 = person[0].bankCity;
		str2 = str1.replace(/\s/g,"");
		name1 = checkIfIsLettersOnly(str2);
		if(name1 == false)
		{
			document.getElementById("cityBankMessage").innerHTML="The city is in incorrect format. <br />Please check the city";
			count ++;
		}
		else
		{
			document.getElementById("cityBankMessage").innerHTML="";
		}
	}

	if(person[0].bankPosCodte =="")
	{
		document.getElementById("postCodeBankMessage").innerHTML="You have not filled in a post code. <br />Please enter the post code.";
		count ++;
	}
	else
	{
		str1 = person[0].bankPosCodte;
		str2 = str1.replace(/\s/g,"");
		name1 = checkPostCode(str2);
		if(name1 == false)
		{
			document.getElementById("postCodeBankMessage").innerHTML="Post code is in incorrect format. <br />Please check the post code";
			count ++;
		}
		else
		{
			document.getElementById("postCodeBankMessage").innerHTML="";
		}
	}
	
	if(person[0].bankRegion == "Region")
	{
		document.getElementById("regionBankAddressMessage").innerHTML="Region has not been selected. <br />Please selest region.";
		count ++;
	}
	else
	{
		document.getElementById("regionBankAddressMessage").innerHTML="";
	}

	if(count == 0)
	{
		displayOtherPage();
	}
	
}
/*------------------------------------------------------------------------------------------------------------------------
FUNCTION WHERE INSTANCE VARIABLE GET VALUE
-------------------------------------------------------------------------------------------------------------------------*/
function generatePerson(person)
{
	person[0].title = document.getElementById("personTitle").value;
	person[0].firstName = document.getElementById("firstName").value;
	person[0].secondName = document.getElementById("secondName").value;
	person[0].telNum = document.getElementById("telNumber").value;
	person[0].mailAddress = document.getElementById("EmailAddress").value;
	person[0].comMailAddress = document.getElementById("comEmailAddres").value;
	person[0].address1 = document.getElementById("address1").value;
	person[0].address2 = document. getElementById("address2").value;
	person[0].city = document.getElementById("city").value;
	person[0].postCode = document.getElementById("postCode").value;
	person[0].region = document.getElementById("Region").value;
	person[0].typeOfCard = document.getElementById("typeOfCard").value;
	person[0].titleCard = document.getElementById("cardTitle").value;
	person[0].cardHolderFirstN = document.getElementById("cardHolderFirstName").value;
	person[0].cardHolderSecondN = document.getElementById("cardHolderSecondName").value;
	person[0].cardNumber = document.getElementById("cardNum").value;
	person[0].expiryMonth = document.getElementById("ExpiryMonths").value;
	person[0].expiryYear = document.getElementById("expiryYear").value;
	person[0].cvv = document.getElementById("cvvCode").value;
	person[0].bankAddress1 = document.getElementById("Address1Bank").value;
	person[0].bankAddress2 = document.getElementById("address2Bank").value;
	person[0].bankCity = document.getElementById("cityBank").value;
	person[0].bankPosCodte = document.getElementById("postCodeBank").value;
	person[0].bankRegion = document.getElementById("RegionBank").value;
	
}
/*--------------------------------------------------------------------------------------------------------------
FUNCTION THAT TRANSPHARE VALUE FROM DELIVERY ADDRESS TO BANK ADDRESS
--------------------------------------------------------------------------------------------------------------*/
function getAddress()
{
	document.getElementById("Address1Bank").value= document.getElementById("address1").value;
	document.getElementById("address2Bank").value= document.getElementById("address2").value;
	document.getElementById("cityBank").value= document.getElementById("city").value;
	document.getElementById("postCodeBank").value= document.getElementById("postCode").value;
	document.getElementById("RegionBank").value= document.getElementById("Region").value;
}
/*---------------------------------------------------------------------------------------------------------------------
FUNCTION THAT OPEN NEW WINDOW WITH 	cvv.html URL
--------------------------------------------------------------------------------------------------------------------*/
function openCvvWindow()
{
	NewWindow = window.open('cvv.html','What is cvv','width=800,height=500,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,colyhistory=no'); 
}
/*---------------------------------------------------------------------------------------------------------------------
FUNCTION THAT OPEN NEW WINDOW WITH 	how_To_Purchase.html URL
--------------------------------------------------------------------------------------------------------------------*/
function openHowToPurchaseWindow()
{	
	NewWindow = window.open('how_To_Purchase.html','What is cvv','width=850,height=700,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,colyhistory=no'); 
}
/*------------------------------------------------------------------------------------------------------------------
FUNCTION THAT CHECK IF DATA ARE ONLY DIGITS
IF THERE ARE ONLY 3 DIGIT NO MORE NO LESS THEN RETURN TRUE
ELSE RETURN FALSE 
----------------------------------------------------------------------------------------------------------------*/
function checkIfOnlyThreeNum(CvvNum)
{
	var myRegExp = new RegExp(/^[0-9]{3}$/g);
	if(myRegExp.test(CvvNum)==true)
	{
		return true;
	}
	return false;
	
}
/*---------------------------------------------------------------------------------------------------------------
FUNCTION THAT CHECK IN DATA ARE ONLY DIGIT BETWEEN 11 AND 16 DIGIT
IF YES RETURN TRUE ELSE RETURN FALSE
--------------------------------------------------------------------------------------------------------------*/
function checkCardNumber(numOfCard)
{
	var myRegExp = new RegExp(/^[0-9]{11,16}$/g);
	if(myRegExp.test(numOfCard)==true)
	{
		return true;
	}
	return false;
}
/*---------------------------------------------------------------------------------------------------------------
FUNCTION THAT CHECK IF DATA ARE ONLY LETTERS BETWEEN 1 AND 50 
IF YES THEN RETURN TRUE ELSE RETURN FALSE
----------------------------------------------------------------------------------------------------------------------*/
function checkIfIsLettersOnly(word)
{
	var myRegExp = new RegExp(/^[A-Za-z]{1,50}$/g);
	if(myRegExp.test(word)==true)
	{
		return true;
	}
	return false;
}
/*-----------------------------------------------------------------------------------------------------------------------
FUNCTION CHECK IN DATA ARE ONLY 11 DIGITS
IF YES THEN RETURN TRUE ELSE RETURN FALSE 
------------------------------------------------------------------------------------------------------------------------*/
function checkIfIsElevenNumder(Number)
{
	
	var myRegExp = new RegExp(/^[0-9]{11}$/g);
	if(myRegExp.test(Number)==true)
	{
		return true;
	}
	return false;
	
}
/*-----------------------------------------------------------------------------------------------------------------------
FUNCTION CHECK IF DATA ARE IN FOLLOW FORMAT
FIRST LETTER, DIGIT OR ANY CHARACTER IN ANY ORDER FOLLOW BE SIGN AT (@) THEN 
LETTER OR DIGIT IN ANY ORDER FOLLOW BY DOT (.) THEN
LETTER OR DIGIT IN RANGE BETWEEN 2 TO 4 FOLLOW DOT THEN LETTER OR DIGIT IN RANGE BETWEEN 2 TO 4
-----------------------------------------------------------------------------------------------------------------------*/
function checkifItIsMailAddress(email)
{
	var myRegExp = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g);
	if(myRegExp.test(email) ==true)
	{
		return true;
	}
	return false;
}
/*-----------------------------------------------------------------------------------------------------------------------
FUNCTION CHECK IF DATA ARE DIGITS OR LETTERS IN RANGE BETWEEN 1 TO 60
IF YES RETURN TRUE ELSE RETURN FALSE
-----------------------------------------------------------------------------------------------------------------------*/
function checkString(myString)
{
	var myRegExp = new RegExp(/^[0-9a-zA-Z]{1,60}$/g);
	if(myRegExp.test(myString)==true)
	{
		return true;
	}
	return false;
}
/*-------------------------------------------------------------------------------------------------------------------
FUNCTION THAT CHECK IF DARA ARE IN FOLLOW FORMAT
FIRST LETTERS IN RANGE BETWEEN 1 TO 2 THEN FOLLOW BY
DIGIT RENGE BETWEEN 2 TO 3 THEN FOLLOW BY ONLY 2 LETTERS
IF YES THEN  RETURN TRUE ELSE RETURN FALSE
---------------------------------------------------------------------------------------------------------------------*/
function checkPostCode(myPostCode)
{
	var myRegExp = new RegExp(/^([A-Za-z]{1,2})([0-9]{2,3})([A-Za-z]{2})$/g);
	if(myRegExp.test(myPostCode) ==true)
	{
		return true;
	}
	return false;
}
/*--------------------------------------------------------------------------------------------------------------------
FUNCTION THAT SEARCH DATA FROM PREVIOSE PAGE, LOAD DATA FROM CURRENT PAGE AND THEN
OPEN NEW PAGE AND SEND THOSE LOADED DATA 
----------------------------------------------------------------------------------------------------------------------*/
function displayOtherPage()
{
	var query = window.location.search;
	 
		   if (query.substring(0, 1) == '?') {
			 query = query.substring(1);
		   }
		   var data = query.split(','); 
		   for (i = 0; (i < data.length); i++) {
			 data[i] = unescape(data[i]);
		   }
	

	var dataToPass = new Array(34)
	var person1 = new Array(1);
	person1[0] = new personalDescription();
	generatePerson(person1);
	
	for( var w = 0; w < 10; w++)
	{
		dataToPass[w] = data[w];
	}
	
	dataToPass[10] = person1[0].title;
	dataToPass[11] = person1[0].firstName;
	dataToPass[12] = person1[0].secondName;
	dataToPass[13] = person1[0].telNum;
	dataToPass[14] = person1[0].mailAddress;
	dataToPass[15] = person1[0].comMailAddress;
	dataToPass[16] = person1[0].address1;
	dataToPass[17] = person1[0].address2;
	dataToPass[18] = person1[0].city;
	dataToPass[19] = person1[0].postCode;
	dataToPass[20] = person1[0].region;
	dataToPass[21] = person1[0].typeOfCard;
	dataToPass[22] = person1[0].titleCard;
	dataToPass[23] = person1[0].cardHolderFirstN;
	dataToPass[24] = person1[0].cardHolderSecondN;
	dataToPass[25] = person1[0].cardNumber;
	dataToPass[26] = person1[0].expiryMonth;
	dataToPass[27] = person1[0].expiryYear;
	dataToPass[28] = person1[0].cvv;
	dataToPass[29] = person1[0].bankAddress1;
	dataToPass[30] = person1[0].bankAddress2;
	dataToPass[31] = person1[0].bankCity;
	dataToPass[32] = person1[0].bankPosCodte;
	dataToPass[33] = person1[0].bankRegion;
	window.location = "confirmation.html?" + dataToPass;
	
}
/*-------------------------------------------------------------------------------------------------------------------------------------------
FUNCTION THAT SERCH SENT DATA TO CUREENT PAGE AND THEN
SEND THEM FOR PRINTING
----------------------------------------------------------------------------------------------------------------------------------------------*/
function getConfirmationDataLoaded()
{
	var query = window.location.search;
	 
		   if (query.substring(0, 1) == '?') {
			 query = query.substring(1);
		   }
		   var data = query.split(','); 
		   for (i = 0; (i < data.length); i++) {
			 data[i] = unescape(data[i]);
		   }
		   printConfirmationData(data);
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------
FUNCTION THAT PRINT RECEIVED DATA AND CALCULATE TOTAL AND OF ORDER AND PRICE AND THEN 
SENT THEM TO ANOTHER FUNCTION  
-----------------------------------------------------------------------------------------------------------------------------------------------*/
function printConfirmationData(printData)
{
	var juices3 = new Array(10);
	var quantityOrder = 0;
	
	for( var i = 0; i < juices3.length; i ++)
	{
		juices3[i] = new JuicesDescription();
	}

	var numOfOrder = 0;
	for(var s = 0; s< juices3.length; s++)
	{
		if(printData[s] == "")
		{
			printData[s] = 0;
		}
		numOfOrder =  parseInt(printData[s]);
		if(numOfOrder > 0)
		{
			quantityOrder += numOfOrder; 
		}
	}
	if(quantityOrder != 0)
	{
		generateJuices(juices3);
		var getTotal = 0;
		var totalSum = 0;
		document.getElementById("tableHead").className= "tableHead";
		document.getElementById("orderName").innerHTML= "Name"; 
		document.getElementById("orderType").innerHTML= "Type"; 
		document.getElementById("orderPrice").innerHTML= "Price"; 
		document.getElementById("orderQuantity").innerHTML= "Quantity_order"; 
		document.getElementById("orderTotal").innerHTML= "Total"; 
		for(var z = 0; z < juices3.length; z ++)
		{
			//getRow="";
			if(printData[z] !=0)
			{
				getTotal = parseInt(printData[z]) * juices3[z].price;
				totalSum +=getTotal;
				document.getElementById("outcomeName").innerHTML+= juices3[z].name + "<br /> ";
				document.getElementById("outcomeType").innerHTML+=juices3[z].type + "<br /> "; 
				document.getElementById("outcomePrice").innerHTML+= "&#163;" +juices3[z].price.toFixed(2) + "<br/>"; 
				document.getElementById("outcomeQuant").innerHTML+= printData[z] + "<br/>" ;
				document.getElementById("outcomeTotal").innerHTML+= "&#163;" + getTotal.toFixed(2) + "<br />";
			}
		}
	printTotalSumForConfirmationPage(totalSum, quantityOrder);
	}
	document.getElementById("TitleCon").innerHTML= printData[10];
	document.getElementById("frsNameCon").innerHTML= printData[11].toUpperCase();
	document.getElementById("secNameCon").innerHTML= printData[12].toUpperCase();
	document.getElementById("mailCon").innerHTML= printData[15];
	document.getElementById("telCon").innerHTML=  printData[13];
	document.getElementById("address1Con").innerHTML=printData[16].toUpperCase();
	if(printData[17].length =="")
	{
		document.getElementById("address2Con").innerHTML="N/A";
	}
	else
	{
		document.getElementById("address2Con").innerHTML=printData[17].toUpperCase();
	}
	document.getElementById("cityCon").innerHTML=printData[18].toUpperCase();
	document.getElementById("postCodeCon").innerHTML=printData[19].toUpperCase();
	document.getElementById("provinceCon").innerHTML=printData[20].toUpperCase();
	document.getElementById("typeOfCardCon").innerHTML=printData[21].toUpperCase();
	document.getElementById("cardNameHoldCon").innerHTML=printData[22].toUpperCase() + " " + printData[23].toUpperCase() + " " + printData[24].toUpperCase();
	var str3 = printLastThreeChar(printData[25]);
	document.getElementById("cardNumCon").innerHTML=str3;
	document.getElementById("monthCon").innerHTML=printData[26];
	document.getElementById("yearCon").innerHTML=printData[27];
	document.getElementById("cvvCon").innerHTML=printData[28];
	document.getElementById("address1BankCon").innerHTML=printData[29].toUpperCase();
	if(printData[30].length =="")
	{
		document.getElementById("address2BankCon").innerHTML="N/A";
	}
	else
	{
		document.getElementById("address2BankCon").innerHTML=printData[30].toUpperCase();
	}
	document.getElementById("cityBankCon").innerHTML=printData[31].toUpperCase();
	document.getElementById("postCodeBankCon").innerHTML=printData[32].toUpperCase();
	document.getElementById("provinceBankCon").innerHTML=printData[33].toUpperCase();
	
	
	
}
/*---------------------------------------------------------------------------------------------------------------------------------------------
FUNCTION THE RECEIVE TOTAL SUM AND TOTAL ORDER AND THEN 
PROCESS THIS DATA AND PRINT RESULT
--------------------------------------------------------------------------------------------------------------------------------------------*/
function printTotalSumForConfirmationPage(sum, totalQuant)
{
	var discount = 0;
	var totalDiscount =0;
	var discountRate = 0.125;
	var totalVAT = 0;
	var VAT = 0.175;
	if(totalQuant > 5)
	{
		discount = sum * discountRate;
	}
	totalDiscount = sum - discount;
	totalVAT = totalDiscount +(totalDiscount * VAT);
	if(discount ==0)
	{
		document.getElementById("totalOfOrderCon").innerHTML= "&#163;" + sum.toFixed(2);
		document.getElementById("VATRate1Con").innerHTML= "VAT  " +(VAT*100).toFixed(1)+"&#37;";
		document.getElementById("totalWithVATCon").innerHTML= "Total of your order  &#163;" + totalVAT.toFixed(2);
	}
	else
	{
		document.getElementById("totalOfOrderCon").innerHTML= "&#163;" + sum.toFixed(2);
		document.getElementById("discountRate1Con").innerHTML= "Discount  "+(discountRate*100).toFixed(1) + "&#37;";
		document.getElementById("totalWithDiscountCon2").innerHTML= "Total after discount  &#163;" + totalDiscount.toFixed(2);
		document.getElementById("VATRate1Con").innerHTML= "VAT  "+(VAT*100).toFixed(1)+ "&#37;";
		document.getElementById("totalWithVATCon").innerHTML= "Total of your order with VAT  &#163;" + totalVAT.toFixed(2);
	}
}
/*--------------------------------------------------------------------------------------------------------------------------------------------
FUNCTION THAT RECEIVE STRING THEN KEEP LAST 4 DIGIT OF THE STRING AND
REST OF THE DIRITS ARE CONVERT INTO ASTERISK * AND THEN SENDS THIS STRING BACK
-------------------------------------------------------------------------------------------------------------------------------------------*/
function printLastThreeChar(dataNum)
{
	var post = 0;
	var last4 = "";
	var singleData ="";
	singleData = dataNum.replace(/\s/g,"");
	post = singleData.length - 4;
	for(var i = 0; i < singleData.length; i ++)
	{
		if(i< post)
		{
			last4 = last4 + "*";
		}
		else
		{
			last4 = last4 + singleData.charAt(i);
		}
	}
	return last4;
}
/*-------------------------------------------------------------------------------------------------------------------------------------------
FUNCTION THAT OPEN NEW PAGE
-------------------------------------------------------------------------------------------------------------------------------------------*/
function getConfirm()
{
	window.location = "process.html";
}
/*-------------------------------------------------------------------------------------------------------------------------------------------
FUNCTION THAT OPEN NEW PAGE
-------------------------------------------------------------------------------------------------------------------------------------------*/

function goToNewSite()
{
	window.location = "juices_decision_process.html";
}
/*-------------------------------------------------------------------------------------------------------------------------------------------
FUNCTION THAT OPEN NEW PAGE
-------------------------------------------------------------------------------------------------------------------------------------------*/
function getHomePage()
{
	window.location = "index.html";
}

/*-------------------------------------------------------------------------------------------------------------------------------------------
FUNCTION THAT CLOSE OPEN WINDOW
-------------------------------------------------------------------------------------------------------------------------------------------*/

function CloseThisWindow()
{
	window.close();
}