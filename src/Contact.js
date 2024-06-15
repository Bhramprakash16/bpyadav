// src/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-form">
          <form action="#" method="post">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h1 className="big big-2">Contact</h1>
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
              content={<a href="mailto:bhramprakshyadav16.com">bhramprakshyadav16@gmail.com</a>} 
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <h2>Have a <span>Question?</span></h2>
              <div className="que" id="send-message">
                <form action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="53850583-f0df-4410-b578-7dcc38204284" />
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
