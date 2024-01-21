import React from "react";
import "./Details.css"; 
import { Link } from "react-router-dom";
import twin from "./assets/1.jpg";
import wifi from "./assets/wifi.png";
import pet from "./assets/pet.png";
import breakfast from "./assets/food.png";
import aircon from "./assets/aircon.png";


const Details = () => {

  return (

    <div className="room-details-container">
      <div className="picture-container">
        <div className="picture">
          <img src={twin} alt="Sample Pic"/>
          <img src={twin} alt="Sample Pic"/>
          <img src={twin} alt="Sample Pic"/>
        </div>
      </div>
      
      <div className="details-container">
        <h1 className="room-name">Twin Room</h1>
        <div className="room-description-1">
          <pre>
            {'Max number of guests: 2\nRoom size: Standard size for dual occupancy\nBed size: Two standard single beds\n'}
          </pre>
        
        </div>
        <div className="room-description-2">
        The Twin Room in our hotel is perfect for friends or colleagues 
        traveling together. Featuring two comfortable beds and modern 
        amenities, it provides a cozy and inviting space for dual occupancy. 
        The ensuite bathroom ensures convenience and privacy, complete with 
        complimentary toiletries. With high-speed internet, a flat-screen TV, 
        and a well-appointed workspace, the Twin Room offers a harmonious 
        blend of comfort and functionality. Guests can enjoy the flexibility 
        of shared accommodations while relishing the individual comforts our 
        hotel provides, making it an ideal choice for those seeking a 
        comfortable and convenient stay.
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