import React, { useEffect, useRef, useState } from "react";
import contactStayled from "./contacts.module.css";
import Icon from "../Icon/Icon";
export default function Contacts() {
  let color = "rgb(44, 62, 80)";
  let fontSize = "2rem";
  
  const nameRef = useRef();
  const errRef = useRef();

  const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const EMAIL_REGEX =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const PHONE_REGEX = /^[0-9][0-9]{10,13}$/;


  const [name, setname] = useState('');
  const [validname, setValidname] = useState(false);
  const [nameFocus, setnameFocus] = useState(false);



  const [email, setemail] = useState('');
  const [validemail, setValidemail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setphone] = useState('');
  const [validphone, setValidphone] = useState(false);
  const [phoneFocus, setphoneFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    nameRef.current.focus();
  }, [])
  


/* Field of Name */ 
useEffect(() => {

  const result =NAME_REGEX.test(name);


  setValidname(result);

}, [name])

/* Field of Email */ 
useEffect(() => {

  const result =EMAIL_REGEX.test(email);


  setValidemail(result);

}, [email])
/* Field of  Phone */ 
useEffect(() => {

  const result =PHONE_REGEX.test(phone);


  setValidphone(result);

}, [phone])


  let handleForm=(e)=>{

    e.preventDefault();


    const v1 = NAME_REGEX.test(name);
    const v3 = EMAIL_REGEX.test(email)
    const v2 = PHONE_REGEX.test(phone);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Please Enter Your Valid Enteries");
        return;
 

    }else{
      setErrMsg(`Congratulation ${name} You Can Entered`);

    }



  }
  return (
    <div className={`${contactStayled.container_contact} py-5 container `}>
      <div className={`${contactStayled.row_contact} row py-5`}>
        <h2>CONTACT ME</h2>
        <Icon color={color} fontSize={fontSize} />
        <div className="col-md-6">


        <div  className={`${errMsg? `${errMsg}`:`${contactStayled.offscreen}`} alert alert-success my-3`} role="alert">
        {errMsg}
      </div>


          <form onSubmit={(e)=>handleForm(e)}>
            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  ref={nameRef}
                  autoComplete='off'
                  onChange={(e)=>setname(e.target.value)}
                  onFocus={()=>setnameFocus(true)}
                  onBlur={()=>setnameFocus(false)}
                />
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>

              </div>
              <div className="my-2">
                <div 
                              
                className={`${ nameFocus && name && !validname ? 
                `${contactStayled.onscreen}`:`${contactStayled.offscreen}`}  alert alert-danger `} ref={errRef} >
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.<br />
                <span style={{color:"red"}}>Ex:Abdallah</span>
                </div>

             </div>
            </div>

            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  autoComplete='off'
                  onChange={(e)=>setemail(e.target.value)}
                  onFocus={()=>setEmailFocus(true)}
                  onBlur={()=>setEmailFocus(false)}
                />
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
              </div>
              <div className="my-2">
              <div 
                            
              className={`${ emailFocus && email && !validemail ? 
              `${contactStayled.onscreen}`:`${contactStayled.offscreen}`}  alert alert-danger `} ref={errRef} >
              You have entered an invalid email address!.<br />
              Valid email <span style={{color:"red"}}>Ex:abdallah@yahoo.com</span>
              </div>

           </div>
            </div>

            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="YourPhone"
                  autoComplete='off'
                  onChange={(e)=>setphone(e.target.value)}
                  onFocus={()=>setphoneFocus(true)}
                  onBlur={()=>setphoneFocus(false)}
                />
                <label htmlFor="exampleInputPassword1">
                  YourPhone
                </label>
              </div>
              <div className="my-2">
              <div 
                            
              className={`${ phoneFocus && phone && !validphone ? 
              `${contactStayled.onscreen}`:`${contactStayled.offscreen}`}  alert alert-danger `} ref={errRef} >
              You have entered an invalid Phone!.<br />
              10 to 13 numbers only.<br />
               <span style={{color:"red"}}>Ex:01096519434</span>
              </div>

           </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <textarea
                className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
                <label htmlFor="floatingTextarea2">message <span style={{color:"red"}}>It is Optional!!</span></label>
              </div>
            </div>
            <button type="submit" 
            
            
            
            disabled=
            {!validemail || !validphone || !validname ?
               true:false}
               className={!validemail || !validphone || !validname  ? 
                
                `${contactStayled.disabled} btn `:
              
               `${contactStayled.enabled} btn`
              }
            
            
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
