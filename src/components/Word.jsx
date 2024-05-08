export default function Word({ selectedWord, correctLetters }) {
    return (
        <div class="word" id="word">
            <p>{selectedWord.split("").map((letter) => {
                if (correctLetters.includes(letter)) {
                    return letter
                } else {
                    return "_"
                }
            })}</p>
        </div>
    )
}