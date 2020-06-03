//variables
var questionArray = [];
if(topic=="MYSQL")
{
    questionArray[0] = new Question("Character data can be stored as?", "Either Fixed or Variable length string", "Fixed length string", "Variable length string", "None of the mentioned");
    questionArray[1] =new Question("Which declaration represents that “character data will consume the same number of bytes as declared and is right padded”?", "Char", "Varchar", "Both Char and Varchar", "None of the mentioned");
    questionArray[2] = new Question("Which declaration doesn’t use the same number of bytes and consumption of bytes depends on the input data?", "Varchar", "Char", "Both varchar and char", "None of the mentioned");
    questionArray[3] = new Question("The maximum length of the char columns is ____________", "255 bytes", "65,535 bytes", "256 bytes", "None of the mentioned");
    questionArray[4] = new Question("The maximum length of the varcher columns is ____________", "Upto 65,535 bytes", "Upto 256 bytes", "unto 65,567 bytes", "None of the mentioned");
    questionArray[5] = new Question("In oracle database variable length column is declared by ___________", " Varchar2", "Varchar", "Varchar3", "None of the mentioned");
    questionArray[6] = new Question("Mysql support different character sets, which command is used to display all character sets?", "SHOW CHARACTER SET;", "SHOW;", "CHARACTER SET;", "None of the mentioned.");
    questionArray[7] = new Question("Which one is the correct declaration for choosing the character set other than default?", "Varchar(20) character set utf8", "Varchar(20)", "Varchar(20) character set;", "None of the mentioned");
    questionArray[8] = new Question("Which “text type” has the maximum number of bytes?", "Long Text", "Tiny text", "Text", "Medium Text");
    questionArray[9] = new Question("Which among the following have the maximum bytes?", "Tect type", "Char", "Varchar", "Both Varchar and Char");
    questionArray[10] = new Question("Which program copies the databases from one server to another?", "Mysqldbcopy", "Mysqlcopydb", "Mysqlflushdb", "Mysqldbflush");
    questionArray[11] = new Question("To use ‘mysqldbcopy’, which privileges are required on the source server ?", "SELECT", "CREATE", "INSERT", "UPDATE");
    questionArray[12] = new Question("The function ‘fetchrow_hashref()’ returns reference to hash of row values keyed by _________?", "Column Name", "Row Name", "Table Name", "Database Name");
    questionArray[13] = new Question("Which function returns reference to array of rows values ?", "Fetchrow_arrayref()", "Fetchrow_hashref()", "Fetchrow_array()", "Fetch()");
    questionArray[14] = new Question("Which is the log, in which data changes received from a replication master server are written?", "Relay Log", "Error Log", "Binary Log", "General Query Log");
    questionArray[15] = new Question("The “father” of MYSQL is _____________", "Michael Widenius", "Bill Joy", "Bill Gates", "Stephanie Wall");
    questionArray[16] = new Question("The Main Mysql program that does all the data handling is called", "Mysqld", "Mysql", "Mysql.exe", "Httpd");
    questionArray[17] = new Question("Which of these is a valid call to a function (watch the spaces carefully!)", "CONCAT(“A”,”B”)", "CONCAT(A+B)", "CONCAT(A,B)", "CONCAT (A B)");
    questionArray[18] = new Question("If you want to undo a GRANT, you should use", "REVOKE", "UNDO", "UNGRANT", "DELETE");
    questionArray[19] = new Question("Which of these is not a valid name for a column", "From", "To", "Far", "Near");    
}
else if(topic == "HTML")
{
    questionArray[0] = new Question("Character data can be stored as?", "Either Fixed or Variable length string", "Fixed length string", "Variable length string", "None of the mentioned");
    questionArray[1] =new Question("Which declaration represents that “character data will consume the same number of bytes as declared and is right padded”?", "Char", "Varchar", "Both Char and Varchar", "None of the mentioned");
    questionArray[2] = new Question("Which declaration doesn’t use the same number of bytes and consumption of bytes depends on the input data?", "Varchar", "Char", "Both varchar and char", "None of the mentioned");
    questionArray[3] = new Question("The maximum length of the char columns is ____________", "255 bytes", "65,535 bytes", "256 bytes", "None of the mentioned");
    questionArray[4] = new Question("The maximum length of the varcher columns is ____________", "Upto 65,535 bytes", "Upto 256 bytes", "unto 65,567 bytes", "None of the mentioned");
    questionArray[5] = new Question("In oracle database variable length column is declared by ___________", " Varchar2", "Varchar", "Varchar3", "None of the mentioned");
    questionArray[6] = new Question("Mysql support different character sets, which command is used to display all character sets?", "SHOW CHARACTER SET;", "SHOW;", "CHARACTER SET;", "None of the mentioned.");
    questionArray[7] = new Question("Which one is the correct declaration for choosing the character set other than default?", "Varchar(20) character set utf8", "Varchar(20)", "Varchar(20) character set;", "None of the mentioned");
    questionArray[8] = new Question("Which “text type” has the maximum number of bytes?", "Long Text", "Tiny text", "Text", "Medium Text");
    questionArray[9] = new Question("Which among the following have the maximum bytes?", "Tect type", "Char", "Varchar", "Both Varchar and Char");
    questionArray[10] = new Question("Which program copies the databases from one server to another?", "Mysqldbcopy", "Mysqlcopydb", "Mysqlflushdb", "Mysqldbflush");
    questionArray[11] = new Question("To use ‘mysqldbcopy’, which privileges are required on the source server ?", "SELECT", "CREATE", "INSERT", "UPDATE");
    questionArray[12] = new Question("The function ‘fetchrow_hashref()’ returns reference to hash of row values keyed by _________?", "Column Name", "Row Name", "Table Name", "Database Name");
    questionArray[13] = new Question("Which function returns reference to array of rows values ?", "Fetchrow_arrayref()", "Fetchrow_hashref()", "Fetchrow_array()", "Fetch()");
    questionArray[14] = new Question("Which is the log, in which data changes received from a replication master server are written?", "Relay Log", "Error Log", "Binary Log", "General Query Log");
    questionArray[15] = new Question("The “father” of MYSQL is _____________", "Michael Widenius", "Bill Joy", "Bill Gates", "Stephanie Wall");
    questionArray[16] = new Question("The Main Mysql program that does all the data handling is called", "Mysqld", "Mysql", "Mysql.exe", "Httpd");
    questionArray[17] = new Question("Which of these is a valid call to a function (watch the spaces carefully!)", "CONCAT(“A”,”B”)", "CONCAT(A+B)", "CONCAT(A,B)", "CONCAT (A B)");
    questionArray[18] = new Question("If you want to undo a GRANT, you should use", "REVOKE", "UNDO", "UNGRANT", "DELETE");
    questionArray[19] = new Question("Which of these is not a valid name for a column", "From", "To", "Far", "Near");  
}
else{
    questionArray[0] = new Question("Character data can be stored as?", "Either Fixed or Variable length string", "Fixed length string", "Variable length string", "None of the mentioned");
    questionArray[1] =new Question("Which declaration represents that “character data will consume the same number of bytes as declared and is right padded”?", "Char", "Varchar", "Both Char and Varchar", "None of the mentioned");
    questionArray[2] = new Question("Which declaration doesn’t use the same number of bytes and consumption of bytes depends on the input data?", "Varchar", "Char", "Both varchar and char", "None of the mentioned");
    questionArray[3] = new Question("The maximum length of the char columns is ____________", "255 bytes", "65,535 bytes", "256 bytes", "None of the mentioned");
    questionArray[4] = new Question("The maximum length of the varcher columns is ____________", "Upto 65,535 bytes", "Upto 256 bytes", "unto 65,567 bytes", "None of the mentioned");
    questionArray[5] = new Question("In oracle database variable length column is declared by ___________", " Varchar2", "Varchar", "Varchar3", "None of the mentioned");
    questionArray[6] = new Question("Mysql support different character sets, which command is used to display all character sets?", "SHOW CHARACTER SET;", "SHOW;", "CHARACTER SET;", "None of the mentioned.");
    questionArray[7] = new Question("Which one is the correct declaration for choosing the character set other than default?", "Varchar(20) character set utf8", "Varchar(20)", "Varchar(20) character set;", "None of the mentioned");
    questionArray[8] = new Question("Which “text type” has the maximum number of bytes?", "Long Text", "Tiny text", "Text", "Medium Text");
    questionArray[9] = new Question("Which among the following have the maximum bytes?", "Tect type", "Char", "Varchar", "Both Varchar and Char");
    questionArray[10] = new Question("Which program copies the databases from one server to another?", "Mysqldbcopy", "Mysqlcopydb", "Mysqlflushdb", "Mysqldbflush");
    questionArray[11] = new Question("To use ‘mysqldbcopy’, which privileges are required on the source server ?", "SELECT", "CREATE", "INSERT", "UPDATE");
    questionArray[12] = new Question("The function ‘fetchrow_hashref()’ returns reference to hash of row values keyed by _________?", "Column Name", "Row Name", "Table Name", "Database Name");
    questionArray[13] = new Question("Which function returns reference to array of rows values ?", "Fetchrow_arrayref()", "Fetchrow_hashref()", "Fetchrow_array()", "Fetch()");
    questionArray[14] = new Question("Which is the log, in which data changes received from a replication master server are written?", "Relay Log", "Error Log", "Binary Log", "General Query Log");
    questionArray[15] = new Question("The “father” of MYSQL is _____________", "Michael Widenius", "Bill Joy", "Bill Gates", "Stephanie Wall");
    questionArray[16] = new Question("The Main Mysql program that does all the data handling is called", "Mysqld", "Mysql", "Mysql.exe", "Httpd");
    questionArray[17] = new Question("Which of these is a valid call to a function (watch the spaces carefully!)", "CONCAT(“A”,”B”)", "CONCAT(A+B)", "CONCAT(A,B)", "CONCAT (A B)");
    questionArray[18] = new Question("If you want to undo a GRANT, you should use", "REVOKE", "UNDO", "UNGRANT", "DELETE");
    questionArray[19] = new Question("Which of these is not a valid name for a column", "From", "To", "Far", "Near");  
}

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
        options = [questionForDisplay.rightAnswer, questionForDisplay.wrongAnswer1, questionForDisplay.wrongAnswer2,questionForDisplay.wrongAnswer2];
        rightAns.push(questionForDisplay.rightAnswer);
        shuffle(options);
        var finalDispQuestion = {};
        finalDispQuestion.ques = questionForDisplay.question;
        finalDispQuestion.chOne = options[0];
        finalDispQuestion.chTwo = options[1];
        finalDispQuestion.chThree = options[2];
        finalDispQuestion.chFour = options[3];
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
    document.getElementById("radio4").value = a.chFour;
    document.getElementById("option4").innerHTML = a.chFour;
    if (a.selected != 0) {
        document.getElementById("radio" + a.selected).checked = true;
    }
}

function hyperlinkCall(questionNo) {
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = false;
    document.getElementById("radio3").checked = false;
    document.getElementById("radio4").checked = false;
    displayQuestion(questionNo);
    var x = document.getElementsByClassName("current")[0].id;
    document.getElementById(x).classList.remove('current');
    document.getElementById("questionLink" + (questionNo + 1)).classList.add('current');
}

function Question(question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
};

function prevQuestion() {
    if (currentQuestionNumber > 0) {
        document.getElementById("questionLink" + (currentQuestionNumber + 1)).classList.remove('current');
        document.getElementById("questionLink" + currentQuestionNumber).classList.add('current');
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.getElementById("radio4").checked = false;
        displayQuestion(currentQuestionNumber - 1);
    }
    btnVisibility();
}

function nextQuestion() {
    if (currentQuestionNumber < 9) {
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.getElementById("radio4").checked = false;
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

function optionFourSelected() {
    var ans = document.getElementById("radio4").value;
    finalQuestionArray[currentQuestionNumber].selected = 4;
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
            if (this.responseText == "success") {
                //   gotoResult();
            }
        }
    };
    xhttp.open("POST", "updateResult.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("id=" + id + "&correctAnswered=" + correctlyAnswered.length + "&wrongAnswered=" + wrongAnswered.length);
}

function gotoResult() {
    window.location.href = "progress.php?id=" + id;
}