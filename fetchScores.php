<?php 

$quizes=array();
if($_GET["MySQL"]=="true")
{
  array_push($quizes,"MySQL"); 
}
if($_GET["HTML"]=="true")
{
  array_push($quizes,"HTML"); 
}
if($_GET["Java"]=="true")
{
  array_push($quizes,"Java"); 
}
  $ins = join("','",$quizes);   

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizDb";
$sql = "select * from participants where score <> '' AND topic IN ('".$ins."') order by score DESC";
// echo $sql;
// exit;
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}
$result =mysqli_query($conn, $sql);


// if (mysqli_query($conn, $sql)) {
//     echo "success";
//   } else {
//     echo $sql;
//     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
//   }

$return_arr = array();


while ($row = mysqli_fetch_assoc($result)) {
    $row_array['name'] = $row['name'];
    $row_array['email'] = $row['email'];
    $row_array['testDate'] = $row['score_updated_on'];
    $row_array['correctAnswer'] = $row['correct_answers'];
    $row_array['wrongAnswer'] = $row['wrong_answers'];
    $row_array['score'] = $row['score'];
    $row_array['topic'] = $row['topic'];
    array_push($return_arr,$row_array);
}

echo json_encode($return_arr);

  ?>