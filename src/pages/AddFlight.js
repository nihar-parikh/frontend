import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFlight } from "../redux/apiCalls";

const AddFlight = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");

  const [landingDate, setLandingDate] = useState("");
  const [landingTime, setLandingTime] = useState("");

  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    setTo(e.target.value);
  };
  // console.log(from, to);

  const handleDepartureDate = (e) => {
    setDepartureDate(e.target.value);
  };
  const handleDepartureTime = (e) => {
    setDepartureTime(e.target.value);
  };
  const handleLandingDate = (e) => {
    setLandingDate(e.target.value);
  };
  const handleLandingTime = (e) => {
    setLandingTime(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  // console.log(price);

  const handleAdd = (e) => {
    e.preventDefault();
    addFlight(
      {
        from,
        to,
        departureDate,
        departureTime,
        landingDate,
        landingTime,
        price,
      },
      dispatch
    );
  };
  console.log(
    from,
    to,
    departureDate,
    departureTime,
    landingDate,
    landingTime,
    price
  );
  return (
    <>
      AddFlight
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label htmlFor="flights">Create a Flight:</label>
        <select
          id="flights"
          name="flights"
          style={{ margin: "10px" }}
          onChange={handleFrom}
        >
          <option defaultValue>from</option>
          <option value="vadodara">vadodara</option>
          <option value="ahmedabad">ahmedabad</option>
          <option value="banglore">banglore</option>
          <option value="mumbai">mumbai</option>
          <option value="goa">goa</option>
          <option value="hyderabad">hyderabad</option>
        </select>
        <select id="flights" name="flights" onChange={handleTo}>
          <option defaultValue>to</option>
          <option value="vadodara">vadodara</option>
          <option value="ahmedabad">ahmedabad</option>
          <option value="banglore">banglore</option>
          <option value="mumbai">mumbai</option>
          <option value="goa">goa</option>
          <option value="hyderabad">hyderabad</option>
        </select>
        <label htmlFor="departureDate" style={{ marginLeft: "10px" }}>
          Departure Date:
        </label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          style={{ margin: "10px" }}
          onChange={handleDepartureDate}
        />
        <label htmlFor="appt">Select Departure time:</label>
        <input
          type="time"
          id="appt"
          name="appt"
          step="2"
          onChange={handleDepartureTime}
        />
        <label htmlFor="landingDate" style={{ marginLeft: "10px" }}>
          Landing Date:
        </label>
        <input
          type="date"
          id="landingDate"
          name="landingDate"
          style={{ margin: "10px" }}
          onChange={handleLandingDate}
        />
        <label htmlFor="appt">Select Landing Time:</label>
        <input
          type="time"
          id="appt"
          name="appt"
          step="2"
          onChange={handleLandingTime}
        />
        <label htmlFor="price" style={{ marginLeft: "10px" }}>
          Price:
        </label>
        <input
          type="text"
          id="price"
          name="price"
          style={{ marginLeft: "10px" }}
          onChange={handlePrice}
        />

        <button style={{ margin: "10px" }} onClick={handleAdd}>
          Add a Flight
        </button>
      </form>
    </>
  );
};

export default AddFlight;
