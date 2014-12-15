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
		  case "+" :
		    var patternIndex = _.indexOf($('th'), e.target.parentElement)
		    var name = _this.model.template.samplePatterns[patternIndex].name
		    var beatIndex = _this.model.template.samplePatterns[patternIndex].pattern.length;
		    _this.model.template.samplePatterns[patternIndex].pattern.push(false);
		    beatBuilder.appendNewBeat( $('tr')[patternIndex], name, beatIndex, false); 
		    

		    break;
		  case "-" :
		    var patternIndex = _.indexOf($('th'), e.target.parentElement) ;
		    var name = _this.model.template.samplePatterns[patternIndex].name;
				_this.model.template.samplePatterns[patternIndex].pattern.pop();
				beatBuilder.removeBeat(patternIndex);
		    console.log( JSON.stringify(_this.model.template.samplePatterns) );

		    break;
		}
	},
	highlightCurrent : function (current16th){
		$('.current').removeClass('current');
		var $rows = $('tr');
		_.each($rows, function(row){
			var l = row.children.length - 1 ;	
			console.log('length of row: ' + l);
			var target = (current16th % l);
			var adjust = target + 2;
			console.log('adjusted target of current: ' + adjust);
			var nowBeat = $( '#' + row.id + ' td:nth-child(' + adjust +')') ;
			console.log(nowBeat);
			nowBeat[0].firstChild.classList.add('current');
		});
		
	}
}







function toggleMetroLight(){
	var metro = document.getElementById('metronome');
	var onOff = metro.checked;
	metro.checked = !onOff;

}









