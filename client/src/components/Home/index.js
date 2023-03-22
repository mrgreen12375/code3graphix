import React from "react";
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function Home() {
  const { loading, data } = useQuery(QUERY_ME);
  const username = data?.me.username || [];
  return (
    <main className="home">
      <h1>Custom Lazer Engraving</h1>
      <div>
        {Auth.loggedIn() ? (
          <h2>Welcome, {loading ? "" : username}</h2>
        ) : (
          <h2> </h2>
        )}
      </div>
      <h2>Awards+Recognition+Gifts+Signs+More</h2>
      <p>Laser engraving is a process that vaporizes materials into fumes to engrave permanent, deep marks. The laser beam acts as a chisel, incising marks by removing layers from the surface of the material. The laser hits localized areas with massive levels of energy to generate the high heat required for vaporization.</p>
      <div className="steps">
        <div className="steps">
          <h3>Step</h3><h2>1</h2><div><p>This is the information to complete step 1</p><Link className="stepLink" to='/product'>Product</Link></div>
        </div>
        <div className="steps">
          <h3>Step</h3><h2>2</h2><div><p>This is the information to complete step 2</p><Link className="stepLink" to='/contact'>Contact</Link></div>
        </div>
        <div className="steps">
          <h3>Step</h3><h2>3</h2><div><p>This is the information to complete step 3</p><Link className="stepLink" to='/contact'>Pay</Link></div>
        </div>
      </div>
      <h2>Add Carousel of Images Here</h2>
    </main>
  );
}
  
  export default Home;