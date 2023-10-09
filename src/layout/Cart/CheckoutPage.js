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
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("stripe");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(true); // State for phone number validation
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const user = useSelector((state) => state.authentication.user);
  const orders = useSelector((state) => state.cart.orders);

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
            user: user, // Replace with the actual user data
            products: orders, // Send all products in the "orders" array
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
          setIsOrderPlaced(true);
          setPhoneNumberValid(true);
        }
      } catch (error) {
        console.error("Error placing COD order:", error);
        setIsProcessing(false);
        alert("Error placing the order. Please try again later.");
      }
    }
  };

  const renderPaymentContent = () => {
    if (selectedPaymentMethod === "stripe") {
      // Render Stripe payment content here
      return (
        <div>
          <Typography variant="subtitle1">PAYMENT</Typography>
          <Typography variant="body1">Subtotal: $240.00</Typography>
          <Typography variant="body1">Shipping: $10.00</Typography>
          <Typography variant="body1">Tax: $30.40</Typography>
        </div>
      );
    } else if (selectedPaymentMethod === "cod") {
      // Render Cash on Delivery payment content here
      let subtotal = 0;
      return (
        <>
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
            {orders.map((order) => {
              const { name, price } = order;
              subtotal += parseFloat(price);
              return (
                <div key={order._id} style={{ marginTop: "1em" }}>
                  <Typography variant="subtitle1">
                    {name}
                    <span> {price} PKR</span>
                  </Typography>
                </div>
              );
            })}

            <Typography variant="body1">Shipping: 150 PKR</Typography>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Total: {subtotal + 150} PKR
            </Typography>
          </div>
          {isOrderPlaced && (
            <div>
              <Alert severity="success">Your Order is Placed.</Alert>
              <Button onClick={navigateToMyOrders}>See My Orders</Button>
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
    } else {
      return (
        <Button variant="contained" color="primary" onClick={handleFinishOrder}>
          Finish Order
        </Button>
      );
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ maxWidth: 400, marginTop: 20 }}>
          <CardContent>
            <Typography variant="h6">Checkout</Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Button
                variant={
                  selectedPaymentMethod === "stripe" ? "contained" : "outlined"
                }
                color="primary"
                style={{ marginRight: 10 }}
                onClick={() => handlePaymentMethodChange("stripe")}
              >
                Stripe
              </Button>
              <Button
                variant={
                  selectedPaymentMethod === "cod" ? "contained" : "outlined"
                }
                color="primary"
                onClick={() => handlePaymentMethodChange("cod")}
              >
                Cash on Delivery
              </Button>
            </div>
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
