import React from "react";

const Home = () => {
  return <section id="RoomList">
    <div class="Room-details-container">
      <div class="Room-details-container">
        <div class="Room-details-container">

          <div class="Room-container">
            <article>
              <img
                src="./assets/1.jpg"
                alt="Twin Bed"
                class="icon"
              />
              <div>
                <h3>Twin Room</h3>
                <p>Two separate single beds placed in the same room</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/2.jpg"
                alt="Double Bed"
                class="icon"
              />
              <div>
                <h3>Double Room</h3>
                <p>A bed larger than a single bed, typically designed for two people.</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/3.jpg"
                alt="Suite"
                class="icon"
              />
              <div>
                <h3>Suite</h3>
                <p>A larger and more luxurious room with a separate living or sitting area. </p>
              </div>
            </article>
            <article>
              <img
                src="./assets/4.jpg"
                alt="Executive Room"
                class="icon"
              />
              <div>
                <h3>Executive Room</h3>
                <p>A room with added amenities and services catering to business travelers.</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/5.jpg"
                alt="Presidential Suite"
                class="icon"
              />
              <div>
                <h3>Presidential Suite</h3>
                <p>The highest-tier suite in some hotels, offering the most luxurious amenities and often reserved for VIP guests or special occasions.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default Home;
