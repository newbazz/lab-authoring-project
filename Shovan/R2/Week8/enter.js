interact('.beaker1').dropzone({
	accept: '.pipette, .spoon, .burner',
	overlap: 0.2,
	ondragenter: function(e){
		beaker=e.target
		what=e.relatedTarget
		beaker.style.border="dotted"
		beaker.style.borderWidth="1px"
		
		position_beaker=beaker.getBoundingClientRect();
		position_what=what.getBoundingClientRect();
		if(what.className=='draggable drag-drop pipette')
		{
			console.log(position_what)
			console.log(position_beaker)
			what.setAttribute('data-where', beaker.id);
			menu=document.getElementById("pipette_action"+what.id);
			menu.style.display="block";
		}
		else if(what.className=='draggable drag-drop spoon')
		{
			what.setAttribute('data-where', beaker.id);
			menu=document.getElementById("spoon_action"+what.id);
			menu.style.display="block";			
		}
		else if(what.className=='draggable drag-drop burner')
		{
			what.setAttribute('data-where', beaker.id);
			cool(what.id)
			menu=document.getElementById("burner_action"+what.id);
			menu.style.display="block";
		}
	 },
	ondragleave: function (e) {
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