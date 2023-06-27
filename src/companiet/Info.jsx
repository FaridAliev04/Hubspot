import React, { Fragment, useState } from "react";
import {LuArrowBigLeft,LuArrowBigRight} from "react-icons/lu"
import Main from "./Main";

const infoData=[
    "Find out how companies like yours seamlessly attract qualified leads, convert them into customers, and drive revenue",
   "Manage campaigns and nurture leads with marketing automation that helps your teams work more efficiently as you grow.",
    "Find out how sales teams like yours are forming stronger connections, booking more appointments, and building pipelines in less time and with much less pain.",
]
const Info=()=>{
    const [step,setStep]=useState(1)
    const firstClick=()=>{
        if(step===1){
            setStep(step)
        }
        if(step===2){
            setStep(step-1)
        }
        if(step===3){
            setStep(step-2)
        }
    }
    const secondClick=()=>{
        if(step===1){
            setStep(step+1)
        }
        if(step===2){
            setStep(step)
        }
        if(step===3){
            setStep(step-1)
        }
    }
    const tridClick=()=>{
        if(step===1){
            setStep(step+2)
        }
        if(step===2){
            setStep(step+1)
        }
        if(step===3){
            setStep(step)
        }
    }

    
    return <Fragment>

            <h1 className="help_header">
              How HubSpot can help
            </h1>
       
        <div className="countiner">
            <div className="number">
                <div onClick={()=>firstClick()} className={step>=1 ? "sped_before":"num_1"}>
                    1
                </div>
                <div onClick={()=>secondClick()} className={step>=2 ? "sped_before":"num_1"}>
                    2
                </div>
                <div onClick={()=>tridClick()} className={step>=3 ? "sped_before":"num_1"}>
                    3
                </div>
            </div>
            <div  className="num_info">
                <p className="">
                    {infoData[step-1]}
                </p>
            </div>
            <div className="info_btn">
                <button onClick={()=>{step>1? setStep(step-1):setStep(step+2)}} className="info_befor information_btn">
                    <LuArrowBigLeft className="info_icons"/>
                </button>

                <button onClick={()=>{step<3? setStep(step+1):setStep(step-2)}} className="info_after information_btn">
                    <LuArrowBigRight className="info_icons"/>
                </button>
            </div>
        </div>
    </Fragment>
}

export default Info