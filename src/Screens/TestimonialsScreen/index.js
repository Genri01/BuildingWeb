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
  const { test_0, test_1, test_2, test_3, test_4,  
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
   } = images;
  
  const testimonItems = [
    {
      img: test_1,
      title: 'GOOGLE REVIEWS',
      stars: 5,
      reviews: 45,
      coments: [
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Heather richer'
        },
        {
          coment:' "FBC did an outstanding job on a full basement remodel for our 88-year-old brick bungalow. Their people and their design-plan-build process have our highest possible recommendation. We chose FBC and never looked back. And the results? Absolutely fantastic. Better than we ever dreamed it could be, and we had some big dreams. The space went from “game room surrounded by dirty, dark spaces full of old mechanical stuff, pipes & wiring” to three fresh, brightly-lit, multi-purpose rooms & a clean, airy, laundry/storage area. We are thrilled to pieces."',
          name: 'Bary richer'
        },
        {
          coment:' "We could not have been more impressed with FBC. From design to finish, they were professional, communicated very well, and did excellent work. Even though we were prepared to have a mess on our hands, we never had to do any extra cleaning throughout the project. Very unexpected but appreciated! Our designer Amber was awesome and project manager Gene was great and the follow-up from the rest of the team since the project was finished has been impressive. We will definitely be using them in the future for kitchen and bath projects.',
          name: 'Lex richer'
        },
        {
          coment:' "I went into our basement project thinking it would be another major hassle – just like previous projects I’ve done with other companies. However, from the initial strategy sessions where they explored numerous ideas with us (the 3D walk through modeling was awesome), to helping us modify the options to accommodate our budget, through on-time completion, it was anything but that. We enjoyed the process from start to finish, and the FBC team was professional, responsive, and customer-oriented the entire time. I ve recommended them to all of my friends.""',
          name: 'Kandy richer'
        },
      ],
      imageArray: [
        { 
          img: g_0 
        },
        { 
          img: g_1 
        },
        { 
          img: g_2 
        },
        { 
          img: g_3 
        },
        { 
          img: g_4 
        },
        { 
          img: g_5 
        } 
      ]
    },
    {
      img: test_2,
      title: 'HOUZZ REVIEWS',
      stars: 5,
      reviews: 23,
    coments: [
      {
        coment:'Our basement remodeling project has been a delight from start to finish! Our designers (Amber and McKenna) and project manager (Nick)were all excellent communicators and very quick to respond to any of our concerns. They created a great design that fit both our needs and our desires. Our project was delivered on time and we were given daily updates including pictures on what was accomplished each day through their use of the app Buildertrend. The workmanship of their trades was excellent and our project manager was there consistently to facilitate the constant progression. Our project included a theater, lounge, game room, billiard’s room, kitchenette, and bathroom. They exceeded our expectations through their personal service, communication, and quality construction. We would love to do another project with FBC!',
        name: 'Ryan K'
      },
      {
        coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
        name: 'Bary richer'
      },
      {
        coment:'We first worked with FBC to finish our basement and hired them again when we needed to convert our 1960 kitchen to something more current. They did not disappoint. Easy to work with, accommodated my husbands requests to do portions of the project himself to save on money and best of all, they stayed on the timeline. They cleaned up their projects and we love the communication through the Builder Trend app. Highly recommend.',
        name: 'Angie M'
      },
      {
        coment:' "We first worked with FBC to finish our basement and hired them again when we needed to convert our 1960 kitchen to something more current. They did not disappoint. Easy to work with, accommodated my husbands requests to do portions of the project himself to save on money and best of all, they stayed on the timeline. They cleaned up their projects and we love the communication through the Builder Trend app. Highly recommend."',
        name: 'Emily B'
      },
    ],
    imageArray: [
      { 
        img: h_0
      },
      { 
        img: h_1
      },
      { 
        img: h_2
      },
      { 
        img: h_3
      },
      { 
        img: h_4
      },
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
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Karen '
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Graham'
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Kim'
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Beth'
        },
      ],
      imageArray: [
        { 
          img:n_0 
        },
        { 
          img:n_1 
        },
        { 
          img:n_2 
        },
        { 
          img:n_3 
        },
        { 
          img:n_4 
        },
        { 
          img: n_5 
        } 
      ]
    },
    {
      img: test_0,
      title: 'GUILD QUALITY',
      stars: 5,
      reviews: 62,
      coments: [
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Fran S'
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Marc R'
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Tony G'
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Jake R'
        },
      ],
      imageArray: [
        { 
          img: q_0
        },
        { 
          img: q_1
        },
        { 
          img: q_2
        },
        { 
          img: q_3
        },
        { 
          img: q_4
        },
        { 
          img: q_5 
        } 
      ]
    },
    {
      img: test_4,
      title: 'YELP REVIEWS',
      stars: 5,
      reviews: 52,
      coments: [
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Heather richer'
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Bary richer'
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Lex richer'
        },
        {
          coment:'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
          name: 'Kandy richer'
        },
      ],
      imageArray: [
        { 
          img: y_0
        },
        { 
          img: y_1 
        },
        { 
          img: y_2
        },
        { 
          img: y_3
        },
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
        <Title text="FROM AROUND THE WEB" /> 
        {
          testimonItems.map((item,key) => (
            <TestimonialsSwipe key={key} testimonItems={item} num={key} /> 
          ))
        } 
        <Title text="READY TO START YOUR REMODEL JOURNEY?" />
        <div className="testimonialsTextContainer">
          <div className="testimonialsTextSubTitle">Are you ready to create a unique and customized basement for your home? FBC Remodel can bring that dream to life with our specialized design-build process. Give us a call today to schedule your own complimentary, in-home design consultation.</div>
        </div>
        <div className="testimonialsButtonContainer">
            <Button onClick={() => { dispatch(modalFullQuestion(true)); }} className="bottonTitle" type="primary">SCHEDULE YOUR FREE CONSULTATION</Button>  
          </div>
      </div>
    );
}

export default TestimonialsScreen;
