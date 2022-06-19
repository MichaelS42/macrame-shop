import React from "react";
import { Link, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div> H2 from HOME</div>
      <nav>
        <ul>
          <li>
            <Link to="/navigation">Navigation</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default HomePage;
