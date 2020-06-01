var data = null;
var start = 0;
var end = 3;
var currentPageNumber = null;
var recordsPerPage = null;
var totalPages = null;

function init() {
    data = fetchScores();
    currentPageNumber = 0;
    recordsPerPage = document.getElementById('recordsPerPage').value;
    countTotalPage();
    updateBoundaries('right');
    createRows(start, end);
    document.getElementById("totalRecord").innerHTML = "Total Records : " + data.length;
}
init();

function navigateTable(direction) {
    updateBoundaries(direction);
    createRows(start, end);
}

function createRows(start, end) {
    var tbl = document.getElementsByTagName("tbody")[0];
    var i;
    for (i = start; i < end; i++) {
        row = tbl.insertRow();
        row.insertCell(0).innerHTML = data[i].name;
        row.insertCell(1).innerHTML = data[i].email;
        row.insertCell(2).innerHTML = data[i].testDate;
        row.insertCell(3).innerHTML = data[i].correctAnswer;
        row.insertCell(4).innerHTML = data[i].wrongAnswer;
        row.insertCell(5).innerHTML = data[i].score;
    }
    document.getElementById("currentPageNumber").innerHTML = currentPageNumber;
}

function clearRows() {
    var tbl = document.getElementsByTagName("tbody")[0];
    while (tbl.rows.length > 0) {
        tbl.deleteRow(0);
    }
}

function updateBoundaries(direction) {
    clearRows();
    if (direction == 'right' && (currentPageNumber + 1) <= totalPages) {
        currentPageNumber = currentPageNumber + 1;
        end = recordsPerPage * currentPageNumber;
        start = end - recordsPerPage;
        if (currentPageNumber == totalPages && (data.length / recordsPerPage) != 0) {
            end = data.length;
        }
    } else if (direction == 'left' && (currentPageNumber - 1) > 0) {
        currentPageNumber = currentPageNumber - 1;
        end = recordsPerPage * currentPageNumber;
        start = end - recordsPerPage;
    } else {
        alert("Sorry. No more " + direction + " navigation");
    }
}

function countTotalPage() {
    if (data.length % recordsPerPage == 0) {
        totalPages = Math.floor(data.length / recordsPerPage);
    } else {
        totalPages = Math.floor(data.length / recordsPerPage) + 1;
    }
    document.getElementById("totalPages").innerHTML = totalPages+"";
    return totalPages;
}

function leftHover(element) {
    element.setAttribute('src', './img/leftHover.png');
    element.style.height = "30px";
}

function leftOut(element) {
    element.setAttribute('src', './img/leftArrow.png');
    element.style.height = "15px";
}


function rightHover(element) {
    element.setAttribute('src', './img/rightHover.png');
    element.style.height = "30px";
}

function rightOut(element) {
    element.setAttribute('src', './img/rightArrow.png');
    element.style.height = "15px";
}
function fetchScores()
{
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "fetchScores.php", false);
  xhttp.send();
  return JSON.parse(xhttp.responseText);
}