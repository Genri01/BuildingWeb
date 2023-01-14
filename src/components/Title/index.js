import React from 'react';
import './style.css';

function Title(props) {
    const { text, color, size, margin ,under, z, top } = props;
    return ( 
      <div className='titleWrapper' style={{ paddingTop: top === undefined ? '0px' : top }}>
        <div
        style={{ 
          fontSize: size === undefined ? '40px': size,
          color: color === undefined ? '#333' : color,
          margin: margin === undefined ? '0px' : margin, 
          zIndex: z === undefined ? '0' : z,
        }} 
        className='textTitle'>{text}</div>
        { under && <div className="underLine" /> } 
      </div>
    );
}

export default Title;
