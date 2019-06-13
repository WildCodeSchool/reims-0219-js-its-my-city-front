import React from 'react';
import './PoiInformation.css';

const PoiInformation = () => (
  <div>
    <div className="informationPage">
      <h1>Table de ping pong</h1>
      <hr />
      <p>Adresse</p>
      <p>code postal ville</p>
      <p>Distance</p>
      <img src="http://www.tessier-rp.com/wp-content/uploads/2015/07/ping_pong_2.jpg" alt="table ping pong" />
      <div className="informationUser">
        <p>create by...</p>
        <p>le ...</p>
      </div>
    </div>
    <div>
      <h2>informations</h2>
      <p>...</p>
    </div>
  </div>
);

export default PoiInformation;
