import { useContext, useState } from "react";
import * as Components from "./style";
import "./index.css"
import Navbar from "../../components/Header/Navbar";
import { Await, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AuthContext } from "../../context/authContext";
import swal from "sweetalert";

export default function LoginRegister(){
    const navigate = useNavigate()
    const [signIn, toggle] = useState(true);
    const [Inputs, setInputs] = useState({name:"",email:"",gender:"",password:"",image:"/img/user.png" });
    const [InputsLogin, setInputsLogin] = useState({email1:"",password1:"" });
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [AlertType, setAlertType] = useState("success")
    const [AlertMessage, setAlertMessage] = useState("")
   const {CurrentUser, login, logout} = useContext(AuthContext)
console.log(InputsLogin)
console.log(Inputs)
      const handleClose = () => {
        setOpen(false);
        setOpen2(false);
      };
    
    function Login() {
        navigate('/userhome')
    }
    const handleChange = e =>{
         setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault()
    if(Inputs.name==""){
        swal("Error","Enter Name!","error")
        return false
    }
    if(Inputs.email==""){
        swal("Error","Enter Email!","error")
        return false
    }
    let test = await TestEmail()
    if (test==false){
     swal("Error","Email is invalid!","error")
    }
  function TestEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Inputs.email)){
        return (true)
    }else{
       
        return (false)
    } 
  }

    if(Inputs.gender==""){
        swal("Error","Select gender!","error")
        return false
    }
    var password =Inputs.password
    if(password==""){
        swal("Error", "Password is empty!", "error")
        return false
    }
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    else{
        swal("Error", "Password should include a Lower case", "error")
        return false
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }else{
        swal("Error", "Password should include a Capital letter", "error")
        return false
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }else{
        swal("Error", "Password should include a number", "error")
        return false
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
  
    }else{
        swal("Error", "Password should include a symbol !@#$%_^", "error")
        return false
    }
  
    if (password.length < 6) {
        swal("Error", "Password should be more than six characters", "error")
        return false
    }
  
    if (password.length > 12) {
        swal("Error", "Password should not exceed 12 characters", "error")
        return false
    }



 
   
    try {
        const res = await axios.post("https://recipeapp154.herokuapp.com/api/auth/register", Inputs)
        console.log(res)
        setAlertType("success")
        setAlertMessage(res.data)
        setOpen(true)
        if (res.data==="User has been created") {window.location.reload()}
    } catch (error) {
        setAlertType("error")
        setAlertMessage(error.response.data)
        swal("Error",error.response.data,"error")
        setOpen(true)
    }
   
  

       
    
   
    }
    const handleChangeLogin = e =>{
        setInputsLogin(prev=>({...prev, [e.target.name]:e.target.value}))
   }

   const handleSubmitLogin = async e =>{
    e.preventDefault()
    let test = await TestEmail()
    if (test==false){
     swal("Error","Email is invalid!","error")
     return false
    }
  function TestEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(InputsLogin.email1)){
        return (true)
    }else{
       
        return (false)
    } 
  }

  if(InputsLogin.password1==""){
    swal("Error","Enter Password!","error")
    return false
  }
   
    try {
        await login(InputsLogin)
        Login()
    } catch (error) {
        setAlertType("error")
        setAlertMessage(error.response.data)
        swal("Error",error.response.data,"error")
        setOpen2(true)
    }
}
  
    return(
        <div className="log">
        <Link className="HomeLink" to='/'>Home</Link>
        <div className="containerLog">
        <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
                <Components.Title>Create Account</Components.Title>
                <Snackbar  sx={{ position: 'absolute', top:"20px", right:"20px" }} anchorOrigin={{ vertical: 'top',horizontal: 'center',}} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={AlertType} sx={{ width: '100%' }}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
                <Components.Input type='text' placeholder='Name' name="name" onChange={handleChange} />
                <Components.Input type='email' placeholder='Email' name="email" onChange={handleChange} />
                <Components.Select type='text' placeholder='Gender' name="gender" onChange={handleChange} >
                <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Components.Select>
                <Components.Input type='password' placeholder='Password' name="password" onChange={handleChange} />
                <Components.Button onClick={handleSubmit}>Sign Up</Components.Button>
            </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
             <Components.Form>
                 <Components.Title>Sign in</Components.Title>
                 <Snackbar  sx={{ position: 'absolute', top:"20px", right:"20px" }} anchorOrigin={{ vertical: 'top',horizontal: 'center',}} open={open2} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={AlertType} sx={{ width: '100%' }}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
                 <Components.Input type='email' placeholder='Email' name="email1" onChange={handleChangeLogin} />
                 <Components.Input type='password' placeholder='Password' name="password1" onChange={handleChangeLogin} />
                 <Components.Anchor href='/reset'>Forgot your password?</Components.Anchor>
                 <Components.Button onClick={handleSubmitLogin}>Sign In</Components.Button>
             </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                    To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                    Sign In
                </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinIn={signIn}>
                  <Components.Title>Hello, Friend!</Components.Title>
                  <Components.Paragraph>
                      Enter Your personal details and start journey with us
                  </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(false)}>
                      Sign Up
                      </Components.GhostButton> 
                </Components.RightOverlayPanel>

            </Components.Overlay>
        </Components.OverlayContainer>

    </Components.Container>
    </div>
    </div>
    )
}