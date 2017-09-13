interact('.beaker1').dropzone({
	accept: '.pipette, .spoon',
	overlap: 0.2,
	ondragenter: function (e) {
		beaker=document.getElementsByClassName("beaker1")[0];
		what=e.relatedTarget
		position=beaker.getBoundingClientRect();
		if(e.relatedTarget.className=='draggable drag-drop pipette')
		{		
			// what.setAttribute('data-x', position.left+90)
			// what.setAttribute('data-y', position.top-150)
			menu=document.getElementsByClassName("menu")[2];
			menu.style.display="block";
		}
		else
		{
			menu=document.getElementsByClassName("menu")[3];
			menu.style.display="block";			
		}
	 },
	ondragleave: function (e) {
		if(e.relatedTarget.className=='draggable drag-drop pipette')
		{		
			menu=document.getElementsByClassName("menu")[2];
			menu.style.display="none";
		}
		else
		{
			menu=document.getElementsByClassName("menu")[3];
			menu.style.display="none";			
		}
	}
});