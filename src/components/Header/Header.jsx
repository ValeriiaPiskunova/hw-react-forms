import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header__text">
        <h1>Зв'язатися з нами</h1>
        <p>Залиш нам повідомлення, а ми відповімо якнайшвидше</p>
      </div>
      <img
        src="../assets/form-image.png"
        alt="person with phone and flower"
        className="header__img"
      />
    </header>
  );
}
