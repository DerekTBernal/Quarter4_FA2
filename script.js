function generateTable() {
	var nRows = parseInt(numRows.value); 
    var nCols = parseInt(numCols.value);
    var tableHTML = "";
    if(nRows < 2 || nRows > 10) {
    	alert("Please enter number between 2 and 10");
        return;
    }
    if(nCols < 2 || nCols > 10) {
    	alert("Please enter number between 2 and 10");
        return;
    }
    
	for (let i = 1; i <= nRows; ++i) { 
		tableHTML += "<tr>";
        for (let j = 1; j <= nCols; ++j) {
			tableHTML += `<td>${j*i}</td>`;
		}
		tableHTML += "</tr>";
	}
    outputTable.innerHTML = tableHTML;
	
}