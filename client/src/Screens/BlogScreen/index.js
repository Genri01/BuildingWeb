import React from 'react'; 
import Title from '../../components/Title';
import BlogCard from '../../components/BlogCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { app } from '../../redux/selectors';
import images from '../../assets/images';
import './style.css';

export default function BlogScreen(props) {
  
  const mobile = useSelector(app.mobile); 

  const { 
    roofing_1,
    roofing_2,
    roofing_3,
    roofing_4,
    roofing_5,
    roofing_6,
    bathroom_1,
    bathroom_2,
    bathroom_3,
    bathroom_4,
    bathroom_5,
    bathroom_6,
    tile_1,
    tile_2,
    tile_3,
    tile_4,
    tile_5,
    tile_6,
    kitchen_1,
    kitchen_2,
    kitchen_3,
    kitchen_4,
    kitchen_5,
    kitchen_6,
    basement_1,
    basement_2,
    basement_3,
    basement_4,
    basement_5,
    basement_6
   } = images;
 
   const card = [
    {img: kitchen_1, title: 'MAKE YOUR HOME WORK FOR YOU – UNIQUE WAYS TO FIND MORE SPACE IN YOUR HOME'},
    {img: basement_1, title: 'HOLIDAY GIFT GIVING GUIDE – OUR DESIGNERS TOP PICKS'},
    {img: tile_1, title: 'AXE THROWING ROOM IN A BASEMENT SPEAKEASY'},
    {img: bathroom_6, title: 'FALL MUST HAVES FOR YOUR HOME'},
    {img: roofing_5, title: 'TOP 2022 KITCHEN DESIGN TRENDS'},
    {img: bathroom_1, title: 'A STRESS-FREE GUIDE TO WHOLE HOME REMODELING'}
  ]
    return (
      <div className={`${mobile ? "mobileCommercialBlockScreen" : "commercialBlockscreen"}`} >
        <Title text="DESIGN TIPS AND TRENDS" />
        <div className='BlogContainer'>
          {
            card.map((item,k) => (<BlogCard key={k} card={item} />))  
          }  
        </div>
      </div>
    );
}
 