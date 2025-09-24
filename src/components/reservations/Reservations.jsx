import React, { useState, useEffect } from "react";
import "./Reservations.css";

const Reservations = () => {
  const [bookings, setBookings] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Load bookings from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem("courtBookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  // Filter bookings based on status and search term
  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus =
      filterStatus === "all" || booking.status === filterStatus;
    const matchesSearch =
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.court.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "status-confirmed";
      case "pending":
        return "status-pending";
      case "cancelled":
        return "status-cancelled";
      default:
        return "status-confirmed";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return "✅";
      case "pending":
        return "⏳";
      case "cancelled":
        return "❌";
      default:
        return "✅";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    return timeString;
  };

  const getCourtName = (courtId) => {
    const courtNames = {
      court1: "Court 1 - Outdoor",
      court2: "Court 2 - Outdoor",
    };
    return courtNames[courtId] || courtId;
  };

  const cancelBooking = (bookingId) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === bookingId ? { ...booking, status: "cancelled" } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem("courtBookings", JSON.stringify(updatedBookings));
  };

  const rescheduleBooking = (bookingId) => {
    // This would typically open a modal or navigate to reschedule page
    alert(
      `Reschedule functionality would be implemented here for booking #${bookingId}`
    );
  };

  return (
    <div className="reservations-container">
      <div className="reservations-header">
        <div className="container">
          <h1>My Reservations</h1>
          <p>Manage and view all your volleyball court bookings</p>
        </div>
      </div>

      <div className="reservations-content">
        <div className="container">
          {/* Filters and Search */}
          <div className="filters-section">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by name, email, or court..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>

            <div className="filter-buttons">
              <button
                className={`filter-btn ${
                  filterStatus === "all" ? "active" : ""
                }`}
                onClick={() => setFilterStatus("all")}
              >
                All ({bookings.length})
              </button>
              <button
                className={`filter-btn ${
                  filterStatus === "confirmed" ? "active" : ""
                }`}
                onClick={() => setFilterStatus("confirmed")}
              >
                Confirmed (
                {bookings.filter((b) => b.status === "confirmed").length})
              </button>
              <button
                className={`filter-btn ${
                  filterStatus === "pending" ? "active" : ""
                }`}
                onClick={() => setFilterStatus("pending")}
              >
                Pending ({bookings.filter((b) => b.status === "pending").length}
                )
              </button>
              <button
                className={`filter-btn ${
                  filterStatus === "cancelled" ? "active" : ""
                }`}
                onClick={() => setFilterStatus("cancelled")}
              >
                Cancelled (
                {bookings.filter((b) => b.status === "cancelled").length})
              </button>
            </div>
          </div>

          {/* Bookings List */}
          <div className="bookings-section">
            {filteredBookings.length === 0 ? (
              <div className="no-bookings">
                <div className="no-bookings-icon">📅</div>
                <h3>No bookings found</h3>
                <p>
                  {bookings.length === 0
                    ? "You haven't made any bookings yet. Start by reserving a court!"
                    : "No bookings match your current filters."}
                </p>
                {bookings.length === 0 && (
                  <a href="/reserve" className="btn-primary">
                    Book a Court
                  </a>
                )}
              </div>
            ) : (
              <div className="bookings-grid">
                {filteredBookings.map((booking) => (
                  <div key={booking.id} className="booking-card">
                    <div className="booking-header">
                      <div className="booking-status">
                        <span
                          className={`status-badge ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          {getStatusIcon(booking.status)} {booking.status}
                        </span>
                      </div>
                      <div className="booking-id">#{booking.id}</div>
                    </div>

                    <div className="booking-details">
                      <div className="booking-info">
                        <h3>{getCourtName(booking.court)}</h3>
                        <div className="booking-meta">
                          <div className="meta-item">
                            <span className="meta-label">📅 Date:</span>
                            <span className="meta-value">
                              {formatDate(booking.date)}
                            </span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-label">⏰ Time:</span>
                            <span className="meta-value">
                              {formatTime(booking.time)}
                            </span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-label">⏱️ Duration:</span>
                            <span className="meta-value">
                              {booking.duration} hour
                              {booking.duration !== "1" ? "s" : ""}
                            </span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-label">👥 Players:</span>
                            <span className="meta-value">
                              {booking.playerCount}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="booking-contact">
                        <div className="contact-info">
                          <div className="contact-item">
                            <span className="contact-label">Name:</span>
                            <span className="contact-value">
                              {booking.name}
                            </span>
                          </div>
                          <div className="contact-item">
                            <span className="contact-label">Email:</span>
                            <span className="contact-value">
                              {booking.email}
                            </span>
                          </div>
                          {booking.phone && (
                            <div className="contact-item">
                              <span className="contact-label">Phone:</span>
                              <span className="contact-value">
                                {booking.phone}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="booking-price">
                        <span className="price-label">Total:</span>
                        <span className="price-value">
                          ${booking.totalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="booking-actions">
                      {booking.status === "confirmed" && (
                        <>
                          <button
                            className="btn-secondary"
                            onClick={() => rescheduleBooking(booking.id)}
                          >
                            Reschedule
                          </button>
                          <button
                            className="btn-danger"
                            onClick={() => cancelBooking(booking.id)}
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      {booking.status === "pending" && (
                        <button
                          className="btn-danger"
                          onClick={() => cancelBooking(booking.id)}
                        >
                          Cancel
                        </button>
                      )}
                      {booking.status === "cancelled" && (
                        <span className="cancelled-note">
                          Booking cancelled
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
