import React from "react";
import "./Details.css"; 
import { Link } from "react-router-dom";
import exe from "./assets/4.jpg";
import exe2 from "./assets/4.1.jpg";
import exe3 from "./assets/4.2.jpg";
import wifi from "./assets/wifi.png";
import pet from "./assets/pet.png";
import breakfast from "./assets/food.png";
import aircon from "./assets/aircon.png";


const Details = () => {

  return (

    <div className="room-details-container">
      <div className="picture-container">
        <div className="picture">
          <img src={exe} alt="Sample Pic"/>
          <img src={exe2} alt="Sample Pic"/>
          <img src={exe3} alt="Sample Pic"/>
        </div>
      </div>
      
      <div className="details-container">
        <h1 className="room-name">Executive</h1>
        <div className="room-description-1">
          <pre>
            {'Max number of guests: 2-5\nRoom size: Spacious and Upscale\nBed size: King-size Bed\n'}
          </pre>
        
        </div>
        <div className="room-description-2">
        The Suite in our hotel is an epitome of luxury and comfort, offering a 
        spacious retreat for a truly indulgent stay. Featuring a separate living 
        area and bedroom, it exudes sophistication and style. The bedroom is 
        adorned with a lavish king-size bed, ensuring a restful night's sleep. 
        The suite comes complete with a private bathroom, featuring upscale 
        amenities for an elevated experience. With additional amenities such 
        as a well-equipped workspace, high-speed internet, and premium 
        entertainment options, our Suite guarantees a refined and pleasurable 
        stay for discerning travelers.
        </div>
        <div className="line"></div>
        <div className="check-in-out">
          <div className="check-in">
            <pre>
              {'Check in\n3:00PM - 7:00PM'}
            </pre>
          </div>
          <div className="check-out">
            <pre>
              {'Check out\n10:00  PM'}
            </pre>
          </div>
        </div>
        <div className="line"></div>
        <div className="inclusions-container">
          <div className="inclusion">
            <img src={wifi} alt="Wifi"></img>
            Wi-fi
          </div>
          <div className="inclusion">
            <img src={pet} alt="Pet"></img>
            Pet Friendly
          </div>
          <div className="inclusion">
            <img src={breakfast} alt="Breakfast"></img>
            Breakfast
          </div>
          <div className="inclusion">
            <img src={aircon} alt="Air Con"></img>
            Air Conditioned
          </div>
        </div>
        <div className="book-btn">
          <Link to="./Form">
            <button className="book-now">Book now</button>
          </Link>
        </div>
      </div>
    </div>

  );
    
};


  
export default Details;