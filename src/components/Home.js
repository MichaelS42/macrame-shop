import React from 'react'
import { NavLink } from 'react-router-dom';

const Home =  () => {
    return (
        <>
        <div> H2 from HOME</div>
        <NavLink to="/navigation">Navigation</NavLink>
        </>
    )

} 
export default Home