const section = document.querySelector('.field1');
const score1 = document.querySelector('.player1Score');
const score2 = document.querySelector('.player2Score');
const p1 = document.querySelector('.player1');
const p2 = document.querySelector('.player2');
const field = document.querySelector('.game1');
const field2 = document.querySelector('.game2');
// true == player1 , false == player2 
let isMyTurn = true;
let isPlayingHard = true;
p1.classList.add('active');
firstScore = 0;
secondScore = 0;

score1.textContent = firstScore;
score2.textContent = secondScore;

//counts.textContent = playerCounts;

const getData = () => [
    {imgSrc : "./images/iu.jpg" , name : "iu" },
    {imgSrc : "./images/iu2.jpg" , name : "iu2" },
    {imgSrc : "./images/iu3.jpg" , name : "iu3" },
    {imgSrc : "./images/iu4.jpg" , name : "iu4" },
    {imgSrc : "./images/iu5.jpg" , name : "iu5" },
    {imgSrc : "./images/iu6.jpg" , name : "iu6" },
    {imgSrc : "./images/iu7.jpg" , name : "iu7" },
    {imgSrc : "./images/iu8.jpg" , name : "iu8" },
    {imgSrc : "./images/iu.jpg" , name : "iu" },
    {imgSrc : "./images/iu2.jpg" , name : "iu2" },
    {imgSrc : "./images/iu3.jpg" , name : "iu3" },
    {imgSrc : "./images/iu4.jpg" , name : "iu4" },
    {imgSrc : "./images/iu5.jpg" , name : "iu5" },
    {imgSrc : "./images/iu6.jpg" , name : "iu6" },
    {imgSrc : "./images/iu7.jpg" , name : "iu7" },
    {imgSrc : "./images/iu8.jpg" , name : "iu8" },
    {imgSrc : "./images/iu9.jpg" , name : "iu9" },
    {imgSrc : "./images/iu10.jpg" , name : "iu10" },
    {imgSrc : "./images/iu11.jpg" , name : "iu11" },
    {imgSrc : "./images/iu12.jpg" , name : "iu12" },
    {imgSrc : "./images/iu13.jpg" , name : "iu13" },
    {imgSrc : "./images/iu14.jpg" , name : "iu14" },
    {imgSrc : "./images/iu15.jpg" , name : "iu15" },
    {imgSrc : "./images/iu16.jpg" , name : "iu16" },
    {imgSrc : "./images/iu9.jpg" , name : "iu9" },
    {imgSrc : "./images/iu10.jpg" , name : "iu10" },
    {imgSrc : "./images/iu11.jpg" , name : "iu11" },
    {imgSrc : "./images/iu12.jpg" , name : "iu12" },
    {imgSrc : "./images/iu13.jpg" , name : "iu13" },
    {imgSrc : "./images/iu14.jpg" , name : "iu14" },
    {imgSrc : "./images/iu15.jpg" , name : "iu15" },
    {imgSrc : "./images/iu16.jpg" , name : "iu16" },
    {imgSrc : "./images/iu17.jpg" , name : "iu17" },
    {imgSrc : "./images/iu18.jpg" , name : "iu18" },
    {imgSrc : "./images/iu17.jpg" , name : "iu17" },
    {imgSrc : "./images/iu18.jpg" , name : "iu18" },
]
const get4x4 = () => [
    {imgSrc : "./images/iu.jpg" , name : "iu" },
    {imgSrc : "./images/iu2.jpg" , name : "iu2" },
    {imgSrc : "./images/iu3.jpg" , name : "iu3" },
    {imgSrc : "./images/iu4.jpg" , name : "iu4" },
    {imgSrc : "./images/iu5.jpg" , name : "iu5" },
    {imgSrc : "./images/iu6.jpg" , name : "iu6" },
    {imgSrc : "./images/iu7.jpg" , name : "iu7" },
    {imgSrc : "./images/iu8.jpg" , name : "iu8" },
    {imgSrc : "./images/iu.jpg" , name : "iu" },
    {imgSrc : "./images/iu2.jpg" , name : "iu2" },
    {imgSrc : "./images/iu3.jpg" , name : "iu3" },
    {imgSrc : "./images/iu4.jpg" , name : "iu4" },
    {imgSrc : "./images/iu5.jpg" , name : "iu5" },
    {imgSrc : "./images/iu6.jpg" , name : "iu6" },
    {imgSrc : "./images/iu7.jpg" , name : "iu7" },
    {imgSrc : "./images/iu8.jpg" , name : "iu8" },

]
const randomize = () => {
    const cardData = getData();
    cardData.sort(()=> Math.random() - 0.5);
    return cardData ;
}
const randomized = () => {
    const cardData2 = get4x4();
    cardData2.sort(()=>Math.random() - 0.5);
    return cardData2;
}

const cardGenerator = () => {
    isPlayingHard = true;
    section.classList.add('active');
    field.classList.add('active');
    field2.classList.remove('active');
    const cardData = randomize();
    cardData.forEach(item => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        face.src = item.imgSrc;
        card.setAttribute("name" , item.name);
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener('click' , (e)=> {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};
const cardGenerator2 = () => {
    isPlayingHard = !isPlayingHard;
    section.classList.remove('active');
    field.classList.remove('active');
    field2.classList.add('active');
    const cardData2 = randomized();
    cardData2.forEach(item => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        face.src = item.imgSrc;
        card.setAttribute("name" , item.name);
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener('click' , (e)=> {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};
const checkCards = (e) => {
    const clickedCard = e.target.offsetParent;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCards = document.querySelectorAll('.toggleCard');
    if (flippedCards.length === 2 ) {
        if ( flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            if(isMyTurn) {
               
                firstScore+=100;
                score1.textContent = firstScore;
            } else {
           
                secondScore += 100;
                score2.textContent = secondScore;
            }
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = "none";
            })
        } else {
            console.log('wrong');
            isMyTurn = !isMyTurn;
            if(isMyTurn == true) {
                p1.classList.add('active');
                p2.classList.remove('active');
            } else {
                p1.classList.remove('active');
                p2.classList.add('active');
            }
           
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(()=>card.classList.remove('toggleCard'),1000);
            })
        }
    }
    
    if(toggleCards.length === 36 && isPlayingHard === true) {
        section.innerHTML = "";
        result();
        firstScore = 0;
        secondScore = 0;
        score1.textContent = firstScore;
        score2.textContent = secondScore;
    } else if(toggleCards.length === 16 && isPlayingHard === false) {
        section.innerHTML = "";
        result();
        firstScore = 0;
        secondScore = 0;
        score1.textContent = firstScore;
        score2.textContent = secondScore;
    }
}
result = () => {
    if(firstScore > secondScore) {
        alert("P1 winner");
    } else if (firstScore === secondScore) {
        alert("Draw");
    } else {
        alert("P2 Winner");
    }
}

field.addEventListener('click' , cardGenerator);
field2.addEventListener('click' , cardGenerator2);

