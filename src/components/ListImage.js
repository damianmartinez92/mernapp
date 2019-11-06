import React, { Component } from "react";

import './listImage.css'

import barcelona from "../img/cities/barcelona.jpg";
import newyork from "../img/cities/newyork.jpg";
import amsterdam from "../img/cities/amsterdam.jpg";
import paris from "../img/cities/paris.jpg";

export default class ListImage extends Component {
  render() {
    return (
      <div className="containerListImage">
        <h2>Popular MYtineraries</h2>
        <div className="listaDeImagenes">
          <img src={barcelona} alt="barcelona" />
          <img src={newyork} alt="newyork" />
          <img src={amsterdam} alt="amsterdam" />
          <img src={paris} alt="paris" />
        </div>
      </div>
    );
  }
}
