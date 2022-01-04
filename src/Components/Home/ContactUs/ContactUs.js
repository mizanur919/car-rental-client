import React from "react";
import FooterTop from "../../Shared/Footer/FooterTop";
import Navigation from "../../Shared/Navigation/Navigation";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Navigation />
      <div className="mb-5">
        <h1 className="bg-primary text-white py-5">Contact Us</h1>
        <div className="container border p-2 form-body">
          <form className="contact-form text-start">
            <label>Name :</label>
            <input type="text" name="name" className="form-control" />

            <label>Email :</label>
            <input type="email" name="user_email" className="form-control" />

            <label>Message :</label>
            <textarea name="message" rows="4" className="form-control" />

            <input
              type="submit"
              value="Send"
              className="form-control btn btn-primary mt-5"
            />
          </form>
        </div>
      </div>
      <FooterTop />
    </>
  );
};

export default ContactUs;
