// Quiz Javaascript

document.getElementById('markBtn').addEventListener('click', markQuiz);

function markQuiz(){
    // Collects answers
    let ansOne = document.getElementById('question1').value.toLowerCase();
    let ansTwo = document.getElementById('question2').value.toLowerCase();
    let ansThree = document.getElementById('question3').value.toLowerCase();
    let ansFour = document.getElementById('question4').value.toLowerCase();
    let ansFive = document.getElementById('question5').value.toLowerCase();
    let ansSix = document.getElementById('question6').value.toLowerCase();
    let ansSeven = document.getElementById('question7').value.toLowerCase();
    let score = 0;

    // Question 1: Sectoid
    if(ansOne=='sectoid'||ansTwo=='sectoids'){
        score ++;
        document.getElementById('quesOneAns').style.color = 'Green';
        document.getElementById('quesOneAns').innerHTML = 'Correct!'
    } else {
        document.getElementById('quesOneAns').style.color = 'Red';
        document.getElementById('quesOneAns').innerHTML = 'Incorrect!'
    }
    // Question 2: Sectopods
    if(ansTwo=='sectopod'||ansTwo=='sectopods'){
        score ++;
        document.getElementById('quesTwoAns').style.color = 'Green';
        document.getElementById('quesTwoAns').innerHTML = 'Correct!'
    } else {
        document.getElementById('quesTwoAns').style.color = 'Red';
        document.getElementById('quesTwoAns').innerHTML = 'Incorrect!'
    }
    // Question 3: Molecular Control
    if(ansThree=='molecular control'){
        score ++;
        document.getElementById('quesThreeAns').style.color = 'Green';
        document.getElementById('quesThreeAns').innerHTML = 'Correct!'
    } else {
        document.getElementById('quesThreeAns').style.color = 'Red';
        document.getElementById('quesThreeAns').innerHTML = 'Incorrect!'
    }
    // Question 4: Megapol
    if(ansFour=='megapol'){
        score ++;
        document.getElementById('quesFourAns').style.color = 'Green';
        document.getElementById('quesFourAns').innerHTML = 'Correct!'
    } else {
        document.getElementById('quesFourAns').style.color = 'Red';
        document.getElementById('quesFourAns').innerHTML = 'Incorrect!'
    }
    // Question 5: Arc Thrower
    if(ansFive=='arc thrower'){
        score ++;
        document.getElementById('quesFiveAns').style.color = 'Green';
        document.getElementById('quesFiveAns').innerHTML = 'Correct!'
    } else {
        document.getElementById('quesFiveAns').style.color = 'Red';
        document.getElementById('quesFiveAns').innerHTML = 'Incorrect!'
    }
    // Question 6: Meld
    if(ansSix=='meld'){
        score ++;
        document.getElementById('quesSixAns').style.color = 'Green';
        document.getElementById('quesSixAns').innerHTML = 'Correct!'
    } else {
        document.getElementById('quesSixAns').style.color = 'Red';
        document.getElementById('quesSixAns').innerHTML = 'Incorrect!'
    }
    // Question 7: ADVENT
    if(ansSeven=='advent'){
        score ++;
        document.getElementById('quesSevenAns').style.color = 'Green';
        document.getElementById('quesSevenAns').innerHTML = 'Correct!'
    } else {
        document.getElementById('quesSevenAns').style.color = 'Red';
        document.getElementById('quesSevenAns').innerHTML = 'Incorrect!'
    }

    //Displays final score
    document.getElementById('finalMark').innerHTML = score;
    document.getElementById('finalPercent').innerHTML = Math.round(score/7*100);
    if(score==0){
        document.getElementById('feedback').innerHTML = 'Did you even try?';
    } else if(score<4) {
        document.getElementById('feedback').innerHTML = 'Could be worse. But it could be better, too.';
    } else if(score<7){
        document.getElementById('feedback').innerHTML = 'A decent mark.';
    } else {
        document.getElementById('feedback').innerHTML = 'You\'ve played your share of XCOM.';
    }

}