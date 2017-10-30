interact('.beaker1, .flask, .cylinder, .testtube').dropzone({
	accept: '.thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer',
	overlap: 0.2,
	ondragenter: function(e){
		beaker=e.target
		what=e.relatedTarget
		beaker.style.border="dotted"
		beaker.style.borderWidth="1px"
		what.setAttribute('data-where', beaker.id);

		if(what.className=='draggable drag-drop pipette')
		{
			menu=document.getElementById("pipette_action"+what.id);
			menu.style.display="block";
		}
		else if(what.className=='draggable drag-drop spoon')
		{
			menu=document.getElementById("spoon_action"+what.id);
			menu.style.display="block";			
		}
		else if(what.className=='draggable drag-drop burner')
		{
			cool(what.id)
			menu=document.getElementById("burner_action"+what.id);
			menu.style.display="block";
		}
		else if(what.className=='draggable drag-drop magnetic-stirrer')
		{
			cool(what.id)
			menu=document.getElementById("magnetic-stirrer_action"+what.id);
			menu.style.display="block";
		}
	 },
	ondragleave: function (e) {
		what.removeAttribute('data-where');
		if(what.className=='draggable drag-drop pipette')
		{
			menu=document.getElementById("pipette_action"+what.id);
			menu.style.display="none";
		}
		else if(what.className=='draggable drag-drop spoon')
		{
			menu=document.getElementById("spoon_action"+what.id);
			menu.style.display="none";			
		}
		else if(what.className=='draggable drag-drop burner')
		{
			menu=document.getElementById("burner_action"+what.id);
			menu.style.display="none";	
		}
	}
});



interact('.remove').dropzone({
	accept: '.beaker1, .flask, .cylinder, .testtube, .thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer',
	overlap: 0.4,
	ondragenter: function(e){
		where=e.target
		what=e.relatedTarget
		console.log(where, where.style.backgroundColor)
		where.style.backgroundColor="blue"
		$(".removecross")[0].style.display="block"
	}
});

interact('.removecross').dropzone({
	accept: '.beaker1, .flask, .cylinder, .testtube, .thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer',
	overlap: 0.2,
	ondragenter: function(e){
		where=e.target
		what=e.relatedTarget
		$("#"+what.id).empty()
		$("#"+what.id).removeClass("draggable")
		$(".remove")[0].style.backgroundColor="white"
		where.style.display="none"
	}
})