$(document).ready(function() {
  

  $('#newRow').submit(function(e){
  	e.preventDefault();
  	addSound(e);
  })

  View = new View({
  	'tempoSlide' : $('#tempoSlide'),
  	'playToggle' : 'butt'
  });

  console.log('hi from the view');


});


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