import React, { useState } from 'react';
import Data from './Data';
import Buying from './Buying';
import { useCart } from 'react-use-cart';

export default function Display({
  double,
  click,
  color,
  arr,
  isEmpty,
  totalUniqueItems,
  items,
  Quantity,
  totalItems,
  cartTotal,
  updateItemQuantity,
  removeItem,
  emptyCart,
  favorite
}) {
  const allData = Data.map((item) => {
    const [liked, setLiked] = React.useState(
      JSON.parse(localStorage.getItem('lyk')) || false
    );

    React.useEffect(() => {
      localStorage.setItem('lyk', JSON.stringify(liked));
    }, [liked]);

    function handleClick(item) {
      setLiked(true);
      click(item);
    }

    function handleSlick(item) {
      setLiked(false);
      double(item);
    }

    return (
      <div key={item.id} className="house">
        <span className="minus">
          <button disable={!color}  onClick={() => handleSlick(item)}>
            <i className="fa-solid fa-minus"></i>
          </button>
        </span>
        <span className="plus">
          <button disabled={color}  onClick={() => handleClick(item)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </span>
        <span className="location">
          <i className="fa-solid fa-location-dot"></i> {item.location}
        </span>
        <span className="rating">
          {item.stats.rating}
          <i className={liked ? arr.golden : item.gold}></i>
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

  const { addItem } = useCart();

  const Duplex = Data.map((item) => {
    return (
      item.title == 'Duplex' && (
        <div key={item.id} className="card">
          <div className="image">
            <img src={item.coverImg} alt={item.title} />
            <button className="buy" onClick={() => addItem(item)}>
              Buy a Spot <i className="fa-regular fa-plus"></i>
            </button>
          </div>
          <div className="second">
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
            <button className="buy" onClick={() => addItem(item)}>
              Buy a Spot <i className="fa-regular fa-plus"></i>
            </button>
          </div>
          <div className="second">
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
            <button className="buy" onClick={() => addItem(item)}>
              Buy a Spot <i className="fa-regular fa-plus"></i>
            </button>
          </div>
          <div className="second">
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
      <Buying
        isEmpty={isEmpty}
        totalUniqueItems={totalUniqueItems}
        items={items}
        totalItems={totalItems}
        cartTotal={cartTotal}
        updateItemQuantity={updateItemQuantity}
        removeItem={removeItem}
        emptyCart={emptyCart}
      />
    </div>
  );
}
