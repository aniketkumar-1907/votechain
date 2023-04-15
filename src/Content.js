import React from 'react'
import items from "./data";
import { useAuth0 } from "@auth0/auth0-react";
import {Routes,Route,useNavigate} from 'react-router-dom';
import Votepage from './Votepage';
const Content = (props) => {
  const { isAuthenticated} = useAuth0();
  const navigate= useNavigate();
  const navigateToVotingPage=()=>{
    navigate('/Votepage');
  };
  return (
    <div className="mcont">
      <div className="cont">
        <div className="img">
        <img src={props.image} alt="image" width="398px" height="350px" />
        </div>
        <div className="info">{props.title}</div>
        {isAuthenticated?<button onClick={navigateToVotingPage} className="vote">Vote Now</button>:null}
        
        
      </div>
    </div>
  )
}

export default Content