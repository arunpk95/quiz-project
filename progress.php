<?php 
if(isset($_GET['id']))
{
    $id = $_GET['id'];
    $sql = "select * from participants where id =".$id."";

        
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
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        while($temp = mysqli_fetch_assoc($result)) {
          $row = $temp;
        }
      } else {
        header("Location: index.php");
        die();
      }
}
else
{
    header("Location: index.php");
    die();
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>QuizUp</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/progress.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
    <nav id="topBar">
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
			<i class="fas fa-bars"></i>
		</label>
        <label class="logo" onclick="window.location.replace('index.php');">QuizUp</label>  
<ul>
            
        <li><a href="index.php">Home</a></li>
            <li><a href="overallscoreboard.php">Leaderboard</a></li>
        </ul>
    </nav>
    <main>
        <span id="userName">Thank You, <?php echo $row['name'];?></span>
        <div class="scoreDiv">
            <p>Your result is :</p>
            <br>
            <?php
            if($row['score'] >= 8)
            {
                
            echo '<span class="pass" id="score">' . $row['score']. '/10</span><br>';
            echo '<span class="pass">You have successfully passed the test. <br>You are now certified in Programming Fundamentals.</span><br>';
            echo '<img class="statusPic" src="img/congrats.gif"/>';
            
            } 
            else
            {
                echo '<span class="retake" id="score">' . $row['score'].'/10</span><br>';
                echo '<span class="retake">Unfortunately you did not pass the test. Please try again later!</span><br>';
                echo '<img class="statusPic" src="img/sorry.gif"/>';
            }?>
        </div>
        <div class="resultDetails">
            <p id="totQues">Total number of Questions : 10</p><br>
            <p id="quesAns">Total number of questions attempted:<?php echo $row['no_of_questions_answered'];?></p><br>
            <p id="correctAns">Total number of correct answers:<?php echo $row['correct_answers'];?></p><br>
            <p id="wrongAns">Total number of wrong answers: <?php echo $row['wrong_answers'];?></p><br>
            <p>        <a href="js/overallscoreboard.php">Goto Leaderboard</a></p>
        </div>
        <br>
    </main>
    <script src="progress.js"></script>
</body>

</html>