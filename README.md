# Rock Paper Scissors Game

A simple browser-based Rock–Paper–Scissors game written in HTML, CSS, and JavaScript. Play against the computer with a running score and immediate round results.

## Demo / Preview
Open `index.html` in your web browser to play.

## How to play
- Click one of the three buttons (Rock, Paper, or Scissors).
- The computer will make a random choice.
- The winner of the round is displayed and scores are updated.
- Use the Reset button (if provided) to clear scores and start over.

## Features
- Single-player vs computer
- Round-by-round results and score tracking
- Simple, responsive UI using vanilla HTML/CSS/JS
- Lightweight and no build step required

## Files
- `index.html` — game UI and markup
- `style.css` — styles for the game
- `app.js` — game logic and interaction

## Run locally
1. Clone the repository:
   git clone https://github.com/NikkiKumari32/Rock-Paper-Scissors-Game.git
2. Open `index.html` in any modern browser.

Alternatively, serve it from a simple static server (useful for some browsers' strict file policies):
- Python 3:
  python -m http.server 8000
  Then browse to `http://localhost:8000/`

## How it works (brief)
- Player picks an option by clicking a button.
- JavaScript chooses a random option for the computer.
- The two choices are compared to decide the round winner.
- Scores and messages are updated dynamically on the page.

## Contributing
Contributions, bug reports, and suggestions are welcome. Open an issue or submit a pull request with improvements (UI, accessibility, new features).


## Author
NikkiKumari32 — it23.nikki.kumari@stcet.ac.in
