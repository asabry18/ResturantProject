import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="row mx-auto my-5 CContactUsSection">
        <div className="col-12 col-md-8">
          <div className="container">
            <div className="row py-3">
              <div>
                <h5 className="text-center CallButton">Contact Us</h5>
              </div>
            </div>
            <div>
              <h3 className="text-center">Please Get In Touch With Us</h3>
            </div>

            <div className="container">
              <div className="row">
                <form role="form" id="contact-form" className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <i className="fa fa-user icon CFormIcon"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          autocomplete="off"
                          id="name"
                          placeholder="Your Name*"
                        />
                        <small className="text-danger" id="nameError"></small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <i className="fa-solid fa-envelope icon CFormIcon"></i>
                        <input
                          type="email"
                          className="form-control"
                          name="Email"
                          autocomplete="off"
                          id="email"
                          placeholder="Your E-mail*"
                        />
                        <small className="text-danger" id="emailError"></small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <i className="fa-solid fa-phone icon CFormIcon"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="Phone"
                          autocomplete="off"
                          id="phone"
                          placeholder="Your Phone*"
                        />
                        <small className="text-danger" id="phoneError"></small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <i className="fa-solid fa-location-dot icon CFormIcon"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="Location"
                          autocomplete="off"
                          id="location"
                          placeholder="Your Location*"
                        />
                        <small
                          className="text-danger"
                          id="locationError"
                        ></small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control textarea"
                          rows="3"
                          name="Message"
                          id="message"
                          placeholder="Comment*"
                        ></textarea>
                        <small
                          className="text-danger"
                          id="messageError"
                        ></small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center mt-2">
                      <button
                        type="submit"
                        className="main-btn"
                        onclick="showInlineAlert()"
                      >
                        Send Message
                      </button>
                      <div id="inline-alert" className="CAlert"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 CGoogleMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7537851.770682577!2d86.97732224861059!3d22.706239176045763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2seg!4v1725790908528!5m2!1sen!2seg"
            width="300"
            height="400"
            style={{ border: "0" }} // style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
