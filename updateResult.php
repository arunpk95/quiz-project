<?php 
$id = $_POST['id'];
$correctAnswered = $_POST['correctAnswered'];
$wrongAnswered = $_POST['wrongAnswered'];
$sql = "update participants set score_updated_on = now(), score=".$correctAnswered." ,no_of_questions_answered= ".($correctAnswered+$wrongAnswered).", correct_answers=".$correctAnswered.", wrong_answers=".$wrongAnswered." where id=".$id."";

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
    echo "success";
  } else {
    echo $sql;
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  ?>