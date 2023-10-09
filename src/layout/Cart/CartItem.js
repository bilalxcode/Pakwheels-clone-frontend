import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../../store/cartSlice"; // Import the removeFromCart action
import { useNavigate } from "react-router-dom";
import { Activate } from "../../store/navbarSlice";

function CartItem() {
  // Get the orders data from the Redux store
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch(); // Get the dispatch function

  // Create a state to manage the quantity of each product
  const [quantities, setQuantities] = useState({});

  // Function to handle quantity changes
  const handleQuantityChange = (orderId, newQuantity) => {
    setQuantities({
      ...quantities,
      [orderId]: newQuantity,
    });
  };

  // Function to handle delete icon click
  const handleDeleteClick = (orderId) => {
    // Dispatch the removeFromCart action with the orderId to remove the item
    dispatch(removeFromCart(orderId)); // Dispatch the removeFromCart action
  };

  // Calculate the total amount by summing up the prices of all orders
  const totalAmount = orders.reduce((acc, order) => {
    const quantity = quantities[order._id] || 1; // Default to 1 if quantity is not set
    return acc + parseFloat(order.price) * quantity;
  }, 0);

  const navigate = useNavigate();
  const navigateToAutostore = () => {
    dispatch(Activate({ user: "AutoStore" }));
    localStorage.setItem("ActiveTab", "AutoStore");
    navigate("/autostore");
  };
  return (
    <>
      {orders.length === 0 ? ( // Check if orders array is empty
        <TableRow>
          <TableCell colSpan={orders.length} align="center">
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                height: "200px",
              }}
            >
              <Card
                style={{
                  width: "200px", // Set the desired width
                  height: "100px", // Set the desired height
                  margin: "8px",
                  border: "1px solid #EEEEEE",
                }}
              >
                <CardContent style={{ position: "relative" }}>
                  <Typography variant="body1">
                    Your cart is empty. Add some items!
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <div
            style={{
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
              height: "400px",
              // Adjust the height as needed
            }}
          >
            {orders.map((order) => (
              <React.Fragment key={order._id}>
                <TableCell>
                  <Card
                    style={{
                      width: "200px", // Set the desired width
                      height: "300px", // Set the desired height
                      margin: "8px",
                      border: "1px solid #EEEEEE",
                    }}
                  >
                    <CardContent style={{ position: "relative" }}>
                      <div
                        style={{
                          textAlign: "center",
                          paddingTop: "0px",
                          height: "80px",
                          width: "100px",
                          backgroundColor: "#f8f8f9",
                          margin: "0 auto",
                        }}
                      >
                        <img
                          src={`http://localhost:8080/${order.images?.[0]}`}
                          alt={order.name}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: "1em",
                          }}
                        />
                      </div>
                      <Typography variant="h6">
                        {order.name
                          .split(" ") // Split the name into words
                          .slice(0, 3) // Take the first 3 words
                          .join(" ")}{" "}
                        {/* Join them back */}
                      </Typography>
                      <input
                        type="number" // Change to a number input
                        min="1" // Set a minimum value for quantity
                        className="form-control"
                        placeholder="1"
                        style={{ width: "100%" }}
                        value={quantities[order._id] || 1} // Get quantity from state or default to 1
                        onChange={(e) =>
                          handleQuantityChange(order._id, e.target.value)
                        } // Update quantity on change
                      />
                      <Typography variant="h6">
                        PKR
                        {(order.price * (quantities[order._id] || 1)).toFixed(
                          2
                        )}
                      </Typography>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          right: "8px",
                        }}
                      >
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteClick(order._id)} // Handle delete on click
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </div>
                    </CardContent>
                  </Card>
                </TableCell>
              </React.Fragment>
            ))}
          </div>
        </TableRow>
      )}
      {/* Display the total amount */}
      {orders.length !== 0 && (
        <TableRow>
          <TableCell colSpan={orders.length} align="right">
            <Button variant="contained" disabled style={{ color: "black" }}>
              Total Amount: {Math.floor(totalAmount)} PKR
            </Button>
          </TableCell>
        </TableRow>
      )}
      {orders.length === 0 && (
        <TableRow>
          <TableCell colSpan={orders.length} align="right">
            <Button
              variant="contained"
              onClick={navigateToAutostore}
              style={{ color: "white" }}
            >
              Explore Products
            </Button>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default CartItem;
