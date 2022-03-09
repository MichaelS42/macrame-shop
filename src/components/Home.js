import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div> H2 from HOME</div>
      <nav>
        <ul>
          <li>
            <Link to="/navigation">Navigation</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Home;
