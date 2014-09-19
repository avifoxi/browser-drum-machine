$(document).ready(function() {
  
  // initialize with Model -- send ajax call to server, json of template content
  // on promise - initialize view building board 
  // data to be served by server, placeholder

    var kick = new SamplePattern("/assets/Kick_ac_close.wav", 'kick', [true,false,true,false,true,false,true,false]);

    var crash = new SamplePattern("/assets/Crash1_ac_close.wav", 'crash', [false,false,false,false,false,false,false,true]);

    var hat = new SamplePattern("/assets/ClosedHat_ac_close.wav", 'hat', [true,true,true,true,true,true,true,true]);

    var snare = new SamplePattern("/assets/Snare_ac_close.wav", 'snare', [false,true,false,true,false,true,false,true]);

    var temporarilyServerFree = new Template({'samplePatterns' : [kick, snare, crash, hat], 'tempo' : 120})

  Context = new AudioContext();

  Model = new Model({
    'context' : Context
  });

  Model.template = temporarilyServerFree;

  View = new View( Model, {
  	'tempoSlide' : $('#tempoSlide'),
  	'playToggle' : 'butt',
    '$table' : $('table')
  });

  Controller = new Controller(Model, View);

  Controller.init();
  

});
