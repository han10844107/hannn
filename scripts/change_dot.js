 function changedot(N1, N2, N3)
	  {
		document.getElementById(N1).style.color = "black";
		document.getElementById(N1).className = "circleafter";

		document.getElementById(N2).style.color = "#D3D3D3";
		document.getElementById(N2).className = "circle";

		document.getElementById(N3).style.color = "#D3D3D3";
		document.getElementById(N3).className = "circle";
	  }
function change(name, number)
	{
		document.getElementById("big").src=document.getElementById(name).src;
		if(number ==1){

		changedot("dot1","dot2","dot3");
		}
		else if(number==2)
		{

		changedot("dot2","dot1","dot3");

		}
		else if(number==3)
		{

		changedot("dot3","dot1","dot2");

		}
	}