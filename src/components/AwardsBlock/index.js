import React from 'react';
import Title from '../Title';
import './style.css' 


export default function AwardsBlock(props) {
  const { mobile } = props;


const imgArr = [
  'https://get-flooring.com/wp-content/uploads/2020/09/certificate_mini_2.jpg',
  'https://get-flooring.com/wp-content/uploads/2020/09/certificate_mini_5.jpg',
  'https://get-flooring.com/wp-content/uploads/2020/09/certificate_mini_4.jpg',
  'https://get-flooring.com/wp-content/uploads/2020/09/certificate_mini_3.jpg',
  'https://get-flooring.com/wp-content/uploads/2020/09/certificate_mini_1.jpg'
]

  return (
    <div className="awardsWrapper">
      <div className='awardsLayout'></div>
      {
        mobile 
        ? 
          <>
            <Title color="white" text="Awards" under z={2}/>
            {/* <div style={{borderColor:'white',zIndex: 9}} className="underlineTextMonument"></div> */}
            <div style={{zIndex: 9}} className="mobilePlusRightBlock">
              {
              imgArr.map((item,i) => (<img key={i} style={{margin: "0px 40px"}} src={item} alt={`${i}img`} />))
              }
            </div>
          </>
        :
        <>
          <Title color="white" text="Awards" under z={2} top="50px"/> 
          <div style={{zIndex: 9}} className="awardsRightBlock">
            {
              imgArr.map((item,i) => (<img key={i} style={{margin: "0px 40px"}} src={item} alt={`${i}img`} />))
            }
          </div>
        </>
      }
    </div>
  );
}
 