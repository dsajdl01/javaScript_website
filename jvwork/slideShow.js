var step=1;

function onLoad()
{
	var image1 = new Image()
image1.src = "Desert.jpg"
var image2 = new Image()
image2.src = "Jellyfish.jpg"
var image3 = new Image()
image3.src = "Penguins.jpg"
console.log(step);
	document.images.slide.src = eval("image"+step+".src");
		if(step<3)
		{
			if(step == 1)
				{
					document.getElementById("panel").innerHTML="Sweet desert";
				}
				else if (step == 2)
				{
					document.getElementById("panel").innerHTML="Beauty Jelly Fish";
				}
			
			step++;	
		}
		else
		{	
			document.getElementById("panel").innerHTML="Dancing Pinguins";
			step=1;
		}
		setTimeout("onLoad()",8000);

} window.onload=onLoad;
function ArrleftLoad()
{
	console.log(step);
	console.log("this ia ArrleftLoad function");
	if(step == 1)
	{
		step = 2;
	}
	else if(step == 2)
	{
		step = 3;
	}
	else if(step == 3)
	{
		step = 1;
	}
	console.log(step);
		var image1 = new Image()
image1.src = "Desert.jpg"
var image2 = new Image()
image2.src = "Jellyfish.jpg"
var image3 = new Image()
image3.src = "Penguins.jpg"
document.images.slide.src = eval("image"+step+".src");
		if(step<3)
		{
			if(step == 1)
				{
					document.getElementById("panel").innerHTML="Sweet desert";
				}
				else if (step == 2)
				{
					document.getElementById("panel").innerHTML="Beauty Jelly Fish";
				}
			
			step++;	
		}
		else
		{	
			document.getElementById("panel").innerHTML="Dancing Pinguins";
			step=1;
		}

}
function ArrRightLoad()
{
	console.log("this ia ArrleftLoad function");
	if(step == 1)
	{
		step = 1;
	}
	else if(step == 2)
	{
		step = 2;
	}
	else if(step == 3)
	{
		step = 3;
	}
	console.log(step);
		var image1 = new Image()
image1.src = "Desert.jpg"
var image2 = new Image()
image2.src = "Jellyfish.jpg"
var image3 = new Image()
image3.src = "Penguins.jpg"
document.images.slide.src = eval("image"+step+".src");
		if(step<3)
		{
			if(step == 1)
				{
					document.getElementById("panel").innerHTML="Sweet desert";
				}
				else if (step == 2)
				{
					document.getElementById("panel").innerHTML="Beauty Jelly Fish";
				}
			
			step++;	
		}
		else
		{	
			document.getElementById("panel").innerHTML="Dancing Pinguins";
			step=1;
		}

}
function getPage()
{	
	console.log(step);
	if(step == 1)
	{
		window.location = "pinguins.html";
	}
	else if(step == 2)
	{
		window.location = "desert.html"
	}
	else if(step == 3)
	{
		window.location = "jellyfish.html";
	}
}window.onload=onLoad;