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
    <title></title>
    <link rel="stylesheet" type="text/css" href="progress.css">
    <link rel="stylesheet" type="text/css" href="style.css">
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
        <span id="userName">Thank You, <?php echo $row['name'];?></span>
        <br><br>
        <div class="scoreDiv">
            <p>Your result is :</p>
            <br>
            <?php
            if($row['score'] >= 8)
            {
                
            echo '<span class="pass" id="score">' . $row['score']. '/10</span>';
            echo '<span class="pass">You have successfully passed the test. You are now certified in Programming Fundamentals.” Where ????????? is the certification topic you have chosen for this assignment.</span>';
            
            } 
            else
            {
                echo '<span class="retake" id="score">' . $row['score']; '/10</span>';
                echo '<span class="retake">Unfortunately you did not pass the test. Please try again later!</span>';
            
            }?>
        </div>
        <br><br>
        <div class="resultDetails">
            <p id="totQues">Total number of Questions : 10</p><br>
            <p id="quesAns">Total number of questions attempted:<?php echo $row['no_of_questions_answered'];?></p><br>
            <p id="correctAns">Total number of correct answers:<?php echo $row['correct_answers'];?></p><br>
            <p id="wrongAns">Total number of wrong answers: <?php echo $row['wrong_answers'];?></p>
        </div>
        <br>
        <!-- <div class="tableResult">
            <table>
                <tr>
                    <td id="cell1" class="resulltData">1</td>
                    <td id="cell2" class="resulltData">2</td>
                    <td id="cell3" class="resulltData">3</td>
                    <td id="cell4" class="resulltData">4</td>
                    <td id="cell5" class="resulltData">5</td>
                    <td id="cell6" class="resulltData">6</td>
                    <td id="cell7" class="resulltData">7</td>
                    <td id="cell8" class="resulltData">8</td>
                    <td id="cell9" class="resulltData">9</td>
                    <td id="cell10" class="resulltData">10</td>
                </tr>
            </table>
        </div> -->
    </main>
    <aside>
        <div class="content-main">
            <div class="box">
                <div class="percent">
                    <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                    <div class="number">
                        <h2>87<span>%</span></h2>
                    </div>
                </div>
                <h2 class="text">Progress</h2>
            </div>
        </div>
    </aside>
    <script src="progress.js"></script>
</body>

</html>