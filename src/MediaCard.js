import React, {Component} from "react";
import logo from './cat.jpeg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHeart } from '@fortawesome/free-solid-svg-icons'

const MediaCard = props => {
    const header = (
        <div className='avatar'>
          <img src={logo} />
          <div className='user'>
            <h2 className='name'>{props.name}</h2>
            <p> {props.date}</p>
          </div>
        </div>
      )
  
      const commentText = (
        <p className='text'>
           {props.description}</p>
      )
  
      const footer = (
        <div className='footer'>
          <a href=''>Leer más...</a>
          <div className='likes'>
            <p>{props.likesNo}</p>
            <p>
              <FontAwesomeIcon icon={faHeart} />
              <i className="fa-heart"></i>   
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
/*
class MediaCard extends Component{
    render() {
    const header = (
      <div className='avatar'>
        <img src={logo} />
        <div className='user'>
          <h2 className='name'>{this.props.name}</h2>
          <p> {this.props.date}</p>
        </div>
      </div>
    )

    const commentText = (
      <p className='text'>
         {this.props.description}</p>
    )

    const footer = (
      <div className='footer'>
        <a href=''>Leer más...</a>
        <div className='likes'>
          <p>{this.props.likesNo}</p>
          <p>
            <FontAwesomeIcon icon={faHeart} />
            <i className="fa-heart"></i>   
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
*/
const componentToRender = <MediaCard name='Gloria Hanzel' date='01/03/2021' description="This is my comment. It is very interesting. I am telling you my opinion on some stuff. Thrilling. You can't stop reading. This is my comment. It is very interesting. I am telling you my opinion on some stuff. Thrilling. You can't stop reading.
This is my comment. It is very interesting. I am telling you my opinion on some stuff. Thrilling. You can't stop reading.
" likesNo='36'/>

export default componentToRender;