<?php
if(isset($_POST['submit-signup']))
{
    $name = $_POST['full-name'];
    $email = $_POST['email-input']; 
    $sql = "insert into participants (email,name) VALUES ('".$email."','".$name."')";
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "quizDb";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
    if (mysqli_query($conn, $sql)) {
        $id = mysqli_insert_id($conn);
      } else {
        if (mysqli_errno($conn) == 1062) {
            header("Location: index.php?name=".$name."&email=".$email."");
        }
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }
      
}
else
{
    header("Location: index.php");
    die();
}
?>

<html>

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="questionPage.css">
    <script>
        id=<?php echo $id?>;
    </script>
</head>

<body>
    <nav id="topBar">
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
			<i class="fas fa-bars"></i>
		</label>
        <label class="logo">QuizUp</label>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="overallscoreboard.php">Leaderboard</a></li>
        </ul>
    </nav>
    <main>

        <span id="questionNo"><h2><strong></strong></h2></span>
        <div class="card" id="questionCard1">
            <div class="text">
                <div id="question"></div>
                <div id="optionDiv">
                    <label class="radioClass">
                        <input type="radio" id="radio1" name="group" onclick="optionOneSelected()">
                        <span id="option1"></span>
                    </label>
                    <br />
                    <br />
                    <label class="radioClass">
                        <input type="radio" id="radio2" name="group" onclick="optionTwoSelected()">
                        <span id="option2"></span>
                    </label>
                    <br />
                    <br />
                    <label class="radioClass">
                        <input type="radio" id="radio3" name="group" onclick="optionThreeSelected()">
                        <span id="option3"></span>
                    </label>
                    <br />
                    <br />
                    <!--<label class="radioClass">
                        <input type="radio" name="group">
                        <span id="option4">Radio Option 4</span>
                    </label> -->
                </div>
            </div>
        </div>
        <div id="btnDiv">
            <button id="prevBtn" class="buttonClass btnOpDisabled" disabled onclick="prevQuestion()">Previous</button>
            <button id="nextBtn" class="buttonClass btnOp" onclick="nextQuestion()">Next</button>
            <button id="submitBtn" class="buttonClass btnOp" onclick="submitAnswers()">Submit</button>
        </div>
    </main>
    <aside>
        <nav id="nav_menu">
            <ul>
                <li><a href="javascript:hyperlinkCall(0)" id="questionLink1" class="current">1</a></li>
                <li><a href="javascript:hyperlinkCall(1)" id="questionLink2">2</a></li>
                <li><a href="javascript:hyperlinkCall(2)" id="questionLink3">3</a></li>
                <li><a href="javascript:hyperlinkCall(3)" id="questionLink4">4</a></li>
                <li><a href="javascript:hyperlinkCall(4)" id="questionLink5">5</a></li>
                <li><a href="javascript:hyperlinkCall(5)" id="questionLink6">6</a></li>
                <li><a href="javascript:hyperlinkCall(6)" id="questionLink7">7</a></li>
                <li><a href="javascript:hyperlinkCall(7)" id="questionLink8">8</a></li>
                <li><a href="javascript:hyperlinkCall(8)" id="questionLink9">9</a></li>
                <li><a href="javascript:hyperlinkCall(9)" id="questionLink10">10</a></li>
            </ul>
        </nav>

    </aside>
    <div class="dialog hidden" id="submitDialog">
        <div class="dialogContents">
            <P>You have not answered the following questions.</P>
            <span id="questionsUnAns"></span>
            <br>
            <p>Do you wish to submit ?</p><br>
            <button id="submitYes" class="dialogBtn" onclick="submitYes()">Yes</button>
            <button id="submitNo" class="dialogBtn" onclick="submitNo()">No</button>
        </div>
    </div>

    <div class="dialog hidden" id="okDialog">
        <div class="dialogContents">
            <p>Your answers have been successfully submitted.</p><br>
            <p>Thank You!!!</p>
            <button id="ok" class="dialogBtn" onclick="okDialog()">OK</button>
        </div>
    </div>
    <script src=" questionPage.js "></script>
</body>

</html>