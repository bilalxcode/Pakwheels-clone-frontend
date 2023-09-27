import BrowseCarousel from "./BrowseCarousel";

function BrowseUsedCarsOverlay() {
  return (
    <div
      style={{
        background: "#F2F3F3",
        padding: "0px 40px",
        height: "90vh",
        marginTop: "150px",
      }}
    >
      <div>
        <h3 style={{ fontWeight: "bold", padding: "20px" }}>
          Browse Used Cars
        </h3>
      </div>
      <BrowseCarousel />
    </div>
  );
}

export default BrowseUsedCarsOverlay;
