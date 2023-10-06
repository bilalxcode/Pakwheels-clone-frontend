import React from "react";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Activate } from "../../store/navbarSlice";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import CartItem from "./CartItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function MyCart() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orders);

  useEffect(() => {
    dispatch(Activate({ user: null }));
  }, []);

  const navigate = useNavigate();
  const navigateToAutostore = () => {
    dispatch(Activate({ user: "AutoStore" }));
    navigate("/autostore");
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1em",
        }}
      >
        <div
          style={{
            background: "#eee",
            borderRadius: "10px", // Border radius
            padding: "20px",
            width: "60em",
            border: "4px solid #012E64",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center", // Center vertically within this container
              marginBottom: "10px", // Add some spacing between the icon and text
            }}
          >
            <Typography variant="h5">My Cart</Typography>
            <ShoppingCartIcon style={{ marginLeft: "10px" }} />
          </div>

          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <CartItem />
              </TableBody>
            </Table>
          </TableContainer>
          {orders.length !== 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button variant="contained" color="primary" href="/checkout">
                Checkout
              </Button>
              <Button
                variant="outlined"
                onClick={navigateToAutostore}
                color="primary"
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
      <div style={{ marginTop: "2em" }}>
        <Footer />
      </div>
    </div>
  );
}

export default MyCart;
