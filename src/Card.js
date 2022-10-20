import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      <header className="Card-Header">
        <div className="Card-Square">B</div>
        <div className="Card-Square">I</div>
        <div className="Card-Square">N</div>
        <div className="Card-Square">G</div>
        <div className="Card-Square">O</div>
      </header>
      <div className="Card-Body">
        {props.squares.map((square, index) => {
          return <div className="Card-Square" key={index}>{square.selector}</div>;
        })}
      </div>
    </div>
  );
}

export default Card;
