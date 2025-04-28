import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mkgorlrr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Contact me</h2>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input id="email" type="email" name="email" className="form-control" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="form-control" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-dark"
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
