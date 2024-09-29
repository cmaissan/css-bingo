import './Play.css';
import data from './data.json';
import { useEffect, useState } from 'react';
import Answers from './Answers';
import Selector from './Selector';

function Play() {

  const [ selectors, setSelectors ] = useState([]);
  const [ currentSelector, setCurrentSelector ] = useState(-1);
  const [ isFinished, setIsFinished ] = useState(false);
  const [ checkCard, setCheckCard ] = useState(false);
  const [ timePerCall, setTimePerCall ] = useState(20);
  const [ timer, setTimer ] = useState(20);
  const [ nextDisabled, setNextDisabled ] = useState(true);

  // Start game
  const start = () => {
    let list = [];
    ['B', 'I', 'N', 'G', 'O'].forEach((letter) => {
      data[letter].forEach((item) => {
        item.letter = letter;
        list.push(item);
      });
    });
    list = list.sort((a, b) => 0.5 - Math.random());
    setSelectors(list);
    setCurrentSelector(0);
    setTimer(timePerCall);
  };

  // Show next selector
  const next = () => {
    if (currentSelector < selectors.length - 1) {
      setCurrentSelector(currentSelector + 1);
      setTimer(timePerCall);
      setNextDisabled(true);
    } else {
      setIsFinished(true);
    }
  };

  // Decrease timer
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(nextDisabled);
      console.log(timer);
      if (nextDisabled) {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          setNextDisabled(false);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Show selector
  return (
    <div className="Play">

      {currentSelector < 0 && <div className="Play-Form">
        <div className="Play-Time-Per-Call">
          <label>{timePerCall} <span>seconds per call</span></label>
          <input value={timePerCall} onChange={(e) => setTimePerCall(e.target.value)} type="range" min="10" max="65" step="5" />
        </div>
        <button className="Button" onClick={start}>Go</button>
      </div>}

      {currentSelector > -1 && (isFinished || checkCard) && <>
        <div className="Play-Check">
          <Answers
            selectors={selectors.filter((selector, index) => index <= currentSelector)}
            onClose={() => { setCheckCard(false) }}
          />
        </div>
      </>}

      {currentSelector > -1 && !(isFinished || checkCard) && <>
        {currentSelector > -1 &&
          <Selector
            letter={selectors[currentSelector].letter}
            markup={selectors[currentSelector].markup}
            note={selectors[currentSelector].note}
          />
        }
        <div className="Play-Buttons">
          <div className="Play-Timer">
            { timer }
          </div>
          <button className="Button" onClick={next} disabled={nextDisabled}>Next</button>
          <button className="Button" onClick={() => { setCheckCard(true); }}>Check</button>
        </div>
      </>}

    </div>
  );
}

export default Play;
