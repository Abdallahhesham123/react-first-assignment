import React, { useRef, useState ,useEffect } from 'react'
import { faCheck ,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styled from "./login.module.css"
import { Button } from 'bootstrap';
import {useAuth} from "../Context/Auth"
import{useNavigate ,useLocation} from "react-router-dom"
 function Login() {

  const auth = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
const location = useLocation();
const redirectPath =location.state?.path || "/"
  const errRef = useRef();
  const passwordRef = useRef();


  const [email, setemail] = useState('');
  const [validemail, setValidemail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');



  const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;
  const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash}/>;
  const[show,setshow]=useState(false)




  const showpassword = () =>{

    setshow(!show)
    passwordRef.current.type = show ? 'password':'text';
    
    }



  useEffect(() => {
    emailRef.current.focus();
  }, [])
  
  const EMAIL_REGEX =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



  /* Field of Email */ 
useEffect(() => {

  const result =EMAIL_REGEX.test(email);

  console.log(result);
  console.log(email);

  setValidemail(result);

}, [email])

/* Field of pasword */ 
useEffect(() => {

  const result =PWD_REGEX.test(pwd);

  console.log(result);
  console.log(pwd);

  setValidPwd(result);

}, [pwd])


   const SubmitLoginHandle=()=>{

    const v1 = EMAIL_REGEX.test(email)
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2 ) {
      setErrMsg("Invalid Entry");
        return;
 
    }
    setErrMsg(`Congratulation ${email} you are Redirect Auto after 3 second`);
  
auth.login(email,pwd)
setTimeout(() => {
  navigate(redirectPath,{replace:true})
},3000);


     
   }

  return (
    <div>
   
              <div className={`${styled.bg_img}`}>
              <div className={`${styled.container}`}>

              <div  className={`${styled.modalBox}`}>


              <div  className={`${errMsg? `${errMsg}`:`${styled.offscreen}`} alert alert-success my-3`} role="alert">
              {errMsg}
            </div>
             
              <h1>LOGIN_PAGE</h1>

              <div className={` ${styled.form_group}`}>
              <div className={` ${styled.input_group}`}>
              <input id="usernameLogInInput"
               type="text" 
              className={`form-control mx-3`}
               placeholder="Username" 
                required
                autoComplete="off"
                onChange={(e)=>setemail(e.target.value)}
                onFocus={()=>setEmailFocus(true)}
                onBlur={()=>setEmailFocus(false)}
                ref={emailRef}
                />
                <FontAwesomeIcon icon={faCheck}  className={validemail ? `${styled.check} valid` : `${styled.offscreen}`} />
                <FontAwesomeIcon icon={faTimes} className={validemail || !email ? `${styled.offscreen}` : `${styled.times} invalid`} />
                </div>



                <div className="">
                <div 
                              
                className={`${ emailFocus && email && !validemail ? 
                `${styled.onscreen}`:`${styled.offscreen}`}  alert alert-danger `} ref={errRef} >
                      email is not correct!!!
                <span style={{color:"red"}}>Ex:Abdallah@gmail.com</span>
                </div>

             </div>
              </div>



              <div className={` ${styled.form_group}`}>
              <div className={` ${styled.input_group} position-relative`}>
              <input
              ref={passwordRef}
              id="passwordLogInInput" 
              type="password"
               className={`form-control mx-2`} 
               placeholder="Password" 
               required
               autoComplete="off"
               onChange={(e)=>setPwd(e.target.value)}
               onFocus={()=>setPwdFocus(true)}
               onBlur={()=>setPwdFocus(false)}
               
               />
               <FontAwesomeIcon icon={faCheck}  className={validPwd ? `${styled.check} valid` : `${styled.offscreen}`} />
            
               <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? `${styled.offscreen}` : `${styled.times} invalid`} />
               {show ? <i   className={`${styled.showIcon}`}
                onClick={()=>showpassword()}>{Eye}</i>:<i className={`${styled.showIconDash}`} onClick={()=>showpassword()}>{EyeSlash}</i>}
                  </div>


                  <div className="">
                  <div 
                                
                  className={`${ pwdFocus && pwd && !validPwd ? 
                  `${styled.onscreen}`:`${styled.offscreen}`}  alert alert-danger `} ref={errRef} >

                  Password is not correct!!
                  <span style={{color:"red"}}>Ex:H*************@</span>
                  </div>
  
               </div>

              </div>

              <div>
              <hr />
              <button id="logInBtn" 
              
              
              
              onClick={()=>SubmitLoginHandle()} 
              disabled=
              { !validPwd || !validemail  ?
                 true:false}
                 className={ !validPwd || !validemail ? 
                  
                  `${styled.disabled}`:
                
                 `${styled.btn}`
                }
              
              >Log In</button>
              </div>
              </div>
              </div>


              </div>



    
    
   
    </div>

  )
}

export default Login;
