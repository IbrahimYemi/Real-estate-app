import React from 'react';

export default function Contact() {
  function handleSubit(e) {
    e.preventDefault;
  }
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form action="" onSubmit={handleSubit}>
        <div className="names">
          <input placeholder="firstname" type="text" required />
          <input placeholder="lastname" type="text" required />
          <input placeholder="email" type="email" required />
        </div>
        <div className="textarea">
          <textarea
            className="message"
            name=""
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className="submit" onClick={handleSubit}>
            Get In Touch
          </button>
        </div>
      </form>
    </div>
  );
}
