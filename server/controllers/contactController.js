

const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body || {};

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // Clean input values
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    const cleanPhone =
      typeof phone === "string" ? phone.trim() : "";

    const cleanService =
      typeof service === "string" && service.trim()
        ? service.trim()
        : "General Inquiry";

    // Validate field lengths
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanPhone.length > 20 ||
      cleanMessage.length > 3000 ||
      cleanService.length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Save enquiry in MongoDB
    const newContact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      service: cleanService,
      message: cleanMessage,
    });

    // Send success response
    return res.status(201).json({
      success: true,
      message:
        "Thank You! Your request has been sent. Please wait, we will contact you as soon as possible.",
      data: {
        id: newContact._id,
      },
    });

  } catch (error) {
    console.error("Contact submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { createContact };



