import React, { Fragment } from "react";
import Img1 from  "./img/Screenshot_196.png"

const Section=()=>{
    return <Fragment>
        <div className="section">
            <div className="section_logo">
                <img className="selection_img" src={Img1} alt="" />
            </div>

            <div className="section_sct">
                <select name="" id="select">
                    <option >Softare</option>
                    <option >Softare</option>
                    <option >Softare</option>
                    <option >Softare</option>
                </select>
                <select name="" id="select">
                    <option>Pricing</option>
                    <option>Pricing</option>
                    <option>Pricing</option>
                    <option>Pricing</option>
                </select>
                <select name="" id="select">
                    <option >Resources</option>
                    <option >Resources</option>
                    <option >Resources</option>
                    <option >Resources</option>
                </select>
                <select name="" id="select">
                    <option >Partners</option>
                    <option >Partners</option>
                    <option >Partners</option>
                    <option >Partners</option>
                </select>
                <select name="" id="select">
                    <option >About</option>
                    <option >About</option>
                    <option >About</option>
                    <option >About</option>
                </select>
            </div>
        </div>
    </Fragment>
}

export default Section