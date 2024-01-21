import React, { useState, useEffect } from "react";
import "./ReservationForm.css";

const RoomPrices = {
  twin: {
    weekday: 6000,
    weekend: 7500,
  },
  doubleRoom: {
    weekday: 8000,
    weekend: 9500,
  },
  suite: {
    weekday: 10000,
    weekend: 11500,
  },
  executiveRoom: {
    weekday: 13000,
    weekend: 14500,
  },
  presidentialSuite: {
    weekday: 16000,
    weekend: 18500,
  },
};

const calculatePrice = (startDate, endDate, numGuests, roomType) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.floor((end - start) / (24 * 60 * 60 * 1000));

  let totalPrice = 0;

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);

    const dayOfWeek = currentDate.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      totalPrice += RoomPrices[roomType].weekend;
    } else {
      totalPrice += RoomPrices[roomType].weekday;
    }
  }

  // Multiply the total price by the number of guests
  totalPrice *= numGuests;

  return totalPrice;
};

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numGuests, setNumGuests] = useState(1);
  const [roomType, setRoomType] = useState("twin");
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDatesBooked, setIsDatesBooked] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const price = calculatePrice(startDate, endDate, numGuests, roomType);
      setTotalPrice(price);

      const isBooked = false; // Placeholder for the logic to check booked dates
      setIsDatesBooked(isBooked);
    }
  }, [startDate, endDate, numGuests, roomType]);

  const handleGuestChange = (action) => {
    // action: 'increment' or 'decrement'
    if (action === "increment") {
      setNumGuests(numGuests + 1);
    } else if (action === "decrement" && numGuests > 1) {
      setNumGuests(numGuests - 1);
    }
  };

  const handleBooking = () => {
    if (isDatesBooked) {
      alert(
        "Selected dates are already booked. Please choose different dates."
      );
      return;
    }

    if (paymentMethod === "creditCard" && cardNumber.length !== 16) {
      alert("Please enter a valid 16-digit credit card number.");
      return;
    }

    if (paymentMethod === "paypal" && phoneNumber.length !== 11) {
      alert("Please enter a valid 11-digit phone number.");
      return;
    }

    // Perform booking logic here
    // For simplicity, just log the details to the console
    console.log(`Booking: 
      Name - ${name},
      Email - ${email},
      Contact Number - ${contactNumber},
      Start Date - ${startDate},
      End Date - ${endDate},
      Room Type - ${roomType},
      Number of Guests - ${numGuests},
      Total Price - $${totalPrice},
      Payment Method - ${paymentMethod},
      Card Number - ${cardNumber}`);
  };

  return (
    <div className="App">
      <h1>Jade Hotel Booking Reservation</h1>

      {/* Personal Information Form */}
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="contactNumber">Contact Number (11 digits):</label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          pattern="[0-9]{11}"
          maxLength="11"
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </form>

      {/* Booking Details Form */}
      <form>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label htmlFor="roomType">Room Type:</label>
        <select
          id="roomType"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="twin">Twin</option>
          <option value="doubleRoom">Double Room </option>
          <option value="suite">Suite</option>
          <option value="executiveRoom">Executive Room</option>
          <option value="presidentialSuite">Presidential Suite</option>
          <option value="penthouse">Penthouse</option>
        </select>

        <div className="guest-input">
          <label htmlFor="numGuests">Number of Guests:</label>
          <div className="guest-controls">
            <input
              id="numGuests"
              value={numGuests}
              min="1"
              onChange={(e) => setNumGuests(e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleGuestChange("increment")}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => handleGuestChange("decrement")}
            >
              -
            </button>
          </div>
        </div>

        {isDatesBooked && (
          <p style={{ color: "red" }}>
            Selected dates are already booked. Please choose different dates.
          </p>
        )}

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>

        {paymentMethod === "creditCard" && (
          <div className="card-details">
            <label htmlFor="cardNumber">Credit Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              pattern="[0-9]{16}"
              maxLength="16"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
        )}

        {paymentMethod === "bankTransfer" && (
          <div className="card-details">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              pattern="[0-9]{17}"
              maxLength="17"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="card-details">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              pattern="[0-9]{11}"
              maxLength="11"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        )}

        <p>Total Price: Php{totalPrice}</p>


        <button type="button" onClick={handleBooking} disabled={isDatesBooked}>
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Form;
