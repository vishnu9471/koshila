



import { useState } from "react";
import {
  MapPin,
  Mail,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      // Show thank-you message only after successful backend response
      setSubmitted(true);

      // Clear form fields
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        {/* CONTACT HEADING */}
        <div className="contact-heading">
          <p className="section-label">
            CONTACT KOSHILA
          </p>

          <h2 className="section-title">
            Let's Discuss Your Next Project.
          </h2>

          <p>
            Have an idea or looking for a technology partner?
            Tell us about your requirements. Our team is ready
            to help you turn your ideas into powerful digital
            solutions.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="contact-grid">

          {/* LEFT SIDE - CONTACT INFORMATION */}
          <div className="contact-info">

            <h3>
              Let's Start a Conversation.
            </h3>

            <p>
              Share your project requirements and let's
              explore how technology can help your business
              grow and succeed.
            </p>

            {/* LOCATION */}
            <div className="contact-detail">
              <MapPin size={22} />

              <div>
                <strong>Our Location</strong>

                <span>
                  Koshila, Gaya, Bihar, India
                </span>

                <span>
                  PIN Code: 824231
                </span>
              </div>
            </div>

            {/* EMAIL / CONTACT */}
            <div className="contact-detail">
              <Mail size={22} />

              <div>
                <strong>Connect With Us</strong>

                <span>
                  Connect with our team through our
                  social media profiles.
                </span>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="contact-socials">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/vishnu-kant-pandey-8332a9297/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <span
                  style={{
                    fontSize: "19px",
                    fontWeight: "800",
                  }}
                >
                  in
                </span>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/is_that_vishnu/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <span
                  style={{
                    fontSize: "27px",
                    fontWeight: "700",
                  }}
                >
                  ◎
                </span>
              </a>

            </div>

            {/* LOCATION CTA */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Koshila%2C+Gaya%2C+Bihar+824231"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
              style={{ marginTop: "28px" }}
            >
              View Our Location
              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* RIGHT SIDE - CONTACT FORM / SUCCESS MESSAGE */}
          <div className="contact-form-wrapper">

            {!submitted ? (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* NAME AND EMAIL */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>

                </div>

                {/* PHONE AND SERVICE */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      maxLength={20}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      Interested Service *
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="Software Development">
                        Software Development
                      </option>

                      <option value="Web Application Development">
                        Web Application Development
                      </option>

                      <option value="Website Development">
                        Website Development
                      </option>

                      <option value="UI/UX Design">
                        UI/UX Design
                      </option>

                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>

                      <option value="E-commerce Solutions">
                        E-commerce Solutions
                      </option>

                      <option value="Custom Software Solutions">
                        Custom Software Solutions
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                </div>

                {/* PROJECT DETAILS */}
                <div className="form-group">

                  <label htmlFor="message">
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={3000}
                    placeholder="Tell us about your project, requirements and business goals..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Enquiry"}

                  <Send size={18} />
                </button>

                {/* ERROR MESSAGE */}
                {status && (
                  <p
                    className="form-status form-error"
                    role="alert"
                  >
                    {status}
                  </p>
                )}

              </form>

            ) : (

              /* SUCCESS MESSAGE */
              <div
                className="contact-success"
                role="status"
                aria-live="polite"
              >

                <div className="success-icon">
                  <CheckCircle2 size={48} />
                </div>

                <h2>
                  Thank You!
                </h2>

                <p className="success-main-text">
                  Your request has been sent successfully.
                </p>

                <p className="success-description">
                  Please wait, we will contact you as soon
                  as possible.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;



