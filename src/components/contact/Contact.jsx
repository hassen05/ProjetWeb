import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const mapLink = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYzMRGZgrVhIR-pZ9NlrAPVo&key=AIzaSyAfCUAAmT3l0nMFP1oCsYs1g3I0Og3WkRY`;

  return (
    <>
      <Back title="Contact us" />
      <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
  type="text/javascript" charset="utf-8"></script>
<script src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
  type="text/javascript" charset="utf-8"></script>


      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              title="map"
              src={mapLink}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Esprim, Monastir</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>info@yoursite.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
