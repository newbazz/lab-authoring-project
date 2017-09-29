var whenDown;
var whenUp;
var pressed=0;

function add(){
	$('#add').mouseup(function(){
		var d=new Date();
		whenUp=d.getTime();
		pressed=(whenUp-whenDown)
		alert("added")

	}).mousedown(function(){
		var d=new Date();
		whenDown=d.getTime();
	})
}

function close(){
	$('#close').mouseup(function(){
		$('.menu')[3].style.display='none';
	})
}

add();
close();