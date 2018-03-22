$(document).ready(function () {

    var correctCount = 0;
    var wrongCount = 0;
    var unansweredCount = 0;
    var timeleft = 25;
    var intervalId;

    $("#mid-game-container").hide();
    $("#end-container").hide();
    $("#start-button").click(startGame);


    function startGame() {
        clearInterval(intervalId)
        $("#start-container").hide();

        $("#mid-game-container").show();

        intervalId = setInterval(decrement, 1000);

        if (timeleft === 0) {

            stop();
            timeleft = 0;
            alert("Time Up!");
        }

        countDown();
    }

    function decrement() {

        timeleft--;

        $("#timer-number").html(timeleft);

        if (timeleft === 0) {

            stop();
            timeleft = 0;
            alert("Time Up!");
        }
    }

    function stop() {
        clearInterval(intervalId)
    }

    function reset() {
        clearInterval(intervalId)
    }

    function countDown() {

        timeleft--;

        $("#done-button").on("click", function () {
            
            clearInterval(countDown);
            timeleft = 0;
            timeUp();
            return;

            if (timeleft === 0) {

                timeUp();
    
                $("#mid-game-container").hide();
                $("#end-container").show();
                
            }
        })


    };

    function timeUp() {

        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();

        if (Q1 == undefined) {
            unansweredCount++;
        }
        else if (Q1 == "John Adams") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q2 == undefined) {
            unansweredCount++;
        }
        else if (Q2 == "1929") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q3 == undefined) {
            unansweredCount++;
        }
        else if (Q3 == "Mercury") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q4 == undefined) {
            unansweredCount++;
        }
        else if (Q4 == "32") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q5 == undefined) {
            unansweredCount++;
        }
        else if (Q5 == "Valentines Day") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (Q6 == undefined) {
            unansweredCount++;
        }
        else if (Q6 == "8") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        $("#correct-answers").html(correctCount);
        $("#wrong-answers").html(wrongCount);
        $("#unanswered").html(unansweredCount);
        $("#end-container").show();

        reset()
    }

});

