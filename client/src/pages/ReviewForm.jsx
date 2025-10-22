import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Rating,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [avatar, setAvatar] = useState(null); // For handling avatar file
  const [avatarPreview, setAvatarPreview] = useState(null); // For previewing avatar image
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if submission is in progress
  const navigate = useNavigate(); // To navigate to another page

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result); // Set the preview image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarRemove = () => {
    setAvatar(null);
    setAvatarPreview(null); // Remove avatar preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      setErrorMessage("Rating are required.");
      return;
    }

    setIsSubmitting(true); // Set loading state to true

    try {
      // Create a FormData object to send form data
      const formData = new FormData();
      formData.append("name", name);
      formData.append("comment", comment);
      formData.append("rating", rating);
      if (avatar) {
        formData.append("avatar", avatar); // Add the avatar file
      }

      // Make the POST request
      const response = await axios.post("https://server-bajablue-production.up.railway.app/api/reviews", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccessMessage(response.data.message);
      setErrorMessage("");
      setName("");
      setComment("");
      setRating(0);
      setAvatar(null);
      setAvatarPreview(null);

      // Redirect to a success page after submission
      navigate("/review-submitted"); // Redirect to a new page (you need to create this route)

    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred while submitting the review."
      );
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false); // Set loading state to false after request is done
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: "background.paper",
      }}
      encType="multipart/form-data" // Important for file uploads
    >
        <Box textAlign="center" mb={3}>

          <img src={require("../img/Logo.jpg")} alt="" 
            style={{
              width: '150px',  // Ajusta el tamaño del logo según lo necesites
              height: 'auto',
            }}
          />

  </Box>
      <Typography variant="h5" textAlign="center" gutterBottom>
        Add Review
      </Typography>

      <Grid item xs={12}>
        {avatarPreview && (
          <>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: "grey.300",
                display: "block",
                margin: "auto",
              }}
              src={avatarPreview ? avatarPreview : null}
            >
              {!avatarPreview && <Typography variant="h6" color="primary">A</Typography>}
            </Avatar>
            <Box textAlign="center">
              <IconButton onClick={handleAvatarRemove} color="error">
                <DeleteIcon />
              </IconButton>
            </Box>
          </>
        )}

        <Typography variant="body1" gutterBottom>
          Avatar (Optional):
        </Typography>

        <TextField
          fullWidth
          type="file"
          onChange={handleAvatarChange}
          inputProps={{ accept: "image/*" }} // Only accept images
          sx={{ mb: 2 }}
        />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Comment (Optional) - Max 160 characters"
            value={comment}
            onChange={(e) => {
              if (e.target.value.length <= 160) {
                setComment(e.target.value); // Update comment only if it's 160 characters or less
              }
            }}
            multiline
            rows={4}
            inputProps={{ maxLength: 160 }} // Limit to 160 characters
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Rating:
          </Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
            precision={1}
            size="large"
          />
          {errorMessage && (
            <Typography variant="body1" color="error.main">
              {errorMessage}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={isSubmitting} // Disable the button while submitting
            sx={{
              backgroundColor: "#ff8503",
              ":hover": {
              backgroundColor: "#ff8503",

              }
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"} {/* Show loading text */}
          </Button>
        </Grid>
      </Grid>

      {successMessage && (
        <Typography
          variant="body1"
          color="success.main"
          mt={2}
          textAlign="center"
        >
          {successMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ReviewForm;
