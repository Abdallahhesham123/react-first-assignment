import React, { useRef, useState ,useEffect } from 'react'
import { faCheck ,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Login from '../login/Login';
import style from "./register.module.css"

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = ()=> {



  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const con_passwordRef = useRef();
  const fontawesomeClear = useRef();

  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setemail] = useState('');
  const [validemail, setValidemail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);


  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;

  const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash}/>;
  

  const[show,setshow]=useState(false)
  // const[showcon,setshowcon]=useState(false)

  const showpassword = () =>{

    setshow(!show)
    passwordRef.current.type = show ? 'password':'text';
    
    }



useEffect(() => {
  userRef.current.focus();
}, [])

/* Field of User */ 
useEffect(() => {

  const result =USER_REGEX.test(user);

  console.log(result);
  console.log(user);

  setValidName(result);

}, [user])
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

/* Field of confirm-pasword */ 
useEffect(() => {

  const result = pwd === matchPwd;


  setValidMatch(result);

}, [pwd,matchPwd])


useEffect(() => {

  setErrMsg("")

}, [pwd,user,email])


  const SubmitHandle=async()=>{

   
    // e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v3 = EMAIL_REGEX.test(email)
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
        return;
 

    }

     let formdata =JSON.parse(localStorage.getItem('formdata')) || []

     let emails_data ="";
     
     for (let index = 0; index < formdata.length; index++) {
      
       emails_data +=  formdata[index].emails + "-";
         
       }
     
     
       console.log(emails_data.split('-'))
       let emails_arr = emails_data.split('-') || [];
     
     if(emails_arr.includes(emailRef.current.value)){
     
      emailRef.current.value =""
      con_passwordRef.current.value="";

      fontawesomeClear.current.style.visibility="hidden";
      setErrMsg('you must change email ,email you wrote is exist')
     
     }else {
     
       formdata.push({
         names:userRef.current.value,
         emails:emailRef.current.value,
         password:passwordRef.current.value
       })
       localStorage.setItem('formdata',JSON.stringify(formdata))
  
       userRef.current.value =""
       emailRef.current.value=""
       passwordRef.current.value=""
       con_passwordRef.current.value=""


       setTimeout(()=>{
        setSuccess(true)
       },2000)


      }


 
    }
 
  

  return (
    <div>
    {success? <Login/>: 
    <section>
  
    <div className={`${style.container}`}>

    <p ref={errRef} className={errMsg? `${errMsg}`:`${style.offscreen}`} aria-live="assertive">{errMsg}</p>
        <h2>Registeration from</h2>

    <div className={`${style.row100}`}>
   
        <div className={`${style.col}`}>
        <p ref={errRef} className={userFocus && user && !validName ? 
          `${style.onscreen}`:`${style.offscreen}`}>
        
        
        4 to 24 characters.<br />
        Must begin with a letter.<br />
        Letters, numbers, underscores, hyphens allowed.
        
        </p>
            <div className={`${style.inputbox}`}>
          
                <input
                 type="text" 
                  ref={userRef}
                   placeholder="Enter Your Name"
                   autoComplete='off'
                   onChange={(e)=>setUser(e.target.value)}
                   onFocus={()=>setUserFocus(true)}
                   onBlur={()=>setUserFocus(false)}
                   
                   />
                   <FontAwesomeIcon icon={faCheck} className={validName ? `${style.check} valid` : `${style.offscreen}`} />
                   <FontAwesomeIcon icon={faTimes} className={validName || !user ? `${style.offscreen}` : `${style.times} invalid`} />
                <span className={`${style.line}`}></span>

            </div>
        </div>

    </div>
  
    <div className={`${style.row100}`}>
    <div className={`${style.col}`}>
    <p ref={errRef} className={emailFocus && email && !validemail ? 
      `${style.onscreen}`:`${style.offscreen}`}>
    
    
      You have entered an invalid email address!.<br />
      Valid email <span style={{color:"Black"}}>Ex:abdallah@yahoo.com</span>

    
    </p>
        <div className={`${style.inputbox}`}>
            <input
             type="email" 
             ref={ emailRef}
              placeholder="Enter Your Email"
              autoComplete='off'
              onChange={(e)=>setemail(e.target.value)}
              onFocus={()=>setEmailFocus(true)}
              onBlur={()=>setEmailFocus(false)}
              
              />
              <FontAwesomeIcon icon={faCheck} ref={fontawesomeClear} className={validemail ? `${style.check} valid` : `${style.offscreen}`} />
              <FontAwesomeIcon icon={faTimes} className={validemail || !email ? `${style.offscreen}` : `${style.times} invalid`} />
           
            <span className={`${style.line}`}></span>

        </div>
    </div>

</div>
<div className={`${style.row100}`}>
<div className={`${style.col}`}>
<p ref={errRef} className={pwdFocus && pwd && !validPwd ? 
  `${style.onscreen}`:`${style.offscreen}`}>
Please enter Your Strong Password <br/>
8 to 24 characters.<br />
Must include uppercase and lowercase letters,<br />
 a number and 
 a special character.<br />
 (@#$%^&*0aA) <br/>


</p>
    <div className={`${style.inputbox}`}>
    



        <input type="password"
         name="" 
          placeholder="Enter Your Password"
          ref={passwordRef}
          autoComplete='off'
          onChange={(e)=>setPwd(e.target.value)}
          onFocus={()=>setPwdFocus(true)}
          onBlur={()=>setPwdFocus(false)}
          />
        
          <FontAwesomeIcon icon={faCheck} className={validPwd ? `${style.check} valid mx-3` : `${style.offscreen}`} />
          <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? `${style.offscreen}` : `${style.times} invalid mx-3`} />
          {show ? <i   className={`text-danger position-absolute`} onClick={()=>showpassword()}>{Eye}</i>:<i className={`text-danger position-absolute`} onClick={()=>showpassword()}>{EyeSlash}</i>}
        <span className={`${style.line}`}></span>
      

    </div>
</div>

</div>
<div className={`${style.row100}`}>
<div className={`${style.col}`}>
<p ref={errRef} className={matchFocus && matchPwd && !validMatch ? 
  `${style.onscreen}`:`${style.offscreen}`}>
Sorry ,Your Password Not Matched  <br/>
Please enter Your Valid match <br/>
</p>
    <div className={`${style.inputbox}`}>
        <input type="password" 
          placeholder="Rewrite Your Password"
          autoComplete='off'
          ref={con_passwordRef}
          onChange={(e)=>setMatchPwd(e.target.value)}
          onFocus={()=>setMatchFocus(true)}
          onBlur={()=>setMatchFocus(false)}
          />
          <FontAwesomeIcon icon={faCheck} className={validMatch && matchFocus? `${style.check} valid mx-3 ` : `${style.offscreen}`} />
          <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? `${style.offscreen}` : `${style.times} invalid mx-3`} />
        
        <span className={`${style.line}`}></span>

    </div>
</div>

</div>

  <div className={`${style.row100}`}>
      <div className={`${style.col}`}>
      <button
       onClick={()=>SubmitHandle()} 
      disabled=
      {!validMatch || !validPwd || !validemail || !validName ?
         true:false}
         className={!validMatch || !validPwd || !validemail || !validName ? 
          
          `${style.disabled}`:
        
         `${style.enabled}`
        }
         
         >Login</button>
      </div>
  </div>
  <span className={`${style.link}`}>Already-Registered?</span><br/>
  {/* put Router Link here*/}
  <a href={success?<Login/>:"#"} className={`${style.linkDirected}`}>Sign In</a>
</div>
</section>  

}
    </div>
  )
}

export default Register ;