import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>This is my Home Page</h1>

      <Link to="/beers">Beers</Link>
      <Link to="/random-beers">Rrandom Beers</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
}

export default HomePage;
