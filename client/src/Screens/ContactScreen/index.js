import React from 'react';
import './style.css';
import ContactBlock from '../../components/ContactBlock';
import { useSelector } from 'react-redux';
import { app } from '../../redux/selectors';

export default function ContactScreen(props) {
  
  const mobile = useSelector(app.mobile);

    return (
      <div className={`${ mobile ? "mobileContactBlockScreen" : "contactBlockscreen"}` } >
        <ContactBlock mobile={mobile} />
      </div>
    );
}
 