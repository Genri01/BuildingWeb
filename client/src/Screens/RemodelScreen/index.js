import React from 'react'; 
import './style.css';
import RemodelBlock from '../../components/RemodelBlock';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { app } from '../../redux/selectors';
import images from '../../assets/images';

export default function RemodelScreen(props) {
  
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
  const { remodal } = useParams();
  
    let titleText = '';
    let amentities = false;
    let wedoblock = false;
    let titlecart = ``; 
    let textone = ``;
    let texttwo = ``;
    let cartsItem = [];

switch (remodal) { 
  
  case 'bathroom':
    titleText = ` 
      Thinking of remodeling a bathroom in your home? Maybe you’ve been watching those HGTV specials and have some ambitious ideas for what your bathroom COULD look like with a little effort? Butkov can help! We are one of the premier local bathroom remodeling contractors in the Twin Cities area, and we have years of experience in articulating your vision into the bathroom renovation of your dreams!
      <br/><br/>
      From high-end faucets, glass-enclosed shower stalls to luxurious, sunk in tubs, Butkov  is the go-to bathroom renovation contractors to give you the bathroom oasis you deserve. Our bathroom remodeling experts work with the highest quality brands on the market today, and we have the professional expertise needed to provide you with the advice, craftsmanship, and service needed to accentuate your space and turn your bathroom into a true showpiece in your home.
      `; 
    amentities = true;
    titlecart = `
      Bathroom design ideas that may fits your home:
    `; 
    textone = `FAQ`;
    texttwo = `Scedule your free consultation`;
    cartsItem = [
      {
        title: 'Building improvements & Renovations',
        img: bathroom_1
      },
      {
        title: 'Commercial Roofing',
        img: bathroom_2 
      },
      {
        title: 'Commercial Flooring',
        img: bathroom_3
      },
      {
        title: 'Structural Repair',
        img: bathroom_4
      },
      {
        title: 'Concrete Work',
        img: bathroom_5
      },
      {
        title: 'Electrical & Plumbing & HVAC',
        img: bathroom_6 
      } 
    ]
    break;
  case 'kitchen':
    titleText = ` 
      Your kitchen is the heart of your home. It provides you and your family a space to bond over shared food and your culture. Your kitchen should be a reflection of your family’s pride and a chance to build on your togetherness. When you remodel your kitchen you’re not only enhancing the design but also providing your family with a beautiful and functional space to enjoy! Butkov ’s  team has the knowledge and expertise to work with you and achieve the kitchen of your dreams. Our design and construction teams will carefully listen to your needs to ensure the living space we design and create for you is exactly what you want it to be. Contact our team to find out more about what our team can do for you and get a jump on building joy in your home!
    `; 
    titlecart = `
      Kitchen design ideas that may fits your home:
    `;  
    textone = `FAQ`;
    texttwo = `Scedule your free consultation`; 
    cartsItem = [
      {
        title: 'Building improvements & Renovations',
        img: kitchen_1
      },
      {
        title: 'Commercial Roofing',
        img: kitchen_2 
      },
      {
        title: 'Commercial Flooring',
        img: kitchen_3
      },
      {
        title: 'Structural Repair',
        img: kitchen_4
      },
      {
        title: 'Concrete Work',
        img: kitchen_5
      },
      {
        title: 'Electrical & Plumbing & HVAC',
        img: kitchen_6 
      } 
    ]
    break;
  case 'roofing':
    titleText = ` 
      Insurance pays for roofing repair and replacement in cases of storm damage. When a wind storm has torn the tiles from your roof, we’re here to help you every step of the way. We provide free inspections and quotes and make sure you and your insurance company have the proper paperwork. At Butkov we do roofs that result from storm damage. Let us look over the damage and let you know if repair or replacement is required. We are fully capable of any repairs that are needed, from adding new shingles to replacing gutters, windows or siding.
      <br/><br/>
      Our Roofing Service includes helping you handle insurance claims.
    `; 
    titlecart = ` 
    ` 
    textone = `FAQ`;
    texttwo = `Get a free Quote`;
    cartsItem = [
      {
        title: 'Building improvements & Renovations',
        img: roofing_1
      },
      {
        title: 'Commercial Roofing',
        img: roofing_2 
      },
      {
        title: 'Commercial Flooring',
        img: roofing_3
      },
      {
        title: 'Structural Repair',
        img: roofing_4
      },
      {
        title: 'Concrete Work',
        img: roofing_5
      },
      {
        title: 'Electrical & Plumbing & HVAC',
        img: roofing_6 
      } 
    ]
    break;
  case 'basment':
    titleText = ` 
      Basements come in all forms — from a completely unfinished space to a basement that’s feeling unused or outdated. Butkov is here to show you what your space can really do for you, your family, and your lifestyle.
      <br/><br/>
      From extra bedrooms and bathrooms to crafting custom spaces like home gyms, theaters, and wine cellars, you can trust the team at Butkov to transform your basement into your new favorite part of the home.
      <br/><br/>
      With the endless possibilities that finishing or remodeling your basement brings there can be a lot to think about! First, where to start? Do you need a fully remodeled basement? Does your unfinished space simply need to be completed? Are you a DIYer who wants to get your basement to a point where you can complete the rest yourself? There are many considerations to make when starting this process so knowing what to look for and what to expect is your first step. Completing your basement or bringing it to a nearly finished stage are both options when thinking about your basement remodel or renovation!
      `; 
    titlecart = `
      Basement design that fits your home
    ` 
    textone = `FAQ`;
    texttwo = `Scedule your free consultation`; 
    cartsItem = [
      {
        title: 'Building improvements & Renovations',
        img: basement_1
      },
      {
        title: 'Commercial Roofing',
        img: basement_2 
      },
      {
        title: 'Commercial Flooring',
        img: basement_3
      },
      {
        title: 'Structural Repair',
        img: basement_4
      },
      {
        title: 'Concrete Work',
        img: basement_5
      },
      {
        title: 'Electrical & Plumbing & HVAC',
        img: basement_6 
      } 
    ]
    break;
  case 'tile':
    titleText = `
    #1 Trusted Tile Contractors in Twin Cities
    <br/><br/>
Trust the professionals at Butkov  to beautify your bathroom or kitchen with stunning tile installations. Our tile installation company has proven its commitment to delivering the very best service in town. Whether you’re installing a personalized backsplash in your kitchen or new floor tiles in your bathroom, our dedicated professionals are prepared to take on any job no matter the size.
<br/><br/>
Tile Installation & Repair Services in the Twin Cities
<br/><br/>
We offer full-service tile installation, from simple backsplashes to specialty installations—like steam showers, radiant heated floors, and everything in between. We also install a wide range of materials including listellos, glass mosaic tile, all-natural stone tile, porcelain, ceramic tile and more. Our estimates are always free and accompanied by a consultation surrounding your specific project.
`; 
    titlecart = `
    Design ideas that may fits your home:
    ` 
    wedoblock = true;
    textone = `FAQ`;
    texttwo = `Get a free Estemate`; 
    cartsItem = [
      {
        title: 'Building improvements & Renovations',
        img: tile_1
      },
      {
        title: 'Commercial Roofing',
        img: tile_2 
      },
      {
        title: 'Commercial Flooring',
        img: tile_3
      },
      {
        title: 'Structural Repair',
        img: tile_4
      },
      {
        title: 'Concrete Work',
        img: tile_5
      },
      {
        title: 'Electrical & Plumbing & HVAC',
        img: tile_6 
      } 
    ]
    break;
   
  default:
    break;
}
    
    return (
      <div className="remodelScreen" >
        <RemodelBlock
          mobile={mobile}
          titleText={titleText}
          amentities={amentities}
          wedoblock={wedoblock}
          titlecart={titlecart} 
          textone={textone}
          texttwo={texttwo}
          cartsItem={cartsItem}
        />
      </div>
    );
}
 