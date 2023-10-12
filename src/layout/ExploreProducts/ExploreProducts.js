//imports
import React from "react";
//material-ui
import { Grid, Card, CardContent, Typography } from "@mui/material";

function ExploreProducts() {
  return (
    <div style={{ marginTop: "10em" }}>
      <div className="container" style={{ padding: "10px 0px" }}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
          padding="20px"
        >
          Explore Products by PakWheels
        </Typography>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid black",
                  width: "100%",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  transition: "transform 0.3s",
                  minHeight: "200px",
                }}
              >
                <div className="img">
                  <img
                    alt={product.altText}
                    src={product.imageUrl}
                    title={product.altText}
                    width="50"
                    style={{ margin: "5px 0" }}
                  />
                </div>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" style={{ color: "blue" }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" style={{ fontSize: "14px" }}>
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
      "https://wsa2.pakwheels.com/assets/sifm-logo-20640083c4572b654a079a4e97c78cb1.svg",
    altText: "PakWheels Sell It For Me",
    title: "PakWheels Sell It For Me",
    description: "Let PakWheels sell your car Hassle Free for you.",
  },
];

export default ExploreProducts;
