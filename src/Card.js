import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      <div>B</div>
      <div>I</div>
      <div>N</div>
      <div>G</div>
      <div>O</div>
      {props.squares.map((square, index) => {
        return <div key={index}>{square.selector}</div>;
      })}
    </div>
  );
}

export default Card;
