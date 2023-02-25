import React, { useEffect, useState, Fragment } from 'react';
import { Input, Space, Checkbox, Button, message } from 'antd';  
import Title from '../../components/Title';
import images from '../../assets/images';   
import { questions } from '../../redux/selectors';  
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import { useDispatch, useSelector  } from 'react-redux'; 
import { validateEmail, validateTelephone, changeEmail, maskTelephone } from '../../helpers/index'; 
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
  
function PoliceScreen(props) {
 
  const { mobile } = props;
  const { toprated, elite, ant_2, ant_3 } = images;
 
  const [quality, setQuality] = useState(maskTelephone);

  const [mask, setMask] = useState('');

  const [errTel, setErrTel] = useState(true);
  const [errEmail, setErrEmail] = useState(true);

  const [errTelRef, setErrTelRef] = useState(true);
  const [errEmailRef, setErrEmailRef] = useState(true);

  const dispatch = useDispatch(); 

  const referal_first_name = useSelector(questions.referal_first_name);    
  const referal_email = useSelector(questions.referal_email); 
  const referal_tel = useSelector(questions.referal_tel);    
  const referal_addres_city = useSelector(questions.referal_addres_city); 
  const byer_first_name = useSelector(questions.byer_first_name);    
  const byer_email = useSelector(questions.byer_email);    
  const byer_tel = useSelector(questions.byer_tel);    
  const addres_street = useSelector(questions.addres_street);   
  const referal_coment = useSelector(questions.referal_coment); 
  const type_project = useSelector(questions.type_project);  
 
  const placeInputs = [ 
    {
      question:'Referral First & Last Name',
      value: referal_first_name,
      placeholder: 'Name',
      fun: (e) => { dispatch(setReferalFirstName(e.target.value)) } 
    },
    {
      question:'Referral Email',
      value: referal_email,
      placeholder: 'Email',
      fun: (e) => { changeEmail(true,e.target.value,setErrEmailRef,dispatch,validateEmail)  } 
    },
    {
      question:'Referral Phone',
      value: referal_tel,
      placeholder: 'Phone',
      fun: (e) => { dispatch(setReferalTel(e.target.value)) } 
    },
    {
      question:'Referral Street, City, State, Zip Code',
      value: referal_addres_city,
      placeholder: 'Address',
      fun: (e) => { dispatch(setReferalCity(e.target.value)) } 
    },
    {
      question:'Your First & Last Name',
      value: byer_first_name,
      placeholder: 'Name',
      fun: (e) => { dispatch(setFirstName(e.target.value)) } 
    },
    {
      question:'Your Email',
      value: byer_email,
      placeholder: 'Email',
      fun: (e) => {  changeEmail(false,e.target.value,setErrEmail,dispatch,validateEmail) } 
    },
    {
      question:'Your Phone Number',
      value: byer_tel,
      placeholder: 'Phone',
      fun: (e) => { validateTelephone(false,e.target.value,mask,byer_tel,setErrTel,dispatch) } 
    },
    {
      question:'Your Street, City, State, Zip Code',
      value: addres_street,
      placeholder: 'Address', 
      fun: (e) => { dispatch(setAddres(e.target.value)) } 
    },
    {
      question:'How Did You Hear About Our Referral Program?',
      value: referal_coment,
      placeholder: 'Comment',
      fun: (e) => { dispatch(setReferalComent(e.target.value)) } 
    } 
  ]
   
  const checkbox = [
    'Bathroom Remodeling',
    'Kitchen Remodeling',
    'Basement Remodeling',
    'Roof Installation & Repair',
    'Siding Installation & Repair',
    'Tile Installation',
    'Shower Remodeling',
    'GuHers', 
  ]
   
  const plainOptions = [
    {
      label: 'Bathroom Remodeling',
      value: 'Bathroom Remodeling',
    },
    {
      label: 'Kitchen Remodeling',
      value: 'Kitchen Remodeling',
    },
    {
      label: 'Basement Remodeling',
      value: 'Basement Remodeling',
    },
    {
      label: 'Roof Installation & Repair',
      value: 'Roof Installation & Repair',
    },
    {
      label: 'Siding Installation & Repair',
      value: 'Siding Installation & Repair',
    },
    {
      label: 'Tile Installation',
      value: 'Tile Installation',
    },
    {
      label: 'Shower Remodeling',
      value: 'Shower Remodeling',
    },
    {
      label: 'GuHers',
      value: 'GuHers',
    },
  ];
 
  const imgAnty = [toprated, elite, ant_2, ant_3]
 
  const typeProjectChange = (checkedValues) => { 
    dispatch(setTypeProject(checkedValues));
  };
  const {state, hash} = useLocation()
  const id = state?.id;

  useEffect(()=>{ 
    console.log(id)
    if(id){ 
        const targetElement = document.getElementById(id) 
        targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [state,hash])
   
  useEffect(() => {
    fetch('https://api.sypexgeo.net/json')
    .then(response => response.json())
    .then(data => {
      if(data.country!= null) {
        setMask(quality[data.country.iso]);
      }
    });
  },[]);

    return (
      <div id={'police'}  className="policy_screen"> 
        <Title text={'PRIVACY POLICY'} />
        <div className="policyWrapperTxt">
          <b>Effective date: August 29, 2022</b><br/>
          <ul>
            <li type="disc">Butkov LLC (“us”, “we”, or “our”) operates the https://butkovconstruction.com/ website (the “Service”).</li>
            <li type="disc">This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</li>
            <li type="disc">We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</li>
          </ul>
          <br/>
          <ol>
            <li type="I"><b>Information Collection And Use</b></li><br/>
            <ul style={{ paddingLeft: '20px' }}>
              <li type="circle">We collect several different types of information for various purposes to provide and improve our Service to you.</li>
            </ul> 
              <ol style={{ paddingLeft: '20px' }}><br/>
              <li type="A"><b>Types of Data Collected</b></li><br/>
                <ol style={{ paddingLeft: '20px' }}>
                <li type="1">Personal Data</li><br/>
                  <ul style={{ paddingLeft: '20px' }}>
                  <li type="circle"> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:</li><br/>
                      <ul style={{ paddingLeft: '20px' }}>
                      <li type="square"> Email address</li><br/>
                      <li type="square"> First name and last name</li><br/>
                      <li type="square"> Phone number</li><br/>
                      <li type="square">Address, State, Province, ZIP/Postal code, City</li><br/>
                      <li type="square">Cookies and Usage Data</li><br/>
                    </ul>
                  </ul>
                  <br/>
                  <br/>
                  <li type="1">Usage Data</li><br/>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li type="circle"> We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
                    </ul>
                  <br/>
                  <br/>
                  <li type="1">Tracking & Cookies Data</li><br/>
                  <ul style={{ paddingLeft: '20px' }}>
                  <li type="circle"> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</li><br/>
                  <li type="circle"> Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</li><br/>
                  <li type="circle"> You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</li><br/>
                  <li type="circle">Examples of Cookies we use:</li><br/>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li type="square"><b>Session Cookies.</b> We use Session Cookies to operate our Service.</li><br/>
                      <li type="square"><b>Preference Cookies.</b> We use Preference Cookies to remember your preferences and various settings.</li><br/>
                      <li type="square"><b>Security Cookies.</b> We use Security Cookies for security purposes.</li><br/>
                    </ul>
                  </ul>
                </ol>
                <br/> 
              <li type="A"><b>Use of Data</b></li><br/>
              <ul style={{ paddingLeft: '20px' }}>
              <li type="circle">Butkov LLC uses the collected data for various purposes:</li><br/>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li type="square">To provide and maintain the Service</li><br/>
                    <li type="square">To notify you about changes to our Service</li><br/>
                    <li type="square">To allow you to participate in interactive features of our Service when you choose to do so</li><br/>
                    <li type="square">To provide customer care and support</li><br/>
                    <li type="square">To provide analysis or valuable information so that we can improve the Service</li><br/>
                    <li type="square">To monitor the usage of the Service</li><br/>
                    <li type="square">To detect, prevent and address technical issues</li><br/>
                  </ul>
              </ul>
              <li type="A"><b>Transfer of Data</b></li><br/>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="disc">Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</li><br/>
                <li type="disc">If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</li><br/>
                <li type="disc">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</li><br/>
                <li type="disc">Butkov LLC will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</li><br/>
              </ul>
              <li type="A"><b>Disclosure of Data</b></li><br/>
              <ul style={{ paddingLeft: '20px' }}>
                Legal Requirements
                <ul style={{ paddingLeft: '20px' }}> 
                <li type="circle">Butkov LLC may disclose your Personal Data in the good faith belief that such action is necessary to:</li><br/>
                    <ul style={{ paddingLeft: '20px' }}> 
                      <li type="square">To comply with a legal obligation</li><br/>
                      <li type="square">To protect and defend the rights or property of Butkov LLC</li><br/>
                      <li type="square">To prevent or investigate possible wrongdoing in connection with the Service</li><br/>
                      <li type="square">To protect the personal safety of users of the Service or the public</li><br/>
                      <li type="square">To protect against legal liability</li><br/>
                    </ul>
                  </ul>
                </ul>
              <li type="A"><b>Security of Data</b></li><br/>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="disc">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</li><br/>
              </ul>
              <li type="A"><b>Service Providers</b></li><br/>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="disc">We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</li><br/>
                <li type="disc">These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li><br/>
              </ul>
              <li type="A"><b>Analytics</b></li><br/>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="disc"> We may use third-party Service Providers to monitor and analyze the use of our Service.</li><br/>
                <li type="disc"><b>Google Analytics</b> – Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</li><br/>
                <li type="disc">For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en</li><br/>
              </ul>
              </ol>
              <br/><br/><li type="I"><b>Links To Other Sites</b></li><br/>
              <br/>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="disc">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</li><br/>
                <li type="disc">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</li><br/>
              </ul>
              <br/><br/>
              <li type="I"><b>Children’s Privacy</b></li><br/>
              <br/>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="disc">Our Service does not address anyone under the age of 18 (“Children”).</li><br/>
                <li type="disc">We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</li><br/>
              </ul>
              <br/><br/>
              <li type="I"><b>Changes To This Privacy Policy</b></li><br/>
              <br/>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="disc">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</li><br/>
                <li type="disc">We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.</li><br/>
                <li type="disc">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</li><br/>
              </ul>
              <br/><br/>
              <li type="I"><b>Contact Us</b></li><br/>
              <br/>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="disc">If you have any questions about this Privacy Policy, please contact us:</li><br/>
              </ul>
              <ul style={{ paddingLeft: '20px' }}>
                <li type="circle">Phone: 612-516-0263</li><br/>
                <li type="circle">Email: info@butkovconstruction.com</li><br/>
                {/* <li type="circle">Visit Our Location:</li><br/> 
                  <ul style={{ paddingLeft: '20px' }}> 
                    <li type="square">Osseo, MN 55316 </li><br/>
                  </ul> */}
              </ul>
              </ol>
        </div>
        <div className='readyAntitiesContainer'>
          {
            imgAnty.map((item, key) => (
              <div key={key} className='readyImgContainer'>
                <img width={100} src={item} alt="img" />
              </div>
            ))
          }
        </div>
      </div>
    );
}

export default PoliceScreen;
