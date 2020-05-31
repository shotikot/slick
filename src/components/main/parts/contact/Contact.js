import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const changeHandler = e =>
    setState({ ...state, [e.target.name]: e.target.value });
  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <p>
        Contact us by writing email, <br/> we will get in touch with you
        soon.
      </p>
      <div className="contact-grid">
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={changeHandler}
                required
              />
              <input
                type="text"
                name="surname"
                value={state.surname}
                onChange={changeHandler}
                placeholder="Surname"
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="subject"
                value={state.subject}
                placeholder="Subject"
                onChange={changeHandler}
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={changeHandler}
                required
              />
            </div>
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              className="message"
              onChange={changeHandler}
              value={state.message}
              required
            />
            <button className="primary-button no-mrgn">Send</button>
          </form>
        </div>
        <div className="contact-img">
          <img src={require("./photos/chat.png")} alt="chat flat" />
        </div>
      </div>
    </div>
  );
};
