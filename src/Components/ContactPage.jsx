import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <form action="https://formspree.io/f/xjvqnnan" method="POST" name>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="" />
        <label htmlFor="sub">Subject</label>
        <input type="text" name="sub" id="" />
        <label htmlFor="text">Message</label>
        <textarea
          name="text"
          id=""
          placeholder="Write your Message"
          rows="6"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </>
  );
}
