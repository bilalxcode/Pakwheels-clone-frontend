import React, { useState } from "react";
import {
  Button,
  TextField, // Import TextField
  Typography,
  CardContent,
  Card,
  CircularProgress,
  Alert,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/cartSlice";
import StripeContainer from "./StripeContainer";
import DescriptionIcon from "@mui/icons-material/Description";
import { useEffect } from "react";

const buttonStyles = {
  marginTop: "3em",
  display: "block",
  fontSize: "16px",
  width: "50%",
  height: "40px",
  margin: "40px 15px 0",
  backgroundColor: "#f6a4eb",
  boxShadow:
    "0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6",
  borderRadius: "4px",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 100ms ease-in-out",
  willChange: "transform, background-color, box-shadow",
  border: "none",
};

function CheckoutPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("stripe");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(true); // State for phone number validation
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const user = useSelector((state) => state.authentication.user);
  const orders = useSelector((state) => state.cart.orders);
  const isCartEmpty = useSelector((state) => state.cart.Yes);

  const dispatch = useDispatch();
  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const navigate = useNavigate();
  const navigateToMyOrders = () => {
    navigate("/my-orders");
  };
  const handleFinishOrder = async () => {
    setIsProcessing(true);

    // Phone number validation (should start with "03", have 11 digits, and contain no special characters)
    const phonePattern = /^03\d{9}$/;
    const isPhoneValid = phonePattern.test(phoneNumber);
    const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(phoneNumber);

    if (address === "") {
      // If address is empty, show an alert
      alert("Invalid Address");
      setIsProcessing(false);
    } else if (!isPhoneValid) {
      // If phone number is not valid, set the phoneNumberValid state to false
      setPhoneNumberValid(false);
      setIsProcessing(false);
    } else if (hasSpecialCharacters) {
      // If phone number contains special characters, show an alert
      alert("Invalid Phone Number. It should not contain special characters.");
      setIsProcessing(false);
    } else {
      try {
        console.log(orders);

        // Make a POST request to the backend to create the COD order
        const response = await axios.post(
          "http://localhost:8080/admin/userCODOrder",
          {
            user: user,
            products: orders,
            address: address,
            phoneNumber: phoneNumber,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          toast.success("Order Placed");
          dispatch(clearCart()); // Dispatch the clearCart action

          setIsOrderPlaced(true);
          setPhoneNumberValid(true);
          setPaymentSuccess(true);
        }
      } catch (error) {
        console.error("Error placing COD order:", error);
        setIsProcessing(false);
        alert("Error placing the order. Please try again later.");
      }
    }
  };
  const totalAmount = orders.reduce((acc, order) => {
    const price = parseFloat(order.price);
    if (!isNaN(price)) {
      return acc + price + 150;
    }
    return acc;
  }, 0);
  const renderPaymentContent = () => {
    if (selectedPaymentMethod === "stripe") {
      // Render Stripe payment content here
      return (
        <div>
          <StripeContainer setPaymentSuccess={setPaymentSuccess} />
        </div>
      );
    } else if (selectedPaymentMethod === "cod") {
      return (
        <>
          {!isOrderPlaced && (
            <div
              style={{
                border: "2px solid grey",
                borderRadius: "1em",
                padding: "1em",
                marginTop: "1em",
              }}
            >
              {orders.map((order, index) => {
                const { name, price, quantity } = order;
                const parsedPrice = parseFloat(price); // Parse the price as a float
                const productTotal = parsedPrice * quantity;
                return (
                  <div key={order._id} style={{ marginTop: "0.5em" }}>
                    <Typography variant="subtitle1">
                      ✔ {name}
                      {parsedPrice} PKR
                    </Typography>
                  </div>
                );
              })}

              <Typography variant="body1" style={{ marginTop: "0.5em" }}>
                Shipping: 150 PKR
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", marginTop: "0.5em" }}
              >
                Total:{totalAmount} PKR
              </Typography>
            </div>
          )}
          {!isOrderPlaced && (
            <div>
              {/* Address and Phone Number TextFields */}
              <ToastContainer />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                margin="normal"
                required
                error={!phoneNumberValid} // Apply error styling if phoneNumberValid is false
                helperText={!phoneNumberValid ? "Invalid Phone Number" : ""}
              />
            </div>
          )}
          {isOrderPlaced && (
            <div>
              <Alert severity="success">Your Order is Placed.</Alert>
              <Button onClick={navigateToMyOrders}>See My Orders</Button>
            </div>
          )}

          {orders.length > 0 && !isOrderPlaced && (
            <div>
              {/* Order details */}
              {/* <Typography variant="h6">Order Details</Typography> */}
              {/* {orders.map((order, index) => {
                const { name, price, quantity } = order;
                const parsedPrice = parseFloat(price); // Parse the price as a float
                const productTotal = parsedPrice * quantity;
                return (
                  <div key={order._id} style={{ marginTop: "0.5em" }}>
                    <Typography variant="subtitle1">
                      ✔ {name} {parsedPrice} PKR
                    </Typography>
                  </div>
                );
              })} */}
              {/* 
              <Typography variant="body1" style={{ marginTop: "0.5em" }}>
                Shipping: 150 PKR
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", marginTop: "0.5em" }}
              >
                Total: {totalAmount} PKR
              </Typography> */}
            </div>
          )}
        </>
      );
    }
  };

  const renderFinishButton = () => {
    if (isOrderPlaced) {
      return <DoneIcon style={{ color: "green" }} />;
    } else if (isProcessing) {
      return <CircularProgress size={24} />;
    } else if (selectedPaymentMethod === "cod") {
      return (
        <Button
          variant="contained"
          style={buttonStyles}
          color="primary"
          onClick={handleFinishOrder}
        >
          Finish Order
        </Button>
      );
    } else {
      // return (
      //   <Button variant="contained" color="primary" onClick={handleFinishOrder}>
      //     Finish Order
      //   </Button>
      // );
      return;
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "70vh", marginTop: 20 }}>
          <CardContent>
            <Typography variant="h6">
              Checkout
              <span>
                <DescriptionIcon />
              </span>
            </Typography>
            {paymentSuccess ? null : (
              <>
                <Button
                  variant={
                    selectedPaymentMethod === "stripe"
                      ? "contained"
                      : "outlined"
                  }
                  color="primary"
                  style={{ marginRight: 10, outline: "none" }}
                  onClick={() => handlePaymentMethodChange("stripe")}
                >
                  Card
                </Button>
                <Button
                  variant={
                    selectedPaymentMethod === "cod" ? "contained" : "outlined"
                  }
                  color="primary"
                  style={{ outline: "none" }}
                  onClick={() => handlePaymentMethodChange("cod")}
                >
                  Cash on Delivery
                </Button>
              </>
            )}

            {renderPaymentContent()}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              {renderFinishButton()}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default CheckoutPage;
