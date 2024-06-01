import React, { useState } from "react";
import "../Pages/ContactUs.css";
import Navbar from "../Components/Navbar";

function ContactUs() {
  return (
    <div className="PageAllContactUs">
      <div className="NavbarContactUsAll">
        <Navbar />
      </div>

      <div className="ContactFormContainer">
        <div className="ContactFormBack">
        <h2 style={{fontFamily:'cursive',fontSize:'30px'}}>Contact Us</h2>
        <form className="formAllContactUsForm">
          <div className="form-ContactUsInput">
            <label>Name-Surname</label>
            <input type="text" name="nameSurname" />
          </div>
          <div className="form-ContactUsInput">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-ContactUsInput">
            <label>Phone</label>
            <input type="tel" name="phone" />
          </div>
          <div className="form-ContactUsInput">
            <label>Subject</label>
            <input type="text" name="subject" />
          </div>
          <div className="form-ContactUsInput">
            <label>How can we help?</label>
            <textarea name="message"></textarea>
          </div>
          <div className="form-ContactUsInput">
            <label>6 + 4?</label>
            <input type="text" name="captcha" />
          </div>
          <button className="ContactUsSubmitButton" type="submit">Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;
