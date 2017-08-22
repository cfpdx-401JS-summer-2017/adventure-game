# Maze Adventure Game

By [Anwar Montasir](https://github.com/anwarmontasir) and [Pierre Shabani](https://github.com/jshabani)

## Description

You are a character in a maze. In every room you will have choices of direction to travel (North, South, East, West).

In some rooms you will interact with other characters, and exchange objects.

Your goal is to defeat the guardian of the maze and exit through the door behind him.

## How the maze works (our notes)

Maze: 16 rooms(directions, actions, items, opponents)

Characters (enter name):
- Directions:
- Up
- Down
- Right
- Left
- Actions:
- Pick up
- Drop
- Use
Items:
- Action (pick up, drop, use)

Rooms:
- number=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
- Directions(north, south, east, west)
- Action(pick up, drop, use)

All Rooms:
- Directions
- Action

Room0:
- Directions
- Action
- 2 items

Room4:
- Opponent
- Directions
- Action
- 2 items

Room6:
- 1 item(unknown-->might help with Room15)
- Directions
- Action

Room7:
- Opponent
- Directions
- Action
- 2 items

Room13:
- 1 item(door)
- Directions
- Action

Room15:
- Opponent
- Directions
- Action