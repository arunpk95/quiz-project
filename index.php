<?php
$name = "";
$email = "";
if (isset($_GET['name'])) {
    $name = $_GET["name"];
}
if (isset($_GET['email'])) {
    $email = $_GET["email"];
}

?>
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
    <title>Quiz Up</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <?php if (isset($_GET['email'])) {
        echo "<script type='text/javascript'>alert('Sorry, This email is already used for the selected Quiz.');</script>";
    } ?>
</head>

<body>
    <nav id="topBar">
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo" onclick="window.location.replace('index.php');">QuizUp</label>
        <ul>
            <li><a href="index.php" class="active">Home</a></li>
            <li><a href="overallscoreboard.php">Leaderboard</a></li>
        </ul>
    </nav>
    <div class="content-main">
        <form method="post" action="questionPage.php" id="form">
            <div class="form-field">
                <label for="full-name">Full Name</label>
                <input type="text" name="full-name" id="full-name" placeholder="Your Full Name" value=<?php echo '"' . $name . '"'; ?> required />
            </div>
            <div class="form-field">
                <label for="email-input">Email</label>
                <input type="email" name="email-input" id="email-input" placeholder="example@mail.com" value=<?php echo '"' . $email . '"'; ?> required />
            </div>
            <label style="padding-left: 110px;">Select Quiz</label>
            <div class="testCategory">
                <table>
                    <tr>
                        <td>
                            <div id="js" class="divSquare selectedDiv" onclick="divClick(1)">
                                <p>MySQL</p>
                            </div>
                        </td>
                        <td>
                            <div id="html" class="divSquare fadeUnselected" onclick="divClick(2)">
                                <p>html</p>
                            </div>
                        </td>
                        <td>
                            <div id="java" class="divSquare fadeUnselected" onclick="divClick(3)">
                                <p>java</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <input type="text" value="MySQL" name="topic" id="topic" style="display:none"/>
            <div class="form-field">
                <label for=""></label>
                <input type="submit" name="submit-signup" id="submit-signup" value="Take Quiz" />
            </div>
        </form>
        <div class="center">
            <dl>
                <dt>Please Note:</dt>
                <dd>- You can take the one quiz only once with an email</dd>
                <dd>- You can switch between questions using the navigation in the right</dd>
                <dd>- Every correct answer add up 1 point towards your score</dd>
            </dl>
            <figure>
                <figcaption style="padding-top:40px;padding-bottom:20px">Listen to the Terms in Audio:</figcaption>
                <audio controls src="media/voice.mp3">
                    Your browser does not support the audio.
                </audio>
            </figure>
        </div>

    </div>
    <script>
        function divClick(topic) {
            var topicSelected = topic;
            if (topic == 1) {
                document.getElementById("js").classList.remove('fadeUnselected');
                document.getElementById("js").classList.add('selectedDiv');
                document.getElementById("html").classList.add('fadeUnselected');
                document.getElementById("java").classList.add('fadeUnselected');
                document.getElementById("topic").value="MySQL";
            } else if (topic == 2) {
                document.getElementById("js").classList.add('fadeUnselected');
                document.getElementById("html").classList.remove('fadeUnselected');
                document.getElementById("html").classList.add('selectedDiv');
                document.getElementById("java").classList.add('fadeUnselected');
                document.getElementById("topic").value="HTML";
            } else if (topic == 3) {
                document.getElementById("js").classList.add('fadeUnselected');
                document.getElementById("html").classList.add('fadeUnselected');
                document.getElementById("java").classList.remove('fadeUnselected');
                document.getElementById("java").classList.add('selectedDiv');
                document.getElementById("topic").value="Java";
            }
        }
    </script>
</body>

</html>