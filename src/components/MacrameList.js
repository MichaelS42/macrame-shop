import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"


const MacrameList = props => {
    const [macrames, setMacrames] = useState([])
        useEffect(() => {
            axios
            .get('http://localhost:5000/api/movies')
            .then(response => {
                setMacrames(response.data);
            })
            .catch(error => {
                console.error('Server error', error)
            });
}, [])

return (
    <div className="macrame-list">
        {macrames.map(macrame => (
            <MacrameDetails key={macrame.id} macrame={macrame} />
        ))}

    </div>
);
}
function MacrameDetails({ macrame }) {
    const { title, price, metascore, image} = macrame;
    return (
      <Link to ={`/macrames/${macrame.id}`}>
      <div className="macrame-card" key={macrame.id}>
        <h2>{macrame.title}</h2>
        <div className="macrame-price">
          price: <em>{macrame.price}</em>
        </div>
        <div className="macrame-metascore">
          Metascore: <strong>{macrame.metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {images.map(image => (
          <div key={image} className="macrame-image">
            {image}
          </div>
        ))}
      </div>
      </Link>
    );
  }

export default MacrameList