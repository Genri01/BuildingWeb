import React from 'react';
import './style.css';

function ItemOrder(props) {
    const { number, title, text, mobile } = props;
    return (
      <div className={`${mobile ? 'mobileWorkOrderItem' : 'workOrderItem'}`}>
        <div className='workOrderItemImg'>{number}</div>
        <div className='workOrderItemTitle'>{title}</div>
        <div className='workOrderItemSubTitle'>{text}</div>
      </div>
    );
}

export default ItemOrder;
