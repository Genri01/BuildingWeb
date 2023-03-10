import React from 'react'; 
import Title from '../../components/Title';
import BlogCard from '../../components/BlogCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { app } from '../../redux/selectors';
import images from '../../assets/images';
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import './style.css';

export default function BlogCardsScreen(props) {
  
  const { mobile } = props;

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
    {img: kitchen_1, title: 'Five Reasons to Consider a Kitchen Renovation'},
    {img: basement_1, title: '5 reasons to hire a professional contractor'}, 
    // {img: tile_1, title: 'AXE THROWING ROOM IN A BASEMENT SPEAKEASY'},
    // {img: bathroom_6, title: 'FALL MUST HAVES FOR YOUR HOME'},
    // {img: roofing_5, title: 'TOP 2022 KITCHEN DESIGN TRENDS'},
    // {img: bathroom_1, title: 'A STRESS-FREE GUIDE TO WHOLE HOME REMODELING'}
  ]
    return (
      <div className={`${mobile ? "mobileBlogScreen" : "blogScreen"}`} >
        <Title margin={mobile ? '50px 0px 0px 0px' : 0} size={mobile ? 30 : 40} text="DESIGN TIPS AND TRENDS" />
        <div className='blogScreen'>
          {
            card.map((item,k) => ( <Link style={{textDecoration: 'none'}} key={k} state={{ id: `page_${k}`, title: item.title, img: item.img}} to={`page${k}`}><BlogCard card={item} /></Link>))  
          }  
        </div>
      </div>
    );
}
 