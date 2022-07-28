import React, { useState } from 'react';

export default function Home() {
  const images = [
    'https://media.istockphoto.com/photos/new-homes-on-a-quiet-street-in-raleigh-nc-picture-id1319269543?k=20&m=1319269543&s=612x612&w=0&h=Lk0NeFpf1U-FNKDImlmTsuN0SPYYNq0d_HPLUmb-ls8=',
    'https://media.istockphoto.com/photos/houses-in-england-with-typical-red-bricks-at-sunset-main-street-in-a-picture-id1314814500?k=20&m=1314814500&s=612x612&w=0&h=B9x8qpT696YGzU6F1QLhRNqnwygCSmp6letdlyU9fL4=',
  ];

  const [image, setImage] = useState(images[0]);

  function handleImage() {
    setImage((...image) => images[1]);
  }
  function handleImage2() {
    setImage((...image) => images[0]);
  }
  return (
    <div className="home">
      <div className="home-words">
        <h3>Sweet Home for that comfort!</h3>
        <p>
          Get to live the dream of your life; you deserve alot, get in touch
          with us today and pick an open spot. Daily the batch decreases, don't
          wait on your happiness, pick one today.
        </p>
        <button onClick={handleImage}>Learn more</button>
      </div>
      <div className="home-image">
        <img src={image} alt="home" />
        <div className="button">
          <button onClick={handleImage} className="blue"></button>
          <button onClick={handleImage2} className="orange"></button>
        </div>
      </div>
    </div>
  );
}
