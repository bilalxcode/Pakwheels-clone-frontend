import ManagedByPakwheels from "./ManagedByPakwheels";

function ManagedByPakwheelsOverlay() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: "#F2F3F3",
          padding: "40px 40px",
          height: "90vh",
          marginTop: "150px",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h3 style={{ fontWeight: "bold", padding: "20px" }}>
              Managed By Pakwheels
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
              View All Managed By Pakwheels
            </a>
          </div>
        </div>
        <ManagedByPakwheels />
      </div>
    </>
  );
}

export default ManagedByPakwheelsOverlay;
