var character = document.getElementById("character");
var block = document.getElementById("block");
let score = document.getElementById("scoreTally");
let scoreValue = 0;

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500)
}


let showScore = {
    add: function addScore() {
        scoreValue = (scoreValue + 1);
        score.innerText = `Your Score: ${scoreValue}`;
        // console.log(scoreValue);
    }
}


var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && characterTop >=130) {
        block.style.animation = "none";
        block.style.display = "none";
        delete showScore;
        if (confirm("You lose! Click OK to play again!") == true) {
			location.reload();
		} else {
			close();
		}
    }
    else {
        showScore.add();
    }
}, 10);