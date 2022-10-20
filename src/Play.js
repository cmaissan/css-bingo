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
    let list = data.B.concat(data.I).concat(data.N).concat(data.G).concat(data.O);
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
        {currentSelector > -1 && <Selector markup={selectors[currentSelector].markup} />}
        <button className="Button" onClick={next}>Next</button>
      </>}

    </div>
  );
}

export default Play;
