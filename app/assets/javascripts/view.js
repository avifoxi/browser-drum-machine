$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('#newRow').submit(function(e){
  	e.preventDefault();
  	addSound(e);
  })

  console.log('hi from the view');


});


function addSound(e){
	var form = e.currentTarget;
	var newRowId = form.firstElementChild.value;
	console.log(newRowId);
	appendNewRow(newRowId);

	for (var i = 0; i < 4; i++){
		appendNewBeat(newRowId, i);
	}
}


function View(elements) {

}

function toggleMetroLight(){
	var metro = document.getElementById('metronome');
	var onOff = metro.checked;
	metro.checked = !onOff;

}


// WORKING!

function appendNewRow(rowId){
	var row = document.createElement('tr');
	row.id = rowId;
	var heading = document.createElement('th')
	heading.innerText = rowId;
	row.appendChild(heading);
	$('table').append(row);
}

// WORKING!

function removeRow(rowId) {
	$("#" + rowId).remove();
}


// WORKING!
function appendNewBeat(rowId, index) {
	
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

}