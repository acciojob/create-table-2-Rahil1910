var numrow = 0;
    var numcol = 0;
    function closeModal() {
	    var myModal1 = new bootstrap.Modal(document.getElementById('exampleModal'));
	    myModal1.hide();
    }
    function openSecondModal() {
	    var myModal2 = new bootstrap.Modal(document.getElementById('exampleModal2'));
	    myModal2.show();
        numrow = document.getElementById('row-input').value;
    }
    function createTable() {
        //Write your code here
        const table = document.querySelector('#myTable');
        numcol = document.getElementById('col-input').value;
        for(let i=0;i<numrow;i++){
            const row = document.createElement('tr');
            for(let j=0;j<numcol;j++){
                const cell = document.createElement('td');
                cell.textContent = `Row-${i} Column-${j}`;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }