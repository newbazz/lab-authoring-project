function show_menu_b(){
	b=document.getElementsByClassName("beaker1");
	b[0].addEventListener('contextmenu', function(e){
		menu=document.getElementById("menu_beaker");
		menu.style.left=(e.pageX-10)+"px";
		menu.style.top=(e.pageY-10)+"px";
		menu.style.display="block";
		e.preventDefault();
	})
	document.addEventListener('click', function(e){
		menu=document.getElementById("menu_beaker");
		menu.style.display="none";
		menu.style.left="";
		menu.style.top="";
	});
}

function show_menu_p(){
	p=document.getElementsByClassName("pipette");
	p[0].addEventListener('contextmenu', function(e){
		menu=document.getElementById("pipette");
		menu.style.left=(e.pageX-10)+"px";
		menu.style.top=(e.pageY-10)+"px";
		menu.style.display="block";
		e.preventDefault();
	})
	document.addEventListener('click', function(e){
		menu=document.getElementById("pipette");
		menu.style.display="none";
		menu.style.left="";
		menu.style.top="";
	});
}