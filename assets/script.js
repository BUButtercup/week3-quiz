//global variables
let finalScore = 0;
let secondsLeft = 60;
let secondsPast = 0;
let timerIncrement;
let highScores = [];

//defining linking variables/objects
const startButtonEl = document.querySelector('#startbutton');
const timerEl = document.querySelector('#box')
const introPage = document.querySelector('#intro');
const questionPage = {
    page1: document.querySelector('#ques1'),
    page2: document.querySelector('#ques2'),
    page3: document.querySelector('#ques3'),
    page4: document.querySelector('#ques4'),
    page5: document.querySelector('#ques5')
}

//correct answers:
const ansCor1 =  document.querySelector('#corr1');
const ansCor2 =  document.querySelector('#corr2');
const ansCor3 =  document.querySelector('#corr3');
const ansCor4 =  document.querySelector('#corr4');
const ansCor5 =  document.querySelector('#corr5');

//incorrect answers:
const ansInc1 = document.querySelectorAll('.incorrect1');
const ansInc2 = document.querySelectorAll('.incorrect2');
const ansInc3 = document.querySelectorAll('.incorrect3');
const ansInc4 = document.querySelectorAll('.incorrect4');
const ansInc5 = document.querySelectorAll('.incorrect5');

const notifyBox = document.querySelector('#notify')
const fsPage = document.querySelector('#finalscore');
const fsBox = document.querySelector('#fs');
const fsForm = document.querySelector('form');
const initialInput = document.querySelector('#initials');
const viewHSEl = document.querySelectorAll('.view-hs');
const hsPage = document.querySelector('#hs');
// const hsForm = document.querySelector('form');
const submitHS = document.querySelector('#submit');
const highScoreList = document.querySelector('#hs-list');
const resetButton = document.querySelector('#reset');
const clearScoresButton = document.querySelector('#clear');

//functions
function displayHS(){
    highScoreList.innerHTML = '';
    for (let i = 0; i < highScores.length; i++){
        let highScoresElement = highScores[i];
        let listItem = document.createElement('li');
        listItem.setAttribute('class', 'high-score');
        listItem.textContent = highScoresElement.initials + ' scored ' + highScoresElement.score + ' in ' + highScoresElement.time;
        highScoreList.appendChild(listItem);
    }
    console.log(highScores);
}

function storeHS(){
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function startGame(){
    let storedHS = JSON.parse(localStorage.getItem('highScores'));
    if (storedHS !== null){
        highScores = storedHS;
    }
    hideQuestions();
    hideElement(fsPage);
    hideElement(hsPage);
}

function hideElement(element){
    element.setAttribute('style', 'display: none;');
}//hides selected element

function hideQuestions(){
    questionPage;
    hideElement(questionPage.page1);
    hideElement(questionPage.page2);
    hideElement(questionPage.page3);
    hideElement(questionPage.page4);
    hideElement(questionPage.page5);
}//hides all question cards at once

function showElement(element){
    element.setAttribute('style', 'display: flex;');
}//shows selected element

function changeCard(element1, element2){
    hideElement(element1);
    showElement(element2);
    notifyBox.textContent = '';
}//to switch to next card in sequence

function passFinalScore(){
    fsBox.textContent += ("Your final score is " + finalScore + ". You completed the quiz in " + secondsPast + " seconds.");
}//passes final score to final score page

function startTimer(){
    timerEl;
    secondsLeft;
    timerIncrement = setInterval(function() {
        secondsLeft --;
        secondsPast ++;
        timerEl.textContent = secondsLeft;
        if (secondsLeft === 0){
            clearInterval(timerIncrement);
            hideQuestions();
            showElement(fsPage);
            fsBox.textContent += ("Your final score is " + finalScore + ". You didn't complete the quiz.");//this message will log on final score page is user lets time run out.
        }
    }, 1000);
}//quiz timer in upper right corner

function stopTimer() {
    clearInterval(timerIncrement);
    secondsLeft = 0;
    timerEl.textContent = secondsLeft;
}

function loseTime(){
    timerEl;
    secondsLeft;
    secondsLeft = secondsLeft-=10;
    timerEl.textContent = secondsLeft;
}//when wrong answer selected, 10 seconds deducted from timer

function addToScore(){
        finalScore;
        finalScore = finalScore+=10;
        console.log('final Score: ', finalScore);
        return finalScore;
}//when correct answer selected, 10 points added to finalScore

function gotItRight(element1, element2){
    console.log('yay!');
    notifyBox.setAttribute('style', 'font-size: 2rem; color: whitesmoke; font-weight: bold;');
    notifyBox.textContent = 'You got it!';
    setTimeout(changeCard, 750, element1, element2);
    addToScore();
}

function gotItWrong(element1, element2){
    console.log('nope!');
    notifyBox.setAttribute('style', 'font-size: 2rem; color: red; font-weight: bold;');
    notifyBox.textContent = 'Nope!';
    setTimeout(changeCard, 750, element1, element2);
    loseTime();
}

viewHSEl.forEach(element => {
    element.addEventListener('click', function(){
        hideQuestions();
        hideElement(fsPage);
        hideElement(introPage);
        showElement(hsPage);
        stopTimer()
        secondsLeft = 0;
    });
});

//to start game
startButtonEl.addEventListener('click', function(event){
    event.preventDefault();
    changeCard(introPage, questionPage.page1)
    startTimer();
});

ansCor1.onclick = () => {
    gotItRight(questionPage.page1, questionPage.page2);
}

ansInc1.forEach(element => {
    element.onclick = () => {
        gotItWrong(questionPage.page1, questionPage.page2);
    }
});

//question 2
ansCor2.onclick = () => {
    gotItRight(questionPage.page2, questionPage.page3);
};

ansInc2.forEach(element => {
    element.onclick = () => {
        gotItWrong(questionPage.page2, questionPage.page3);
    }
});

//question 3
ansCor3.onclick = () => {
    gotItRight(questionPage.page3, questionPage.page4);
};

ansInc3.forEach(element => {
    element.onclick = () => {
        gotItWrong(questionPage.page3, questionPage.page4);
    }
});

//question 4
ansCor4.onclick = () => {
    gotItRight(questionPage.page4, questionPage.page5);
};

ansInc4.forEach(element => {
    element.onclick = () => {
        gotItWrong(questionPage.page4, questionPage.page5);
    }
});

//question 5
ansCor5.onclick = () => {
    gotItRight(questionPage.page5, fsPage);
    passFinalScore();
    stopTimer();
};

ansInc5.forEach(element => {
    element.onclick = () => {
        gotItWrong(questionPage.page5, fsPage);
        passFinalScore();
        stopTimer();
    }
});


//finalscore page
submitHS.addEventListener('click', function(event){
    event.preventDefault();
    let alphaChar = /^[A-Za-z]+$/;
    if (!initialInput.value.match(alphaChar)){
        alert('Please enter your initials with letters only before submission.');
        return;
    } else {
        let userHS = {
            score: finalScore,
            initials: initialInput.value.toUpperCase(),
            time: secondsPast + " sec"
        }
        highScores.push(userHS);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);
        console.log(highScores);
        storeHS();
        fsForm.reset();
        }
    hideElement(fsPage);
    showElement(hsPage);
    displayHS();
});//logs user initials and scores to object after checking that they gave initials. Sends info to local storage, the console, and the high scores page.

//highscores page
resetButton.onclick = () => {
    stopTimer();
    showElement(introPage);
    hideElement(hsPage);
    fsBox.textContent = '';
    showElement(fsForm);
    finalScore = 0;
    secondsPast = 0;
    secondsLeft = 60;
}
clearScoresButton.onclick = () => {
    highScores = [];
    storeHS();
    highScoreList.innerHTML = '';
    stopTimer();
}

startGame();//initiates the beginning state of game.
displayHS();

