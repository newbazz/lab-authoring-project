var temp=0 //Celsius
var mass=0 //grams
var SPEC_HEAT=4.2 //J/sec
var supply=0 //kJ/sec
var SURR_TEMP=30 //Celsius
var bool1=0
var id2=0

function magneticburner_add(magneticburner_idx){
	$("#add_bead"+magneticburner_idx).click(function(){
		add_bead(magneticburner_idx)
	})

	$('#burn'+magneticburner_idx).mouseup(function(){
		clearInterval(id_burn);
	}).mousedown(function(){
		id_burn=setInterval(burn, 500, magneticburner_idx)
	})
}

function close_magneticburner(magneticburner_idx){
	$('#close_magneticburner'+magneticburner_idx).mouseup(function(){
		$('#magneticburner_action'+magneticburner_idx)[0].style.display='none';
	})
}

function add_bead(magneticburner_idx)
{
	console.log(magneticburner_idx+"WTF")
	alert("Bead added")
	which=$("#"+magneticburner_idx)[0]
	which.setAttribute("data-is_bead", "true")
}

function burn(magneticburner_idx){
	which=$("#"+magneticburner_idx)[0]
	isBead=which.getAttribute("data-is_bead")
	if(isBead=="false")
	{
		alert("Please add a bead in stirrer first")
		clearInterval(id_burn)
	}
	else if(isBead=="true")
	{
		where=$("#"+magneticburner_idx)[0].getAttribute("data-where")
		where=$("#"+where)
		mass=where[0].getAttribute("data-volume")
		temp=parseInt(where[0].getAttribute("data-temp"))
		supply=500
		temp+=supply/(mass*SPEC_HEAT)
		temp=temp.toFixed(3)
		console.log(temp)
		where[0].setAttribute("data-temp", temp)
		if(temp>=100)
		{
			alert("Try adding the FeCl3 solution into this")
			clearInterval(id_burn)
			clearInterval(id2)
		}
	}
	else
	{
		while(1)
		{
			alert("WHHHHAAATTT")
		}
	}
}

function cool(magneticburner_idx){
	where=$("#"+magneticburner_idx)[0].getAttribute("data-where")
	where=$("#"+where)
	temp=where[0].getAttribute("data-temp")
	
	id2=setInterval(function(){
		console.log(id2)
		temp=temp-((temp-SURR_TEMP)*(0.01))
		temp=temp.toFixed(3)
		where[0].setAttribute("data-temp", temp)
		console.log(temp)
		// $("#beaker_display"+where.id)[0].innerHTML=temp
		if(temp>=150)
		{
			temp=150
			alert("STOOOPPPPP!!!")
			clearInterval(id_burn)
		}
	}, 500)
}

function magneticburner_action(magneticburner_idx){
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+magneticburner_idx)[0].style.border="dotted";
	$("#"+magneticburner_idx).css('border-width', '1px');

	//Takes care of some weird bug
	if(bool1==0){
		magneticburner_add(magneticburner_idx);
		bool1=1
	}
	close_magneticburner(magneticburner_idx);
	//All beakers should cool, so try to put this function somewhere else
	// cool(magneticburner_idx);

	//Changes Properties Bar
	$("#collapseroot2")[0].innerHTML="<strong>Methods:</strong><ul><li>Drag the magneticburner here and there</li><li>Drag it into a beaker to see its actions</li><li>The temperature of the beaker's solution increases as long as you hold the 'Burn' button</li><li>On leaving the 'Burn' button, the liquid goes back to cooling according to the surrounding"
}