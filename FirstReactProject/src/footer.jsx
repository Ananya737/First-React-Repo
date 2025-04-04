

const Footer = () => {
  return (
    <footer>
      <div className="footerIcons">
        <div className="iconContainer">
          <span><i className="fa-solid fa-phone-volume" aria-hidden="true"></i></span>
          <div className="border">
            <p className="iconName">Call us</p>
            <p className="iconValue">
              <a href="tel:8839073108">8839073108</a>
            </p>
          </div>
        </div>

        <div className="iconContainer">
          <span><i className="fa-solid fa-envelope" aria-hidden="true"></i></span>
          <div className="border">
            <p className="iconName">Write to us</p>
            <p className="iconValue">
              <a href="mailto:ananyasahu59513@gmail.com">ananyasahu59513@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="iconContainer">
          <span><i className="fa-solid fa-location-dot" aria-hidden="true"></i></span>
          <div>
            <p className="iconName">Address</p>
            <p className="iconValue">MP Nagar, Zone 1, Bhopal</p>
          </div>
        </div>
      </div>

      <div className="footerColumns">
        <div className="column1">
          <h1 className="footerlogo"><span id="V">TCS</span></h1>
          <p>
            Rent a car imperdiet sapien porttito the bibenum ellentesue <br />
            the commodo erat nesuen.
          </p>
          <div className="column1icons">
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            <i className="fa-brands fa-facebook-f" id="facebook" aria-hidden="true"></i>
            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
          </div>
        </div>

        <div className="column2">
          <h3>Quick Links</h3>
          <ul>
            <li><i className="fa-solid fa-circle" aria-hidden="true"></i> About</li>
            <li><i className="fa-solid fa-circle" aria-hidden="true"></i> Cars</li>
            <li><i className="fa-solid fa-circle" aria-hidden="true"></i> Car types</li>
            <li><i className="fa-solid fa-circle" aria-hidden="true"></i> Team</li>
            <li><i className="fa-solid fa-circle" aria-hidden="true"></i> Contact</li>
          </ul>
        </div>

        <div className="column3">
          <p className="c3h">Subscribe</p>
          <p>
            Want to be notified about our services? Just sign up and we&apos;ll <br />
            send you a notification by email.
          </p>
          <div className="subscribe">
            <label htmlFor="inpemail" className="visually-hidden">Email Address</label>
            <input type="email" placeholder="Email Address" id="inpemail" required />
            <i className="fa-solid fa-arrow-right" id="column3Icon" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>©2025 <span>TCS.</span> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
