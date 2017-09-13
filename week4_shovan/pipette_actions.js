var whenDown;
var whenUp;
var pressed=0;

function pour(){
	$('#pour').mouseup(function(){
		var d=new Date();
		whenUp=d.getTime();
		pressed=(whenUp-whenDown)

	water_added=pressed/10
	new_height=$('#water').height()+water_added

	if(new_height<180)
	{
		$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(new_height*(50/18)).toFixed(3)+" mL"
		$('#water').height(new_height)
	}
	else
	{
		$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>500 mL"
		$('#water').height(180)
	}

	}).mousedown(function(){
		var d=new Date();
		whenDown=d.getTime();
	})
}

function withdraw(){
	$('#withdraw').mouseup(function(){
		var d=new Date();
		whenUp=d.getTime();
		pressed=(whenUp-whenDown)

	water_removed=pressed/10
	new_height=$('#water').height()-water_removed

	if((new_height)>0)
	{
		$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(new_height*(50/18)).toFixed(3)+" mL"
		$('#water').height(new_height)
	}
	else
	{
		$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>0 mL"
		$('#water').height(0)
	}

	}).mousedown(function(){
		var d=new Date();
		whenDown=d.getTime();
	})
}

function close(){
	$('#close').mouseup(function(){
		$('.menu')[2].style.display='none';
	})
}

pour();
withdraw();
close();