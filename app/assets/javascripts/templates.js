function Template() {
	this.samplePatterns = [];
	this.tempo;
}

function SamplePattern(urlPath, name, pattern) {
	this.urlPath = urlPath;
	this.name = name;
	this.pattern = pattern;
	this.decodedBuffer = [];
}

Template.prototype = {
	prepSamplePatterns : function() {
		var _this = this;
		for (var i = 0; i < _this.samplePatterns.length; i++) {
			_this.prepOneSP( _this.samplePatterns[i]) 
		}
	},
	prepOneSP : function(samplePattern) {
		var request = new XMLHttpRequest();
	  request.open('GET', samplePattern.urlPath, true);
	  request.responseType = 'arraybuffer';

	  // Decode asynchronously
	  request.onload = function() {
	    Context.decodeAudioData(request.response, function(buffer) {
	      samplePattern.decodedBuffer = buffer;
	    }, function(){ console.log('oh shit')});
	  }
	  request.send();
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
