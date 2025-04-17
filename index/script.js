let cards = []; //tüm flashcardların olduğu dizi
    let currentCard = 0; //ilk flashcard
    let showingAnswer = false; //ilk başta soru gösteriliyor.

function updateCard(){
    if(cards.length==0) return; //hiçbir kart yoksa bitirilir.
    const content = showingAnswer
        ? cards[currentCard].tr
        : cards[currentCard].en; //soru gözüküyorsa soru kartı gözükmüyorsa cevap kartı açık.
    document.getElementById("card-content").textContent = content; //card-content, content ile değiştirilir.
}

function toggleAnswer(){ //onclick özelliği ile cevabı gösterip
    showingAnswer = !showingAnswer;
    updateCard();
}

function showPrevious(){
    if (currentCard>0){ //eğer ilk karttaysa bir önceki kartı göstermiyor.
        currentCard--;
        showingAnswer = false; //geri döndüğümüz zaman cevabın gözükmemesi.
        updateCard(); //yeni kart.
    }
}

function showNext(){
    if(currentCard<cards.length-1){ //şu anki kart son kart değilse.
        currentCard++;
        showingAnswer = false;
        updateCard(); 
    }           
}

//json dosyasini yukleme.
fetch('flashcards.json')
.then(response => response.json())
.then(data => {
    cards = data; //veriler cards değişkenine atanır.
    updateCard();
})
.catch(error => {
    document.getElementById("card-content").textContent="kartlar yuklenemedi.";
    console.error("hata:", error)
});



