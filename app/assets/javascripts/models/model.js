function Model(params) {
	this.met = 'metronome placeholder';
	this.audioContext = params.context; 
	this.template = 'placeholder for template';
}


Model.prototype = {
	init : function() {
		var _this = this;
		this.met = new MetroGnome( _this.context );
		this.template = _this.prepTemplate();
	},
	prepTemplate : function() {
		// console.log('placeholder for prepping template from json')
	}

}


function samplePlay(buffer, when) {
  var source = Context.createBufferSource(); 
  source.buffer = buffer;                    
  source.connect(Context.destination);       
  source.start(when);
}

