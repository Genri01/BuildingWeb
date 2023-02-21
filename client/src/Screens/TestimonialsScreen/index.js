import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { modalFullQuestion } from '../../redux/actions/app'
import { Button } from 'antd';  
import Title from '../../components/Title';
import TestimonialsSwipe from '../../components/TestimonialsSwipe/index';
import images from '../../assets/images';   


import './style.css';
  
function TestimonialsScreen(props) {
 
  const { mobile } = props;
  const dispatch = useDispatch();
  const { test_0, test_1, test_2, test_3, angi,  
    g_0,
    g_1,
    g_2,
    g_3,
    g_4, 
    g_5, 
    h_0,
    h_1,
    h_2,
    h_3,
    h_4,
    h_5,
    y_0,
    y_1,
    y_2,
    y_3,
    y_4,
    y_5,
    n_0,
    n_1,
    n_2,
    n_3,
    n_4,
    n_5,
    q_0,
    q_1,
    q_2,
    q_3,
    q_4,
    q_5,
    bathroom_3,
    bathroom_1
   } = images;
  
  const testimonItems = [
    {
      img: test_1,
      title: 'GOOGLE REVIEWS',
      stars: 5,
      reviews: 45,
      coments: [
        {
          coment:'They do excellent work! Every tile was perfectly placed. They are true craftsmen. They consulted with us throughout the project and offered several good suggestions. Highly recommend.',
          name: 'David Eckhardt'
        }, 
      ],
      imageArray: [ 
        { 
          img: g_3 
        },
        { 
          img: g_4 
        }, 
      ]
    },
    {
      img: test_2,
      title: 'HOUZZ REVIEWS',
      stars: 5,
      reviews: 23,
    coments: [
      {
        coment:`Great company with great people! I couldn't be happier with the work they did on my home. Would highly recommend them.`,
        name: 'Elina B.'
      }, 
    ],
    imageArray: [ 
      { 
        img: h_5 
      } 
    ]
    },
    {
      img: test_3,
      title: 'NEXTDOOR RECOMMENDATIONS',
      stars: 5,
      reviews: 32,
      coments: [
        {
          coment:`Highly recommend working with Butkov. Every step of the process, from the simple quoting process to the final result, was flawless. Communication is always key and I’m so happy with their work!`,
          name: 'Hanna B.'
        }, 
      ],
      imageArray: [
        { 
          img:n_0 
        },
        { 
          img:n_1 
        }, 
      ]
    },
    {
      img: test_0,
      title: 'THUMBTACK',
      stars: 5,
      reviews: 62,
      coments: [
        {
          coment:'Absolutely stunning craftsmanship! Definitely recommend to use for bathroom remodels! Thank you for being extremely meticulous on details, really appreciate your time flexibility as well!',
          name: 'Lacey O.'
        }, 
      ],
      imageArray: [ 
        { 
          img: bathroom_1
        }, 
        { 
          img: bathroom_3
        }, 
      ]
    },
    {
      img: angi,
      title: 'Angi',
      stars: 5,
      reviews: 52,
      coments: [
        {
          coment:'They were so easy to work with. Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elena was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Heather R'
        }, 
      ],
      imageArray: [ 
        { 
          img: y_4
        },
        { 
          img: y_5 
        } 
      ]
    } 
  ]

    return (
      <div className="testimonials_screen" > 
        <Title margin={'50px 0px 0px 0px'} size={29} mobile={mobile} text="FROM AROUND THE WEB" /> 
        {
          testimonItems.map((item,key) => ( 
            <TestimonialsSwipe mobile={mobile} key={key} testimonItems={item} num={key} /> 
          ))
        } 
        <Title size={25} mobile={mobile} text="READY TO START YOUR REMODEL JOURNEY?" />
        <div className={mobile ? "mobileTestimonialsTextContainer" : "testimonialsTextContainer"}>
          <div className="testimonialsTextSubTitle">Are you ready to create a unique and customized space your home? Butkov can bring that dream to life with our specialized design-build process. Give us a call today to schedule your own complimentary, in-home design consultation.</div>
        </div>
        <div className="testimonialsButtonContainer">
            <Button onClick={() => { dispatch(modalFullQuestion(true)); }} className="bottonTitle" type="primary">SCHEDULE YOUR FREE CONSULTATION</Button>  
          </div>
      </div>
    );
}

export default TestimonialsScreen;
