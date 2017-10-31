//'which' refers to which pipette we are using and 'where' refers to where it is acting, i.e which beaker it is acting upon

height=0
bool=0


function add_pipette(pipette_idx){
	var which=$('#'+pipette_idx)
	var where=which[0].getAttribute('data-where')

	//Ataching mouse events
	$('#pour'+pipette_idx).mouseup(function(){
		console.log("before clear")
		clearInterval(id_pour)
		console.log("after clear")
	}).mousedown(function(){
		id_pour=setInterval(pour, 50, pipette_idx)
	})

	$('#withdraw'+pipette_idx).mouseup(function(){
		clearInterval(id_withdraw)
	}).mousedown(function(){
		id_withdraw=setInterval(withdraw, 50, pipette_idx)
	})
}

function pour(pipette_idx){
	var which=$('#'+pipette_idx)
	var where=which[0].getAttribute('data-where')
	var height=parseFloat($('#'+where)[0].getAttribute('data-volume'))
	height=(height*(18/50)).toFixed(3)
	height=parseFloat(height)
	if(height<130)
	{
		//Increases height and sets data-attributes
		height+=1
		var newPipetteVolume=500-(height*(50/18)).toFixed(3);
		var newBeakerVolume=(height*(50/18)).toFixed(3);
		$("#"+where)[0].setAttribute("data-volume", newBeakerVolume)
		which[0].setAttribute("data-volume", newPipetteVolume)
		$('#water'+where).height(height)

		//Changes the "solution name" of beaker
		var newBeakerSolution=which[0].getAttribute('data-solution')
		$('#'+where)[0].setAttribute('data-solution', newBeakerSolution)
	}
	else
	{
		$('#water'+where).height(130)
	}

	temp=parseInt($("#"+where)[0].getAttribute("data-temp"))
	if(temp>=100 && where[0].getAttribute("data-solution")=="Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)")
	{
		where[0].setAttribute("data-solution", "Fe(OH)<sub>3</sub> Sol")
		alert("Sol created!")
	}

}

function withdraw(pipette_idx){
	var which=$('#'+pipette_idx)
	var where=which[0].getAttribute('data-where')
	var height=parseFloat($('#'+where)[0].getAttribute('data-volume'))
	height=(height*(18/50)).toFixed(3)
	height=parseFloat(height)
	console.log(height, typeof(height))
	if(height>0)
	{
		//Decreases height and sets data-attributes
		height-=1
		var newPipetteVolume=500-(height*(50/18)).toFixed(3);
		var newBeakerVolume=(height*(50/18)).toFixed(3);
		console.log("pipette"+pipette_idx+ "adds to beaker" +where)
		$("#"+where)[0].setAttribute("data-volume", newBeakerVolume)
		which[0].setAttribute("data-volume", newPipetteVolume)
		$('#water'+where).height(height)

		//Changes the "solution name" of pipette
		var newPipetteSolution=$('#'+where)[0].getAttribute('data-solution')
		which[0].setAttribute("data-solution", newPipetteSolution)
	}
	else
	{
		$('#water'+where).height(0)
	}
}

function close_pipette(pipette_idx){
	$('#close_pipette').mouseup(function(){
		$('#pipette_action'+pipette_idx)[0].style.display='none';
	})
}

function pipette_action(pipette_idx)
{
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+pipette_idx)[0].style.border="dotted";
	$("#"+pipette_idx).css('border-width', '1px');

	//Takes care of some weird bug
		if(bool==0){
			console.log("because bool is zero")
			add_pipette(pipette_idx)
			bool=1
		}
		else
		{
			console.log("because bool is 1")
		}

	//Closes menu
	close_pipette(pipette_idx)

	var clicked=$("#"+pipette_idx)[0]
	//Edits the Help sidebar
	$("#properties")[0].innerHTML="<ul><li>Volume: "+clicked.getAttribute("data-volume")+"</li><li>Solution Name: "+clicked.getAttribute("data-solution")+"</li></ul>"
	$("#methods")[0].innerHTML="<ul><li>Drag the pipette here and there</li><li>Drag it into a beaker to see its actions</li><li>The amount of water added/removed depends on how long you hold the 'Pour' or 'Withdraw' button</li></ul"
}