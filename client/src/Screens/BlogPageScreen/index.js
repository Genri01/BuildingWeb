import React, { useEffect, useState, Fragment } from 'react';
import { Input, Space, Checkbox, Button, message } from 'antd';  
import Title from '../../components/Title';
import images from '../../assets/images';   
import { questions } from '../../redux/selectors';  
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import { useDispatch, useSelector  } from 'react-redux'; 
import { validateEmail, changeTelephone, changeEmail, maskTelephone } from '../../helpers/index'; 
import InputMask from 'react-input-mask';
import { 
  setFirstName,
  setAddres,
  setCallback,
  setCity,
  setComent, 
  setFinancing,
  setGetContact,
  setIndex,
  setLastName,
  setMaterials,
  setOwner, 
  setStatus, 
  setTypeProject,
  setReferalCity,
  setReferalComent,
  setReferalEmail,
  sendRegistrServer,
  setReferalFirstName,
  setReferalTel
} from '../../redux/actions/questions'; 
import './style.css';
  
function BlogPageScreen(props) {
 
  const { mobile } = props;
 
  const {state, hash} = useLocation()
  const id = state?.id;
  const title = state?.title;
  const img = state?.img;

  // useEffect(()=>{  
  //   if(id){ 
  //       const targetElement = document.getElementById(id) 
  //       targetElement?.scrollIntoView({behavior: 'smooth'})
  //     }
  // }, [state,hash])
 
const blogTxt = [{
  page: 'page_0',
  text:`
    A kitchen renovation can be motivated by just about anything, from the desire to beef up your floor plan to increasing kitchen storage and prep space, or simply resolving everyday wear issues or damage. There are several occasions when altering your kitchen’s current design, layout and/or décor becomes a must. Continue reading to find out when it’s time to remodel!
    <br/><br/>
    Is it Time to Remodel Your Kitchen?
    Below are the five most common reasons homeowners decide to take the remodeling plunge, along with a few tips for renovating your kitchen.
    <br/><br/>
     Refresh Any Wear and Tear 
    The kitchen is one of the most utilized rooms in your home, so mild to moderate damage is likely to occur over time and with regular use. The most careful homeowners will start to notice dings, dents or wear on kitchen cabinets, counters, walls and flooring eventually. And, even the highest quality products and materials will ultimately age due to daily wear and tear. A kitchen renovation can be as time-efficient and straightforward as refacing existing cabinets with laminate or changing up worn countertops, backsplash tile and flooring, for a stunning, new look. All of which can be achieved without the hassle of an extensive overhaul.
    <br/><br/>
    Improve the Flow
    As families grow and working remotely has altered life at home for so many, a lot of homeowners realize it is indeed time to update their kitchen functionality to accommodate more family time, cooking and entertaining.  A narrow or cramped kitchen layout can typically be solved with a few tweaks. Consider redesigning your kitchen with custom-built options or changing the layout with an island or peninsulas.
    <br/><br/>
    Amp Up Storage
    Beat clutter and added stress by incorporating  smarter, more user-friendly kitchen storage solutions. If your kitchen lacks efficient storage, you can amp up your world with a score of new solutions. Properly store all of your kitchen gadgets, pantry items and small appliances — there’s practically a storage solution for everything!
    <br/><br/>
    Improve Your Home’s Environment
    Did you know that there is potential for the air in your home to be harmful? Many older kitchens may contain materials that can emit toxins into the atmosphere of your home. For instance, certain fiberboards and man-made pressed wood products can contain formaldehyde and other volatile organic chemicals (VOCs) that may cause many health concerns. Look for environmentally friendly and low VOC emitting products such as natural wood for cabinets or non-porous countertops, including natural stone, solid surface or Cambria® quartz and other eco-friendly materials.
    <br/><br/>
    Ready to Get the Kitchen You Deserve?
    Over time, kitchen cabinet and counter styles go out of fashion, while other looks remain timeless.  Don’t allow an outdated kitchen keep you from enjoying your home. Call Butkov at 612-516-0263, to schedule your free design consultation today!
  `
  },
  { 
  page: 'page_1',
  text:`
  Most homeowners think about renovations sooner or later. Unless you have good handle on home improvement, you’ll probably hire someone to do the work for you. That’s where things can get tricky. Who do you hire, and how do you know whether he’s reputable?
  A professional contractor is always the right choice, and for many reasons. He’s licensed and insured, and he probably has a list of references that you can check. Because that’s not enough, here are 6 more reasons to go with a pro:
  <br/><br/>
    #1: Experience with Projects Like Yours
  It’s true that there’s no other home quite like yours, but there are common threads among most renovation projects. For bathrooms, kitchens, home additions, and anything else that you might want, a professional contractor has years of experience working with the home systems and materials to do the job right.
  <br/><br/>
    #2: Skills in Different Areas of Home Improvement
  Along with experience comes expertise, and that’s something that can only be learned with time in the industry. A professional contractor has framed a wall, installed a subfloor, hung doors and windows and mounted kitchen cabinets in many other homes. He knows the pitfalls to watch out for, which tools and materials work best, and the right way to perform each aspect of your project.
  <br/><br/>
    #3: Safety That Protects You and Your Home
  Safety is a top concern among all professional contractors. It means that a job is done right, and it also helps prevent injuries and property damage. A contractor knows the local and international code, and will obtain the right permits for the job. That means you can count on the work to be code compliant. He understands OSHA regulations, so he and his crew will maintain a safe work environment that doesn’t damage your home.
  <br/><br/>
    #4: Respect for Your Property
  A big complaint with homeowners is when workers make a mess and then leave the mess once the work is done. Some track in dirt, leave lunch wrappers lying around, drop nails, leave sawdust and any number of other annoyances. Some of those annoyances can also be hazards. A professional contractor respects your home, and he never leaves a mess for you to clean up.
  <br/><br/>
    #5: Overall Money Savings
  Aside from saving money on materials and supplies, there’s a bigger way that a professional contractor saves you money. A job well done is money well spent. But a job that’s half-done or one where the work is performed poorly can cost you double in the long run, once you factor in replacements and repairs. A contractor gets it right the first time. And if there’s a problem with his work, you’re not stuck footing the bill to correct it.
  <br/><br/>
  There aren’t any real reasons not to hire a professional contractor, but every aspect of your project is a reason why you should. You’ve spent time and energy, not to mention budgeting, to bring your home improvement dreams to life. Put it in the hands of a pro, and you won’t be disappointed.
  <br/><br/>
  Are you in the market for a contractor to handle your project? Butkov can help. Request a free estimate, and we’ll help you.
  `,
}]


    return (
      <div className="blogPageScreen"> 
        <Link style={{textDecoration: 'none'}} to={`/moreinfo/blog`}><div className='back'>{'<--Back'}</div></Link>
        <div className='mainImgContainer'>
          <img src={img} alt="" width={'50%'} height={'700px'} />
        </div>
        <Title text={title} /> 
        <div className='textBlogContainer'>
        <div className='textButtonText'>  
          </div>
          { 
            blogTxt.map((item,i) => { 
              return item.page === id ? item.text.split('<br/>').map((item,k)=>(<React.Fragment key={k}>{item}<br/></React.Fragment>)) : false
            })
          }
        </div>
      </div>
    );
}

export default BlogPageScreen;
