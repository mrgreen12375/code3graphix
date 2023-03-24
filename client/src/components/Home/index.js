import React from "react";
import { Link } from 'react-router-dom';
import Carousel from '../../assets/images/carousel_ex.png'

function Home() {

  return (
    <main className="home">
      <h1>Custom Lazer Engraving</h1>
      <h2>Awards+Recognition+Gifts+Signs+More</h2>
      <p>Laser engraving is a process that vaporizes materials into fumes to engrave permanent, deep marks. The laser beam acts as a chisel, incising marks by removing layers from the surface of the material. The laser hits localized areas with massive levels of energy to generate the high heat required for vaporization.</p>
      <div className="steps">
        <div className="steps">
          <h3>Step</h3><h2>1</h2><div><p>Choose the item you would like engraved</p><Link className="stepLink" to='/product'>Product</Link></div>
        </div>
        <div className="steps">
          <h3>Step</h3><h2>2</h2><div><p>Contact our laser engraving technician</p><Link className="stepLink" to='/contact'>Contact</Link></div>
        </div>
        <div className="steps">
          <h3>Step</h3><h2>3</h2><div><p>Make your payment</p><Link className="stepLink" to='https://www.paypal.com/us/home' target={"_blank"}>Pay</Link></div>
        </div>
      </div>
      <img src={Carousel} alt="carousel"/>
    </main>
  );
}
  
  export default Home;