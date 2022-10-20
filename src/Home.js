import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <Link to="/play">Start Game</Link>
      <Link to="/cards">Generate Cards</Link>
    </div>
  );
}

export default Home;
