function Model(params) {
	this.met = 'metronome object';
	this.audioContext = params.context; 
	this.template = 'template object';
}


Model.prototype = {
	init : function() {
		var _this = this;
		this.met = new MetroGnome( _this.context );
		// this.template = _this.prepTemplate();
		this.template.prepSamplePatterns();
	},
	prepTemplate : function() {
		// console.log('placeholder for prepping template from json')
	},
	updateTemplate : function(e) {
		var sPs = this.template.samplePatterns;
		var nameIndex = e.target.id.split('-');
		// console.log('sPs : ' + sPs);
		console.log('nameIndex :' + nameIndex);

		// nameIndex[0]

		var target = sPs.filter(function(sp) {
			return sp.name == nameIndex[0]
		})[0];

		// console.log(target);
		
		target.pattern[ nameIndex[1] ] = !(target.pattern[ nameIndex[1] ]);
	},
	scheduledSamples : function(current16th) {
		var sPs = this.template.samplePatterns;
		

		var targets = sPs.filter(function(sp) {
			var l = sp.pattern.length;
			return sp.pattern[current16th  % l] == true;
		});
		return targets;
	},
	togglePlay : function() {
		this.met.togglePlay();
	},
	updateTempo : function(newTempo){
		this.met.tempo = newTempo;
	}
}


function samplePlay(buffer, when) {
  var source = Context.createBufferSource(); 
  source.buffer = buffer;                    
  source.connect(Context.destination);       
  source.start(when);
}

