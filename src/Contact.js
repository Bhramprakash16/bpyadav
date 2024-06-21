// src/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '200996d2-b887-45ae-a7e6-729309ce687f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h2 className="mb-4">Contact Me</h2>
              <p>Below are the details to reach out to me!</p>
            </div>
          </div>

          <div className="row d-flex contact-info mb-5">
            <ContactBox
              icon="icon-map-signs"
              title="Address"
              content="Rewari, Haryana"
            />
            <ContactBox
              icon="icon-phone2"
              title="Contact Number"
              content={<a href="tel://8168036902">+91 8168036902</a>}
            />
            <ContactBox
              icon="icon-paper-plane"
              title="Email Address"
              content={<a href="mailto:bhramprakshyadav16@gmail.com">bhramprakshyadav16@gmail.com</a>}
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <h2>Have a <span>Question?</span></h2>
              <div className="que" id="send-message">
                <form onSubmit={onSubmit}>
                  <input type="hidden" name="access_key" value="200996d2-b887-45ae-a7e6-729309ce687f" />
                  <div className="row gy-4 p-4">
                    <InputField
                      label="Full Name"
                      type="text"
                      name="fullname"
                      required={true}
                    />
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      required={true}
                      icon="bi-envelope"
                    />
                    <InputField
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      icon="bi-telephone"
                    />
                    <InputField
                      label="Subject"
                      type="text"
                      name="subject"
                      required={true}
                    />
                    <TextareaField
                      label="Message"
                      name="message"
                      required={true}
                    />
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
                <span>{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactBox = ({ icon, title, content }) => (
  <div className="col-md-6 col-lg-3 d-flex">
    <div className="align-self-stretch box p-4 text-center">
      <div className="icon d-flex align-items-center justify-content-center">
        <span className={icon}></span>
      </div>
      <h3 className="mb-4">{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

const InputField = ({ label, type, name, required, icon }) => (
  <div className="col-12 col-md-6">
    <label htmlFor={name} className="form-label">
      {label}
      {required && <span className="text-danger"> *</span>}
    </label>
    <div className="input-group">
      {icon && (
        <span className="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi ${icon}`} viewBox="0 0 16 16">
            {/* SVG Path */}
          </svg>
        </span>
      )}
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        required={required}
      />
    </div>
  </div>
);

const TextareaField = ({ label, name, required }) => (
  <div className="col-12">
    <label htmlFor={name} className="form-label">
      {label}
      {required && <span className="text-danger"> *</span>}
    </label>
    <textarea
      className="form-control"
      id={name}
      name={name}
      rows="3"
      required={required}
    ></textarea>
  </div>
);

export default Contact;
