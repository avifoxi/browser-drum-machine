$(document).ready(function() {
  

  // initialize with Model -- send ajax call to server, json of template content
  // on promise - initialize view building board 
  // data to be served by server, placeholder

    var kick = new SamplePattern("/assets/Kick_ac_close.wav", 'kick', [1,0,1,0,1,0,1,0]);

    var crash = new SamplePattern("/assets/Crash1_ac_close.wav", 'crash', [0,0,0,0,0,0,0,1]);

    var hat = new SamplePattern("/assets/ClosedHat_ac_close.wav", 'hat', [1,1,1,1,1,1,1,1]);

    var snare = new SamplePattern("/assets/Snare_ac_close.wav", 'snare', [0,1,0,1,0,1,0,1]);

    var temp = new Template({'samplePatterns' : [kick, snare, crash, hat], 'tempo' : 120})

  Context = new AudioContext();

  Model = new Model({
    'context' : Context
  });

  Model.template = temp;

  View = new View( Model, {
  	'tempoSlide' : $('#tempoSlide'),
  	'playToggle' : 'butt'
  });

  Controller = new Controller(Model, View);

  Controller.init();
  

});






// function init(){

//     // NOTE: THIS RELIES ON THE MONKEYPATCH LIBRARY BEING LOADED FROM
//     // Http://cwilso.github.io/AudioContext-MonkeyPatch/AudioContextMonkeyPatch.js
//     // TO WORK ON CURRENT CHROME!!  But this means our code can be properly
//     // spec-compliant, and work on Chrome, Safari and Firefox.

//     Context = new AudioContext();

//     met = new MetroGnome( Context )

//     tambourineBuff = [];

//     // loadDogSound("/assets/Tamb_ac_close.wav");

// }

// window.addEventListener("load", init );
