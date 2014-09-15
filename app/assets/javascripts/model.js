function Model() {
	this.metronome;
	this.audioContext; // should context be globally available? 
	this.template;
}


Model.prototype = {
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

function init(){

    // NOTE: THIS RELIES ON THE MONKEYPATCH LIBRARY BEING LOADED FROM
    // Http://cwilso.github.io/AudioContext-MonkeyPatch/AudioContextMonkeyPatch.js
    // TO WORK ON CURRENT CHROME!!  But this means our code can be properly
    // spec-compliant, and work on Chrome, Safari and Firefox.

    Context = new AudioContext();

    met = new MetroGnome( Context )

    tambourineBuff = [];

    // loadDogSound("/assets/Tamb_ac_close.wav");

}

window.addEventListener("load", init );
