b=document.getElementsByClassName("beaker1");
b[0].addEventListener('contextmenu', function(e){
	menu=document.getElementsByClassName("menu")[0];
	menu.style.left=(e.pageX-10)+"px";
	menu.style.top=(e.pageY-10)+"px";
	menu.style.display="block";
	e.preventDefault();
})
document.addEventListener('click', function(e){
	menu=document.getElementsByClassName("menu")[0];
	menu.style.display="none";
	menu.style.left="";
	menu.style.top="";
});

p=document.getElementsByClassName("pipette");
p[0].addEventListener('contextmenu', function(e){
	menu=document.getElementsByClassName("menu")[1];
	menu.style.left=(e.pageX-10)+"px";
	menu.style.top=(e.pageY-10)+"px";
	menu.style.display="block";
	e.preventDefault();
})
document.addEventListener('click', function(e){
	menu=document.getElementsByClassName("menu")[1];
	menu.style.display="none";
	menu.style.left="";
	menu.style.top="";
});