import Searchbox from "./Searchbox";
import Navbar from "../Navbar/Navbar";

function SearchOverlay() {
  return (
    <div
      style={{
        background: "linear-gradient( #000,#01336F)",
        padding: "0px 40px",
        height: "90vh",
      }}
    >
      <Navbar />
      <Searchbox />
    </div>
  );
}

export default SearchOverlay;
