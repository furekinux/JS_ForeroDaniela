let array_p1 = []
let sumOfCard = 0

function fetchDeck(){
    let url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText)
            console.log(response)
            newButtons = document.getElementById("buttons")
            newButtons.innerHTML=`
                <button id="draw" onclick="drawCard()">Draw</button>
                <button id="stand" onclick="standCard()">Stand</button>
                <button id="reset" onclick="resetGame()">Reset</button>`
            let url = `https://deckofcardsapi.com/api/deck/${response.deck_id}/draw/?count=2`
            console.log(response.deck_id)

            let rules=document.getElementById("rulesCont")
            rules.innerHTML=""
            let logo=document.getElementById("logo")
            logo.innerHTML=""
            let deckId = document.getElementById("menu")
            deckId.innerHTML=`<h1>Deck ID = <span id="deckIdIs">${response.deck_id}</span></h1>`
            
            let xhr = new XMLHttpRequest();
            xhr.open("GET",url,true);
            xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                let response = JSON.parse(this.responseText)
                console.log(response)
                displayCards(response)
            }else if(this.readyState === 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
        }else if(this.readyState === 4){
            console.log("Error :(",this.statusText)
        }
    }
    xhr.send();
}
function fetchRules(){
    let deckId = document.getElementById("menu")
            deckId.innerHTML=``
    let rules=document.getElementById("rulesCont")
    rules.innerHTML=`
    <div class="rules" id="rules">
        <h2>- - - Rules - - -</h2>
        <li>Face cards are worth 10.</li>
        <li>Ace is worth 11 or 1 depending if your cards total value is higher than 21 or not.</li>
        <li>hello world!</li>
        <li>hi</li>
        <li>hi</li>
    </div>
    <br><button id="back" class="menu_button" onclick="resetGame()">Back</button>`
    let newButtons = document.getElementById("buttons")
    newButtons.innerHTML=""
    let logo=document.getElementById("logo")
    logo.innerHTML=""
}
function drawCard(){
    deckdeck= document.getElementById("deckIdIs").innerText
    console.log("hola",deckdeck)
    let url = `https://deckofcardsapi.com/api/deck/${deckdeck}/draw/?count=1`
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText)
            console.log(response)
            displayCards(response)
        }else if(this.readyState === 4){
            console.log("Error :(",this.statusText)
        }
        }
    xhr.send();
}

function standCard(){
    checkGame(sumOfCard)
}
function displayCards(data){
    console.log(data.cards)
    arraysito = data.cards
    arraysito.forEach(card => {
        
        let cardImg = document.getElementById("cards")
        if(data.response === "error"){
            cardImg.innerHTML=`<p>Error</p>`
        } else{
            let imgcard = document.createElement("img");
            imgcard.src = card.images.svg

            cardImg.appendChild(imgcard);
            array_p1.push(card)
            console.log(array_p1)
            value = card.value
            if(value==="ACE"){
                value = 11
            }else if(value==="JACK" || value==="QUEEN"|| value==="KING" ){
                value = 10
            }else{
                value = value
            }
            sumOfCard = sumOfCard+parseInt(value)
        }
    }
    );
    array_p1.forEach(card => {
        if(card.value === "ACE"){
            if(sumOfCard>21){
                sumOfCard = sumOfCard-10
            }
        } else{
            sumOfCard = sumOfCard
        }
    }
    );
    console.log(sumOfCard)
    checkGame(sumOfCard)
}
function checkGame(suma){
    if (suma===21){
        let deckId = document.getElementById("menu")
        deckId.innerHTML=`<h1>You win!  <span id="deckIdIs">${suma}</span></h1>`
        newButtons = document.getElementById("buttons")
        newButtons.innerHTML=`
            <button id="reset" onclick="resetGame()">Reset</button>`
    } else if(suma>21){
        let deckId = document.getElementById("menu")
        deckId.innerHTML=`<h1>Better luck next time!   <span id="deckIdIs">${suma}</span></h1>`
        newButtons = document.getElementById("buttons")
        newButtons.innerHTML=`
            <button id="reset" onclick="resetGame()">Reset</button>`
    }else{
        console.log("Not yet", suma)
    }
}
function resetGame(){

    let newButtons = document.getElementById("buttons")
    newButtons.innerHTML=`
    <button id="start" class="menu_button" onclick="fetchDeck()">Start!</button>

    <br><button id="showRules" class="menu_button" onclick="fetchRules()">Rules</button>
    </br>`

    let cardImg = document.getElementById("cards")
    cardImg.innerHTML=""

    let rules=document.getElementById("rulesCont")
    rules.innerHTML=""

    let deckId = document.getElementById("menu")
    deckId.innerHTML=`<span id="white" class="title">White</span>
    <span id="jack" class="title">Jack</span>`

    let logo=document.getElementById("logo")
    logo.innerHTML= `
    <svg class="logoBun" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
        <path d="M61.32 52.97s1.31-.28 3.1-.28s3.57.47 3.57.47s4.04-5.73 4.97-13.98s.94-17.36 3.85-24.5c2.91-7.13 7.6-9.67 12.01-9.01s14.12 8.31 11.36 28.72c-1.98 14.54-12.59 21.46-11.27 31.9c1.13 8.92 6.48 15.77 8.73 20.46c2.25 4.69 6.66 12.76-.94 23.56c-7.8 11.07-24.59 13.33-32.29 13.14c-7.7-.19-20.52-.85-30.88-9.76c-4.69-4.04-7.6-9.48-7.32-17.64c.28-8.17 6.85-16.52 9.1-20.65s4.97-7.13 4.88-11.26c-.09-4.13-5.91-15.77-7.51-23.56c-1.6-7.79-7.32-32.66 13.05-36.13c11.16-1.9 8.63 18.21 10.98 31.07c2.36 12.85 4.61 17.45 4.61 17.45z" fill="#ffffff"></path><path d="M78.68 54.47c4.42 2.92 7.39-3.7 8.45-6.38c1.6-4.04 5.16-11.26 5.35-19.99c.15-7.14-.28-13.23-5.44-13.05c-5.16.19-4.97 8.54-4.88 11.36c.14 4.32-.95 10.55-2.06 14.92c-1.62 6.35-5.83 10.23-1.42 13.14z" fill="#ffa8c7"></path><path d="M44.99 14.11c-4.5-.56-7.13 6.1-6.57 12.95s2.82 17.36 5.35 22.15c2.53 4.79 3.85 5.91 6.95 5.07c3.1-.84.94-6.38.66-8.26c-.28-1.88-2.63-13.98-2.63-19.52s.81-11.82-3.76-12.39z" fill="#ffa8c7"></path>
        <path d="M64.98 60.19c4.51 0 2.32 8.85 3.45 13.73c1.13 4.88 5.35 9.2 8.66 12.67c4.15 4.36 9.1 13.63 8.17 19.36c-.94 5.73-3.87 14.22-20.74 14.03c-14.59-.16-20.93-4.6-21.21-15.09c-.26-9.8 6.41-16.68 8.8-18.65s5.84-5.42 7.39-9.43c1.55-4.01 1.97-8.09 2.11-10.28c.13-2.18-.36-6.34 3.37-6.34z" fill="#ffffff"></path><path d="M52.45 75.68c0 3.75-.77 6.76-4.36 6.76c-2.6 0-3.87-2.69-3.87-6.44s1.34-6.58 4.15-6.37c2.84.21 4.08 2.3 4.08 6.05z" fill="#991a64"></path><path d="M84.05 76.45c0 3.75-.63 6.55-4.22 6.55c-2.6 0-3.8-3.15-3.8-6.9s.77-5.91 3.59-5.91c2.75 0 4.43 2.51 4.43 6.26z" fill="#991a64"></path><path d="M64.93 107.19l-4.97 2.16s.02 3.36 2.28 3.33c1.7-.03 2.27-1.06 2.27-1.06s.85 1.09 2.76 1.06c2.26-.04 2.05-2.87 2.05-2.87l-4.39-2.62z" fill="#ff85cc"></path><path d="M69.25 102.47l-9.9 1.17s.47 5.73.68 6.22s.56 1.13 2.11 1.27c1.55.14 2.39-1.06 2.39-1.06s.57 1.11 2.22 1.25c1.02.09 2.43-.3 2.6-1.02c.29-1.2.19-2.26.18-4.03c-.01-1.56-.28-3.8-.28-3.8z" fill="#ffb8cd"></path><path d="M64.32 92.85s4.67-5.86 6.29-3.85c1.9 2.36-4.88 7.13-4.88 7.13s.24 3.7.55 3.97c2.75 2.36 5.07-.32 5.35-.6c.28-.28 1.9-1.51 2.96-.18s-1.02 5.95-5.14 6.23c-4.12.28-5-2.04-5-2.04s-.63 2.64-5.35 2.43s-5.31-5.35-4.26-6.12c1.06-.77 1.42-.71 3.59 1.13c1.37 1.16 3.87.18 4.01-1.09c.07-.6-.04-3.77-.04-3.77s-7.6-4.65-5.53-7.11c2.09-2.46 7.45 3.87 7.45 3.87z" fill="#991a64"></path><path d="M36.35 95.53c-.19 0-.38-.04-.57-.11c-.04-.01-3.87-1.56-8.25-1.44c-4.76.14-7.21.83-7.23.83c-.8.23-1.63-.23-1.86-1.02c-.23-.79.22-1.62 1.02-1.86c.11-.03 2.78-.8 7.98-.95c5.05-.16 9.31 1.59 9.49 1.66c.77.32 1.13 1.19.81 1.96c-.24.58-.8.93-1.39.93z" fill="#ff85cc"></path><path d="M20.17 105.71c-.44 0-.88-.19-1.18-.57c-.52-.65-.41-1.59.24-2.11c.14-.11 3.49-2.75 7.84-3.85c4.27-1.08 9.14-.76 9.34-.75c.83.06 1.45.77 1.39 1.6c-.06.83-.76 1.47-1.6 1.39c-.04 0-4.61-.3-8.4.66c-3.73.94-6.68 3.26-6.71 3.29c-.27.23-.6.34-.92.34z" fill="#ff85cc"></path><path d="M24.67 113.73c-.38 0-.77-.15-1.06-.44a1.49 1.49 0 0 1 0-2.12c.1-.1 2.58-2.58 4.65-4.17c2.17-1.67 6.72-3.38 6.91-3.45c.78-.29 1.64.1 1.93.88c.29.78-.1 1.64-.88 1.93c-1.2.45-4.63 1.87-6.14 3.02c-1.91 1.47-4.33 3.88-4.36 3.91c-.28.3-.67.44-1.05.44z" fill="#ff85cc"></path>
        <path d="M90.65 95.95c-.66 0-1.27-.44-1.45-1.11c-.22-.8.25-1.62 1.05-1.84c.18-.05 4.39-1.18 8.46-1.32c4.43-.15 8.1 1.01 8.25 1.06a1.497 1.497 0 0 1-.91 2.85c-.03-.01-3.34-1.04-7.24-.92c-3.71.12-7.74 1.21-7.78 1.22c-.12.04-.25.06-.38.06z" fill="#ff85cc"></path><path d="M106.04 104.26c-.33 0-.67-.11-.95-.34c-.01-.01-1.96-1.54-5.91-2.47c-3.82-.9-7.61-.58-7.65-.58c-.81.07-1.55-.54-1.62-1.36c-.07-.83.54-1.55 1.36-1.62c.17-.02 4.31-.36 8.59.64c4.7 1.1 7.04 2.99 7.13 3.07c.64.53.73 1.47.21 2.11c-.3.36-.73.55-1.16.55z" fill="#ff85cc"></path><path d="M103.36 111.62c-.35 0-.7-.12-.98-.37c-.03-.02-2.75-2.37-5.29-3.58c-2.43-1.15-5.96-1.22-5.99-1.22a1.5 1.5 0 0 1 .02-3h.02c.17 0 4.21.07 7.24 1.5c2.92 1.39 5.85 3.92 5.97 4.02c.63.54.69 1.49.15 2.12c-.3.36-.72.53-1.14.53z" fill="#ff85cc"></path>
        </g>
    </svg>`
    array_p1 = []
    sumOfCard = 0
}