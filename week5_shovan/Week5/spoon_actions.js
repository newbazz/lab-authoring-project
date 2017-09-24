var whenDown;
var whenUp;
var pressed=0;

function add(){
	$('#add').mouseup(function(){
		var d=new Date();
		whenUp=d.getTime();
		pressed=(whenUp-whenDown)
		$("[id='solution_name beaker']")[0].innerHTML="<strong>Solution: </strong>Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)"
		alert("FeCl\u2083 added")

	}).mousedown(function(){
		var d=new Date();
		whenDown=d.getTime();
	})
}

function close(){
	$('#close_spoon').mouseup(function(){
		$('spoon_action').style.display='none';
	})
}

add();
close();