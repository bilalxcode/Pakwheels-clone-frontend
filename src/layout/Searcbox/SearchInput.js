import "./SearchInput";

function SearchInput() {
  return (
    <>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Car Make or Model"
            />
          </div>
          <div className="col-md-3 ">
            <select className="form-control">
              <option value="">Select City</option>
              <optgroup label="Popular Cities">
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
              </optgroup>
              <optgroup label="Other Cities">
                <option value="other1">Other City 1</option>
                <option value="other2">Other City 2</option>
              </optgroup>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control">
              <option value="">Price Range (in lacs)</option>
              <option value="5">5 lacs</option>
              <option value="10">10 lacs</option>
              <option value="15">15 lacs</option>
              <option value="20">20 lacs</option>
              <option value="25">25 lacs</option>
              <option value="30">30 lacs</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-success btn-block">
              <i className="fa fa-search"></i> Search
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px", // Set an appropriate height for vertical centering
        }}
      >
        <button
          style={{
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            padding: "5px 10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Advance Filter &gt;
        </button>
      </div>
    </>
  );
}

export default SearchInput;
