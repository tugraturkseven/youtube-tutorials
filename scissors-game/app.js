var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var userscore = document.getElementById('user-score');
var compscore = document.getElementById('computer-score');
var result = document.getElementById('result');
var comp = ['r', 'p', 's'];

rock.addEventListener('click', function () {
    gamePlay(rock)
}
);
paper.addEventListener('click', function () {
    gamePlay(paper)
}
);
scissors.addEventListener('click', function () {
    gamePlay(scissors);
}
);

function gamePlay(item) {
    var compChoose = comp[Math.floor(Math.random() * 3)];
    var userChoose = item.id;

    if (userChoose == 'rock') {
        if (compChoose == 's') {
            result.textContent = 'User won!'
            userscore.textContent = Number(userscore.textContent) + 1;
        } else if (compChoose == 'p') {
            result.textContent = 'Computer won!'
            compscore.textContent = Number(compscore.textContent) + 1;
        } else {
            result.textContent = 'Draw!'
        }
    }
    if (userChoose == 'paper') {
        if (compChoose == 's') {
            result.textContent = 'Computer won!'
            compscore.textContent = Number(compscore.textContent) + 1;
        } else if (compChoose == 'p') {
            result.textContent = 'Draw!'
        } else {
            result.textContent = 'User won!'
            userscore.textContent = Number(userscore.textContent) + 1;
        }
    }
    if (userChoose == 'scissors') {
        if (compChoose == 's') {
            result.textContent = 'Draw!'

        } else if (compChoose == 'p') {
            result.textContent = 'User won!'
            userscore.textContent = Number(userscore.textContent) + 1;
        } else {
            result.textContent = 'Computer won!'
            compscore.textContent = Number(compscore.textContent) + 1;
        }
    }

}