import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import SearchFilters from "./SearchFilters";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageIcon from "@mui/icons-material/Image";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector to access Redux state
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { AddToCart } from "../../store/cartSlice";
function AllProducts() {
  const navigate = useNavigate();
  const location = useLocation();
  const [adsData, setAdsData] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 3;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const user = useSelector((state) => state.authentication.user); // Get user from Redux state
  const orders = useSelector((state) => state.cart.orders); // Get user from Redux state

  const handleOpenDialog = (ad) => {
    // Open dialog only if the user is logged in
    setSelectedAd(ad);
  };

  const handleCloseDialog = () => {
    setSelectedAd(null);
  };

  useEffect(() => {
    getAllAds();
    getAllCategories();
  }, []);

  const getAllAds = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/getProducts"
      );

      if (response.status === 200) {
        const approvedAds = response.data.products;

        approvedAds.sort((ad1, ad2) => {
          return new Date(ad2.createdAt.$date) - new Date(ad1.createdAt.$date);
        });

        setAdsData(approvedAds);
        setFilteredAds(approvedAds);
      } else {
        toast.error("Failed to load ads: " + response.data.message);
      }
    } catch (error) {
      console.error("Loading ads error: " + error);
      toast.error("Failed to load ads: " + error.toString());
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/getCategory"
      );

      if (response.status === 200) {
        const categoriesData = response.data.categories;
        setCategories(categoriesData);
      } else {
        toast.error("Failed to load categories: " + response.data.message);
      }
    } catch (error) {
      console.error("Loading categories error: " + error);
      toast.error("Failed to load categories: " + error.toString());
    }
  };

  const applyFilters = () => {
    let filteredData = adsData;

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (ad) => ad.category === selectedCategory
      );
    }

    setFilteredAds(filteredData);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategory]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleBuyNow = (ad) => {
    // Open dialog with product details and order form
    handleOpenDialog(ad);
  };

  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (orderId, newQuantity) => {
    setQuantities({
      ...quantities,
      [orderId]: newQuantity,
    });
  };
  const handleAdtoCart = (ad) => {
    // Open dialog with product details and order form
    if (!user) {
      alert("Log In First");
      return; // This will exit the function immediately
    }

    // Check if the product is already in the cart
    const existingProduct = orders.find(
      (order) => order && order._id === ad && ad._id
    );

    if (existingProduct) {
      // If the product is already in the cart, increment its quantity
      const newQuantity = (quantities[existingProduct.orders._id] || 0) + 1;
      handleQuantityChange(existingProduct._id, newQuantity);
    } else {
      // If it's not in the cart, add it as a new item
      dispatch(AddToCart({ orders: ad }));
    }

    toast.success("Added To Cart");
    handleCloseDialog();
  };

  useEffect(() => {
    console.log("Cart updated:", orders);
  }, [orders]);

  const renderAds = () => {
    const startIndex = (currentPage - 1) * adsPerPage;
    const endIndex = startIndex + adsPerPage;
    const adsToDisplay = filteredAds.slice(startIndex, endIndex);

    return (
      <div>
        {adsToDisplay.map((ad) => (
          <Card
            key={ad._id}
            style={{
              marginBottom: "20px",
              padding: "1em",
              margin: "1em",
              width: "60em",
              border: "3px solid #F2F3F3",
            }}
          >
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: 1 }}>
                  <div>
                    <img
                      src={`http://localhost:8080/${ad.images[0]}`}
                      alt={ad.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        maxHeight: "200px",
                        borderRadius: "0.5em",
                      }}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {ad.images.length} <ImageIcon />
                  </div>
                </div>
                <div style={{ flex: 1, marginLeft: "1em" }}>
                  <Typography variant="h6">{ad.name}</Typography>

                  <Typography color="text.secondary">
                    In Stock: {ad.quantity}
                  </Typography>
                  <Typography color="text.secondary">
                    Description: {ad.description}
                  </Typography>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography variant="h6">Price</Typography>
                  <Typography color="text.secondary">{ad.price} PKR</Typography>
                  <div style={{ marginTop: "auto" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ background: "#1976D2", color: "#fff" }}
                      onClick={() => handleBuyNow(ad)}
                    >
                      Buy Now
                      <ShoppingCartIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={Math.ceil(filteredAds.length / adsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    );
  };

  const renderImageSliderDialog = () => {
    if (!selectedAd) {
      return null;
    }

    return (
      <Dialog open={!!selectedAd} onClose={handleCloseDialog} maxWidth="lg">
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <Carousel showArrows={true}>
            {selectedAd.images.map((image, index) => (
              <div key={index}>
                <img
                  src={`http://localhost:8080/${image}`}
                  alt={`Image ${index + 1}`}
                  style={{ maxWidth: "20em", maxHeight: "20em" }}
                />
              </div>
            ))}
          </Carousel>
          <Typography variant="h6">{selectedAd.name}</Typography>
          <Typography color="text.secondary">
            Category: {selectedAd.category.$oid}
          </Typography>
          <Typography color="text.secondary">
            Price: {selectedAd.price}
          </Typography>
          <Typography color="text.secondary">
            In Stock: {selectedAd.quantity}
          </Typography>
          <Typography color="text.secondary">
            Description: {selectedAd.description}
          </Typography>
          <Typography variant="h6">Price</Typography>
          <Typography color="text.secondary">{selectedAd.price} PKR</Typography>
          <div style={{ marginTop: "auto" }}>
            <Button
              variant="contained"
              color="primary"
              style={{
                background: "#1976D2",
                color: "#fff",
                marginTop: "0.5em",
              }}
              onClick={() => handleAdtoCart(selectedAd)}
            >
              Ad To Cart
              <ShoppingBasketIcon />
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleCloseDialog}>Close</IconButton>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div style={{ display: "flex", margin: "1em" }}>
        <div>
          <SearchFilters
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            getAllAds={getAllAds}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        {isLoading ? (
          <CircularProgress style={{ margin: "auto" }} />
        ) : (
          <div>{renderAds()}</div>
        )}
      </div>
      {renderImageSliderDialog()}
    </div>
  );
}

export default AllProducts;
