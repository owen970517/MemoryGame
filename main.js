const section = document.querySelector('section');
const score1 = document.querySelector('.player1Score');
const score2 = document.querySelector('.player2Score');
const p1 = document.querySelector('.player1');
const p2 = document.querySelector('.player2');

// true == player1 , false == player2 
let isMyTurn = true;
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
]
const randomize = () => {
    const cardData = getData();
    cardData.sort(()=> Math.random() - 0.5);
    return cardData;
}

const cardGenerator = () => {
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
const checkCards = (e) => {
    const clickedCard = e.target.offsetParent;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
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
}

cardGenerator();