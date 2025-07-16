import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

/* ------------------------------------------------------------------ */
/* 1. Pick up the contact‑API host → .env                              */
/* ------------------------------------------------------------------ */
const API_BASE =
  // CRA                       // Vite (if you later switch)
  process.env.REACT_APP_API_BASE || import.meta.env.VITE_API_BASE || "";

/* ------------------------------------------------------------------ */
/* 2. Component                                                      */
/* ------------------------------------------------------------------ */
const Contact = () => {
  /* ----- state --------------------------------------------------- */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  /* ----- handlers ------------------------------------------------ */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        const msg =
          data?.errors?.[0]?.msg || data?.message || "Something went wrong.";
        throw new Error(msg);
      }

      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ----- UI ------------------------------------------------------- */
  return (
    <div className="Contact-container">
      <div className="Contact-wrapper">
        <section className="Contact">
          {/* Header */}
          <header className="Contact-header">
            <h2 className="Contact__title">Get In Touch With Us</h2>
            <p className="Contact__subtitle">
              Have questions or ready to transform your outdoor space? Our team
              is here to help with all your landscaping needs.
            </p>
          </header>

          <div className="Contact-content">
            {/* Info (phone/email/location) */}
            <aside className="Contact-info-section">
              <div className="Contact__info">
                <InfoItem
                  Icon={FaPhoneAlt}
                  title="Phone"
                  text="(206)-258-7535"
                  hours="Mon‑Fri · 8 am – 6 pm"
                />
                <InfoItem
                  Icon={FaEnvelope}
                  title="Email"
                  text="primedlandscaping@gmail.com"
                  hours="Response within 24 h"
                />
                <InfoItem
                  Icon={FaMapMarkerAlt}
                  title="Location"
                  text="Greater Seattle Area"
                  hours="Consultations by appointment"
                />
              </div>
            </aside>

            {/* Contact form */}
            <form className="Contact__form" onSubmit={handleSubmit} noValidate>
              {/* First & last name */}
              <div className="Contact__form-group double-field">
                <InputField
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="Contact__form-group">
                <InputField
                  id="email"
                  type="email"
                  label="Email Address *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone (optional) */}
              <div className="Contact__form-group">
                <InputField
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Message textarea */}
              <div className="Contact__form-group">
                <div className="Contact-form-field Contact-textarea-field">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="message">Your Message</label>
                  <div className="Contact-form-field-underline"></div>
                </div>
              </div>

              {/* Submit button */}
              <div className="Contact__form-action">
                <button
                  type="submit"
                  className="Contact-btn Contact-btn--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                  <FaPaperPlane className="Contact-btn-icon" />
                </button>
              </div>

              {/* Success / error notes */}
              {submitSuccess && (
                <p className="Contact__success">
                  ✅ Thank you! Your message has been sent.
                </p>
              )}
              {error && <p className="Contact__error">⚠️ {error}</p>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Helper sub‑components                                               */
/* ------------------------------------------------------------------ */
const InfoItem = ({ Icon, title, text, hours }) => (
  <div className="Contact__item">
    <div className="Contact__icon-circle">
      <Icon className="Contact__icon" />
    </div>
    <div className="Contact__item-content">
      <h3 className="Contact__item-title">{title}</h3>
      <p className="Contact__item-text">{text}</p>
      <p className="Contact__item-hours">{hours}</p>
    </div>
  </div>
);

const InputField = ({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) => (
  <div className="Contact-form-field">
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      required={required}
    />
    <label htmlFor={id}>{label}</label>
    <div className="Contact-form-field-underline"></div>
  </div>
);

export default Contact;
