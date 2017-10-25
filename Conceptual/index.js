var PREVW=0;
	var PREVF=0;
	var heat=0;
	var HIDDEN=0;
	var HIDDENW=0;
	var myVinyls = {
    "Solute":0,
    "Solvent":0,
	};
	//make graph
	var ctx = document.getElementById("myCanvas").getContext("2d");
		ctx.canvas.width = 100;
		ctx.canvas.height = 250;
		//sets the height and width of the bars
	$('#container').hover(function(){
		var cur = $(this);
		//change the cursor to a pointer
		cur.css("cursor", "pointer");
	});
	var getFnc=function(){
		//gets amount of heat
		//validate if the entered value is a number
		if(!isNaN(document.getElementById('heat').value)){
			heat=document.getElementById('heat').value;
		}
		else{
			window.alert('Enter a number');
		}
		document.getElementById('heat').value=null;
	}
	var circle_water=function(){
		//make water particles
		var div1=document.getElementById('img');
		var circle = document.createElement('span');
		circle.className = 'circle_water';
		//left -700 -300
		// top 100 400
		var x=Math.floor(Math.random() * 300) +390
		x*=-1;
		var y=Math.floor(Math.random() * 300) + 120
		//give style to the circle as required
		circle.style.marginTop=String(y)+"px";
		circle.style.marginLeft=String(x)+"px";
		circle.style.color="powderblue";
		circle.style.border="solid";
		circle.style.borderRadius="75%";
		div1.appendChild(circle);
	}
	var circle_f=function(){
		//make fecl3 particles
		var div1=document.getElementById('img');
		var circle = document.createElement('span');
		circle.className = 'circle_fecl';
		//left -700 -300
		// top 100 400
		var x=Math.floor(Math.random() * 300) + 390
		x*=-1;
		var y=Math.floor(Math.random() * 300) + 120
		//style to make it fecl3 particle
		circle.style.marginTop=String(y)+"px";
		circle.style.marginLeft=String(x)+"px";
		circle.style.borderRadius="25%";
		circle.style.color="brown";
		circle.style.border="solid";
		div1.appendChild(circle);
	}
	function drawLine(ctx, startX, startY, endX, endY,color){
		//draw lines in graph
	    ctx.save();
	    ctx.strokeStyle = color;
	    ctx.beginPath();
	    ctx.moveTo(startX,startY);
	    ctx.lineTo(endX,endY);
	    ctx.stroke();
	    ctx.restore();
	}
	function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
		//draw graph bars
	    ctx.save();
	    ctx.fillStyle=color;
	    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
	    ctx.restore();
	    //save the given graph
	}
	function remove(){
		//remove the graph
		document.getElementById('myCanvas').remove();
	}
	var Barchart = function(options){
	    this.options = options;
	    this.canvas = options.canvas;
	    //make a 2-D canvas for graph
	    this.ctx = this.canvas.getContext("2d");
	    this.colors = options.colors;
	    this.draw = function(){
	        var maxValue = 0;
	        for (var categ in this.options.data){
	            maxValue = Math.max(maxValue,this.options.data[categ]);
	        }
	        //set the max-height and width of canvas
	        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
	        var canvasActualWidth = this.canvas.width - this.options.padding * 2;
	        //drawing the grid lines
	        var gridValue = 0;
	        while (gridValue <= maxValue){
	            var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
	            drawLine(
	                this.ctx,
	                0,
	                gridY,
	                this.canvas.width,
	                gridY,
	                this.options.gridColor
	            ); 
	            //writing grid markers
	            this.ctx.save();
	            //style the grid markers
	            this.ctx.fillStyle = this.options.gridColor;
	            this.ctx.font = "bold 10px Arial";
	            this.ctx.fillText(gridValue, 10,gridY - 2);
	            this.ctx.restore();
	 
	            gridValue+=this.options.gridScale;
	        }
	        //drawing the bars
	        var barIndex = 0;
	        var numberOfBars = Object.keys(this.options.data).length;
	        var barSize = (canvasActualWidth)/numberOfBars;
	        for (categ in this.options.data){
	            var val = this.options.data[categ];
	            var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
	            //draw the bars
	            drawBar(
	                this.ctx,
	                this.options.padding + barIndex * barSize,
	                this.canvas.height - barHeight - this.options.padding,
	                barSize,
	                barHeight,
	                this.colors[barIndex%this.colors.length]
	            );
	 
	            barIndex++;
	        }
	  
	    }
	}
	//make object myBarchart
	var myBarchart = new Barchart(
    {
        canvas:myCanvas,
        padding:10,
        gridScale:5,
        gridColor:"#eeeeee",
        data:myVinyls,
        colors:["#A52A2A","blue", "#bccd7a","#eb9743"]
    }
);
		function show(){
			if(myVinyls["Solvent"]==0){
					window.alert('Please Add Some Solvent');
			}
			else{
				myBarchart.draw();
			}
		};
		interact('.draggable')

		.draggable({
		autoScroll: true,
		onmove: dragMoveListener
			});

		function dragMoveListener (event) {
			if(event.target.id=="solute"){
				if(heat==0){
					window.alert('heat it first');
					return;
				}	
			}
			var target = event.target
			y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
			groove_length=parseInt(window.getComputedStyle(event.target.parentNode.querySelector(".groove")).height, 10)
			if(y<=0 && y>=(-groove_length))
			{
				target.style.webkitTransform = target.style.transform ='translate(41px, ' + (420+y) + 'px)';
				target.setAttribute('data-y', y);
				//check which bar is changed
				p=event.target.querySelector('div')
				p.innerHTML=-(y/400)
				if(event.target.id=="solute"){
					myVinyls["Solute"]=-(y/20);
					if(heat>=30){
						//increase or decrease the water particles
						if(-(y/20)>PREVF){
							for(var i=0;i<1;i++){
							circle_f();
							}	
						}
						else{
							for(var i=0;i<1;i++){
								document.getElementsByClassName('circle_fecl')[i+HIDDEN].style.display="none";
								HIDDEN+=1;
							}

						}
						PREVF=-(y/20)
					}
					else{
						window.alert('heat more to see the effect');
						return;
					}
				}
				else if(event.target.id=="solvent"){
				//increase or decrease the fecl3 particles
					myVinyls["Solvent"]=-(y/20);
					if(-(y/20)>PREVW){
						for(var i=0;i<1;i++){
						circle_water();
						}	
					}
					else{
							for(var i=0;i<1;i++){
								document.getElementsByClassName('circle_water')[i+HIDDENW].style.display="none";
								HIDDENW+=1;
							}
						}
					PREVW=-(y/20)
				}
				if(event.target.parentNode.id=="meter2")
				{
					container=document.getElementById("container")
					//container.style.marginTop=(425+y)+"px"
				}

				squares=document.getElementsByClassName("square")
				solute=squares[0].innerHTML
				//increase the molarity
				solution=0.2+parseFloat(squares[1].innerHTML, 3)
				molarity=solute/solution
				y_meter3=molarity*80
				meter3=squares[2]
				//style the meter
				meter3.style.marginTop=(400-y_meter3)+"px"
				meter3.innerHTML=molarity

				container=document.getElementById("container")
				color=parseInt((224-((molarity/5)*224))).toString()
				container.style.backgroundColor="rgb(255, "+color+", "+color+")"
			}
		}
		//check when the slider moves
		window.dragMoveListener = dragMoveListener;
		for(var i=0;i<50;i++)circle_water();
