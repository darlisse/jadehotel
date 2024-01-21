import React from "react";
import "./Details.css"; 
import { Link } from "react-router-dom";
import double from "./assets/2.jpg";
import double2 from "./assets/2.1.jpg";
import double3 from "./assets/2.2.jpg";
import wifi from "./assets/wifi.png";
import pet from "./assets/pet.png";
import breakfast from "./assets/food.png";
import aircon from "./assets/aircon.png";


const Details = () => {

  return (

    <div className="room-details-container">
      <div className="picture-container">
        <div className="picture">
          <img src={double} alt="Sample Pic"/>
          <img src={double2} alt="Sample Pic"/>
          <img src={double3} alt="Sample Pic"/>
        </div>
      </div>
      
      <div className="details-container">
        <h1 className="room-name">Double Room</h1>
        <div className="room-description-1">
          <pre>
            {'Max number of guests: 2\nRoom size: Standard size for dual occupancy\nBed size: Double Bed\n'}
          </pre>
        
        </div>
        <div className="room-description-2">
        The Double Room in our hotel is designed for couples or individuals 
        seeking a more spacious accommodation. Featuring a comfortable double 
        bed and modern amenities, it provides a cozy and inviting atmosphere. 
        The room includes an ensuite bathroom for convenience and privacy, 
        ensuring a comfortable stay for our guests. With high-speed internet, 
        a flat-screen TV, and a well-appointed workspace, the Double Room 
        combines comfort and functionality. Whether for a romantic getaway 
        or a solo retreat, the Double Room offers a pleasant and relaxing 
        experience for all guests.
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