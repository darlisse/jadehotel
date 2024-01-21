import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import home from "./assets/sample-room-pic.jpg";
import twin from "./assets/1.jpg";
import double from "./assets/2.jpg";
import suite from "./assets/3.jpg";
import executive from "./assets/4.jpg";
import presidential from "./assets/5.jpg";
import penthouse from "./assets/6.jpg";

const Home = () => {
  return (
    <>
      <section id="HomeJade">
        <img
          src={home} alt="Home Pic"/>
        <div className="Hotel-info-container">
        <h2 className="hotel-name">Jade Hotel</h2>
          <p className="welcome-text">
            Welcome to Jade Hotel, where comfort meets elegance. 
            Our commitment is to provide you with an exceptional stay, 
            offering an oasis of comfort and personalized service.
            Enjoy your stay in our premium accommodations let us elevate your experience 
            with our exquisite accommodations and world-class amenities.
          </p>
        </div>
      </section>
      <section id="RoomList">
        <div className="Room-details-container">
          <div className="Room-details-container">
            <div className="Room-details-container">
              <div className="Room-container">
              
                <article> 
                  <Link to="/Details">
                    <img
                      src={twin} alt="Twin"
                      className="icon"
                    />
                    <div>
                      <h3>Twin Room</h3>
                      <p>Two separate single beds placed in the same room</p>
                    </div>
                  </Link>
                </article>
                
                <article>
                  <Link to="/Details-2">
                    <img
                      src={double} alt="Double Bed"
                      className="icon"
                    />
                    <div>
                      <h3>Double Room</h3>
                      <p>A bed larger than a single bed, typically designed for two people.</p>
                    </div>
                    </Link>
                </article>

                <article>
                  <Link to="/Details-3">
                    <img
                    src={suite} alt="Suite"
                    className="icon"
                    />
                    <div>
                      <h3>Suite</h3>
                      <p>A larger and more luxurious room with a separate living or sitting area. </p>
                    </div>
                  </Link>
                 </article>

                <article>
                  <Link to="/Details-4">
                    <img
                      src={executive} alt="Executive"
                      className="icon"
                    />
                    <div>
                      <h3>Executive Room</h3>
                      <p>A room with added amenities and services catering to business travelers.</p>
                    </div>
                  </Link>
                </article>

                <article>
                  <Link to="/Details-5">
                    <img
                      src={presidential} alt="Presidential"
                      className="icon"
                    />
                    <div>
                      <h3>Presidential Suite</h3>
                      <p>The highest-tier suite in some hotels, offering the most luxurious amenities and often reserved for VIP guests or special occasions.</p>
                    </div>
                  </Link>
                </article>

                <article>
                  <Link to="/Details-6">
                    <img
                      src={penthouse} alt="Penthouse"
                      className="icon"
                    />
                    <div>
                      <h3>Penthouse</h3>
                      <p>These rooms are high-end, big rooms- sometimes taking up the entire top floor of a hotel – and come with the ultimate luxury amenities.</p>
                    </div>
                  </Link>
                </article>  

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact">
      <div className="Contact-container">
        <div className="contact-form">
          <form>
            <div className="form-row">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Email: jadehotel@gmail.com</p>
          <p>Phone: 123456789</p>
          <p>Social Media:</p>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;