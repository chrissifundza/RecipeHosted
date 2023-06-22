import React from 'react';
import "./Meal.scss";
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { Box, Button, Modal, Typography } from '@mui/material';
import swal from 'sweetalert';
import {useReactToPrint} from 'react-to-print';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  height:"100%",
  bgcolor: 'background.paper',
  
  boxShadow: 24,

};
const MealSingle = ({meal}) => {
  const componetPdf = useRef();
  const generatePrint = useReactToPrint({
    content:()=>componetPdf.current,
   
   
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {CurrentUser, logout} = useContext(AuthContext)
  console.log(CurrentUser.idstudent)
  console.log(CurrentUser)
 console.log(meal)
  const link = meal?.youtube
  console.log(link)
  const youtube =link?.split("=")[1]
  console.log(youtube)
  const [Recipe, setRecipe] = useState({recipe_name:meal.title,recipe_country:meal.area,idmeal:`${meal.id}${CurrentUser.idstudent}`,recipe_img:meal.thumbnail,recipe_youtube:meal.youtube,idstudent:CurrentUser.idstudent})
  console.log(meal.ingredients)
  let ingredientList = meal?.ingredients?.join(", ")
 
  let ingredientMeasurement=meal?.measures?.join(", ")
  const [Ingredient, setIngredient] = useState({ingredient_list:ingredientList,ingredient_measurement:ingredientMeasurement,ingredient_instruction:meal.instructions,idrecipe:0})
  console.log(meal);
  let tags = meal?.tags?.split(',');
  console.log(meal);
  let instructions = meal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);
 
  const saveIngrediant=async (data)=>{
    Ingredient.idrecipe=data[0].idrecipe
    console.log(data)
    console.log("Called")
    try {
      const res = await axios.post("https://recipeapp154.herokuapp.com/api/recipe/addingrediant", Ingredient)
      console.log(res.data)
      if(res.data==="Recipe has been created") swal("Success", "Recipe has been created", "success")
    } catch (error) {
      alert(error.response.data)
    }
  }
  const getRecipeId =async ()=>{
    try {
      const res = await axios.post("https://recipeapp154.herokuapp.com/api/recipe/getrecipeid", Recipe)
      saveIngrediant(res.data)
    } catch (error) {
      alert(error.response.data)
    }
}
const Save = async ()=>{
  try {
    const res = await axios.post("https://recipeapp154.herokuapp.com/api/recipe/addrecipe", Recipe)
    console.log(res)
  
    if (res.data==="Recipe has been created") getRecipeId()
} catch (error) {
   alert(error.response.data)
}
}
  return (
    <div className='section-wrapper'>
      <div className='container' ref={componetPdf}>
        <div className='breadcrumb bg-orange text-white'>
          <ul className='flex align-center my-2'>
            <li className='breadcrumb-item'>
              <Link to = "/userhome" className='flex align-center'>
                <AiFillHome size = {22} />
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size = {23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span to = "" className='fs-15 fw-5 text-uppercase'>{meal?.title}</span>
            </li>
          </ul>
        </div>

        <div className='sc-title'>Meal Details</div>
        <section className='sc-details bg-white'>
          <div className='details-head grid'>
            <div className='details-img'>
              <img src = {meal?.thumbnail} alt = "" className='img-cover' />
            </div>

            <div className='details-intro'>
              <h3 className='title text-orange'>{meal?.title}</h3>
              <div className='py-4'>
                <div className='category flex align-center'>
                  <span className='text-uppercase fw-8 ls-1 my-1'>category: &nbsp;</span>
                  <span className='text-uppercase ls-2'>{ meal?.category }</span>
                </div>

                <div className='source flex align-center'>
                  <span className='fw-7'>Source: &nbsp;</span>
                  <a href = {meal.source}>
                    {meal.source ? (meal?.source).substring(0, 40) + "..." : "Not found" }
                  </a>
                </div>
              </div>

              <div className='tags flex align-start flex-wrap'>
                <h6 className='fs-16'>Tags:</h6>
                <ul className='flex align-center flex-wrap'>
                  {
                    tags?.map((tag, idx) => (<li key = {idx} className = "fs-14">{tag}</li>))
                  }
                </ul>
              </div>
              <div className='tags flex align-start flex-wrap'>
                <h6 className='fs-16'><Button sx={{fontSize:"18px"}} classname="btn" onClick={Save}>Save</Button></h6>
               
               <Button sx={{fontSize:"18px"}} onClick={handleOpen}>Watch Video</Button> 
               <Button sx={{fontSize:"18px"}} onClick={generatePrint}>Print</Button> 
              </div>
              
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  sx={{height:"80vh",width:"80vw", margin:0,padding:0}}
>
  <Box sx={style}>
  <iframe style={{width:"100%",height:"100%"}}  src={`https://www.youtube.com/embed/${youtube}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen={true}></iframe>
  </Box>
</Modal>
              <div className='ingredients my-5 px-3 py-3'>
                <h6 className='fs-16 text-white'>Ingredients</h6>
                <ul className='grid'>
                  {
                    meal?.ingredients?.map((ingredient, idx) => (
                      <li key = {idx} className = "flex align-center">
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='text-capitalize text-white fs-15'>{ingredient}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='details-body'>
            <div className='measures ingredients my-4'>
              <h6 className='fs-16'>Measure:</h6>
              <ul className='grid'>
                {
                  meal?.measures?.map((measure, idx) => (
                    <li key = {idx} className = "fs-14 flex align-end">
                      <span className='li-icon fs-12 text-orange'>
                        <span style={{ width:"15px", height:"15px"}} className='li-dot'>{idx + 1}</span>
                      </span>
                      <span className='li-text fs-15 fw-6 op-09'>{measure}</span>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='instructions my-4'>
              <h6 className='fs-16'>Instructions:</h6>
              <ul className='grid'>
                {
                  instructions?.map((instruction, idx) => (
                    <li key = {idx} className = "fs-14">
                      <AiOutlineCheckSquare size = {18} className = "text-orange li-icon" />
                      <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MealSingle