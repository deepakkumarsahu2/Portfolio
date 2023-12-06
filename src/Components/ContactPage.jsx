import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="email">Email</label>
        <input type="text" name="" id="" />
        <label htmlFor="sub">Subject</label>
        <input type="text" name="" id="" />
        <label htmlFor="name">Message</label>
        <textarea
          name=""
          id=""
          placeholder="Write your Message"
          rows="6"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </>
  );
}
