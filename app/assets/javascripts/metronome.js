console.log('hello grrl')

function MetroGnome( context ) {
    
    this.isPlaying = false;      // Are we currently playing?
    this.startTime;              // The start time of the entire sequence.
    this.current16thNote;        // What note is currently last scheduled?
    this.tempo = 120.0;          // tempo (in beats per minute)
    this.lookahead = 25.0;       // How frequently to call scheduling function
                                //(in milliseconds)
    this.scheduleAheadTime = 0.1;    // How far ahead to schedule audio (sec)
                                // This is calculated from lookahead, and overlaps
                                // with next interval (in case the timer is late)
    this.nextNoteTime = 0.0;     // when the next note is due.
    this.noteResolution = 0;     // 0 == 16th, 1 == 8th, 2 == quarter note

    this.timerID = 0;
    this.checkedSounds =  [  ];
}

MetroGnome.prototype = {
    nextNote : function() {
    // Advance current note and time by a 16th note...
        var _this = this;

        var secondsPerBeat = 60.0 / _this.tempo;    // Notice this picks up the CURRENT
                                              // tempo value to calculate beat length.
        _this.nextNoteTime += 0.25 * secondsPerBeat;    // Add beat length to last beat time

        var next = this.nextNoteTime;

        // after nextNoteTime has been advanced - here is where we should check the view for checked notes in a column. perhaps the scheduled sounds to an array and pass it one to the call back 

        this.current16thNote++;    // Advance the beat number, wrap to zero
        
        // or - eliminate the wrap - keep a running tally of 16th notes - and deduce each soundSequences next column by runnin a modulo of the current 16th. post MVP

        if (this.current16thNote == 16) {
            this.current16thNote = 0;
        }
    }, 
    scheduleNote : function( sounds, time ) {
        // var _this = this;
        for (var i = 0; i < sounds.length ; i++) {
            samplePlay(sounds[i], time);
        }    
    },
    scheduler : function() {
    // while there are notes that will need to play before the next interval,
        // schedule them and advance the pointer.
        
        var _this = this;
        while (_this.nextNoteTime < context.currentTime + _this.scheduleAheadTime ) {

            _this.scheduleNote( _this.checkedSounds, _this.nextNoteTime );
            _this.nextNote();
            // check for scheduled again inside loop?
        }
 
        _this.timerID = window.setTimeout( _this.scheduler.bind(_this), _this.lookahead );
    },
    play : function() {
        var _this = this;
        _this.isPlaying = !(_this.isPlaying);

        if (_this.isPlaying) { // start playing
            _this.current16thNote = 0;
            _this.nextNoteTime = context.currentTime;
            _this.scheduler();    // kick off scheduling
            return "stop";
        } else {
            window.clearTimeout( _this.timerID );
            return "play";
        }
    }


}






function loadDogSound(url) {
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

function samplePlay(buffer, when) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(when);                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}

function init(){

    // NOTE: THIS RELIES ON THE MONKEYPATCH LIBRARY BEING LOADED FROM
    // Http://cwilso.github.io/AudioContext-MonkeyPatch/AudioContextMonkeyPatch.js
    // TO WORK ON CURRENT CHROME!!  But this means our code can be properly
    // spec-compliant, and work on Chrome, Safari and Firefox.

    context = new AudioContext();

    met = new MetroGnome( context )

    tambourineBuff = [];

    loadDogSound("/assets/Tamb_ac_close.wav");

}

window.addEventListener("load", init );
