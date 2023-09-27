import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Paper,
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    images: [], // Store multiple images in an array
    imagePreviews: [], // Store image previews in an array
  });

  const [categories, setCategoriesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    // Load ads when the component mounts
    getAllCategories();
  }, []); // Empty dependency array to run the effect once on mount
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const AddNewCategory = async () => {
    console.log(newCategoryName); // Check if newCategoryName has a value here
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/AddNewCategory",
        {
          newCategoryName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        closeModal();
        toast.success("New Category Added");

        getAllCategories();
      } else {
        toast.error("Failed to Add Category: " + response.data.message);
      }
    } catch (error) {
      console.error("Adding Category error: " + error);
      toast.error("Failed to Add Category: " + error.toString());
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/getCategory"
      );

      if (response.status === 200) {
        const categories = response.data.categories;
        setCategoriesData(categories);
        closeModal();
        setNewCategoryName("");
      } else {
        toast.error("Failed to load ads: " + response.data.message);
        setNewCategoryName("");

        closeModal();
      }
    } catch (error) {
      console.error("Loading ads error: " + error);
      toast.error("Failed to load ads: " + error.toString());
      setNewCategoryName("");

      closeModal();
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const imageFiles = event.target.files;
    const newImages = Array.from(imageFiles);
    const newPreviews = newImages.map((file) => URL.createObjectURL(file));

    setFormData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...newImages], // Append new images to the existing array
      imagePreviews: [...prevState.imagePreviews, ...newPreviews], // Append new previews to the existing array
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("category", formData.category);
      form.append("price", formData.price);
      form.append("quantity", formData.quantity);
      form.append("description", formData.description);

      // Append each image to the form data
      formData.images.forEach((image, index) => {
        form.append(`images`, image, `image_${index}.jpg`);
      });

      const response = await axios.post(
        "http://localhost:8080/admin/addProduct",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Product Added");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.toString());
    }
  };
  return (
    <>
      <Grid container spacing={3} style={{ padding: "5em" }}>
        <Grid item xs={6}>
          <ToastContainer />
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Add Product</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                style={{ margin: "0.5em 0em" }}
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  style={{ margin: "0.5em 0em" }}
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  {categories.map((category) => (
                    <MenuItem key={category._id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                  <MenuItem onClick={openModal} value="AddNewCategory">
                    Add New Category
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ margin: "0.5em 0em" }}
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                style={{ margin: "0.5em 0em" }}
                label="Quantity"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                required
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Add Product
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Right side - Image preview */}
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Image Preview</Typography>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px", // Add some gap between images
              }}
            >
              {formData.imagePreviews &&
                formData.imagePreviews.map((preview, index) => (
                  <div
                    key={index}
                    style={{
                      width: "calc(50% - 5px)", // Set a fixed width for each image container
                      marginBottom: "10px",
                      border: "2px solid lightgrey",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      style={{
                        width: "80%",
                        maxHeight: "300px",
                      }}
                    />
                  </div>
                ))}
            </div>

            <input
              multiple
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginTop: "20px" }}
            />
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of the new category:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="newCategoryName"
            label="Category Name"
            type="text"
            fullWidth
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              AddNewCategory();
            }}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#E7232D",
          textAlign: "center",
        }}
      >
        <Typography variant="caption" color="textSecondary">
          &copy; 2023 PAKWHEELS
        </Typography>
      </footer>
    </>
  );
};

export default AddProductForm;
