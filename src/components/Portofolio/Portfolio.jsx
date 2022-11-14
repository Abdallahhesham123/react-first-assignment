import React, { useState } from "react";
import Icon from "../Icon/Icon";
import PortofolioImage from "../PortofolioImage/PortofolioImage";
import styled from "./portofolio.module.css";
export default function Portfolio() {
  let color = "#2C3E50";
  let fontSize = "1.5em";
  const [model, setmodel] = useState(false);
  const [img, setimg] = useState("");
  const [title, settitle] = useState("");

  let portofolio = [
    { id: 0, title: "Cabin", image: "./images/cabin.png" },
    { id: 1, title: "Cake", image: "./images/cake.png" },
    { id: 2, title: "Circus", image: "./images/circus.png" },
    { id: 3, title: "Game", image: "./images/game.png" },
    { id: 4, title: "Safe", image: "./images/safe.png" },
    { id: 5, title: "Submarine", image: "./images/submarine.png" },
  ];
  let handleLayout = (id, title) => {
    setimg(portofolio[id].image);
    settitle(title);
    setmodel(true);
  };
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center py-5">
          <div
            className={model ? `${styled.model_open}` : `${styled.model_close}`}
          >
            <div className={`${styled.container_model}`}>
              <div className={`${styled.img_container_info}`}>
                <h2 className={`${styled.header}`}>{title}</h2>
                <Icon color={color} fontSize={fontSize} />
                <div className={`${styled.img_model}`}>
                  <i
                    className="fa-sharp fa-solid fa-circle-xmark"
                    onClick={() => setmodel(false)}
                  ></i>
                  <img src={img} alt="" />
                  <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Vero error neque hic nobis quibusdam amet eos quae magni quisquam qui,
               sit dolor aliquam expedita officia fugiat aperiam autem dolore dignissimos!
                  </p>
                  <button
                    onClick={() => setmodel(false)}
                    className="btn btn-outline-danger"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 className={`${styled.header}`}>PORTFOLIO</h2>
          <Icon color={color} fontSize={fontSize} />

          {portofolio.map((ele, index) => (
            <PortofolioImage
              imageIndex={index}
              show={handleLayout}
              imageInfo={ele}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
