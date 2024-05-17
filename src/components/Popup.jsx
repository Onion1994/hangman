export default function Popup({isWinner, isGameOver, onPlayAgain}) {
    return (
        <div className={`popup-container ${isGameOver || isWinner ? 'show' : ''}`}>
            <div className="popup">
                <h2>{isGameOver ? 'Game Over. You lost.' : 'Congratulations! You won!'}</h2>
                <button onClick={onPlayAgain}>Play Again</button>
                </div>
            </div>
    )
}