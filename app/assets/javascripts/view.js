function View(elements) {
	this.playToggle = elements.playToggle;
	this.tempoSlide = elements.tempoSlide;
	this.volKnob = elements.volKnob;
}


View.prototype = {
	addSound : function(e)	{
		var form = e.currentTarget;
		var newRowId = form.firstElementChild.value;
		console.log(newRowId);
		appendNewRow(newRowId);

		for (var i = 0; i < 4; i++){
			appendNewBeat(newRowId, i);
		}
	},
	appendNewRow : function(rowId)	{
		var row = document.createElement('tr');
		row.id = rowId;
		var heading = document.createElement('th')
		heading.innerText = rowId;
		row.appendChild(heading);
		$('table').append(row);
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






$(document).ready(function() {
  

  $('#newRow').submit(function(e){
  	e.preventDefault();
  	addSound(e);
  })

  console.log('hi from the view');


});


