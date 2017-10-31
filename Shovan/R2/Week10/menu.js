function show_menu(id){
	object=$("#"+id)
	if(object.hasClass("beaker1")){
		object[0].addEventListener('contextmenu', function(e){
			menu=document.getElementById("menu_beaker");
			volume_beaker=object[0].getAttribute("data-volume")
			solution_beaker=object[0].getAttribute("data-solution")
			temp_beaker=object[0].getAttribute("data-temp")
			$("[id='volume_liquid beaker']")[0].innerHTML="<strong>Volume of Liquid: </strong>"+volume_beaker+" mL"
			$("[id='solution_name beaker']")[0].innerHTML="<strong>Solution: </strong>"+solution_beaker
			$("[id='temp beaker']")[0].innerHTML="<strong>Temperature: </strong>"+temp_beaker+"<sup>o</sup>C"

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

	else if(object.hasClass("pipette")){
		object[0].addEventListener('contextmenu', function(e){
			menu=document.getElementById("pipette");
			volume_pipette=object[0].getAttribute("data-volume")
			$("#volume_liquid pipette")[0].innerHTML="<strong>Volume of Liquid: </strong>"+volume_pipette+" mL"
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
}
