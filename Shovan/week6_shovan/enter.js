interact('.beaker1').dropzone({
	accept: '.pipette, .spoon, .burner',
	overlap: 0.2,
	ondragenter: function(e){
		beaker=e.target
		what=e.relatedTarget
		console.log(e)
		// position=beaker.getBoundingClientRect();
		if(what.className=='draggable drag-drop pipette')
		{		
			menu=document.getElementById("pipette_action");
			menu.style.display="block";
		}
		else if(what.className=='draggable drag-drop spoon')
		{
			menu=document.getElementById("spoon_action");
			menu.style.display="block";			
		}
		else if(what.className=='draggable drag-drop burner')
		{
			menu=document.getElementById("burner_action");
			menu.style.display="block";	
		}
	 },
	ondragleave: function (e) {
		if(what.className=='draggable drag-drop pipette')
		{		
			menu=document.getElementById("pipette_action");
			menu.style.display="none";
		}
		else if(what.className=='draggable drag-drop spoon')
		{
			menu=document.getElementById("spoon_action");
			menu.style.display="none";			
		}
		else if(what.className=='draggable drag-drop burner')
		{
			menu=document.getElementById("burner_action");
			menu.style.display="none";	
		}
	}
});