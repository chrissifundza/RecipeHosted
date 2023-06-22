
import * as React from 'react';
import {  Alert, Avatar, Box, Card,  CardActions,  CardContent, CardHeader, Collapse, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, styled, TextField, Typography, } from "@mui/material";
import Navbar from "../../components/Header/Navbar";
import { ContainerCardRecipe, ContainerProfile, ContainerProfile2, ContainerProfile3, ContainerProfile4, ContainerProfile5, ContainerSavedRecipes, SavedRecipeTitle, TitleProfile } from "./style";
import "./index.css"
import { Delete, Email, Expand, ExpandMore, Save, Share, Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from '@mui/lab';
import { colors } from '../../theme';
import { FaGreaterThan } from 'react-icons/fa';
import { AuthContext } from '../../context/authContext';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { storage } from '../../fbStorage/storage';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  
} from "firebase/storage";
import Recipe from './singlecard';
import { Link } from 'react-router-dom';
export default function Recipes(){

   const {CurrentUser,AllRecipes, getSavedRecipe} =React.useContext(AuthContext)
    const [showPassword, setShowPassword] = React.useState(false);
    const [Inputs, setInputs] = useState({name:CurrentUser?.name,email:CurrentUser?.email,password:"",image:CurrentUser?.image });
    const [open, setOpen] = useState(false);
    const [AlertType, setAlertType] = useState("success")
    const [AlertMessage, setAlertMessage] = useState("")
    const [imageUpload, setImageUpload] = useState(null);
    const [selectedImage, setselectedImage] = useState('');
  
    const navigate = useNavigate();
   console.log(CurrentUser)
    useEffect(()=>{
      if (CurrentUser===null) navigate("/account")
    },[CurrentUser])
    const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
}


const handleClose = () => {
  setOpen(false);

};
const handleSubmit = async e =>{
  e.preventDefault()
  if(imageUpload==null){
    try {
      const res = await axios.put(`https://recipeapp154.herokuapp.com/api/auth/updateuser/${CurrentUser.iduser}`,Inputs)
      console.log(res.data)

      setAlertType("success")
     setAlertMessage(res.data)
      setOpen(true)
      
  } catch (error) {
      setAlertType("error")
      setAlertMessage(error.response.data)
      setOpen(true)
  }
  }else{

  
    const imageRef = ref(storage, `Profiles/${imageUpload.name }`);
  
  uploadBytes(imageRef, imageUpload).then((snapshot1) => {
    getDownloadURL(snapshot1.ref).then( async (url1) =>  {
      Inputs.image=url1
      try {
        const res = await axios.put(`https://recipeapp154.herokuapp.com/api/auth/updateuser/${CurrentUser.iduser}`,Inputs)
        console.log(res.data)

        setAlertType("success")
       // setAlertMessage(res.data)
        setOpen(true)
        
    } catch (error) {
        setAlertType("error")
        setAlertMessage(error.response.data)
        setOpen(true)
    }
    })

  })
}
   
}
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  const previewImage = () => {
    console.log("running")
    var input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const imageFiles = event.target.files;
      setImageUpload(event.target.files[0])
      const imageFilesLength = imageFiles.length;
  
      if (imageFilesLength > 0) {
          const imageSrc = URL.createObjectURL(imageFiles[0]);
         // const imagePreviewElement = document.querySelector("#preview-selected-image");
         // imagePreviewElement.src = imageSrc;
         setselectedImage(imageSrc)
         // imagePreviewElement.style.display = "block";
      }
    };
    input.click();
   
};

useEffect(()=>{
    getSavedRecipe()
},[])


    return(
        <>
        <Navbar/>
         <ContainerProfile>
        <TitleProfile><Link to="/profile">Back to Profile</Link> </TitleProfile>
            <ContainerProfile2>

                    <ContainerSavedRecipes variant="outlined">
                      
                      <SavedRecipeTitle>
                          Saved Recipes 
                      </SavedRecipeTitle>


                {AllRecipes&&AllRecipes.map((recipe)=><Recipe {...recipe}/>)}
 
                    </ContainerSavedRecipes>
            </ContainerProfile2>
        </ContainerProfile>
        </>
       
    )
}