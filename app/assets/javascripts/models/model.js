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

		var target = sPs.filter(function(sp) {
			return sp.name == nameIndex[0]
		})[0];
		
		target.pattern[ nameIndex[1] ] = !(target.pattern[ nameIndex[1] ]);
	},
	scheduledSamples : function(index) {
		var sPs = this.template.samplePatterns;
		var targets = sPs.filter(function(sp) {
			return sp.pattern[index] == true
		});
		return targets;
	}
}


function samplePlay(buffer, when) {
  var source = Context.createBufferSource(); 
  source.buffer = buffer;                    
  source.connect(Context.destination);       
  source.start(when);
}

