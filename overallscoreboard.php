<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
    <title>Quiz Up</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="overallscoreboard.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
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
            <li><a href="overallscoreboard.php" class="active">Leaderboard</a></li>
        </ul>
    </nav>
    <div class="content-main">

        <div style="padding-left:40%">
        
        <p style="padding-bottom:20px;font-size:20px">Choose Quiz Topic</p>

            <input type="checkbox" id="MySQL"style="width: auto;" onchange="init()" checked>
            <label for="scales">MySQL</label>

            <input type="checkbox" id="Java"  style="width: auto;" onchange="init()" checked>
            <label for="horns">Java</label>

            <input type="checkbox" id="HTML"  style="width: auto;"  onchange="init()" checked>
            <label for="horns">HTML</label>
        </div>
        <table id="mainTable">
            <caption>Score Board</caption>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Test Taken On</td>
                    <td>Correct Answer</td>
                    <td>Wrong Answer</td>
                    <td>Score</td>
                    <td>Topic</td>
                </tr>
            </thead>
            <tbody id="mainRows">
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="7">
                        <span>Row</span>
                        <select id="recordsPerPage" onchange="init()">
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                        <span id="totalRecord"></span>
                        <div id="pagination">
                            <img class="arrows" src="./img/leftArrow.png" alt="left" onmouseover="leftHover(this)" onmouseout="leftOut(this)" onclick="navigateTable('left')" />
                            <span id="currentPageNumber"></span>/<span id="totalPages"></span>
                            <img class="arrows" src="./img/rightArrow.png" alt="right" onmouseover="rightHover(this)" onmouseout="rightOut(this)" onclick="navigateTable('right')" />
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    <script src="overallscoreboard.js"></script>
</body>

</html>