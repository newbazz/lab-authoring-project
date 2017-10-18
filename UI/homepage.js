var bgImageArray = [".jpg","1.jpg","2.jpg"],
base = "cover",
secs = 4;
newsecs = 6;
idx=0;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.getElementsByClassName('cover-body')[0].style.background = "url(" + base + bgImageArray[k] + ")";
			document.getElementsByClassName('cover-body')[0].style.backgroundSize ="inherit";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i);	
	}
}


function showTheory(){
	window.clearTimeout();
	setTimeout(function(){
		console.log(idx);
		$("#home"+String((idx+1)%3)).fadeToggle(1500);
		$("#home"+String((idx+2)%3)).fadeToggle(1500);
		$("#home"+String(idx%3)).fadeToggle(1500);
		idx++;
		showTheory();
	}, (newsecs * 1000));	
}
backgroundSequence();
showTheory();
