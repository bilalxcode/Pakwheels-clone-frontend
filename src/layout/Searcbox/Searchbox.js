import SearchInput from "./SearchInput";

function Searchbox() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h1 style={{ fontSize: "50px", color: "#fff" }}>
          Find Used Cars in Pakistan
        </h1>
        <p style={{ color: "#fff" }}>
          With thousands of cars, we have just the right one for you
        </p>
        <SearchInput />
      </div>
    </>
  );
}

export default Searchbox;
