import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Components from "./style";
import "./index.css"
import { AuthContext } from "../../context/authContext";
export default function Reset(){
    const navigate = useNavigate()
    const [signIn, toggle] = useState(false);
    const [Inputs, setInputs] = useState({email:""});

    const [open, setOpen] = useState(false);
   
    const [AlertType, setAlertType] = useState("success")
    const [AlertMessage, setAlertMessage] = useState("")
    const {CurrentUser} = useContext(AuthContext)
    console.log(CurrentUser)
    const handleClose = () => {
        setOpen(false);
    
      };
    
    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
   }
   function Login(otp) {
    navigate('/update',{ state: {
        otp:otp,
        email: Inputs.email
      }})
}
   const handleSubmit = async e =>{
       e.preventDefault()
   
      
       try {
           const res = await axios.post("https://recipeapp154.herokuapp.com/api/auth/reset", Inputs)
           console.log(res)
           setAlertType("success")
           setAlertMessage(res.data)
           setOpen(true)
           if (res.data.user==="user found") Login(res.data.otp) 
       } catch (error) {
           setAlertType("error")
           setAlertMessage(error.response.data)
           setOpen(true)
       }
   }
 
    return(
        <div className="log">
        <Link className="HomeLink" to='/'>Home</Link>
        <div className="containerLog">
        <Components.Container>
        
            <Components.Form>
                <Components.Title>Reset Password</Components.Title>
                <Snackbar  sx={{ position: 'absolute', top:"20px", right:"20px" }} anchorOrigin={{ vertical: 'top',horizontal: 'center',}} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={AlertType} sx={{ width: '100%' }}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
              
                <Components.Input type='email' placeholder='Email' name="email" onChange={handleChange} />
                <Components.Button onClick={handleSubmit}>Reset</Components.Button>
                <Components.Anchor href='/account'>Back to login</Components.Anchor>
            </Components.Form>
       
        </Components.Container>
        </div>
        </div>
    )
}