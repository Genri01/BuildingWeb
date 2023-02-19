import React from 'react';
import './style.css';
import CommercialBlock from '../../components/CommercialBlock';
import { useSelector } from 'react-redux';
import { app } from '../../redux/selectors';

export default function CommercialScreen(props) { return ( <CommercialBlock mobile={useSelector(app.mobile)} /> ) }
 