import React from 'react';
import './style.css';

function Title(props) {
    const { height, text, color, size, margin ,under, z, top, background, center, mobile } = props;
    return ( 
      <div className='titleWrapper' style={{ 
        width: mobile ? '70%' : '100%',
        height: mobile ? 'auto' : '50%',
        paddingTop: top === undefined ? '0px' : top,
        backgroundColor: background === undefined ? 'transparent' : background,
       }}>
        <div
        style={{ 
          fontSize: size === undefined ? mobile ? '35px' : '40px': size,
          color: color === undefined ? '#333' : color,
          margin: margin === undefined ? '0px' : margin, 
          zIndex: z === undefined ? '0' : z,
          textAlign: center === undefined ? 'none' : 'center'  
        }} 
        className='textTitle'>{text}</div>
        { under && <div className="underLine" /> } 
      </div>
    );
}

export default Title;
