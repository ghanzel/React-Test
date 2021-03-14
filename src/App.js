import React, {Component} from "react";
import logo from './cat.jpeg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class App extends Component{
  render() {
    const header = (
      <div className='avatar'>
        <img src={logo} />
        <div className='user'>
          <h2 className='name'>Gloria Hanzel</h2>
          <p> Domingo 21 de febrero de 2021</p>
        </div>
      </div>
    )

    const commentText = (
      <p className='text'>
        This is my comment. It is very interesting. I am telling you my opinion on some stuff. Thrilling. You can't stop reading.
        This is my comment. It is very interesting. I am telling you my opinion on some stuff. Thrilling. You can't stop reading.
        This is my comment. It is very interesting. I am telling you my opinion on some stuff. Thrilling. You can't stop reading.
        This is my comment. It is very interesting. I am telling you my opinion on some stuff. Thrilling. You can't stop reading.
        This is my comment. It is very interesting. I am telling you my opinion on some stuff. Thrilling. You can't stop reading.
      </p>
    )

    const footer = (
      <div className='footer'>
        <a href=''>Leer más...</a>
        <div className='likes'>
          <p>34</p>
          <p>
            <FontAwesomeIcon icon={faHeart} />
            <i class="fa-heart"></i>   
          </p>
        </div>
      </div>
    )

    const card = (
      <div className='mediaCard'>
        <div className='header'>{header}</div>
        <div className='commentText'>{commentText}</div>
        <div className='footerInfo'>{footer}</div>
      </div>
    )
  return card;
  };
};

export default App;
