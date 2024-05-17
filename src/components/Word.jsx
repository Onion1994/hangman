export default function Word({ selectedWord, correctLetters, isGameOver }) {
    return (
        <div className="word">
          {selectedWord.split('').map((letter, i) => {
            return (
              <span className="letter" key={i}>
                {correctLetters.includes(letter) || isGameOver ? letter : ''}
              </span>
            )
          })}
        </div>
      )
}