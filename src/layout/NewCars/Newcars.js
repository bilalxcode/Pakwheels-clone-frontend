import NewCarElement from "./NewCarElement";

function Newcars() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          background: "#F2F3F3",
          padding: "40px 40px",
          height: "90vh",
        }}
      >
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ fontWeight: "bold", padding: "20px" }}>
              New Cars by Make
            </h2>
            <NewCarElement />
            <NewCarElement />
            <NewCarElement />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newcars;
