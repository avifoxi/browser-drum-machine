function View(model, elements) {
	this.model = model;
	this.playToggle = elements.playToggle;
	this.tempoSlide = elements.tempoSlide;
	// this.volKnob = elements.volKnob;

	this.tempoSlide.change(function(e){ 
		console.log(e); 
	});


}


// onInput="met.tempo = event.target.value; document.getElementById('showTempo').innerText= met.tempo;"


// <input id="tempo" type="range" min="30.0" max="160.0" step="1" value="120" style="height: 20px; width: 200px" onInput="met.tempo = event.target.value; document.getElementById('showTempo').innerText= met.tempo;">


View.prototype = {
	buildGrid : function() {
		var _this = this;
		var rowData = _this.model.template.samplePatterns;
		var table = document.createElement('table');

		for (var i = 0; i < rowData.length; i++) {
			_this.addSound( rowData[i], table )
		}
		// create table to store elements
		// for each SP in model.template.samplePatterns
		// create row, fill with beats, check if play or no
		// append to table, repeat
		// append table to dom


	},
	addSound : function( rowData, table )	{
		var newRowId = rowData.name;
		var ptrn = rowData.pattern;
		var row = createNewRow(newRowId);
		
		for (var i = 0; i < ptrn.length; i++){
			appendNewBeat(newRowId, i, ptrn[i]);
		}
	},
	createNewRow : function(rowId)	{
		var row = document.createElement('tr');
		row.id = rowId;
		var heading = document.createElement('th')
		heading.innerText = rowId;
		row.appendChild(heading);
		return row;
	}, 
	appendNewBeat : function(rowId, index) {
	
		var td = document.createElement('td');
		var beatCell = document.createElement('div');
		beatCell.classList.add('beatCell');
		
		var input = document.createElement('input');
		input.type = 'checkbox';
		var beatId = rowId + index;
		input.id = beatId
		
		beatCell.appendChild(input);

		var label = document.createElement('label');
		label.htmlFor = beatId;

		beatCell.appendChild(label);
		td.appendChild(beatCell);

		$('#' + rowId).append(td);

	},
	removeRow : function(rowId) {
		$("#" + rowId).remove();
	}
}







function toggleMetroLight(){
	var metro = document.getElementById('metronome');
	var onOff = metro.checked;
	metro.checked = !onOff;

}









