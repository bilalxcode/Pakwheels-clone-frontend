import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function OrdersView() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/getOrders");

      if (response.status === 200) {
        const ordersData = response.data.orders;
        console.log("Orders Data:", ordersData);

        const ordersWithProductDetails = await fetchProductDetails(ordersData);
        setOrders(ordersWithProductDetails);
      } else {
        toast.error("Failed to load orders: " + response.data.message);
      }
    } catch (error) {
      console.error("Loading orders error: " + error);
      toast.error("Failed to load orders: " + error.toString());
    }
  };

  const fetchProductDetails = async (ordersData) => {
    const ordersWithDetails = [];

    for (const order of ordersData) {
      const productsWithDetails = [];

      for (const productId of order.products) {
        // Fetch product details by productId
        const product = products.find((p) => p._id.$oid === productId.$oid);
        if (product) {
          productsWithDetails.push(product);
        }
      }

      order.products = productsWithDetails;
      ordersWithDetails.push(order);
    }

    return ordersWithDetails;
  };

  const calculateTotalPrice = (order) => {
    let totalPrice = 0;
    for (const product of order.products) {
      totalPrice += product.price;
    }
    return totalPrice;
  };

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/getProducts"
      );

      if (response.status === 200) {
        const productsData = response.data.products;

        setProducts(productsData);
      } else {
        toast.error("Failed to load products: " + response.data.message);
      }
    } catch (error) {
      console.error("Loading products error: " + error);
      toast.error("Failed to load products: " + error.toString());
    }
  };

  useEffect(() => {
    getOrders();
    getAllProducts();
  }, []);

  const handleDispatchClick = (order) => {
    console.log("Dispatch order:", order);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center", // Center content horizontally
      }}
    >
      {orders.map((order) => (
        <div
          key={order._id.$oid}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            width: "30%", // Adjust the width as needed
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h4>Products</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {order.products.map((product) => (
              <li key={product._id.$oid}>
                {product.name} - PKR {product.price}
              </li>
            ))}
          </ul>
          <p>Address: {order.address}</p>
          <p>Phone Number: {order.phoneNumber}</p>
          <p>Date: {new Date(order.createdAt.$date).toLocaleDateString()}</p>
          <p>Time: {new Date(order.createdAt.$date).toLocaleTimeString()}</p>
          <p>Order ID: {order._id.$oid}</p>
          <p>Total Price: PKR {calculateTotalPrice(order)}</p>
          <button
            onClick={() => handleDispatchClick(order)}
            style={{
              backgroundColor: "#007bff", // Change the button background color
              color: "#fff", // Change the button text color
              padding: "8px 16px", // Adjust padding
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "10px", // Add spacing between button and other elements
            }}
          >
            Dispatch
          </button>
        </div>
      ))}
    </div>
  );
}

export default OrdersView;
