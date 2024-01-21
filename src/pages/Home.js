import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import home from "./assets/home.jpg";
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
            Welcome to Jade Hotel, hehehehehe. 
            Enjoy your stay in our premium accommodations and experience unparalleled hospitality.
          </p>
        </div>
      </section>
      <section id="RoomList">
        <div className="Room-details-container">
          <div className="Room-details-container">
            <div className="Room-details-container">
              <div className="Room-container">
                <article>
                  <img
                    src={twin} alt="Twin"
                    className="icon"
                  />
                  <div>
                    <h3>Twin Room</h3>
                    <p>Two separate single beds placed in the same room</p>
                  </div>
                  <Link to="/Details">View</Link>
                </article>
                <article>
              <img
                src={double} alt="Double Bed"
                class="icon"
              />
              <div>
                <h3>Double Room</h3>
                <p>A bed larger than a single bed, typically designed for two people.</p>
              </div>
            </article>
            <article>
              <img
                src={suite} alt="Suit"
                class="icon"
              />
              <div>
                <h3>Suite</h3>
                <p>A larger and more luxurious room with a separate living or sitting area. </p>
              </div>
            </article>
            <article>
              <img
                src={executive} alt="Executive"
                class="icon"
              />
              <div>
                <h3>Executive Room</h3>
                <p>A room with added amenities and services catering to business travelers.</p>
              </div>
            </article>
            <article>
              <img
                src={presidential} alt="Presidential"
                class="icon"
              />
              <div>
                <h3>Presidential Suite</h3>
                <p>The highest-tier suite in some hotels, offering the most luxurious amenities and often reserved for VIP guests or special occasions.</p>
              </div>
            </article>
            <article>
              <img
                src={penthouse} alt="Penthouse"
                class="icon"
              />
              <div>
                <h3>Penthouse</h3>
                <p>These rooms are high-end, big rooms- sometimes taking up the entire top floor of a hotel – and come with the ultimate luxury amenities.</p>
              </div>
            </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact">
        <div className="Contact-container">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;