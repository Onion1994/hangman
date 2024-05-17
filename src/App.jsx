import { useEffect, useState } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';

const words = [
  "damask", "prognosticate", "acquisitive", "zeitgeber", "gratuitous", "signet", "absolve", "fissile", "MacGuffin", "callous",
  "quirk", "inveigh", "maladroit", "Cupid", "enervate", "turbid", "rapport", "fathom", "prestigious", "buttress",
  "lampoon", "haggard", "opprobrium", "voracious", "caterwaul", "retinue", "translucent", "jeopardy", "demean",
  "incipient", "posse", "diligent", "skulk", "accolade", "circumspect", "retronym", "ferret", "ominous", "tenet",
  "mangle", "Elysian", "gargoyle", "cosplay", "oneiric", "bunkum", "whinge", "axiomatic", "harangue", "kindred",
  "conflate", "sarcasm", "unfettered", "capitulate", "vivacious", "lexicographer", "docile", "emote", "bailiwick",
  "quotidian", "bifurcate", "dexterous", "avoirdupois", "smite", "permeable", "tincture", "intrepid", "convalesce",
  "foolscap", "quixotic", "mentor", "exhort", "genial", "aplomb", "delve", "visceral", "raconteur", "overweening",
  "bowdlerize", "Kafkaesque", "purview", "nobby", "luminaria", "envisage", "chapfallen", "sangfroid", "ubiquitous",
  "glower", "arduous", "futurity", "fuliginous", "analogue", "parse", "maelstrom", "requisite", "terraform", "cockamamie",
  "mien", "audacious", "suffuse", "valorous", "bugbear", "gravitate", "exigent", "chimera", "woebegone", "hallmark",
  "disabuse", "inordinate", "ransack", "boilerplate", "scrumptious", "nebbish", "abnegate", "olfactory", "culprit",
  "kinetic", "detritus", "felicitous", "confection", "faze", "splenetic", "aficionado", "demarcate", "portentous",
  "obtain", "juncture", "berserk", "voracity", "gullible", "circumvent", "foliage", "hirsute", "acronym", "mollycoddle",
  "omnipotent", "quintessence", "dubious", "inculcate", "beholden", "threshold", "regale", "extraneous", "cadre",
  "shill", "irascible", "pandemonium", "werewolf"
];

let selectedWord = words[Math.floor(Math.random() * words.length)]

export default function App() {

  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  
  useEffect(() => {

    function handleKeyDown(event) {
      const { key, keyCode } = event
      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase()
        if (selectedWord.includes(letter)) {
          setCorrectLetters(currentLetters => [...currentLetters, letter])
        } else if (!wrongLetters.includes(letter)) {
          setWrongLetters(currentLetters => [...currentLetters, letter])
        }
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [correctLetters, wrongLetters])

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
    </>
  );
}
