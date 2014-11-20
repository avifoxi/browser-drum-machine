function View(model, elements) {
	this.model = model;
	this.$playToggle = elements.playToggle;
	this.tempoSlide = elements.tempoSlide;
	this.$table = elements.$table;
	// this.$plMinButts = $('th');
	// this.volKnob = elements.volKnob;

	var _this = this;
	this.tempoSlide.change(function(e){ 
		Controller.updateTempo(e); 
	});

	this.$table.change(function(e){	
		_this.model.updateTemplate(e)
	});

	this.$table.click(function(e){	
		_this.handleClick(e);
	});

	this.$playToggle.click(function(e){
		Controller.togglePlay();
	});



	// this.$plMinButts.click(function(e){
	// 	console.log(e.target);
	// })
}



// onInput="met.tempo = event.target.value; document.getElementById('showTempo').innerText= met.tempo;"


// <input id="tempo" type="range" min="30.0" max="160.0" step="1" value="120" style="height: 20px; width: 200px" onInput="met.tempo = event.target.value; document.getElementById('showTempo').innerText= met.tempo;">


View.prototype = {
	buildGrid : function() {
		var patterns = Model.template.samplePatterns;
		
		beatBuilder.buildGrid(patterns);
	},
	togglePlayText : function(playing) {
		if (playing) {
			$('#play').html('stop')
		} else	{
			$('#play').html('play')
		}
	},
	updateTempoDisplay : function(tempo) {
		$('#showTempo').html(tempo)
	}, 
	handleClick : function(e) {
		var _this = this;
		switch (e.target.innerText) {
		  case "+":
		    console.log("plus me");
		    break;
		  case "-":
		    console.log("minus me.");
		    break;
		}
	}
}







function toggleMetroLight(){
	var metro = document.getElementById('metronome');
	var onOff = metro.checked;
	metro.checked = !onOff;

}









