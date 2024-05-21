# Hangman

A classic Hangman game implemented with React. Try to guess the word by entering letters, and see if you can win before making too many wrong guesses!

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [License](#license)

## Features

- Randomly selected words from a predefined list.
- Keeps track of correct and wrong letters.
- Displays a notification when a letter has already been guessed.
- Shows a popup when the game is over or when the player wins.
- Maintains a winning streak counter.
- Responsive design and user-friendly interface.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Onion1994/hangman.git
2. Navigate to the project directory:
   ```sh
   cd hangman

3. Install the dependencies:
   ```sh
   npm install

## Usage

To start the game, run:

   npm start


This will start the development server and open the game in your default web browser. You can now play the game and see your changes in real-time as you develop.

## Components

### App.jsx
The main component that renders the game. It manages the state and logic for the game, including the selected word, correct and wrong letters, and game status.

### Header.jsx
Displays the game title and a brief instruction.

### Figure.jsx
Visual representation of the hangman figure based on the number of wrong guesses.

### Word.jsx
Displays the word to guess, showing underscores for unguessed letters and the correct letters as they are guessed.

### WrongLetters.jsx
Displays the wrong letters guessed by the player.

### SameLetter.jsx
Shows a notification if the player tries to guess a letter that has already been guessed.

### Popup.jsx
Displays a popup when the game is over or when the player wins, with a button to play again.

### Streak.jsx
Shows the current winning streak of the player.

## License

This project is licensed under the MIT License.
