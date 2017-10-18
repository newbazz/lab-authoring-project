var bgImageArray = [".jpg","1.jpg","2.jpg"],
base = "cover",
secs = 4;
newsecs = 8;
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
		setTimeout(function()
				{
					$(".home"+String(idx%3)).fadeOut(2000);
					setTimeout(function()
							{
								$(".home"+String((idx+2)%3)).fadeOut(2000);
								setTimeout(function()
										{
											$(".home"+String((idx+1)%3)).fadeIn(2000);
										},1500);
							},1500);
				},1500);
		idx++;
		showTheory();
	}, (newsecs * 1000));	
}

function showInfo(){
	document.getElementsByClassName('home')[0].style.display = "none";
	document.getElementsByClassName('theory')[0].style.display = "block";
}

function showHome(){
	document.getElementsByClassName('theory')[0].style.display = "none";
	document.getElementsByClassName('home')[0].style.display = "block";
}

$(".home0").fadeIn(2000);
idx++;
backgroundSequence();
showTheory();
