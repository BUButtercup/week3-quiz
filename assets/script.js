let finalScore = 0;

finalScore = finalScore += 10;

console.log(finalScore);

//defining/linking page sections
const startButtonEl = document.querySelector('#startbutton');
const introPage = document.querySelector('#intro');
const questionPage = document.querySelector('#ques1');
const questionBox = document.querySelector('#question-text');
const answerOneEl = document.querySelector('#ans1');
const answerTwoEl = document.querySelector('#ans2');
const answerThreeEl = document.querySelector('#ans3');
const answerFourEl = document.querySelector('#ans4');
const fsPage = document.querySelector('#finalscore');
const initialInput = document.querySelector('#initials');
const hsPage = document.querySelector('#hs');
const hsBox1 = document.querySelector('#hs1');
const hsBox2 = document.querySelector('#hs2');
const hsBox3 = document.querySelector('#hs3');
const hsBox4 = document.querySelector('#hs4');
const hsBox5 = document.querySelector('#hs5');
const goBackButton = document.querySelector('#goback');
const clearScoresButton = document.querySelector('#clear');

//defining objects
let questionOne = {
    content: 'What can you NOT put in an array?',
    answerCorrect: 'You can put any data type in an array, you just can\'t mix them.',
    answersIncorrect: ['Booleans', 'strings', 'integers']
}

//helper functions
function hideElement(element){
    element.setAttribute('style', 'display: none;');
}

function showElement(element){
    element.setAttribute('style', 'display: flex;');
}

function displayQuestion(element, object1, ans1, ans2, ans3, ans4, object2, object3, object4, object5){
    element.textContent = object1;
    ans1.textContent = object2;
    ans2.textContent = object3;
    ans3.textContent = object4;
    ans4.textContent = object5;
}

//assigning initial display state
hideElement(questionPage);
hideElement(fsPage);
hideElement(hsPage);

//to start game
startButtonEl.addEventListener('click', function(){
    hideElement(introPage);
    showElement(questionPage);
    displayQuestion(questionBox, questionOne.content, answerOneEl, answerTwoEl, answerThreeEl, answerFourEl, questionOne.answerCorrect, questionOne.answersIncorrect[0], questionOne.answersIncorrect[1], questionOne.answersIncorrect[2])
});

//question 1

answerOneEl.addEventListener('click', function(){

});