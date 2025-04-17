##flask uygulamasi.

import json

with open("flashcard.json", "r", encoding="utf-8") as file:
    flascards = json.load(file)

for card in flashcards:
    print(f"soru: {card['question']} - cevap: {card['answer']}")