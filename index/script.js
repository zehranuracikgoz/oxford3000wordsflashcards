let cards = []; 
    let currentCard = 0; 
    let showingAnswer = false; 

function updateCard(){
    if(cards.length==0) return; 
    const content = showingAnswer
        ? cards[currentCard].tr
        : cards[currentCard].en; 
    document.getElementById("card-content").textContent = content; 
}

function toggleAnswer(){ 
    showingAnswer = !showingAnswer;
    updateCard();
}

function showPrevious(){
    if (currentCard>0){ 
        currentCard--;
        showingAnswer = false; 
        updateCard(); 
    }
}

function showNext(){
    if(currentCard<cards.length-1){ 
        currentCard++;
        showingAnswer = false;
        updateCard(); 
    }           
}

fetch('flashcards.json')
.then(response => response.json())
.then(data => {
    cards = data; 
    updateCard();
})

.catch(error => {
    document.getElementById("card-content").textContent="kartlar yuklenemedi.";
    console.error("hata:", error)
})
