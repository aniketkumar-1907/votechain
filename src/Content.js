import React from 'react'
import items from "./data";
import { useAuth0 } from "@auth0/auth0-react";
const Content = (props) => {
  const { isAuthenticated} = useAuth0();
  return (
    <div className="mcont">
      <div className="cont">
        <div className="img">
        <img src={props.image} alt="image" width="398px" height="350px" />
        </div>
        <div className="info">{props.title}</div>
        {isAuthenticated?<button className="vote">Vote Now</button>:null}
      </div>
    </div>
  )
}

export default Content