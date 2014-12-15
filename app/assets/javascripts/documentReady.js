$(document).ready(function() {
  
  // initialize with Model -- send ajax call to server, json of template content
  // on promise - initialize view building board 
  // data to be served by server, placeholder


    var kick = new SamplePattern( '/audio_assets/Kick_ac_close.wav', 'kick', [true,false,true,false,true,false,true,false]);

    var crash = new SamplePattern( '/audio_assets/Crash1_ac_close.wav' , 'crash', [false,false,false,false,false,false,false,true]);
    var cr2 = new SamplePattern('/audio_assets/Crash2_ac_close.wav', 'crash 2',[false,false,false,false,false,false,false,true]);
    var ltom = new SamplePattern('/audio_assets/LowTom_ac_close.wav', 'low tom' ,[false,false,false,false,false,false,false,true]);
    var mtom = new SamplePattern('/audio_assets/MidTom_ac_close.wav', 'mid tom' ,[false,false,false,false,false,false,false,true]);
    var tam = new SamplePattern('/audio_assets/Tamb_ac_close.wav', 'tambourin',[false,false,false,false,false,false,false,true]);
    var hat = new SamplePattern( '/audio_assets/ClosedHat_ac_close.wav', 'hat', [true,true,true,true,true,true,true,true]);

    var snare = new SamplePattern( '/audio_assets/Snare_ac_close.wav' , 'snare', [false,true,false,true,false,true,false,true]);

    var temporarilyServerFree = new Template({'samplePatterns' : [kick, snare, crash, hat], 'tempo' : 120})

    // var temporarilyServerFree = new Template({'samplePatterns' : [kick], 'tempo' : 120})

  Context = new AudioContext();

  Model = new Model({
    'context' : Context
  });

  Model.template = temporarilyServerFree;

  View = new View( Model, {
  	'tempoSlide' : $('#tempoSlide'),
  	'playToggle' : $('#play'),
    '$table' : $('table')
  });

  Controller = new Controller(Model, View);

  Controller.init();
  
  

});
