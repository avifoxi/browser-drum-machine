function Controller(model, view) {
	this.model = model;
	this.view = view;
}

Controller.prototype = {
	buildGrid : function() {
		this.view.buildGrid();
	}
}