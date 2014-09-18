function Controller(model, view) {
	this.model = model;
	this.view = view;
}

Controller.prototype = {
	init : function() {
		// 1 - ajax template info, format model
		
		// 2 - construct view based on model contents
		this.view.buildGrid();

	},
	buildGrid : function() {
		this.view.buildGrid();
	}
}