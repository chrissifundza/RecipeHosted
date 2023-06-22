import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../api/axios";

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [CurrentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const [AllRecipes, setAllRecipes] = useState([])
    const login = async (inputs)=>{
        const res = await axios.post("https://recipeapp154.herokuapp.com/api/auth/login", inputs)
        setCurrentUser(res.data)
       console.log(res.data)

    }

    const logout = async (inputs)=>{
        const res = await axios.post("https://recipeapp154.herokuapp.com/api/auth/logout",CurrentUser)
        
        setCurrentUser(null)
    }
   
    useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(CurrentUser))
    },[CurrentUser])

  

      const getSavedRecipe=async()=>{
        try {
          const res = await axios.post("https://recipeapp154.herokuapp.com/api/recipe/getallrecipe", CurrentUser)
         console.log(res.data)
         setAllRecipes(res.data)
        } catch (error) {
          console.log(error.response.data)
        }
      }
   
   
     
    return <AuthContext.Provider value={{CurrentUser, setCurrentUser, login, logout,AllRecipes, setAllRecipes, getSavedRecipe}}>{children}</AuthContext.Provider>
}