//variables
var questionArray = [];
questionArray[0] = new Question("What is a?", "25", "24", "23");
questionArray[1] = new Question("What is b?", "Red", "White", "Green");
questionArray[2] = new Question("What is c?", "Green", "White", "Red");
questionArray[3] = new Question("What is d?", "8", "6", "4");
questionArray[4] = new Question("What is e?", "Willem-Alexander", "Willem-Alexzelf", "Willem-Alexniemand");
questionArray[5] = new Question("What is f?", "0", "2", "4");
questionArray[6] = new Question("What is g?", "Artist", "Baker", "Jobless");
questionArray[7] = new Question("What is h?", "25", "24", "23");
questionArray[8] = new Question("What is i?", "Red", "White", "Green");
questionArray[9] = new Question("What is j?", "Green", "White", "Red");
questionArray[10] = new Question("What is k?", "8", "6", "4");
questionArray[11] = new Question("What is l?", "Willem-Alexander", "Willem-Alexzelf", "Willem-Alexniemand");
questionArray[12] = new Question("What is m?", "0", "2", "4");
questionArray[13] = new Question("What is n?", "Artist", "Baker", "Jobless");
questionArray[14] = new Question("What is o?", "25", "24", "23");
questionArray[15] = new Question("What is p?", "Red", "White", "Green");
questionArray[16] = new Question("What is q?", "Green", "White", "Red");
questionArray[17] = new Question("What is r?", "8", "6", "4");
questionArray[18] = new Question("What is s?", "Willem-Alexander", "Willem-Alexzelf", "Willem-Alexniemand");
questionArray[19] = new Question("What is t?", "0", "2", "4");

var currentScore = 0;
var options = [];
var questionNoForDisplay = [];
var questionForDisplay;
var questionForDisplayArray = [];
var finalQuestionArray = [];
var rightAns = [];
var currentQuestionNumber = 0;
var correctlyAnswered = [];
var wrongAnswered = [];



document.addEventListener("DOMContentLoaded", function(event) {
    selectQuestion();
    formQuestion();
    displayQuestion(0);
});

function selectQuestion() {
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * questionArray.length);
        if (!questionNoForDisplay.includes(randomNumber)) {
            questionNoForDisplay.push(randomNumber);
        } else {
            i--;
        }
    }
}

function formQuestion() {
    for (var i = 0; i < questionNoForDisplay.length; i++) {
        questionForDisplay = questionArray[questionNoForDisplay[i]];
        options = [questionForDisplay.rightAnswer, questionForDisplay.wrongAnswer1, questionForDisplay.wrongAnswer2];
        rightAns.push(questionForDisplay.rightAnswer);
        shuffle(options);
        var finalDispQuestion = {};
        finalDispQuestion.ques = questionForDisplay.question;
        finalDispQuestion.chOne = options[0];
        finalDispQuestion.chTwo = options[1];
        finalDispQuestion.chThree = options[2];
        finalDispQuestion.selected = 0;
        finalQuestionArray.push(finalDispQuestion);
    }
}

function displayQuestion(questionNo) {
    currentQuestionNumber = questionNo;
    var a = finalQuestionArray[questionNo];
    document.getElementById("questionNo").innerHTML = "Question " + (questionNo + 1) + " :";
    document.getElementById("question").innerHTML = a.ques;
    document.getElementById("radio1").value = a.chOne;
    document.getElementById("option1").innerHTML = a.chOne;
    document.getElementById("radio2").value = a.chTwo;
    document.getElementById("option2").innerHTML = a.chTwo;
    document.getElementById("radio3").value = a.chThree;
    document.getElementById("option3").innerHTML = a.chThree;
    if (a.selected != 0) {
        document.getElementById("radio" + a.selected).checked = true;
    }
}

function hyperlinkCall(questionNo) {
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = false;
    document.getElementById("radio3").checked = false;
    displayQuestion(questionNo);
    var x = document.getElementsByClassName("current")[0].id;
    document.getElementById(x).classList.remove('current');
    document.getElementById("questionLink" + (questionNo + 1)).classList.add('current');
}

function Question(question, rightAnswer, wrongAnswer1, wrongAnswer2, selected) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function prevQuestion() {
    if (currentQuestionNumber > 0) {
        document.getElementById("questionLink" + (currentQuestionNumber + 1)).classList.remove('current');
        document.getElementById("questionLink" + currentQuestionNumber).classList.add('current');
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        displayQuestion(currentQuestionNumber - 1);
    }
    btnVisibility();
}

function nextQuestion() {
    if (currentQuestionNumber < 9) {
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        displayQuestion(currentQuestionNumber + 1);
        document.getElementById("questionLink" + (currentQuestionNumber)).classList.remove('current');
        document.getElementById("questionLink" + (currentQuestionNumber + 1)).classList.add('current');
    }
    btnVisibility();
}

function btnVisibility() {
    if (currentQuestionNumber == 0) {
        document.getElementById('prevBtn').disabled = true;
        document.getElementById("prevBtn").classList.remove('btnOp');
        document.getElementById("prevBtn").classList.add('btnOpDisabled');
    } else if (currentQuestionNumber > 0 && currentQuestionNumber < 9) {
        document.getElementById('prevBtn').disabled = false;
        document.getElementById("prevBtn").classList.remove('btnOpDisabled');
        document.getElementById("prevBtn").classList.add('btnOp');
        document.getElementById('nextBtn').disabled = false;
        document.getElementById("nextBtn").classList.remove('btnOpDisabled');
        document.getElementById("nextBtn").classList.add('btnOp');
    } else if (currentQuestionNumber == 9) {
        document.getElementById('nextBtn').disabled = true;
        document.getElementById("nextBtn").classList.remove('btnOp');
        document.getElementById("nextBtn").classList.add('btnOpDisabled');
    }
}


function optionOneSelected() {
    var ans = document.getElementById("radio1").value;
    finalQuestionArray[currentQuestionNumber].selected = 1;
    checkAnswer(ans);
}

function optionTwoSelected() {
    var ans = document.getElementById("radio2").value;
    finalQuestionArray[currentQuestionNumber].selected = 2;
    checkAnswer(ans);
}

function optionThreeSelected() {
    var ans = document.getElementById("radio3").value;
    finalQuestionArray[currentQuestionNumber].selected = 3;
    checkAnswer(ans);
}

function checkAnswer(answer) {
    document.getElementById("questionLink" + (currentQuestionNumber + 1)).classList.add('answered');
    if (answer == rightAns[currentQuestionNumber]) {
        if (correctlyAnswered.indexOf(currentQuestionNumber + 1) == -1) {
            correctlyAnswered.push(currentQuestionNumber + 1);
        }
        if (wrongAnswered.indexOf(currentQuestionNumber + 1) != -1) {
            wrongAnswered.splice(wrongAnswered.indexOf(currentQuestionNumber + 1), 1);
        }
    } else {
        if (wrongAnswered.indexOf(currentQuestionNumber + 1) == -1) {
            wrongAnswered.push(currentQuestionNumber + 1);
        }
        if (correctlyAnswered.indexOf(currentQuestionNumber + 1) != -1) {
            correctlyAnswered.splice(correctlyAnswered.indexOf(currentQuestionNumber + 1), 1);
        }
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};

function submitAnswers() {
    var quesAnsweredArray = correctlyAnswered.concat(wrongAnswered);
    var count = 10,
        missing = [];
    for (var i = 1; i <= count; i++) {
        if (quesAnsweredArray.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    if (missing.length > 0) {
        document.getElementById("submitDialog").classList.remove('hidden');
        document.getElementById("questionsUnAns").innerHTML = missing;
    } else {
        document.getElementById("okDialog").classList.remove('hidden');
        store();
    }
}

function submitYes() {
    document.getElementById("submitDialog").classList.add('hidden');
    document.getElementById("okDialog").classList.remove('hidden');
    store();
}

function submitNo() {
    document.getElementById("submitDialog").classList.add('hidden');
}

function okDialog() {
    document.getElementById("okDialog").classList.add('hidden');
    gotoResult();
}
function store() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        if(this.responseText == "success")
        {
         //   gotoResult();
        }
      }
    };
    xhttp.open("POST", "updateResult.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("id="+id+"&correctAnswered="+correctlyAnswered.length+"&wrongAnswered="+wrongAnswered.length);
}

function gotoResult() {
    window.location.href = "progress.php?id="+id;
}