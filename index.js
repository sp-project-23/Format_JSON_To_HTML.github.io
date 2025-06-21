function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            }
            else {
                error(xhr);
            }
        }
    };
    xhr.open('GET', path, true);
    xhr.send();
}

loadJSON("https://api.2coms.com/cities/?country_id=101", myData, 'jsonp');
  
function myData(data) {    

    console.log(data);

    if(data.length>0) {

        var myDataTable = document.getElementById("table");

        tableBody = document.getElementById("tableBody");

        var i = 0;

        for(i=0; i<data.length; i++) {

            let tr = document.createElement('TR');
            tableBody.appendChild(tr);

            let td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['id']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['name']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['state_id']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['state_code']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['country_id']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['country_code']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['latitude']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['longitude']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['created_at']));
            tr.appendChild(td);

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['updated_at']));
            tr.appendChild(td);						

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['flag']));
            tr.appendChild(td);	

            td = document.createElement('TD');
            td.appendChild(document.createTextNode(data[i]['wikiDataId']));
            tr.appendChild(td);	

        }

    }
    else {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        let td = document.createElement('TD');
        td.setAttribute('colspan', '12');
        td.classList.add('label');
        let h2 = document.createElement('H2');
        h2.appendChild(document.createTextNode('No Data'));
        td.appendChild(h2);
        tr.appendChild(td);
    }

    myDataTable.appendChild(tableBody);

}
