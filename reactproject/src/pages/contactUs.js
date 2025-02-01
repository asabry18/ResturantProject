export default function ContactUs() {
  return (
    <div className="contactUsPageContainer">
      <div className="contactUsPage">
        <div className="contactTitle">
          <h1>Contact Us</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <form action="submit" className="form">
          <div className="userInput">
            <div className="textRow">
              <div className="labelInput">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="label"
                />
              </div>
              <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="label"
                />
              </div>
            </div>

            <div className="labelInput">
              <label htmlFor="Subject">Subject</label>
              <input
                type="text"
                id="text"
                placeholder="Write a Subject"
                className="label"
              />
            </div>

            <div className="labelInput">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write a message"
                className="messagelabel"
              ></textarea>
            </div>
            <button className="buttonInput">Send</button>
          </div>
        </form>
        <div className="contactInfo">
          <div className="contactContainer">
            <h6>Call Us:</h6>
            <p>
              <span>+1-234-567-8900</span>
            </p>
          </div>

          <div className="contactContainer">
            <h6>Hours:</h6>
            <p>Mon-Fri: 11am - 8pm Sat-Sun: 9am - 10pm</p>
          </div>

          <div className="contactContainer">
            <h6>Our Location:</h6>
            <p>123 Bridge Street Nowhere Land, LA 12345 United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}
