import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <div className='game-container'>
        <Figure />
      </div>
    </div>
  );
}
