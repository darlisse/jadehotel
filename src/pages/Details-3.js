import React from "react";
import "./Details.css"; 
import { Link } from "react-router-dom";
import suite from "./assets/3.jpg";
import suite2 from "./assets/3.1.jpg";
import suite3 from "./assets/3.2.jpg";
import wifi from "./assets/wifi.png";
import pet from "./assets/pet.png";
import breakfast from "./assets/food.png";
import aircon from "./assets/aircon.png";


const Details = () => {

  return (

    <div className="room-details-container">
      <div className="picture-container">
        <div className="picture">
          <img src={suite} alt="Sample Pic"/>
          <img src={suite2} alt="Sample Pic"/>
          <img src={suite3} alt="Sample Pic"/>
        </div>
      </div>
      
      <div className="details-container">
        <h1 className="room-name">Suite</h1>
        <div className="room-description-1">
          <pre>
            {'Max number of guests: 2\nRoom size: Spacious\nBed size: King-size Bed\n'}
          </pre>
        
        </div>
        <div className="room-description-2">
        The Suite in our hotel is a luxurious and spacious retreat, perfect for 
        those seeking an elevated stay. Featuring a separate living area and 
        bedroom, the suite offers a sophisticated and comfortable ambiance. 
        The bedroom is furnished with a plush king-size bed, ensuring a restful 
        night's sleep. The expansive suite includes a private bathroom with 
        upscale amenities, providing both convenience and indulgence. With 
        additional perks such as a well-equipped workspace, high-speed internet, 
        and premium entertainment options, our Suite promises a refined and 
        enjoyable experience for discerning travelers.
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