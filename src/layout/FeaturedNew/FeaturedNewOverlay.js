import FeaturedNew from "./FeaturedNew";

function FeaturedNewOverlay() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: "#F2F3F3",
          padding: "40px 40px",
          height: "90vh",
          marginTop: "10px",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h3 style={{ fontWeight: "bold", padding: "20px" }}>
              Featured New Cars
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
              View All New Cars
            </a>
          </div>
          <FeaturedNew />
        </div>
      </div>
    </>
  );
}

export default FeaturedNewOverlay;
