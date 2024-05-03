function pifagorTable() {
    const tableSize = 10; 
    const table = document.getElementById("table");
    
    for (let i = 0; i < tableSize; i++) {
        let row = table.rows[i];
        for (let j = 0; j < tableSize; j++) {
            let cell = row.cells[j];
            cell.innerHTML = (i + 1) * (j + 1);
        }
    }
}

pifagorTable();