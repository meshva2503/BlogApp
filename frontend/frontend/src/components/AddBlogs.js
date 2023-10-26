import { Box, Button, InputLabel, TextField, Typography } from "@mui/material"
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const Addblog = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageurl: "",
  });
  const handlechange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data)=> console.log(data)).then(() => navigate("/blogs"));
  }
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5001/api/blog/add",{
      title: inputs.title,
      description: inputs.description,
      image: inputs.imageurl,
      user: localStorage.getItem("userId")
    }).catch(err=> console.log(err));
    const data = await res.data;
    return data
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <Box border={3}
          borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}>
          <Typography fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={"center"}>
            Post your blog
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField name="title" onChange={handlechange} value={inputs.title} margin="auto" />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField name="description" onChange={handlechange} value={inputs.description} margin="auto" />
          <InputLabel sx={labelStyles}>ImagrURL</InputLabel>
          <TextField name="imageurl" onChange={handlechange} value={inputs.imageurl} margin="auto" />
          <Button sx={{ mt: 2, borderRadius: 4,backgroundColor:"#0080bf" }}
            variant="contained"
             type="submit">Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default Addblog
