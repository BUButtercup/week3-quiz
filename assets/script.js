//global variables
let finalScore = 0;
let secondsLeft = 60;
let secondsPast = 0;
let timerIncrement;

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
const answerCorrect = {
    num1: document.querySelector('#corr1'),
    num2: document.querySelector('#corr2'),
    num3: document.querySelector('#corr3'),
    num4: document.querySelector('#corr4'),
    num5: document.querySelector('#corr5')
};
const answerIncorrect = {
    num1: document.querySelector('#incorr1'),
    num2: document.querySelector('#incorr2'),
    num3: document.querySelector('#incorr3'),
    num4: document.querySelector('#incorr4'),
    num5: document.querySelector('#incorr5'),
    num6: document.querySelector('#incorr6'),
    num7: document.querySelector('#incorr7'),
    num8: document.querySelector('#incorr8'),
    num9: document.querySelector('#incorr9'),
    num10: document.querySelector('#incorr10'),
    num11: document.querySelector('#incorr11'),
    num12: document.querySelector('#incorr12'),
    num13: document.querySelector('#incorr13')
};
// const correctClick = element => {
//     element.onclick = function(){
//     console.log('Hi');
//     }
// }
const fsPage = document.querySelector('#finalscore')
const fsBox = document.querySelector('#fs');
const initialInput = document.querySelector('#initials');
const viewHSEl = document.querySelector('#view-hs');
const hsPage = document.querySelector('#hs');
const hsBox = {
    box1: document.querySelector('#hs1'),
    box2: document.querySelector('#hs2'),
    box3: document.querySelector('#hs3'),
    box4: document.querySelector('#hs4'),
    box5: document.querySelector('#hs5')
}
const goBackButton = document.querySelector('#goback');
const clearScoresButton = document.querySelector('#clear');

//helper functions
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
}//to switch to next card in sequence

function passFinalScore(element){
    finalScore;
    element.textContent += ("Your final score is " + finalScore + ". You completed the quiz in " + secondsPast + " seconds.");
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
            fsBox.textContent += ("Your final score is " + finalScore + ". You didn't complete the quiz.");
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
        console.log(finalScore);
        return finalScore;
}//when correct answer selected, 10 points added to finalScore

viewHSEl.onclick = function() {
    hideQuestions();
    hideElement(fsPage);
    hideElement(introPage);
    showElement(hsPage);
}

//assigning initial display state
hideQuestions();
hideElement(fsPage);
hideElement(hsPage);

//to start game
startButtonEl.addEventListener('click', function(){
    hideElement(introPage);
    showElement(questionPage.page1);
    startTimer();
});

//question 1
answerCorrect.num1.onclick = function(){
    console.log('yay!');
    hideElement(questionPage.page1);
    showElement(questionPage.page2);
    addToScore();
};

answerIncorrect.num1.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page1);
    showElement(questionPage.page2);
    loseTime();
};
answerIncorrect.num2.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page1);
    showElement(questionPage.page2);
    loseTime();
};
answerIncorrect.num3.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page1);
    showElement(questionPage.page2);
    loseTime();
};

//question 2
answerCorrect.num2.onclick = function(){
    console.log('yay!');
    hideElement(questionPage.page2);
    showElement(questionPage.page3);
    addToScore();
};

answerIncorrect.num4.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page2);
    showElement(questionPage.page3);
    loseTime();
};
answerIncorrect.num5.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page2);
    showElement(questionPage.page3);
    loseTime();
};
answerIncorrect.num6.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page2);
    showElement(questionPage.page3);
    loseTime();
};

//question 3
answerCorrect.num3.onclick = function(){
    console.log('yay!');
    hideElement(questionPage.page3);
    showElement(questionPage.page4);
    addToScore();
};

answerIncorrect.num7.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page3);
    showElement(questionPage.page4);
    loseTime();
};
answerIncorrect.num8.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page3);
    showElement(questionPage.page4);
    loseTime();
};
answerIncorrect.num9.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page3);
    showElement(questionPage.page4);
    loseTime();
};

//question 4
answerCorrect.num4.onclick = function(){
    console.log('yay!');
    hideElement(questionPage.page4);
    showElement(questionPage.page5);
    addToScore();
};

answerIncorrect.num10.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page4);
    showElement(questionPage.page5);
    loseTime();
};
answerIncorrect.num11.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page4);
    showElement(questionPage.page5);
    loseTime();
};
answerIncorrect.num12.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page4);
    showElement(questionPage.page5);
    loseTime();
};

//question 5
answerCorrect.num5.onclick = function(){
    console.log('yay!');
    hideElement(questionPage.page5);
    showElement(fsPage);
    addToScore();
    passFinalScore(fsBox);
    stopTimer();
};

answerIncorrect.num13.onclick = function(){
    console.log('nope!');
    hideElement(questionPage.page5);
    showElement(fsPage);
    loseTime();
    passFinalScore(fsBox);
    stopTimer();
};


//question 2
// questionPage.page2.addEventListener('click', function(){

//     hideElement(questionPage.page2);
//     showElement(questionPage.page3);
// });


// answerThreeEl.addEventListener('click', function(){
//     finalScore;
//     if(true) {
        // displayQuestion(questionBox, questionFour.content, answerOneEl, answerTwoEl, answerThreeEl, answerFourEl,  questionFour.answersIncorrect[0], questionFour.answersIncorrect[1], questionFour.answersIncorrect[2], questionFour.answerCorrect);
//         addToScore();
//     }
// });
// answerFourEl.addEventListener('click', function(){
//     finalScore;
//     if(true) {
        // displayQuestion(questionBox, questionFive.content, answerOneEl, answerTwoEl, answerThreeEl, answerFourEl,  questionFive.answerCorrect, questionFive.answersIncorrect[0], questionFive.answersIncorrect[1], questionFive.answersIncorrect[2]);
        // answerThreeEl.setAttribute('style', 'display: none;');
        // answerFourEl.setAttribute('style', 'display: none;');
//         addToScore();
//     }
// });
// answerFiveEl.addEventListener('click', function(){
//     if(true) {
//         hideElement(questionPage);
//         showElement(fsPage);
//         addToScore();
//         passScore(fsBox, finalScore);
//     }
// });
