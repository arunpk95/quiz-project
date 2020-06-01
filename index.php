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
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <?php if (isset($_GET['email'])) {
        echo "<script type='text/javascript'>alert('Sorry, This email is already used.');</script>";
    } ?>
</head>

<body>
    <nav id="topBar">
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo">QuizUp</label>
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
            <div class="form-field">
                <label for=""></label>
                <input type="submit" name="submit-signup" id="submit-signup" value="Take Quiz" />
            </div>
        </form>
        <div class="center">
        <dl>
            <dt>Please Note:</dt>
            <dd>- You can take the quiz only once with a email</dd>
            <dd>- You can switch between questions using the navigation in the right</dd>
            <dd>- Every correct answer add up 1 point towards your score</dd> 
        </dl>
        </div>

    </div>

</body>

</html>