import { useState, useEffect } from "react";
import LampList from "../components/LampList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [lamps, setLamps] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("api/lamps")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setLamps(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="page">
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div>}
      {<SearchBar lamps={lamps} />}
      {lamps && <LampList lamps={lamps} />}
    </div>
  );
};

export default Home;
