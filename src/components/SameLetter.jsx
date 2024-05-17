export default function SameLetter({ showNotification }) {
    return (
        <div>
            {showNotification && <p>You have already entered this letter</p>}
        </div>
    )
}