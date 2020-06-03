

document.addEventListener("DOMContentLoaded", function(event) {
  //  setCellColor();
    //setSvgValue();
});

function setCellColor() {
    var correctAns = [1, 2, 4, 6, 8, 9, 10];
    var wrongAns = [3, 5, 7];
    for (var i = 0; i < correctAns.length; i++) {
        document.getElementById("cell" + correctAns[i]).classList.add('quesCorrect');
    }
    for (var i = 0; i < wrongAns.length; i++) {
        document.getElementById("cell" + wrongAns[i]).classList.add('quesWrong');
    }
}

function setSvgValue() {
    var score = 70;
    var svgValue = (400 - (400 * score) / 100);
    var ozy = document.querySelector(".box .percent svg circle:nth-child(2)");
    //ozy.style.stroke - dashoffset = svgValue;

    var shape = document.getElementById('percentScore');
    setTimeout(function() {
        shape.setAttribute('stroke-dashoffset', svgValue);
    }, 0);
}