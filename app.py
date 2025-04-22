import json

with open("flashcards.json", "r", encoding="utf-8") as file:
    data = json.load(file)

for card in flashcards:
    print(f"soru: {card['en']} - cevap: {card['tr']}")
