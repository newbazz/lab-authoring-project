var temp=0 //Celsius
var mass=0 //grams
var specHeat=4.2 //J/sec
var supply=0 //kJ/sec
var surrTemp=30 //Celsius

function add(){
	$('#burn').mouseup(function(){
		clearInterval(id);
	}).mousedown(function(){
		id=setInterval(burn, 500)
	})
}

function close(){
	$('#close_burner').mouseup(function(){
		$('#burner_action').style.display='none';
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
		console.log(temp)
	}, 500)
}

add();
close();
cool();