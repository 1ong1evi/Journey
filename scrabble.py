letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
           "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1,
          3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]
# dictionary of letters and points
letter_to_points = {
    key: value
    for key, value
    in zip(letters, points)
}
# blank tile
letter_to_points[" "] = 0

# func to score the word to a point_total


def score_word(word):
    point_total = 0
    for letter in word:
        point_total += letter_to_points.get(letter, 0)
    return point_total


# creates players to run the program
player_to_words = {"player1": ["BLUE", "TENNIS", "EXIT"], "wordNerd": ["EARTH", "EYES", "MACHINE"], "Lexi Con": [
    "ERASER", "BELLY", "HUSKY"], "Prof Reader": ["ZAP", "COMA", "PERIOD"]}

player_to_points = {}
# loop to add up the score
for key, value in player_to_words.items():
    player_points = 0
    for word in value:
        player_points += score_word(word)
    player_to_points[key] = player_points
