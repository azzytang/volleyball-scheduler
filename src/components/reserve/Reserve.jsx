import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reserve.css";

const Reserve = () => {
  const navigate = useNavigate();
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("1");
  const [playerCount, setPlayerCount] = useState("6");
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");

  const courts = [
    { id: "court1", name: "Court 1", available: true },
    { id: "court2", name: "Court 2", available: true },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const durations = ["1", "1.5", "2", "2.5", "3"];

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split("T")[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedCourt ||
      !selectedDate ||
      !selectedTime ||
      !bookingName ||
      !bookingEmail
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Create booking data
    const bookingData = {
      id: Date.now().toString(), // Simple ID generation
      court: selectedCourt,
      date: selectedDate,
      time: selectedTime,
      duration: selectedDuration,
      playerCount,
      name: bookingName,
      email: bookingEmail,
      phone: bookingPhone,
      status: "confirmed", // Default status
      createdAt: new Date().toISOString(),
    };

    // Get existing bookings from localStorage
    const existingBookings = JSON.parse(
      localStorage.getItem("courtBookings") || "[]"
    );

    // Add new booking
    const updatedBookings = [...existingBookings, bookingData];

    // Save to localStorage
    localStorage.setItem("courtBookings", JSON.stringify(updatedBookings));

    console.log("Booking submitted:", bookingData);
    alert(
      "Booking submitted successfully! Redirecting to your reservations..."
    );

    // Reset form
    setSelectedCourt("");
    setSelectedDate("");
    setSelectedTime("");
    setSelectedDuration("1");
    setPlayerCount("6");
    setBookingName("");
    setBookingEmail("");
    setBookingPhone("");

    // Redirect to reservations page
    navigate("/reservations");
  };

  return (
    <div className="reserve-container">
      <div className="reserve-header">
        <div className="container">
          <h1>Reserve Your Court</h1>
          <p>Book your volleyball court and enjoy the game!</p>
        </div>
      </div>

      <div className="reserve-content">
        <div className="container">
          <div className="reserve-grid">
            {/* Court Selection */}
            <div className="reserve-main">
              <div className="reserve-section">
                <h2>Select Your Court</h2>
                <div className="courts-grid">
                  {courts.map((court) => (
                    <div
                      key={court.id}
                      className={`court-card ${
                        selectedCourt === court.id ? "selected" : ""
                      } ${!court.available ? "unavailable" : ""}`}
                      onClick={() =>
                        court.available && setSelectedCourt(court.id)
                      }
                    >
                      <div className="court-header">
                        <h3>{court.name}</h3>
                      </div>
                      <div className="court-footer">
                        <span
                          className={`court-status ${
                            court.available ? "available" : "unavailable"
                          }`}
                        >
                          {court.available ? "Available" : "Unavailable"}
                        </span>
                        {court.name.includes("Indoor") && (
                          <span className="court-type">Indoor</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="reserve-section">
                <h2>Select Date & Time</h2>
                <div className="datetime-grid">
                  <div className="form-group">
                    <label>Date *</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={getMinDate()}
                      max={getMaxDate()}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Time *</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="form-input"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Duration (hours)</label>
                    <select
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                      className="form-input"
                    >
                      {durations.map((duration) => (
                        <option key={duration} value={duration}>
                          {duration} hour{duration !== "1" ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Number of Players</label>
                    <select
                      value={playerCount}
                      onChange={(e) => setPlayerCount(e.target.value)}
                      className="form-input"
                    >
                      {[2, 4, 6, 8, 10, 12].map((count) => (
                        <option key={count} value={count}>
                          {count} players
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="reserve-section">
                <h2>Contact Information</h2>
                <div className="contact-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      className="form-input"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="reserve-sidebar">
              <div className="booking-summary">
                <h2>Booking Summary</h2>

                {selectedCourt && (
                  <div className="summary-details">
                    <div className="summary-item">
                      <span className="summary-label">Court:</span>
                      <span className="summary-value">
                        {courts.find((c) => c.id === selectedCourt)?.name}
                      </span>
                    </div>
                    {selectedDate && (
                      <div className="summary-item">
                        <span className="summary-label">Date:</span>
                        <span className="summary-value">
                          {new Date(selectedDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="summary-item">
                        <span className="summary-label">Time:</span>
                        <span className="summary-value">{selectedTime}</span>
                      </div>
                    )}
                    <div className="summary-item">
                      <span className="summary-label">Duration:</span>
                      <span className="summary-value">
                        {selectedDuration} hour
                        {selectedDuration !== "1" ? "s" : ""}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Players:</span>
                      <span className="summary-value">{playerCount}</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-total">
                      <span className="total-label">Total:</span>
                      <span className="total-value"></span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={
                    !selectedCourt ||
                    !selectedDate ||
                    !selectedTime ||
                    !bookingName ||
                    !bookingEmail
                  }
                  className="submit-button"
                >
                  Confirm Booking
                </button>

                <div className="booking-notes">
                  <p>• Free cancellation up to 1 hour before</p>
                  <p>• Please arrive 5 minutes early</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
