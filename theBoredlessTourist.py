# locations for the traveler to travel
destinations = ["Paris, France", "Shanghai, China",
                "Los Angeles, USA", "Sao Paulo, Brazil", "Cairo, Egypt"]
# traveler with name, location, destinations
test_traveler = ['Erin Wilkes', 'Shanghai, China', ['historical site', 'art']]

# gets the destinations and indexs in the list


def get_destination_index(destination):
    destination_index = destinations.index(destination)
    return destination_index

# gets the location of the traveler


def get_traveler_location(traveler):
    traveler_destination = traveler[1]
    traveler_destination_index = get_destination_index(traveler_destination)
    return traveler_destination_index


test_destination_index = get_traveler_location(test_traveler)
attractions = [[] for attraction in destinations]

# adds an attraction to list


def add_attraction(destination, attraction):
    destination_index = get_destination_index(destination)
    attractions_for_destination = attractions[destination_index].append(
        attraction)
    return


# attractions to iterate through
add_attraction("Los Angeles, USA", ['Venice Beach', ['beach']])
add_attraction("Paris, France", ["the Louvre", ["art", "museum"]])
add_attraction("Paris, France", ["Arc de Triomphe", [
               "historical site", "monument"]])
add_attraction("Shanghai, China", ["Yu Garden", [
               "garden", "historcical site"]])
add_attraction("Shanghai, China", ["Yuz Museum", ["art", "museum"]])
add_attraction("Shanghai, China", ["Oriental Pearl Tower", [
               "skyscraper", "viewing deck"]])
add_attraction("Los Angeles, USA", ["LACMA", ["art", "museum"]])
add_attraction("Sao Paulo, Brazil", ["Sao Paulo Zoo", ["zoo"]])
add_attraction("Sao Paulo, Brazil", ["Patio do Colegio", ["historical site"]])
add_attraction("Cairo, Egypt", ["Pyramids of Giza", [
               "monument", "historical site"]])
add_attraction("Cairo, Egypt", ["Egyptian Museum", ["museum"]])

# inputs attraction ino attractions list


def find_attractions(destination, interests):
    destination_index = get_destination_index(destination)
    attractions_in_city = attractions[destination_index]
    attractions_with_interest = []
    # loops through each attraction
    for attraction in attractions_in_city:
        possible_attraction = attraction
        attraction_tags = possible_attraction[1]
        for interest in interests:
            if interest in attraction_tags:
                attractions_with_interest.append(possible_attraction[0])
    return attractions_with_interest


la_arts = find_attractions("Los Angeles, USA", ['art'])

# creates the string and figures out attraction from said traveler


def get_attractions_for_traveler(traveler):
    traveler_destination = traveler[1]
    traveler_interests = traveler[2]
    traveler_attractions = find_attractions(
        traveler_destination, traveler_interests)
    # holds the string that will be printed with new line
    interests_string = "Hi " + \
        str(traveler[0]) + ", we think you'll like these places around " + \
        str(traveler_destination) + ": "
    # loops through the len of list
    for i in range(len(traveler_attractions)):
        if traveler_attractions[-1] == traveler_attractions[i]:
            interests_string += "the " + traveler_attractions[i] + "."
        else:
            interests_string += "the " + traveler_attractions[i] + ", "
    return interests_string


""" TESTING CASE DEREK SMILL
smills_france = get_attractions_for_traveler(
    ['Dereck Smill', 'Paris, France', ['monument']])
print(smills_france)
"""
