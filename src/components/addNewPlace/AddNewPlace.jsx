import React, { useState } from "react";
import "./AddNewPlace.css";

const AddNewPlace = () => {
  const [formData, setFormData] = useState({
    facilityName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    website: "",
    courtType: "indoor",
    numberOfCourts: 1,
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedAmenities = checked
        ? [...formData.amenities, value]
        : formData.amenities.filter((item) => item !== value);

      setFormData((prev) => ({
        ...prev,
        amenities: updatedAmenities,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        facilityName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        phone: "",
        email: "",
        website: "",
        courtType: "indoor",
        numberOfCourts: 1,
        courtSurface: "hardwood",
        amenities: [],
        hourlyRate: "",
        description: "",
        images: [],
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const amenitiesList = [
    "Parking",
    "Showers",
    "Locker Rooms",
    "Equipment Rental",
    "Pro Shop",
    "Snack Bar",
    "WiFi",
    "Air Conditioning",
    "Lighting",
    "Scoreboards",
    "Bleachers",
    "Tournament Space",
  ];

  return (
    <div className="add-place-container">
      {/* Header */}
      <div className="add-place-header">
        <div className="add-place-header-content">
          <h1>Add New Place</h1>
          <p>
            Help expand our volleyball community by adding your facility to our
            platform.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="add-place-content">
        <div className="add-place-form-container">
          <form onSubmit={handleSubmit} className="add-place-form">
            {/* Basic Information */}
            <div className="form-section">
              <h2>Basic Information</h2>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="facilityName">Facility Name *</label>
                  <input
                    type="text"
                    id="facilityName"
                    name="facilityName"
                    value={formData.facilityName}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter facility name"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="address">Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter street address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter city"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter state"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter ZIP code"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="website">Website (Optional)</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter website URL"
                  />
                </div>
              </div>
            </div>

            {/* Court Details */}
            <div className="form-section">
              <h2>Court Details</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="courtType">Court Type *</label>
                  <select
                    id="courtType"
                    name="courtType"
                    value={formData.courtType}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="both">Both Indoor & Outdoor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfCourts">Number of Courts *</label>
                  <input
                    type="number"
                    id="numberOfCourts"
                    name="numberOfCourts"
                    value={formData.numberOfCourts}
                    onChange={handleChange}
                    required
                    min="1"
                    max="20"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="courtSurface">Court Surface *</label>
                  <select
                    id="courtSurface"
                    name="courtSurface"
                    value={formData.courtSurface}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="hardwood">Hardwood</option>
                    <option value="synthetic">Synthetic</option>
                    <option value="sand">Sand</option>
                    <option value="concrete">Concrete</option>
                    <option value="asphalt">Asphalt</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="hourlyRate">Hourly Rate ($) *</label>
                  <input
                    type="number"
                    id="hourlyRate"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="form-input"
                    placeholder="Enter hourly rate"
                  />
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="form-section">
              <h2>Amenities</h2>
              <p className="section-description">
                Select all amenities available at your facility:
              </p>
              <div className="amenities-grid">
                {amenitiesList.map((amenity) => (
                  <div key={amenity} className="amenity-item">
                    <input
                      type="checkbox"
                      id={amenity}
                      name="amenities"
                      value={amenity}
                      checked={formData.amenities.includes(amenity)}
                      onChange={handleChange}
                      className="amenity-checkbox"
                    />
                    <label htmlFor={amenity} className="amenity-label">
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="form-section">
              <h2>Description</h2>
              <div className="form-group">
                <label htmlFor="description">Facility Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Describe your facility, including any special features, rules, or important information for players..."
                ></textarea>
              </div>
            </div>

            {/* Image Upload */}
            <div className="form-section">
              <h2>Images</h2>
              <p className="section-description">
                Upload photos of your facility (optional but recommended):
              </p>
              <div className="form-group">
                <input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file-input"
                />
                <label htmlFor="images" className="file-input-label">
                  Choose Files
                </label>
                {formData.images.length > 0 && (
                  <div className="selected-files">
                    <p>{formData.images.length} file(s) selected</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-section">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? "Submitting..." : "Add Facility"}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you! Your facility has been submitted successfully.
                  We'll review it and add it to our platform within 24-48 hours.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewPlace;
