function las(){
	height=36

	function add(){
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
		height+=1
		if(height<180)
		{
			$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(height*(50/18)).toFixed(3)+" mL"
			$("[id='volume_liquid pipette']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(500-(height*(50/18)).toFixed(3))+" mL"
			$('#water').height(height)
		}
		else
		{
			$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>500 mL"
			$("[id='volume_liquid pipette']")[0].innerHTML="<strong>Volume of Liquid: </strong>0 mL"
			$('#water').height(180)
		}
	}

	function withdraw(){
		height-=1
		if(height>0)
		{
			$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(height*(50/18)).toFixed(3)+" mL"
			$("[id='volume_liquid pipette']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+(500-(height*(50/18))).toFixed(3)+" mL"
			$('#water').height(height)
		}
		else
		{
			$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>500 mL"
			$("[id='volume_liquid pipette']")[0].innerHTML="<strong>Volume of Liquid: </strong>0 mL"
			$('#water').height(0)
		}
	}

	function close(){
		$('#close_pipette').mouseup(function(){
			$('#pipette_action').style.display='none';
		})
	}

	add()
	close()
}