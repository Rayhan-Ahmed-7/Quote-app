const quoteText = document.querySelector('.quote'),
quoteAuthor = document.querySelector('.name'),
quoteCopy = document.querySelector('.copy'),
quoteSound = document.querySelector('.sound'),
quoteTwitter = document.querySelector('.twitter'),
quoteBtn = document.querySelector('button');
//first way of fetching
//random quote genarator
function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = "Loading Quote...";
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
        quoteText.innerText = data.content;
        quoteAuthor.innerText = data.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove('loading');
        copy.innerText = "Copy";
    })
}
//second way
// async function randomQuote(){
//     const object = await fetch('https://api.quotable.io/random');
//     const result = await object.json();
//     console.log(result);
// }
//3rd way
//old way
// function randomQuote(){
//     let req = new XMLHttpRequest();
//     req.open('get','https://api.quotable.io/random');
//     console.log(req);
//     req.onload = function(){
//         console.log(this.response);
//         let res = JSON.parse(this.response);
//         quoteText.innerText = res.content;
//         quoteAuthor.innerText = res.author;
//          console.log(res);
//     }
//     req.send();
// }
quoteBtn.addEventListener('click',randomQuote);
//sound
quoteSound.addEventListener('click',()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`);
    speechSynthesis.speak(utterance);
})

//copy text
let copy = document.querySelector('.tcopy');
function copyText(){
    navigator.clipboard.writeText(quoteText.innerText);
    copy.innerText = "copied";
}

quoteCopy.addEventListener('click',copyText);

//twitter post
quoteTwitter.addEventListener('click',()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url="${quoteText.innerText}" __By ${quoteAuthor.innerText}`;
    window.open(tweetUrl,'_blank');
})
//https://twitter.com/intent/tweet?url=
//https://www.facebook.com/sharer/sharer.php?u=
