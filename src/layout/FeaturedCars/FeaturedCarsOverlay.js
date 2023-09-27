import FeaturedCars from "./FeaturedCars";

function FeaturedCarsOverlay() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: "#FFF",
          padding: "40px 40px",
          height: "90vh",
          marginTop: "50px",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h3 style={{ fontWeight: "bold", padding: "20px" }}>
              Featured Used Cars For Sale
            </h3>
          </div>
          <div className="col-md-6 text-right">
            <a
              href="#"
              style={{
                textDecoration: "underline",
                marginTop: "20px !important",
              }}
            >
              View All Featured Used Cars
            </a>
          </div>
        </div>
        <FeaturedCars />
      </div>
    </>
  );
}

export default FeaturedCarsOverlay;
