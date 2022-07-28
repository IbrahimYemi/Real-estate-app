import React from 'react';
import { useState } from 'react';

export default function Header(props) {
  return (
    <header>
      <h1>Sweet_Home</h1>
      <div className="icons">
        <i className="material-symbols-outlined">favorite</i>
        {props.fav}
        <i className="material-symbols-outlined">house</i>
      </div>
    </header>
  );
}
