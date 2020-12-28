import React from "react";
import "../ContactStyle.css";
import emailjs from "emailjs-com";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { FaUserSecret } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMessageSquareEdit } from "react-icons/bi";

import { init } from "emailjs-com";
init("user_2XR842odwqdpIwaMq2bjy");

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tkmjq8r",
        "template_6yxwtlv",
        e.target,
        "user_2XR842odwqdpIwaMq2bjy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="div">
      <Nav />
      <form className="contact" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <header>Get In Contact With Me</header>
        <label>
          <FaUserSecret style={{ color: "#f736d6", marginRight: "5px" }} />
          Name
        </label>
        <input type="text" name="user_name" />
        <label>
          {" "}
          <MdEmail style={{ color: "#f736d6", marginRight: "5px" }} />
          Email
        </label>
        <input type="email" name="user_email" />
        <label>
          <BiMessageSquareEdit
            style={{ color: "#f736d6", marginRight: "5px" }}
          />
          Message
        </label>
        <textarea name="message" />
        <input type="submit" value="Send" className="btn" />
      </form>
      <Footer />
    </div>
  );
}
