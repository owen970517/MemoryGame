const section = document.querySelector('section');
const counts = document.querySelector('.playerLiveCounts');
playerCounts = 6;

counts.textContent = playerCounts;

const getData = () => [
    {imgSrc : "./images/iu.jpg" , name : "iu" },
    {imgSrc : "./images/iu2.jpg" , name : "iu2" },
    {imgSrc : "./images/iu3.jpg" , name : "iu3" },
    {imgSrc : "./images/iu4.jpg" , name : "iu4" },
    {imgSrc : "./images/iu5.jpg" , name : "iu5" },
    {imgSrc : "./images/iu6.jpg" , name : "iu6" },
    {imgSrc : "./images/iu7.jpg" , name : "iu7" },
    {imgSrc : "./images/iu8.jpg" , name : "iu8" },
    {imgSrc : "./images/iu.jpg" , name : "iu1" },
    {imgSrc : "./images/iu2.jpg" , name : "iu2" },
    {imgSrc : "./images/iu3.jpg" , name : "iu3" },
    {imgSrc : "./images/iu4.jpg" , name : "iu4" },
    {imgSrc : "./images/iu5.jpg" , name : "iu5" },
    {imgSrc : "./images/iu6.jpg" , name : "iu6" },
    {imgSrc : "./images/iu7.jpg" , name : "iu7" },
    {imgSrc : "./images/iu8.jpg" , name : "iu8" },
    //{imgSrc : "./images/iu9.jpg" , name : "iu9" },
    //{imgSrc : "./images/iu10.jpg" , name : "iu10" },




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
        card.setAttribute('name' , item.name);
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener('click' , (e)=> {
            card.classList.toggle('toggleCard');
            checkCard(e);
        })
    })
}
const checkCard = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCard = document.querySelectorAll('.flipped');
    if (flippedCard.length === 2) {
        if ( flippedCard[0].getAttribute('name') == flippedCard[1].getAttribute['name']) {
            console.log('match');
        } else {
            console.log('wrong');
        }
    }

}
cardGenerator();