height=36
bool=0

function add_pipette(){
	$('#pour').mouseup(function(){
		clearInterval(id_pour)
	}).mousedown(function(){
		id_pour=setInterval(pour, 50)
	})

	$('#withdraw').mouseup(function(){
		clearInterval(id_withdraw)
	}).mousedown(function(){
		id_withdraw=setInterval(withdraw, 50)
	})
}

function pour(){
	if(height<130)
	{
		height+=1
		// $("#beaker_display")[0].innerHTML=" "
		$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(height*(50/18)).toFixed(3)+" mL"
		$("[id='volume_liquid pipette']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(500-(height*(50/18)).toFixed(3))+" mL"
		$('#water').height(height)
	}
	else
	{
		// $("#beaker_display")[0].innerHTML="Beaker Full!!"
		$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>500 mL"
		$("[id='volume_liquid pipette']")[0].innerHTML="<strong>Volume of Liquid: </strong>0 mL"
		$('#water').height(130)
	}
}

function withdraw(){
	if(height>0)
	{
		height-=1
		// $("#beaker_display")[0].innerHTML=" "
		$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(height*(50/18)).toFixed(3)+" mL"
		$("[id='volume_liquid pipette']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(500-(height*(50/18))).toFixed(3)+" mL"
		$('#water').height(height)
	}
	else
	{
		// $("#beaker_display")[0].innerHTML="Beaker Empty!!"
		$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>0 mL"
		$("[id='volume_liquid pipette']")[0].innerHTML="<strong>Volume of Liquid: </strong>500 mL"
		$('#water').height(0)
	}
}

function close_pipette(){
	$('#close_pipette').mouseup(function(){
		$('#pipette_action')[0].style.display='none';
	})
}

function pipette_action()
{
	// console.log("clicked on pipette")
	if(bool==0){
		add_pipette()
		bool=1
	}
	close_pipette()
	// console.log(1)
	$("#collapseroot2")[0].innerHTML="<strong>Methods:</strong><ul><li>Drag the pipette here and there</li><li>Drag it into a beaker to see its actions</li><li>The amount of water added/removed depends on how long you hold the 'Pour' or 'Withdraw' button</li></ul>"
	$("#collapseroot2")[0].innerHTML+="<strong>Properties:</strong>"
	$("#collapseroot2")[0].innerHTML+=$("#menu_content_pipette")[0].innerHTML
}