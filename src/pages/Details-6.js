import React from "react";
import "./Details.css"; 
import { Link } from "react-router-dom";
import pent from "./assets/6.jpg";
import pent2 from "./assets/6.1.jpg";
import pent3 from "./assets/6.2.jpg";
import wifi from "./assets/wifi.png";
import pet from "./assets/pet.png";
import breakfast from "./assets/food.png";
import aircon from "./assets/aircon.png";

    
const Details = () => {

  return (

    <div className="room-details-container">
      <div className="picture-container">
        <div className="picture">
          <img src={pent} alt="Sample Pic"/>
          <img src={pent2} alt="Sample Pic"/>
          <img src={pent3} alt="Sample Pic"/>
        </div>
      </div>
      
      <div className="details-container">
        <h1 className="room-name">Penthouse</h1>
        <div className="room-description-1">
          <pre>
            {'Max number of guests: 5-10\nRoom size: Spacious\nBed size: Luxurious Beds\n'}
          </pre>
        
        </div>
        <div className="room-description-2">
        The Penthouse in our hotel is the epitome of luxury and exclusivity, 
        providing an unparalleled experience for those seeking the highest 
        standards of accommodation. Perched at the pinnacle of the building, 
        the Penthouse features a lavish living space with multiple bedrooms, 
        offering breathtaking panoramic views. Furnished with opulent decor, 
        the Penthouse is a haven of sophistication. The bedrooms typically 
        boast king-size beds for the utmost comfort. With exclusive amenities, 
        a private terrace, and personalized services, our Penthouse ensures an 
        extraordinary stay for the most discerning guests, creating memories 
        that linger long after their departure.
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