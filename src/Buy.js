import React, { useState } from 'react';
import Data from './Data';
import Buy from './Buy';

export default function Display() {
  const allData = Data.map((item) => {
    return (
      <div key={item.id} className="house">
        <span className="location">
          <i className="fa-solid fa-location-dot"></i> {item.location}
        </span>
        <span className="rating">
          {item.stats.rating}
          <i className="fa-regular fa-star"></i>
        </span>
        <img src={item.coverImg} alt={item.title} />
        <span className="spot">
          <i className="material-symbols-outlined">house</i>
          {item.openSpots}
        </span>
        <span className="price">${item.price}</span>
        <div className="cloud"></div>
      </div>
    );
  });

  const Duplex = Data.map((item) => {
    return (
      item.title == 'Duplex' && (
        <div key={item.id} className="card">
          <div className="image">
            <img src={item.coverImg} alt={item.title} />
            <div className="buy" onClick={() => handleBuy(item)}>
              Buy a Spot
              <i className="fa-regular fa-plus"></i>
            </div>
          </div>
          <div className="second">
            <h3>Description</h3>
            <p>{item.description}</p>
            <h5>Name: {item.title}</h5>
            <h5 className="openspot">Openspots: {item.openSpots}</h5>
            <h5 className="openspot">Price: ${item.price}</h5>
            <h5 className="openspot">Location: {item.location}</h5>
            <h5 className="openspot">Rating: {item.stats.rating}</h5>
          </div>
        </div>
      )
    );
  });

  const Bungalow = Data.map((item) => {
    return (
      item.title == 'Bungalow' && (
        <div key={item.id} className="card">
          <div className="image">
            <img src={item.coverImg} alt={item.title} />
            <div className="buy" onClick={() => handleBuy(item)}>
              Buy a Spot <i className="fa-regular fa-plus"></i>
            </div>
          </div>
          <div className="second">
            <h3>Description</h3>
            <p>{item.description}</p>
            <h5>Name: {item.title}</h5>
            <h5 className="openspot">Openspots: {item.openSpots}</h5>
            <h5 className="openspot">Price: ${item.price}</h5>
            <h5 className="openspot">Location: {item.location}</h5>
            <h5 className="openspot">Rating: {item.stats.rating}</h5>
          </div>
        </div>
      )
    );
  });

  const Penthouse = Data.map((item) => {
    return (
      item.title == 'Penthouse' && (
        <div key={item.id} className="card">
          <div className="image">
            <img src={item.coverImg} alt={item.title} />
            <div className="buy" onClick={() => handleBuy(item)}>
              Buy a Spot <i className="fa-regular fa-plus"></i>
            </div>
          </div>
          <div className="second">
            <h3>Description</h3>
            <p>{item.description}</p>
            <h5>Name: {item.title}</h5>
            <h5 className="openspot">Openspots: {item.openSpots}</h5>
            <h5 className="openspot">Price: ${item.price}</h5>
            <h5 className="openspot">Location: {item.location}</h5>
            <h5 className="openspot">Rating: {item.stats.rating}</h5>
          </div>
        </div>
      )
    );
  });

  const [active, setActive] = React.useState(Duplex);
  function handleDuplex() {
    setActive(Duplex);
  }

  function handleBungalow() {
    setActive(Bungalow);
  }

  function handlePenthouse() {
    setActive(Penthouse);
  }

  const [buying, setBuying] = React.useState([]);

  function handleBuy(item) {
    setBuying(item);
    console.log(item.id);
  }

  const Clicked = (
    <div key={buying.id}>
      <img src={buying.coverImg} alt={buying.title} />
      <div className="description">
        <p>{buying.title}</p>
        <p>{buying.location}</p>
        <p>{buying.stats}</p>
      </div>
      <div className="amount">{buying.price}</div>
    </div>
  );

  return (
    <div className="display">
      <div className="categories">
        <h4 className="allDisplay">All</h4>
      </div>
      <div className="all">{allData}</div>
      <div className="categories">
        <h4 onClick={handleDuplex}>Duplex</h4>
        <h4 onClick={handleBungalow}>Bungalow</h4>
        <h4 onClick={handlePenthouse}>Penthouse</h4>
      </div>
      <div className="section">{active}</div>
      <div>
        <div className="getting">
          <div className="heading">
            <h2>IMAGE</h2>
            <h2>Description</h2>
            <h2>Price</h2>
          </div>
          {Clicked}
          <h3>TOTAL</h3>
          <span>${Data.price}</span>
        </div>
      </div>
    </div>
  );
}
