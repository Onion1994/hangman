export default function Figure ({ wrongLetters }) {

  const errors = wrongLetters.length

    return (
      <svg height="250" width="200" className="figure-container">
      {errors > 0 && <line x1="20" y1="230" x2="100" y2="230" strokeWidth="10"/>}
      {errors > 1 && <line x1="60" y1="20" x2="60" y2="230" strokeWidth="8"/>}
      {errors > 2 && <line x1="60" y1="20" x2="140" y2="20" strokeWidth="8"/>}
      {errors > 3 && <line x1="140" y1="20" x2="140" y2="50" strokeWidth="4"/>}
      {errors > 4 && <circle cx="140" cy="70" r="20" strokeWidth="4"/>}
      {errors > 5 && <line x1="140" y1="90" x2="140" y2="150" strokeWidth="4"/>}
      {errors > 6 && <line x1="140" y1="120" x2="120" y2="100" strokeWidth="4"/>}
      {errors > 7 && <line x1="140" y1="120" x2="160" y2="100" strokeWidth="4"/>}
      {errors > 8 && <line x1="140" y1="150" x2="120" y2="180" strokeWidth="4"/>}
      {errors > 9 && <line x1="140" y1="150" x2="160" y2="180" strokeWidth="4"/>}
    </svg>
    )
} 