import React, { Fragment } from "react";
import  {RiGlobeFill} from "react-icons/ri"
import{AiOutlineSearch} from "react-icons/ai"

const Icons=()=>{
    return <Fragment>
        <nav>
            <form className="form_nav" action="#">
            <div className="nav_left">
                
                  <RiGlobeFill className="globle_icon"/>
                    <select name="Language" id="language">
                        <option>Eng</option>
                        <option>Aze</option>
                    </select>
         </div>
         <div className="nav_center">
            <input placeholder="Contact Sales" type="text" name="text" id="text" />
            <label className="label_search" htmlFor="text"><AiOutlineSearch className="search_icon"/></label>
         </div>

            <div className="nav_button">
                <button className="nav_log">Log in</button>
                <button className="nav_get">Get HubSpot free</button>
            </div>

         </form>
         </nav>
    </Fragment> 
}

export default Icons