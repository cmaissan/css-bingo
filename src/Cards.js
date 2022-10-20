import './Cards.css';
import data from './data.json';
import { useState } from 'react';
import Card from './Card';

function Cards() {

  const [ numberOfCards, setNumberOfCards ] = useState('');
  const [ cards, setCards ] = useState([]);

  const generate = () => {
    for (let i = 0; i < numberOfCards; i = i + 1) {
      let card = [];
      data.B = data.B.sort((a, b) => 0.5 - Math.random());
      data.I = data.I.sort((a, b) => 0.5 - Math.random());
      data.N = data.N.sort((a, b) => 0.5 - Math.random());
      data.G = data.G.sort((a, b) => 0.5 - Math.random());
      data.O = data.O.sort((a, b) => 0.5 - Math.random());
      for (let row = 0; row < 5; row = row + 1) {
        card.push(data.B[row]);
        card.push(data.I[row]);
        if (row === 2) {
          card.push(data.middle);
        } else {
          card.push(data.N[row]);
        }
        card.push(data.G[row]);
        card.push(data.O[row]);
      }
      cards.push(card);
    }
    setCards([...cards]);
  };

  // Print cards
  const print = () => {
    window.print();
  };

  return (
    <div className="Cards">

      {cards.length === 0 && <div className="Cards-Form">
        <input placeholder="Number of cards" value={numberOfCards} onChange={(e) => setNumberOfCards(e.target.value)}/>
        <button className="Button" onClick={generate}>Generate</button>
      </div>}

      {cards.length > 0 && <>
        <button className="Button" onClick={print}>Print</button>
        {cards.map((card, index) => {
          return <Card key={index} squares={card} />;
        })}
      </>}

    </div>
  );
}

export default Cards;
