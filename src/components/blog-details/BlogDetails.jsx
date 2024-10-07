import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/footer.css';
import '../../assets/cssbootstrap/all.min.css';
import '../../assets/cssbootstrap/bootstrap.min.css';
import '../../assets/css/blog-details.css';
import navIcon from '../../assets/images/navbarImgs/logo.png'
import saladImg from '../../assets/images/blogDetailsImgs/3.png'
import yogartImg from '../../assets/images/blogDetailsImgs/2.png'
import chickenImg from '../../assets/images/blogDetailsImgs/1.png'
import footerLogo from '../../assets/images/footerImgs/logo-white.png'
import  { LinksArray } from '../../assets/js/script';
import burgerImg from "../../assets/images/footerImgs/burger.jpg"
import eggsImg from "../../assets/images/footerImgs/eggs.jpeg"
import pizzaImg from "../../assets/images/footerImgs/pizza.webp"
import soupImg from"../../assets/images/footerImgs/soup.jpg"
import grandsImg from '../../assets/images/footerImgs/grands.png'
const BlogDetails = () => {
  return (
    <div>
      {/* Navbar Beginning */}
      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={navIcon}
              alt="Cafeu Logo"
              width="100"
              height="30"
              className="d-inline-block align-text-center"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reservation">
                  Reservation
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="text-black ms-2 border-0"
                type="submit"
                style={{ backgroundColor: 'transparent' }}
              >
                <i className="fa-solid fa-headset fa-xl me-1" style={{ color: '#c33' }}></i>
                +880 123 465 789
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar End*/}

      {/* Blog details logo */}
      <div className="blog-details-bg d-flex flex-column justify-content-center align-items-center mb-5">
        <h1 style={{ fontWeight: '700' }}>Blog Details</h1>
        <p><a href="/">Home</a> / Menu</p>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-8 col-sm-12 mb-5" >
            <div className="card mb-3 ">
              <img
                src={saladImg}
                className="card-img-top"
                alt="Rice and salad"
              />
              <div className="card-body p-5">
                <h6 className="card-title text-muted">
                  <i className="fa-solid fa-calendar-days"></i> Sep 5, 2023
                </h6>
                <h1>Make Authentic Italian Margherita Pizza at Home</h1>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non iusto vero natus at facilis
                  hic, amet provident nisi aperiam dolores nemo deserunt qui
                  repellat mollitia quod voluptas quas aspernatur nostrum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque vel fugit expedita atque quaerat nihil ex tenetur
                  ipsam consequuntur fuga velit voluptatibus maxime neque,
                  mollitia sed odio libero ipsum debitis.
                </p>
                <br />
                <h1>Special Food Recipes for Special</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima quod nostrum totam aspernatur modi voluptas aut,
                  dolores quasi aliquid atque! Quae doloremque deleniti aliquam
                  totam voluptatibus ipsum, tempore deserunt exercitationem!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 ">
            <h4 className="mt-sm-3 mt-md-0">Latest Post</h4>
            <div
              className="progress"
              role="progressbar"
              aria-label="Latest post progress"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: '2px' }}
            >
              <div className="progress-bar" style={{ width: '25%' }}></div>
            </div>

            <ul className="list-unstyled ">
              <li className="d-flex gap-3 align-items-center mb-3">
                <img src={chickenImg} alt="Restaurant Town" />
                <a href="chicken img" className="text-decoration-none text-dark fw-bold">
                  New Restaurant Town Our Ple Award Contract
                  <h6 className="card-title text-muted">
                   Aug 1, 2023
                </h6>
                </a>
              </li>
              <li className="d-flex gap-3 align-items-center mb-3">
                <img src={yogartImg} alt="Yogurt breakfast bowls" />
                <a href="yogart img" className="text-decoration-none text-dark fw-bold">
                  Greek Yogurt Breakfast Bowls Ple Award Contract
                  <h6 className="card-title text-muted">
                   Jan 14, 2023
                </h6>
                </a>
              </li>
              <li className="d-flex gap-3 align-items-center mb-3">
                <img src={saladImg} alt="Margherita Pizza" />
                <a href="salad img" className="text-decoration-none text-dark fw-bold">
                  Make Authentic Italian Margherita Pizza
                  <h6 className="card-title text-muted">
                   Sep 5, 2023
                </h6>
                </a>
                
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-6 pt-4">
              <img src={footerLogo} alt="Cafeu Logo" />
              <p className="pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod.
              </p>
              <div className="contacts">
                <div className="contactsBody d-flex align-items-center pt-3">
                  <i className="fa-solid fa-location-dot"></i>
                  <p className="text-capitalize m-0 ps-3">
                    4920 Trails End Road, Ft, United States, FL 33311
                  </p>
                </div>
                <div className="contactsBody d-flex align-items-center pt-3">
                  <i className="fa-solid fa-envelope"></i>
                  <p className="m-0 ps-3">info@example.com</p>
                  
                </div>
                <div className="contactsBody d-flex align-items-center pt-3">
                  <i className="fa-solid fa-phone"></i>
                  <p className="m-0 ps-3">+123 456 789 123</p>
                  <p className="m-0 ps-3">+123 456 789</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6 pt-4">
              <div className="title">
                <h5>Quick Links</h5>
                <hr className="mb-0" />
              </div>
              <div className="footerLinks pt-4">   {LinksArray.map((link, index) => (
        <p key={index} className="mb-2">{link}</p>
      ))} </div>
            
            </div>

            <div className="col-lg-3 col-md-4 col-6 pt-4">
              <div className="title">
                <h5>Instagram</h5>
                <hr className="mb-0" />
              </div>
              <div className="instagramImages d-flex flex-wrap pt-4">
                <div className="image">
                  <img
                    src={pizzaImg}
                    className="w-100"
                    alt="Instagram pizza"
                  />
                </div>
                <div className="image">
                  <img
                    src={grandsImg}
                    className="w-100"
                    alt="Instagram grands"
                  />
                </div>
                <div className="image">
                  <img
                    src={burgerImg}
                    className="w-100"
                    alt="Instagram burger"
                  />
                </div>
                <div className="image">
                  <img
                    src={soupImg}
                    className="w-100"
                    alt="Instagram soup"
                  />
                </div>
                <div className="image">
                  <img
                    src={eggsImg}
                    className="w-100"
                    alt="Instagram eggs"
                  />
                </div>
                <div className="image">
                  <img
                    src={saladImg}
                    className="w-100"
                    alt="Instagram salad"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6 pt-4">
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
          <i className="fa-regular fa-copyright" style={{ fontSize: '10px' }}></i>
          <p className="m-0 ps-1">Copyright Cafeu. 2024 All Right Reserved</p>
        </div>
      </footer>

      {/* Scripts */}
      <script src="assets/js/script.js"></script>
      <script src="assets/jsbootstrap/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default BlogDetails;
