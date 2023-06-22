import { Avatar, Card, CardActions, CardHeader, IconButton, Typography } from "@mui/material";
import { ContainerCardRecipe } from "./style";
import { Delete, Email, ExpandMore } from "@mui/icons-material";
import { colors } from "../../theme";
import axios from "axios";
import swal from "sweetalert";
import { AuthContext } from '../../context/authContext';
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Recipe({idmeal,idrecipe,recipe_country,recipe_img,recipe_name,youtube_link}){
  const {AllRecipes, setAllRecipes} =useContext(AuthContext)
  const RecipeDelete= async ()=>{
    try {
      const res = await axios.delete(`https://recipeapp154.herokuapp.com/api/recipe/delete/${idrecipe}`)
      console.log(res.data)
      swal("Success","Recipe deleted successfully","success")
      
     let newRecipes = AllRecipes.filter((r)=>r.idrecipe !== idrecipe)
     setAllRecipes(newRecipes)
  } catch (error) {
      
      console.log(error.response.data)
      
  }
  }
  console.log(idmeal)
  let t = idmeal.split("")
  let t2 = t.pop()
  console.log(t)
  let id = t.join("")
  console.log(id)
    return(
      
        <ContainerCardRecipe key={idrecipe}>
          
        <Card sx={{width:"100%",  
          paddingLeft:"10px",
          paddingRight:"10px",
          backgroundColor:colors.primary}}>
        <Card sx={{ maxWidth: "100%" ,margin:0,}}>
<CardHeader
avatar={
<Avatar  alt="Remy Sharp"
src={recipe_img}
sx={{ width: 56, height: 56 }}   >

</Avatar>
}
action={
<IconButton onClick={RecipeDelete} sx={{fontSize:"14px"}} aria-label="settings">
<Delete  />
</IconButton>
}
title={<Typography sx={{fontSize:"18px"}}>{recipe_name}</Typography>}
subheader={<Typography sx={{fontSize:"12px",}} color="text.secondary">{recipe_country}</Typography>}
/>


<CardActions disableSpacing>

<IconButton aria-label="share">
<Email /> Send to your email
</IconButton>
<Link style={{marginLeft:"20px",color:"#fe9e0d"}}  to = {`/meal/${id}`}>
  View Recipe
</Link>

</CardActions>

</Card>
</Card>

        </ContainerCardRecipe>
        
    )
}