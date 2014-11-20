function Controller(model, view) {
	this.model = model;
	this.view = view;
}

Controller.prototype = {
	init : function() {
		// 1 - ajax template info, format model
		
		// 2 - construct view based on model contents
		
		this.model.init();
		this.view.buildGrid();
		this.view.newButtonsListen();


	},
	buildGrid : function() {
		this.view.buildGrid();
	},
	togglePlay : function() {
		this.model.togglePlay();
		this.view.togglePlayText(Model.met.isPlaying);
	},
	updateTempo : function(e) {
		var _this = this;
		var newTempo = e.target.value;
		this.model.updateTempo(newTempo);
		var newTempo = _this.model.met.tempo;
		this.view.updateTempoDisplay(newTempo);
	},
	nextNote : function(num) {
		// console.log(num);
		this.view.highlightCurrent(num);
	}
}