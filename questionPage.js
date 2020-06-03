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
    questionArray[0] = new Question("What does HTML stands for?", "Hypertext Markup Language.", "Hypertext and links markup language.", "Hypertext Machine language.", "Hightext machine language.");
    questionArray[1] = new Question("How is document type initialized in HTML5.?", "<!DOCTYPE HTML>", "</DOCTYPE HTML>", "</DOCTYPE>", "</DOCTYPE html>");
    questionArray[2] = new Question("Which of the following HTML Elements is used for making any text bold ?", "<b>", "<p>", "<i>", "<li>");
    questionArray[3] = new Question("Which of the following HTML element is used for creating an unordered list?", "<ul>", "<ui>", "<i>", "<em>");
    questionArray[4] = new Question("Which of the following characters indicate closing of a tag?", "/", ".", "?", "!");
    questionArray[5] = new Question("What is the font-size of the h1 heading tag?", "2 em", "3.5 em", "2.17 em", "1.5 em");
    questionArray[6] = new Question("How many heading tags are there in HTML5?", "6", "5", "3", "2");
    questionArray[7] = new Question("Choose the correct HTML tag for the largest heading.", "H1", "H6", "H7", "Heading");
    questionArray[8] = new Question("Which of the following attributes is used to add link to any element?", "href", "ref", "link", "newref");
    questionArray[9] = new Question("How can you make a list that lists the items with numbers?", "ol", "ul", "dl", "lol")
    questionArray[10] = new Question("What is the purpose of using div tags in HTML?", "For creating different sections.", "For creating Different styles.", "For adding headings.", "For adding titles.");
    questionArray[11] = new Question("Which of the following tags is used to make a portion of text italic in HTML?", "<i>", "<italic>", "<style= “i”>", "<style=“italic”>");
    questionArray[12] = new Question("Which of the following tags is used to add a line-break in HTML?", "<br>", "<break>", "</break>", "</br>");
    questionArray[13] = new Question("Which of the following attributes is used to open an hyperlink in new tab?", "target", "href", "tab", "ref");
    questionArray[14] = new Question("Which of the following is the correct way to add background color in HTML?", "<body style = “background-color: green;”>", "<body style = “background-color=green”>", "<body bg-color = “green”>", "<body color = “green”>");
    questionArray[15] = new Question("What is the correct sequence of HTML tags for starting a webpage?", "HTML,Head,Title", "Head,Title,HTML", "Title,Head,HTML", "HTML,Title,Head");
    questionArray[16] = new Question("Which tag is used for creating a drop-down selection list?", "<option>", "<select>", "<dropdown>", "<list>");
    questionArray[17] = new Question("Which tag is used to add an header in HTML5 table?", "<th>", "<theader>", "<h1>", "<header>");
    questionArray[18] = new Question("Which of the following elements can be used in HTML to create a table?", "<table> , <tbody> , <tr>", "<table> , <tbody> , <trow>", "<table> , <tb> , <trow>", "<table>,<tr>");
    questionArray[19] = new Question("Who is making the Web Standards?", "The World  Web Consortium", "Apple", "Mozilla", "Microsoft");}
else{
    questionArray[0] = new Question("Which of the following statement mentions the right ways to concatenate the two strings?","Str1.concat(Str2) and Str1 + Str2.","None of these.","Str1.substring(Str2) and Str1 && Str2.","Str1.append(Str2) and Str1 + Str2.");
    questionArray[1] = new Question("What does the intern() method do in Java?","intern() method allows to put an String object into pool.","None of these.","It's just a canonical representation for the string object.","It return a string that has the same contents, but is guaranteed to be from a pool of unique strings.");
    questionArray[2] = new Question("Which of the following is the correct difference in String on C and Java?","C String is a null terminated character array while String in Java is an Object.","C String and Java String are completely different to each other.","C String is a primitive data type while String in Java is an Object.","None of these.");
    questionArray[3] = new Question("Which of the following is a final class in Java?","All of these","String.","StringBuffer.","StringBuilder.");
    questionArray[4] = new Question("Which of the following correctly describes the reason for String to be final or immutable?","All of these.","Strings are very frequently as HashMap key. So they have to be immutable for uniquely referencing the value object stored in HashMap.","Caching of String objects was essential for performance reason, so the risk was averted by making the String class Immutable.","String objects are cached in String pool and their cached version is shared between clients. So there was a need to avoid accidental changes.");
    questionArray[5] = new Question("Is it possible to use String in the switch statement?","Yes, it is supported from JDK version 7 onward.","Yes, it is supported from JDK version 6 onward.","No, it's not.","None of these.");
    questionArray[6] = new Question("Which of the following is the correct difference between String and StringBuffer in Java?","String is immutable, you can use StringBuffer whenever you need to modify a String.","String and StringBuffer are two different classes they are used in context of concatenating two Strings","String is handled very efficiently in terms of memory and execution time by most jvm's while StringBuffer is not","None of these.");
    questionArray[7] = new Question("Which of the following is a difference between StringBuffer and StringBuilder class?","StringBuffer class is thread safe whereas StringBuilder class is not thread safe.","StringBuffer produces mutable string objects while StringBuilder does not.","StringBuffer and StringBuilder class both produces mutable string objects.","None of these.");
    questionArray[8] = new Question("Which of the following correctly describes the difference in the way the two “==” and equals() work in Java?",""==" tests if two objects refer to the same memory location while the equals() method verifies if two distinct objects can still be equal.",""==" tests whether two references point to the same object while the equals() method compares the object state.","'==' is an operator while equals is a method.","None of these.");
    questionArray[9] = new Question("Within Java, you need to code your program so that under certain conditions it will skip the current iteration of a for loop. What can be used to accomplish this?","continue","swipe","skip","jump");
    questionArray[10] = new Question("Which of the following individuals is credited for first designing Java?","James Gosling","Tim Ritchey","Jim LeValley","Ian Sheeler");
    questionArray[11] = new Question("According to Boolean operations, if !g is true, then which of the following applies?","If g is true, and false otherwise","If g is false, and false otherwise","If g is true, and true otherwise","If g is false, and true otherwise");
    questionArray[12] = new Question("At this point in time, which of the following is the officially supported version of Java?","Java 8","Java 6.5","Java 9","Java 6");
    questionArray[13] = new Question("Within Java, each call to StdOut.println () does which of the following?","Appends text to the end of the file","Reads and then prints the contents of the current file","Overwrites the current contents of the file","Prints the contents of the current file");
    questionArray[14] = new Question("You are having a problem with the “if” logic in your code and need to utilize case conditions to create a number of possible execution paths. Which statement is necessary to accomplish this?","switch","task","instance","swap");
    questionArray[15] = new Question("Which keyword keeps the main method from returning any value to the caller?","void","exclusive","concealed","restricted");
    questionArray[16] = new Question("You need to reference a value stored in an array named B in row 7 column 3. Which syntax is correct within Java for finding the value of this variable?","B[7][3]","B[7,3]","B[3][7]","B[3,7]");
    questionArray[17] = new Question("There are numerous ways of adding comments to code written in Java. Which of the following are accepted methods of signifying the beginning of comments within Java?","/*","//","/","*");
    questionArray[18] = new Question("What is the default value of data type boolean in Java ?","false","true","1","0");
    questionArray[19] = new Question("If a = -5, then +a means","-5","5","0","none of the above");
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
        options = [questionForDisplay.rightAnswer, questionForDisplay.wrongAnswer1, questionForDisplay.wrongAnswer2,questionForDisplay.wrongAnswer3];
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