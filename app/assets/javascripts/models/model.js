function Model() {
	this.met;
	this.audioContext; // should context be globally available? 
	this.template;
}


Model.prototype = {
	init : function() {
		var _this = this;
		this.met = new MetroGnome( _this.context );
		this.template = _this.prepTemplate();
	},
	loadDogSound : function(url) {
	 	var request = new XMLHttpRequest();
	  request.open('GET', url, true);
	  request.responseType = 'arraybuffer';

	  // Decode asynchronously
	  request.onload = function() {
	    context.decodeAudioData(request.response, function(buffer) {
	      met.checkedSounds = [ buffer ];
	    }, function(){ console.log('oh shit')});
	  }
	  request.send();
	},
	prepTemplate : function() {
		console.log('placeholder for prepping template from json')
	}

}


// function loadDogSound(url) {
//  	var request = new XMLHttpRequest();
//   request.open('GET', url, true);
//   request.responseType = 'arraybuffer';

//   // Decode asynchronously
//   request.onload = function() {
//     context.decodeAudioData(request.response, function(buffer) {
//       met.checkedSounds = [ buffer ];
//     }, function(){ console.log('oh shit')});
//   }
//   request.send();
// }

function samplePlay(buffer, when) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(when);                           // play the source now                                             // note: on older systems, may have to use deprecated noteOn(time);
}

