import { Button, TextField } from "@mui/material";
import React from "react";
import { clearCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ToastContainer, toast } from "react-toastify";
function FinishStripeOrder() {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(true); // State for phone number validation
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const user = useSelector((state) => state.authentication.user);
  const orders = useSelector((state) => state.cart.orders);
  console.log("updated order", orders);
  const handleFinishOrder = async () => {
    setIsProcessing(true);

    // Phone number validation (should start with "03", have 11 digits, and contain no special characters)
    const phonePattern = /^03\d{9}$/;
    const isPhoneValid = phonePattern.test(phoneNumber);
    const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(phoneNumber);

    if (address === "") {
      // If address is empty, show an alert
      return alert("Invalid Address");
      setIsProcessing(false);
    } else if (!isPhoneValid) {
      // If phone number is not valid, set the phoneNumberValid state to false
      return setPhoneNumberValid(false);
      setIsProcessing(false);
    } else if (hasSpecialCharacters) {
      // If phone number contains special characters, show an alert
      return alert(
        "Invalid Phone Number. It should not contain special characters."
      );
      setIsProcessing(false);
    } else {
      try {
        // Make a POST request to the backend to create the COD order
        const response = await axios.post(
          "http://localhost:8080/admin/updateStripeOrder",
          {
            order: orders,
            address: address,
            phoneNumber: phoneNumber,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          dispatch(clearCart());
          const updatedOrder = response.data.updatedOrder;
          console.log(updatedOrder);
          setIsOrderPlaced(true);
          setPhoneNumberValid(true);
          toast.success("Error placing the order. Please try again later.");
        }
      } catch (error) {
        console.error("Error placing COD order:", error);
        setIsProcessing(false);
        toast.error("Error placing the order. Please try again later.");
      }
    }
  };

  return (
    <div>
      {!isOrderPlaced ? (
        <div>
          <form>
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
            <ToastContainer/>
            <Button
              variant="contained"
              style={{ outline: "none" }}
              color="primary"
              onClick={handleFinishOrder}
            >
              Finish Order
            </Button>
          </form>
        </div>
      ) : (
        <CheckCircleIcon />
      )}
    </div>
  );
}

export default FinishStripeOrder;
