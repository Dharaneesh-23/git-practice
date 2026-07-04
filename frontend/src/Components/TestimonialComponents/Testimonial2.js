import React , { useState }  from 'react'
import { TextField, FormControl, Select , MenuItem, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { customTheme , Textarea } from "../theme";

function Testimonial2() {
    const [formData, setFormData] = useState({
        profileImg: "",
        starCount: 5, // Default to 5 stars
        review: "",
        userName: "",
        gender: "",
        phoneNumber: "",
        email: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleRatingChange = (newValue) => {
        setFormData((prevData) => ({
          ...prevData,
          starCount: newValue,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      const outerTheme = useTheme();
    
      return (
        <ThemeProvider theme={customTheme(outerTheme)}>
          <div className="container-fluid testimonial-home">
            <h2 className="text-center header-text-custom2 pt-5">Tell us about our Service</h2>
            <form autoComplete="off" onSubmit={handleSubmit} style={{ maxWidth: "800px" , margin: "0 auto", padding: "2rem" }}>
              <div className="mb-3 display-center">
                <TextField
                  variant="standard"
                  label="User Name"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </div>
              <div className="mb-3 display-center">
                <TextField
                  variant="standard"
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </div>
              <div className="mb-3 display-center">
                <TextField
                  variant="standard"
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </div>
              <div className="mb-3 display-center">
                <FormControl variant='standard' fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Gender *</InputLabel>
                  <Select
                    variant="standard"
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className='input-field'
                    required>
                      <MenuItem value={'Male'}>Male</MenuItem>
                      <MenuItem value={'Female'}>Female</MenuItem>
                      <MenuItem value={'Others'}>Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
              <label>Rating:</label>
              <div className="testimonial-star-container mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRatingChange(star)}
                    style={{
                      color: star <= formData.starCount ? "gold" : "gray",
                    }}
                    className="testimonial-star"
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
              <div className="mb-3 display-center">
                <Textarea
                  placeholder="Write your review here..."
                  name="review"
                  rows={5}
                  value={formData.review}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </div>
              <div className="display-center">
                <button type="submit" className="treatment-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </ThemeProvider>
      );
}

export default Testimonial2