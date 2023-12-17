import React from "react";
import NavBar from "../components/Navbar";
import EdoardoSerious from "../assets/EdoardoSerious.png";
import IsinSerious from "../assets/IsinSerious.png";
import TinyTreatsLogo from "../assets/TinyTreatsLogo.png";

const About = () => {
  return (
    <div>
      <NavBar />

      <div className="about-container">
        {/* Section 1: About Tiny Treats */}
        <div className="about-section">
          <h1>About Tiny Treats</h1>
          <div className="about-content">
            <p>
              Welcome to Tiny Treats, your go-to destination for simple and
              delightful gifts that celebrate the joy of giving. Our journey
              began with the idea of spreading happiness through small,
              thoughtful surprises. We believe that even the tiniest gestures
              can create lasting memories. At Tiny Treats, we curate a
              collection of charming items designed to bring smiles to your
              loved ones' faces.
            </p>
            {/* Image under Tiny Treats */}
            <div className="about-image-box">
              {/* Placeholder image for Tiny Treats */}
              <img src={TinyTreatsLogo} alt="Tiny Treats Logo" />
            </div>
            <p>
              Whether it's a special occasion or just a random act of kindness,
              Tiny Treats is here to make those moments extra special. Explore
              our carefully selected range of products, each chosen with love
              and attention to detail. Join us in the art of gifting and
              discover the joy of making someone's day, one tiny treat at a
              time.
            </p>
          </div>
        </div>

        {/* Section 2: The Creators */}
        <div className="about-section">
          <h1>The Creators</h1>
          <div className="about-content">
            {/* Edoardo's and Isin's Paragraphs in Boxes */}
            <div className="about-creators-container">
              {/* Edoardo's Box */}
              <div className="about-creator-box">
                <div className="about-image-box">
                  {/* Placeholder image for Edoardo */}
                  <img src={EdoardoSerious} alt="Edoardo" />
                </div>
                <div className="about-creator-content">
                  <h2>Edoardo</h2>
                  <p>
                    Hi, I'm Edoardo! Co-founder of Tiny Treats. The idea for our
                    website came from a desire to create a space where simple
                    gifts could express profound emotions. With a background in
                    design and a passion for spreading joy, I'm dedicated to
                    making Tiny Treats a place where every gift tells a story.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/edoardo-giambuzzi-45876599/"
                    className="about-linkedin-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find me on LinkedIn!
                  </a>
                </div>
              </div>

              {/* Isin's Box */}
              <div className="about-creator-box">
                <div className="about-image-box">
                  {/* Placeholder image for Isin */}
                  <img src={IsinSerious} alt="Isin" />
                </div>
                <div className="about-creator-content">
                  <h2>Isin</h2>
                  <p>
                    Hello! I'm Isin, the other half of Tiny Treats. My passion
                    lies in finding unique items that bring joy to everyday
                    life. I believe in the power of thoughtful gifts to create
                    meaningful connections. With Tiny Treats, we aim to inspire
                    a culture of giving and make each moment a tiny celebration.
                  </p>
                  {/* LinkedIn Button for Isin */}
                  <a
                    href="https://www.linkedin.com/in/isinkosemen/"
                    className="about-linkedin-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find me on LinkedIn!{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        style={{
          padding: "0.5%",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div>
          <a>Copyright </a>
          <span>&copy; 2023 Tiny Treats. All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default About;
