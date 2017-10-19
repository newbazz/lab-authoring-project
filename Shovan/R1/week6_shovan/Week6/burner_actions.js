var temp=0 //Celsius
var mass=0 //grams
var specHeat=4.2 //J/sec
var supply=0 //kJ/sec
var surrTemp=30 //Celsius
var bool1=0

function add(){
	console.log(1)
	$('#burn').mouseup(function(){
		clearInterval(id);
	}).mousedown(function(){
		id=setInterval(burn, 500)
	})
}

function close_burner(){
	$('#close_burner').mouseup(function(){
		$('#burner_action')[0].style.display='none';
	})
}

function burn(){
	mass=parseFloat($("[id='volume_liquid beaker']")[0].innerHTML.split(">")[2])
	temp=parseFloat($("[id='temp beaker']")[0].innerHTML.split(">")[2])
	supply=500
	temp+=supply/(mass*specHeat)
	temp=temp.toFixed(3)	
	if(temp>=50 && $("[id='solution_name beaker']")[0].innerHTML=="<strong>Solution: </strong>Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)")
	{
		$("[id='solution_name beaker']")[0].innerHTML="<strong>Solution: </strong>Fe(OH)<sub>3</sub> Sol"
		alert("Sol created!")
		clearInterval(id)
	}
}

function cool(){
	temp=parseFloat($("[id='temp beaker']")[0].innerHTML.split(">")[2])
	
	id2=setInterval(function(){
		temp=temp-((temp-surrTemp)*(0.01))
		temp=temp.toFixed(3)
		$("[id='temp beaker']")[0].innerHTML="<strong>Temperature: </strong>"+temp+"<sup>o</sup>C"
		$("#beaker_display")[0].innerHTML=temp
		if(temp>=100)
		{
			temp=100
			alert("STOOOPPPPP!!!")
			clearInterval(id)
		}
	}, 500)
}

function burner_action()
{
	if(bool1==0){
		add();
		bool1=1
	}
	close_burner();
	cool();
	$("#collapseroot2")[0].innerHTML="<strong>Methods:</strong><ul><li>Drag the burner here and there</li><li>Drag it into a beaker to see its actions</li><li>The temperature of the beaker's solution increases as long as you hold the 'Burn' button</li><li>On leaving the 'Burn' button, the liquid goes back to cooling according to the surrounding"
}