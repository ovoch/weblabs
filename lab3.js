let Students = [];

Students[1] = {
	name: "arseny",
	surname : "shmaila",
	kurs : 2
	ball : 7
}

Students[2] = {
	name: "ivan",
	surname: "ivanov",
	kurs : 1,
	ball: 10
};

Students[3] = {
	name: "alex",
	surname: "kulnis",
	kurs : 4,
	ball: 4
};

var elem = document.querySelector('.elem');

createTable(elem, 3, 4);

function createTable(parent, cols, rows){	
	var table = document.createElement('table');

	table.setAttribute("id", "tbl");

	for(var i = 0; i < rows; i++){
		var tr = document.createElement('tr');	

		for(var j = 0; j < cols; j++){
			if(i === 0){
				tr.innerHTML = `<th>Name</th><th>Lastname</th><th>Kurs</th><th>Avgball</th>`;
			}
			else {
				var td = document.createElement('td');
				if(j === 0) {
					td.innerHTML = Students[i].name
					tr.appendChild(td); 	
				}
				else if(j === 1) {
					td.innerHTML = Students[i].surname
					tr.appendChild(td); 	
				}
				else if(j === 2) {
					td.innerHTML = Students[i].kurs
					tr.appendChild(td); 	
				}
				else if(j === 3) {
					td.innerHTML = Students[i].ball
					tr.appendChild(td); 	
					sum = 0; 
				}
			}
		}

		table.appendChild(tr);
	}

	parent.appendChild(table);
}

