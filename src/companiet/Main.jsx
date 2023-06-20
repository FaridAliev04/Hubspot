import React, { Fragment } from "react";
import Photo2 from "./img/Screenshot_197.png"

const Main=()=>{
    return <Fragment>
        <div className="main">
            <div className="main_block">
                <div className="texts">
                    <h1 className="texts_header">
                        There's a better way to grow
                    </h1>
                    <p className="texts_text">
                        Lorem, ipsum dolor consectetur adipisicing elit. Quisquam nihil assumenda unde ipsum maxime optio!
                    </p>
                    <button className="texts_btn">
                        Get HubSpot free
                    </button>
                    <p className="texts_span">
                        Lorem ipsum dolor sit amet. Lorem ipsum .
                    </p>
                </div>

                <div >
                    <img className="main_photo"src={Photo2} alt="" />
                </div>
            </div>
        </div>
    </Fragment>
}

export default Main