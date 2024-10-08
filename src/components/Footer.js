import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6 pt-4">
            <img
              src="assets/images/footerImgs/logo-white.png"
              alt="white-logo"
            />
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do
            </p>
            <div className="contacts">
              <div className="contactsBody d-flex align-items-center pt-3">
                <div className="contactsIcon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contactsText">
                  <p className="text-capitalize m-0 ps-3">
                    4920 trails end road ft, united states, fl 33311
                  </p>
                </div>
              </div>
              <div className="contactsBody d-flex align-items-center pt-3">
                <div className="contactsIcon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contactsText">
                  <p className="m-0 ps-3">nfo@example.com</p>
                  <p className="m-0 ps-3">test@example.com</p>
                </div>
              </div>
              <div className="contactsBody d-flex align-items-center pt-3">
                <div className="contactsIcon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contactsText">
                  <p className="m-0 ps-3">+123 456 789 123</p>
                  <p className="m-0 ps-3">+123 456 789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 pt-4">
            <div className="title">
              <h5>Quick links</h5>
              <hr className="mb-0" />
            </div>
            <div className="footerLinks pt-4">
              <p className="mb-2">About Us</p>
              <p className="mb-2">Menu</p>
              <p className="mb-2">Blog</p>
              <p className="mb-2">FAQ</p>
              <p className="mb-2">Services</p>
              <p className="mb-2">Gallery</p>
              <p className="mb-2">Contact Us</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 pt-4">
            <div className="title">
              <h5>Instagram</h5>
              <hr className="mb-0" />
            </div>
            <div className="instagramImages d-flex flex-wrap pt-4">
              <div className="image">
                <img
                  src="assets/images/footerImgs/pizza.webp"
                  className="w-100"
                  alt="pizza"
                />
              </div>
              <div className="image">
                <img
                  src="assets/images/footerImgs/grands.png"
                  className="w-100"
                  alt="grands"
                />
              </div>
              <div className="image">
                <img
                  src="assets/images/footerImgs/burger.jpg"
                  className="w-100"
                  alt="burger"
                />
              </div>
              <div className="image">
                <img
                  src="assets/images/footerImgs/soup.jpg"
                  className="w-100"
                  alt="soup"
                />
              </div>
              <div className="image">
                <img
                  src="assets/images/footerImgs/eggs.jpeg"
                  className="w-100"
                  alt="eggs"
                />
              </div>
              <div className="image">
                <img
                  src="assets/images/footerImgs/salad.png"
                  className="w-100"
                  alt="salad"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 pt-4 Subscribtion">
            <div className="title">
              <h5>Subscribe</h5>
              <hr className="mb-0" />
            </div>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus doloremque.
            </p>
            <form className="subscribeInput d-flex">
              <input
                id="subsemail"
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input id="subsbtn" type="submit" value="Subscribe" />
            </form>
            <div className="subscribeIcons pt-3">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-skype"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyrights d-flex justify-content-center align-items-center pb-4">
        <i className="fa-regular fa-copyright"></i>
        <p className="m-0 ps-1">Copyright Cafeu. 2024 All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
