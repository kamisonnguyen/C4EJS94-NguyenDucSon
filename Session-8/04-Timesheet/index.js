let body = document.getElementById('ts_tbody');

reload();

let btnAdd = document.getElementById('add');
let btnClear = document.getElementById('clear');
let line;
btnAdd.addEventListener('click', () => {
    var project = document.getElementById('project').value;
    var task = document.getElementById('task').value;
    var time = document.getElementById('time').value;
    if (project == '' || task == '' || time == '') {
        alert('Fill all the blank!');
    } else if (time < 0) {
        alert('Time spent(s) must >= 0');
    } else {
        if (btnAdd.innerHTML == 'Add') {
            let newObject = {};
            newObject['Project'] = project;
            newObject['Task'] = task;
            newObject['Time'] = time;
            timeSheetData.push(newObject);
        } else {
            timeSheetData[line].Project = document.getElementById('project').value;
            timeSheetData[line].Task = document.getElementById('task').value;
            timeSheetData[line].Time = document.getElementById('time').value;
            btnAdd.innerHTML = 'Add';
        }
        reload();
    }

});

btnClear.addEventListener('click', () => {
    document.getElementById('project').value = '';
    document.getElementById('task').value = '';
    document.getElementById('time').value = '';
});

function reload() {
    body.innerHTML = "";
    for (var i = 0; i < timeSheetData.length; i++) {
        var row = body.insertRow(i);
        row.insertCell(0).innerHTML = timeSheetData[i].Project;
        row.insertCell(1).innerHTML = timeSheetData[i].Task;
        row.insertCell(2).innerHTML = timeSheetData[i].Time;
        row.insertCell(3).innerHTML = '<button class="button_delete">X</button>'
            + '<button class="button_update">U</button>';
    }
    let btnDelete = document.getElementsByClassName('button_delete');
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener('click', () => {
            timeSheetData.splice(i, 1);
            reload();
        });
    }
    let btnUpdate = document.getElementsByClassName('button_update');
    for (let i = 0; i < btnUpdate.length; i++) {
        btnUpdate[i].addEventListener('click', () => {
            btnAdd.innerHTML = 'Update';
            document.getElementById('project').value = timeSheetData[i].Project;
            document.getElementById('task').value = timeSheetData[i].Task;
            document.getElementById('time').value = timeSheetData[i].Time;
            line = i;
            reload();
        });
    }
}

