import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="Home-Menu">
        <Link className="Button" to="./play">Start Game</Link>
        <Link className="Button" to="./cards">Generate Cards</Link>
      </div>
    </div>
  );
}

export default Home;
