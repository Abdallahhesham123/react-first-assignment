import React from "react";
import StyledContactInfo from "./contactInfo.module.css";
export default function ContactInfo() {
  return (
    <div>
      <div className={`${StyledContactInfo.container_info} container-fluid`}>
        <div className="row justify-content-around align-items-center">
          <div className="col-md-3">
            <div className= {`${StyledContactInfo.address_info}`}>
              <h3>LOCATION</h3>
              <p>Egypt-Alex</p>
              <p>Itay, Schools-Street</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className={`${StyledContactInfo.social_info}`}>
              <h3>AROUND THE WEB</h3>
              <ul>
                <li>
                  {" "}
                  <a href="/#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className={`${StyledContactInfo.info}`}>
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by <span style={{color:"#f44336" ,fontWeight:"500"}}>Abdallah</span> 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
