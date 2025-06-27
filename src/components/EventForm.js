import React, { useState, useMemo, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countries from "world-countries";
import validator from "validator";
import toast, { Toaster } from "react-hot-toast";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import "../styles/EventForm.css";

function countryCodeToFlagEmoji(code) {
  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()));
}

const fields = [
  { name: "name", placeholder: "First Name", type: "text" },
  { name: "surname", placeholder: "Surname", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
];

const EventForm = () => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [emailValid, setEmailValid] = useState(true);
  const [nationality, setNationality] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const [keyboardOpen, setKeyboardOpen] = useState(false);

useEffect(() => {
  const initialHeight = window.innerHeight;

  function handleResize() {
    // If the height is shrunk significantly, assume keyboard open
    if (window.innerHeight < initialHeight - 150) {
      setKeyboardOpen(true);
    } else {
      setKeyboardOpen(false);
    }
  }

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const nationalityOptions = useMemo(() => {
    return countries
      .map((country) => {
        const dem = country.demonyms;
        const demonym = dem?.m || dem?.f || dem?.n || country.name.common;
        return {
          code: country.cca2,
          demonym,
          flag: countryCodeToFlagEmoji(country.cca2),
          name: country.name.common,
        };
      })
      .filter((opt) => !!opt.demonym)
      .sort((a, b) => a.demonym.localeCompare(b.demonym));
  }, []);

  const filteredOptions = nationalityOptions.filter(
    (opt) =>
      opt.demonym.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opt.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setSearchTerm("");
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      setSearchTerm("");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setEmailValid(validator.isEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validator.isEmail(formData.email)) {
      setEmailValid(false);
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!phone || phone.length < 6) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (!nationality) {
      toast.error("Please select your nationality.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://afinetrip-promo-app-backend.onrender.com/api/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            nationality: nationality.demonym,
            phone: "+" + phone,
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        setCouponCode(data.coupon || "EVENT10");
        setSubmitted(true);
        toast.success("Registration successful!");
      } else {
        throw new Error("API returned success: false");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="eventform-container">
      <Toaster position="top-center" />

      {loading ? (
        <div className="eventform-loader">
          <div className="loader-spinner"></div>
          <p>Submitting your registration...</p>
        </div>
      ) : submitted ? (
        <div className="eventform-thankyou">
          <h3>Thank you for registering!</h3>
          <p>
            Your 10% voucher code is: <strong>{couponCode}</strong>
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="eventform-form"
          autoComplete="off"
        >
          <h3 className="eventform-title">Register Now</h3>

          {fields.map(({ name, placeholder, type }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              required
              onChange={handleChange}
              className={`eventform-input ${
                name === "email" && !emailValid ? "invalid" : ""
              }`}
              autoComplete="off"
            />
          ))}

          <div
            className="eventform-input"
            style={{
              position: "relative",
              cursor: "pointer",
              userSelect: "none",
            }}
            ref={dropdownRef}
            tabIndex={0}
            onClick={() => setDropdownOpen((open) => !open)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setDropdownOpen((open) => !open);
              }
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {nationality ? (
                <span>{nationality.demonym}</span>
              ) : (
                <span style={{ color: "#aaa" }}>Select Nationality</span>
              )}
              <span style={{ marginLeft: "auto" }}>▼</span>
            </div>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "250px",
                  background: "white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  zIndex: 10,
                  overflow: "hidden",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  placeholder="Search nationality..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    border: "none",
                    borderBottom: "1px solid #ddd",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                />

                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <li
                        key={option.code}
                        onClick={() => {
                          setNationality(option);
                          setDropdownOpen(false);
                          setSearchTerm("");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setNationality(option);
                            setDropdownOpen(false);
                            setSearchTerm("");
                          }
                        }}
                        tabIndex={0}
                        style={{
                          padding: "8px 12px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          backgroundColor:
                            nationality?.code === option.code
                              ? "#e6f0ff"
                              : "transparent",
                        }}
                      >
                        <span>{option.demonym}</span>
                      </li>
                    ))
                  ) : (
                    <li
                      style={{
                        padding: "8px 12px",
                        color: "#999",
                        fontStyle: "italic",
                      }}
                    >
                      No results found.
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <div
            className="eventform-phone-section"
            style={{ marginTop: "1rem" }}
          >
            <PhoneInput
              country={"pl"}
              value={phone}
              onChange={setPhone}
              inputClass="eventform-input" // keep this for base styles
              containerClass={`phone-input-container ${keyboardOpen ? "dropdown-up" : ""}`}
              inputStyle={{
                width: "10%",
                height: "40px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                paddingLeft: "48px", // leave space for the country flag dropdown
              }}
              buttonStyle={{
                border: "1px solid #ccc",
                borderRadius: "6px 0 0 6px",
                background: "white",
              }}
              containerStyle={{
                width: "100%",
              }}
              inputProps={{
                name: "phone",
                required: true,
                autoComplete: "off",
                style: { fontSize: "1rem" },
              }}
              enableSearch
            />
          </div>

          <button
            type="submit"
            className="eventform-button"
            style={{ marginTop: "1.5rem" }}
          >
            Submit
          </button>
        </form>
      )}
      <div className="eventform-social-inline">
        <a
          href="https://www.instagram.com/afinetrip?igsh=ZzkzMzd3dmV1Ymkx"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/+48532872000"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61568060425145"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
      </div>
    </section>
  );
};

export default EventForm;
