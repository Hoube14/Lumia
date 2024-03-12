import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
/*
export default function SearchBar() {

  const { searchTerm, setSearchTerm } = useContext(GlobalContext);

  return (
    <input
      type="text"
      placeholder="Type to Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

/* const SearchBar = ({ lamps }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log("lamps - ", lamps)
  const filteredData = lamps.filter((lamp) => lamp.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((lamp, index) => (
          <li key={index}>{lamp}</li>
        ))}
      </ul>
    </div>
  );
};
*/
