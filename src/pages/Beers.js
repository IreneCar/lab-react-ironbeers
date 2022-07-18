import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const Beers = () => {
  const [beersArr, setBeersArr] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log(response.data);
      setBeersArr(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <h1>All Beers</h1>

      {beersArr.map((beer) => (
        <div>
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      ))}
    </div>
  );
};

export default Beers;
