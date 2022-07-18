import { Link } from "react-router-dom";
import image1 from "../assets/beers.png";
import image2 from "../assets/new-beer.png";
import image3 from "../assets/random-beer.png";

function HomePage() {
  return (
    <div>
      <div>
        <Link to="/beers">Beers</Link>
        <Link to="/random-beers">Random Beers</Link>
        <Link to="/new-beer">New Beer</Link>
      </div>

      <h1>This is my Home Page</h1>

      <div>
        <img src={image1} alt="beers" />
        <a href="/beers">
          <h3>All Beers</h3>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie a
          eros a consectetur. Nunc sollicitudin ornare dictum. Donec sed
          fringilla turpis. Donec sodales lorem urna, a fermentum lacus
          pellentesque vitae. Aenean varius blandit erat ut blandit. Sed ante
          quam, iaculis non ipsum ut, venenatis accumsan lectus. Nunc tincidunt,
          tortor eget rhoncus maximus, ex sem pulvinar est, et imperdiet neque
          metus vel quam. Sed eleifend quis ex sit amet fermentum. Nullam
          convallis lacinia magna, auctor fringilla felis sollicitudin non.
          Etiam nec imperdiet nunc, sit amet tincidunt metus.
        </p>
      </div>

      <div>
        <img src={image1} alt="beers" />
        <a href="/random-beers">
          <h3>Random Beers</h3>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie a
          eros a consectetur. Nunc sollicitudin ornare dictum. Donec sed
          fringilla turpis. Donec sodales lorem urna, a fermentum lacus
          pellentesque vitae. Aenean varius blandit erat ut blandit. Sed ante
          quam, iaculis non ipsum ut, venenatis accumsan lectus. Nunc tincidunt,
          tortor eget rhoncus maximus, ex sem pulvinar est, et imperdiet neque
          metus vel quam. Sed eleifend quis ex sit amet fermentum. Nullam
          convallis lacinia magna, auctor fringilla felis sollicitudin non.
          Etiam nec imperdiet nunc, sit amet tincidunt metus.
        </p>
      </div>

      <div>
        <img src={image1} alt="beers" />
        <a href="/new-beer">
          <h3>New Beer</h3>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie a
          eros a consectetur. Nunc sollicitudin ornare dictum. Donec sed
          fringilla turpis. Donec sodales lorem urna, a fermentum lacus
          pellentesque vitae. Aenean varius blandit erat ut blandit. Sed ante
          quam, iaculis non ipsum ut, venenatis accumsan lectus. Nunc tincidunt,
          tortor eget rhoncus maximus, ex sem pulvinar est, et imperdiet neque
          metus vel quam. Sed eleifend quis ex sit amet fermentum. Nullam
          convallis lacinia magna, auctor fringilla felis sollicitudin non.
          Etiam nec imperdiet nunc, sit amet tincidunt metus.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
