import React from 'react';
import './style.css';
import './style.scss';
import Navbar from './Navbar';
import Home from './Home';
import Display from './Display';
import Contact from './Contact';
import Footer from './Footer';
import { CartProvider } from 'react-use-cart';
import { useCart } from 'react-use-cart';

export default function App() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    Quantity,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const [favorite, setFavorite] = React.useState(
    JSON.parse(localStorage.getItem('fav')) || []
  );

  React.useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(favorite));
  }, [favorite]);

  const [activeStar, setActiveStar] = React.useState({});

  const handleFav = (item) => {
    setFavorite((prev) => {
      favorite: prev;
      const counting = favorite + 1;
      return counting;
    });
    console.log(item.id);
    setActiveStar(item);
  };

  function handleFavd(events) {
    setFavorite((prev) => prev - 1);
  }

  const arr = activeStar;

  return (
    <div>
      <Navbar fav={favorite} />
      <Home />
      <CartProvider>
        <Display
          arr={arr}
          click={handleFav}
          double={handleFavd}
          isEmpty={isEmpty}
          totalUniqueItems={totalUniqueItems}
          items={items}
          totalItems={totalItems}
          cartTotal={cartTotal}
          updateItemQuantity={updateItemQuantity}
          removeItem={removeItem}
          emptyCart={emptyCart}
          favorite={favorite}
        />
      </CartProvider>
      <Contact />
      <Footer />
    </div>
  );
}
