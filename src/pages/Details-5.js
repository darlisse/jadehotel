import React from "react";
import "./Details.css"; 
import { Link } from "react-router-dom";
import pres from "./assets/5.jpg";
import pres2 from "./assets/5.1.jpg";
import pres3 from "./assets/5.2.jpg";
import wifi from "./assets/wifi.png";
import pet from "./assets/pet.png";
import breakfast from "./assets/food.png";
import aircon from "./assets/aircon.png";


const Details = () => {

  return (

    <div className="room-details-container">
      <div className="picture-container">
        <div className="picture">
          <img src={pres} alt="Sample Pic"/>
          <img src={pres2} alt="Sample Pic"/>
          <img src={pres3} alt="Sample Pic"/>
        </div>
      </div>
      
      <div className="details-container">
        <h1 className="room-name">Presidential</h1>
        <div className="room-description-1">
          <pre>
            {'Max number of guests: 4-8\nRoom size: Expansive\nBed size: King-size Bed\n'}
          </pre>
        
        </div>
        <div className="room-description-2">
        The Presidential Suite in our hotel is the pinnacle of opulence and 
        exclusivity, providing an unmatched experience for those seeking the 
        utmost in luxury. With a distinct living area, multiple bedrooms, and 
        lavish furnishings, the suite exudes grandeur and sophistication. 
        The bedrooms often feature king-size beds, ensuring the highest 
        level of comfort. The suite boasts a private and decadent bathroom 
        with premium amenities. Exclusive perks such as a dedicated concierge 
        service, spacious lounge areas, and state-of-the-art entertainment 
        systems elevate the Presidential Suite to an unparalleled level of 
        indulgence, promising an extraordinary stay for the most discerning 
        guests.
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