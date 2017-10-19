function add_spoon(){
	$('#add').mouseup(function(){
		if($("[id='solution_name beaker']")[0].innerHTML=="<strong>Solution: </strong>Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)")
		{
			alert("FeCl\u2083 already present")
			return
		}
		$("[id='solution_name beaker']")[0].innerHTML="<strong>Solution: </strong>Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)"
		alert("FeCl\u2083 added")
	})
}

function close_spoon(){
	$('#close_spoon').mouseup(function(){
		$('#spoon_action')[0].style.display="none";
	})
}

function spoon_action(){
	add_spoon();
	close_spoon();
	$("#collapseroot2")[0].innerHTML="<strong>Methods:</strong><ul><li>Drag the spoon here and there</li><li>Drag it into a beaker to see its actions</li><li>'Add' adds a some FeCl<sub>3</sub> into the solution in the beaker</li></ul>"
}