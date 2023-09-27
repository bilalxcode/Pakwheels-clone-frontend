function ExploreProducts() {
  return (
    <div
      style={{
        marginTop: "60px",
      }}
    >
      <div className="container" style={{ padding: "10px 0px" }}>
        <h2 style={{ fontWeight: "bold", padding: "20px" }}>
          Explore Products by PakWheels
        </h2>
        <div className="row our-product-widget">
          {products.map((product, index) => (
            <div className="col-md-6 mb20 my-1" key={index}>
              <div
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid black",
                  width: "100%",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  transition: "transform 0.3s",
                }}
              >
                <div className="img" style={{ flex: "1" }}>
                  <img
                    alt={product.altText}
                    src={product.imageUrl}
                    title={product.altText}
                    width="50"
                    style={{ margin: "5px 0" }}
                  />
                </div>
                <div className="desc" style={{ flex: "2" }}>
                  <a href="#">
                    <h5 style={{ color: "blue" }}>{product.title}</h5>
                  </a>
                  <p style={{ fontSize: "14px" }}>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const products = [
  {
    imageUrl:
      "https://wsa2.pakwheels.com/assets/pw-certified-e59a8598eee3baaa3bb51f2c2769a78f.svg",
    altText: "PakWheels Certified Cars",
    title: "PakWheels Certified Cars",
    description: "Highest Quality Cars with Warranty from PakWheels.",
  },
  {
    imageUrl:
      "https://wsa2.pakwheels.com/assets/pw-inspection-849cb6ced4920cd19181e3317126618d.svg",
    altText: "PakWheels Car Inspection",
    title: "PakWheels Car Inspection",
    description: "200+ points inspection to guarantee your Peace of Mind.",
  },
  {
    imageUrl:
      "https://wsa4.pakwheels.com/assets/auction-sheet-logo-ebf19d855fc7b2ff5ec2a081cc5b370c.svg",
    altText: "Auction Sheet Verification",
    title: "Auction Sheet Verification",
    description:
      "Buy Japanese cars with Full Confidence with PakWheels Verfied Auction Sheet.",
  },
  {
    imageUrl:
      "https://wsa2.pakwheels.com/assets/sifm-logo-20640083c4572b654a079a4e97c78cb1.svg",
    altText: "PakWheels Sell It For Me",
    title: "PakWheels Sell It For Me",
    description: "Let PakWheels sell your car Hassle Free for you.",
  },
  {
    imageUrl:
      "https://wsa4.pakwheels.com/assets/car-finance-logo-332d555f940565ca849f05b9fc30eeab.svg",
    altText: "Car Finance",
    title: "Car Finance",
    description: "Compare and apply for loan for New or Used Cars",
  },
  {
    imageUrl:
      "https://wsa2.pakwheels.com/assets/car-insurance-logo-cd66a03c66ca7871229920995ff4c629.svg",
    altText: "Car Insurance",
    title: "Car Insurance",
    description: "Compare and apply for car insurance for a safer ride",
  },
  {
    imageUrl:
      "https://wsa1.pakwheels.com/assets/partner-workshop-logo-19a3b86803c89e1de6d93b9a347d188c.svg",
    altText: "Pakwheels Partner Workshop",
    title: "Pakwheels Partner Workshop",
    description: "Verified workshops for auto repair and maintenance",
  },
  {
    imageUrl:
      "https://wsa4.pakwheels.com/assets/car-registration/car-registration-logo-66b56cf870fa95f6b7a1997faf811671.svg",
    altText: "Car Registration",
    title: "Car Registration",
    description:
      "Your one-stop solution for hassle-free and quick car registration.",
  },
  {
    imageUrl:
      "https://wsa3.pakwheels.com/assets/car-ownership-transfer/car-ownership-transfer-logo-e57fd3fcd3c63c5d06e8874ef8595209.svg",
    altText: "Car Ownership Transfer",
    title: "Car Ownership Transfer",
    description: "Looking for a hassle-free quick car transfer?",
  },
];

export default ExploreProducts;
