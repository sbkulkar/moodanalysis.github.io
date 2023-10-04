var buttons = document.querySelectorAll(".q1 button");
var score = 0;
var total = 0;
var q2Div = document.querySelector(".q2"); // Corrected typo here
var q3Div = document.querySelector('.q3');
var q4Div = document.querySelector('.q4');
// Rest of your code...



for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInner1 = this.innerHTML;
        switch (buttonInner1) {
            case "Sunny":
                score = 15;
                total = score;
                alert("Your score is " + total);
                q2Div.style.visibility = "visible"; // Corrected the typo here
                break;
            case "Humid":
                score = 10;
                total = score;
                alert("Your score is " + total);
                q2Div.style.visibility = "visible";
               
                break;
            case "Cloudy":
                score = 5;
                total = score;
                alert("Your score is " + total);
                q2Div.style.visibility = "visible";
                break;
            default:
                alert("Unknown choice");
        }
    });
}

var buttons1 = document.querySelectorAll(".q2 button");
var score1 = 0;

for (var i = 0; i < buttons1.length; i++) {
    buttons1[i].addEventListener("click", function () {
        var buttonInner2 = this.innerHTML;
        switch (buttonInner2) {
            case "Yes":
                score1 = 15;
                total += score1; // Add to the total score1
                alert("Your score is " + total);
                q3Div.style.visibility = "visible"; 
                break;
            case "I have completed only half":
                score1 = 10;
                total += score1; // Add to the total score1
                alert("Your score is " + total); // Display total score (score + score1)
                q3Div.style.visibility = "visible";
                break;
            case "No":
                score1 = 5; // Add to the total score1
                total += score1;
                alert("Your score is " + total); // Display total score (score + score1)
                q3Div.style.visibility = "visible";
                break;
            default:
                alert("Unknown choice");
        }
        
    });
}

var buttons2 = document.querySelectorAll(".q3 button");
var score2 = 0;

for (var i = 0; i < buttons1.length; i++) {
    buttons2[i].addEventListener("click", function () {
        var buttonInner3 = this.innerHTML;
        switch (buttonInner3) {
            case "Yes":
                score2 = 15;
                total += score2; 
                alert("Your score is " + total);
                q4Div.style.visibility = "visible";
                break;
            case "I was not able to have lunch":
                score2 = 10;
                total += score2;
                alert("Your score is " + total); 
                q4Div.style.visibility = "visible";
                break;
            case "No":
                score2 = 5; 
                total += score2;
                alert("Your score is " + total); 
                q4Div.style.visibility = "visible";
                break;
            default:
                alert("Unknown choice");
        }
       
    });
}

var buttons3 = document.querySelectorAll(".q4 button");
var score3 = 0;

for (var i = 0; i < buttons1.length; i++) {
    buttons3[i].addEventListener("click", function () {
        var buttonInner4 = this.innerHTML;
        switch (buttonInner4) {
            case "Yes":
                score3 = 5;
                total += score3; // Add to the total score1
                alert("Your score is " + total); // Display total score (score + score1)
                break;
            case "I was in my own world":
                score3 = 10;
                total += score3; // Add to the total score1
                alert("Your score is " + total); // Display total score (score + score1)
                break;
            case "No":
                score3 = 15; // Add to the total score1
                total += score3;
                alert("Your score is " + total); // Display total score (score + score1)
                break;
            default:
                alert("Unknown choice");
        }
        if (total >=50) {
            document.body.style.backgroundColor = "yellow";
            
            alert("U had a wonderful day today and i hope u have such days ahead");
            
        } 
        else if (total > 30) {
            document.body.style.backgroundColor = "Pink";
            

            alert("try to eat more healty and dont take stress");
            
        } else {
            document.body.style.backgroundColor = "red";
            
            alert("its ok to have bad days");
            
        }
    });
}












