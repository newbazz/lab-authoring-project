var idx=1;

$("#cat1opt1").click(function(){ //beaker
	$("#workspace")[0].innerHTML+="<div onclick='beaker_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop beaker1' id="+idx+" style='height: 150px; width: 120px; position: relative; display: inline-block;' data-volume='26' data-temp='30' data-solution='Water(H<sub>2</sub>O)'><div id='water"+idx+"' style='background-color: aqua; bottom: 0px; position: absolute; height: 36px; width:115px;z-index: -1000'></div><img src='beaker1.png' height='150px' style='display: block'><div id='beaker_display'"+idx+" style='width:115px; height:20px; text-align: center'>30.000</div></div>";
	idx++;
	idx_max++;
})

$("#cat1opt2").click(function(){ //pipette
	$("#workspace")[0].innerHTML+="<div onclick='pipette_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop pipette' id="+idx+" style='height: 150px; width: 40px; display: inline-block;' data-volume='26' data-solution='Water(H<sub>2</sub>O)'><img src='pipette.svg' height='150px'><div class='menu' id='pipette_action"+idx+"' style='z-index: 100; display: none; position: absolute; left: 100px; top: 10px'><div class='menu-header'><h6>Pipette</h6></div><div class='menu-content'><ul><li id='withdraw"+idx+"'>Withdraw</li><li id='pour"+idx+"'>Pour</li><li id='close_pipette' style='color: #F44336'>Close</li></ul></div></div></div>"
	idx++;
	idx_max++;
})

$("#cat2opt1").click(function(){ //spoon
	var what=prompt("What do want to be in the spoon?:", "FeCl\u2083")
	if(what=="FeCl\u2083")
	{
		$("#workspace")[0].innerHTML+='<div onclick="spoon_action('+idx+')" class="draggable drag-drop spoon" id='+idx+' style="height: 150px; width: 150px; display: inline-block;"><img src="spoon.png" height="150px"><div class="menu" id="spoon_action'+idx+'" style="z-index: 100; display: none; position: absolute; left: 100px; top: 10px"><div class="menu-header"><h6>Spoon</h6></div><div class="menu-content"><ul><li id="add'+idx+'">Add</li><li id="close_spoon'+idx+'" style="color: #F44336">Close</li></ul></div></div></div>'
		idx++;
		idx_max++;
	}
	else
	{
		alert("Sorry, this feature is not yet implemented")
	}
})

$("#cat2opt2").click(function(){ //burner
	$("#workspace")[0].innerHTML+='<div onclick="burner_action('+idx+')" class="draggable drag-drop burner" id='+idx+' style="height: 150px; position: relative; display: inline-block;" data-is_bead="false"><img src="magnetic-stirrer.png" height="150px"><div class="menu" id="burner_action'+idx+'" style="z-index: 100; display: none; position: absolute; left: 100px; top: 10px"><div class="menu-header"><h6>Burner</h6></div><div class="menu-content"><ul><li id="add_bead'+idx+'">Add Bead</li><li id="burn'+idx+'">Burn</li><li id="close_burner'+idx+'" style="color: #F44336">Close</li></ul></div></div></div>'
	idx++;
	idx_max++;
})