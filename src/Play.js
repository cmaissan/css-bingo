import './Play.css';
import data from './data.json';
import { useEffect, useState } from 'react';
import Selector from './Selector';

function Play() {

  const [ selectors, setSelectors ] = useState([]);
  const [ currentSelector, setCurrentSelector ] = useState(-1);
  const [ isFinished, setIsFinished ] = useState(false);

  // Shuffle selectors
  useEffect(() => {
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
  }, []);

  // Show next selector
  const next = () => {
    if (currentSelector < selectors.length - 1) {
      setCurrentSelector(currentSelector + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Show selector
  return (
    <div className="Play">

      {isFinished && <>
        <div className="Play-Finished"></div>
      </>}

      {!isFinished && <>
        {currentSelector > -1 &&
          <Selector
            letter={selectors[currentSelector].letter}
            markup={selectors[currentSelector].markup}
            note={selectors[currentSelector].note}
          />
        }
        <button className="Button" onClick={next}>Next</button>
      </>}

    </div>
  );
}

export default Play;
