//'where' refers to the beaker upon which it acts
function add_spoon(spoon_idx){
	where=$("#"+spoon_idx)[0].getAttribute("data-where")
	where=$("#"+where)

	//Add "FeCl3" if not already present
	$('#add'+spoon_idx).mouseup(function(){
		if(where[0].getAttribute("data-solution")=="Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)")
		{
			alert("FeCl\u2083 already present")
			return
		}
		where[0].setAttribute("data-solution", "Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)")
		alert("FeCl\u2083 added")
	})
}

function close_spoon(spoon_idx){
	$('#close_spoon'+spoon_idx).mouseup(function(){
		$('#spoon_action'+spoon_idx)[0].style.display="none";
	})
}

function spoon_action(spoon_idx){
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+spoon_idx)[0].style.border="dotted";
	$("#"+spoon_idx).css('border-width', '1px');

	add_spoon(spoon_idx);
	//Closes menu
	close_spoon(spoon_idx);

	//Changes the Properties Bar
	$("#collapseroot2")[0].innerHTML="<strong>Methods:</strong><ul><li>Drag the spoon here and there</li><li>Drag it into a beaker to see its actions</li><li>'Add' adds a some FeCl<sub>3</sub> into the solution in the beaker</li></ul>"
}
