"use client";

import { FormEvent } from "react";

export default function QuotePage() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you. Your quote request has been noted. Please email info@itcindia.org for fastest response."
    );
  };

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-eyebrow">Request a Quote</p>
          <h1 className="page-title">Tell us about your testing needs</h1>
          <p className="page-lead">
            Share product details and standards. Our team will respond with scope and next steps.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="page-body-inner quote-wrap">
          <form className="quote-form" onSubmit={onSubmit}>
            <label>
              Full name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Company
              <input name="company" placeholder="Company name" />
            </label>
            <label>
              Email
              <input type="email" name="email" required placeholder="you@company.com" />
            </label>
            <label>
              Phone
              <input name="phone" placeholder="+91 ..." />
            </label>
            <label>
              Service interest
              <input name="service" placeholder="Electrical, Photometry, EMC..." />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} placeholder="Product type, standards, timeline..." />
            </label>
            <button className="btn btn-primary" type="submit">
              Submit Request <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
