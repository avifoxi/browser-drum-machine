beatBuilder = {
	buildGrid : function(rowData) {
		var table = View.$table;
		var _this = this;

		for (var i = 0; i < rowData.length; i++) {
			var fullRow = _this.addSound(rowData[i])
			table.append(fullRow);
		}
		$('section').append(table); 

	},
	addSound : function( rowData )	{
		
		var name = rowData.name;
		var ptrn = rowData.pattern;
		var row = this.createNewRow(name);
		
		for (var i = 0; i < ptrn.length; i++){
			this.appendNewBeat(row, name, i, ptrn[i]);
		}
		return row;
	},
	createNewRow : function(name)	{
		var row = document.createElement('tr');
		row.id = name;
		var heading = document.createElement('th')
		heading.innerText = name;
		var pl = document.createElement('button');
		var min = document.createElement('button');
		pl.innerText = ' + ' ;
		min.innerText = ' - ' ;
		heading.appendChild(pl);
		heading.appendChild(min);

		row.appendChild(heading);
		return row;
	}, 
	appendNewBeat : function(row, name, index, playBool) {
		console.log(row);
		var td = document.createElement('td');
		var beatCell = document.createElement('div');
		beatCell.classList.add('beatCell');
		
		var input = document.createElement('input');
		input.type = 'checkbox';

		var beatId = name + '-' + index;
		input.id = beatId
		
		beatCell.appendChild(input);

		var label = document.createElement('label');
		label.htmlFor = beatId;

		beatCell.appendChild(label);
		td.appendChild(beatCell);

		row.appendChild(td);
		
		if (playBool) {
			input.checked = true;
		}
	},
	removeRow : function(rowId) {
		$("#" + rowId).remove();
	},
	removeBeat : function(rowIndex) {
		var row = $('tr')[rowIndex];
		var last = _.last(row.childNodes);
		last.remove();
	}
}