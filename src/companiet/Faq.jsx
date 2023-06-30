// import React, { useState } from "react";
// import{IoIosArrowDropdown,IoIosArrowDropup} from "react-icons/io"



// const Catagori=()=>{
//     const[faqs,setFaqs]=useState(null)
//     const faq=(s)=>{
//         if(faqs===s){
//             return setFaqs(null)
//         }
//         setFaqs(s)
//     }

//     return <div className="faq">
//         {faqData.map((e)=>
//             <div className="faq_map">
//                 <div className="faq-main">
//                     <div onClick={()=>faq(s)} className="faq_number">
//                         <h1  className="fa  q_id-header">{e.id}</h1>
//                         </div>
//                         <h1 className="faq_basliq-header">{e.basliq}</h1>
//                         {/* <IoIosArrowDropdown className="faq_down-icons"/> */}
//                         <div className="faq_icons">{faqs===s?<IoIosArrowDropup className="faq_down-icons"/>:<IoIosArrowDropdown className="faq_down-icons"/>}</div>
//                 </div>
//                 <p>{e.title}</p>
//             </div>
//          )}
        
            
//         </div>
// }

// export default Catagori

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
    const faqData=
    [
        {
            "id":1,
            "basliq":"Drive revenue with high-quality leads",
            "title":"Find out how companies like yours seamlessly attract qualified leads, convert them into customers, and drive revenue."
        },
        {
            "id":2,
            "basliq":"Create campaigns efficiently with automation and API",
            "title":"Manage campaigns and nurture leads with marketing automation that helps your teams work more efficiently as you grow."
        },
        {
            "id":3,
            "basliq":"Find and engage sales prospects",
            "title":"Find out how sales teams like yours are forming stronger connections, booking more appointments, and building pipelines in less time and with much less pain."
        },
        {
            "id":4,
            "basliq":"Measure and optimize marketing investments with strategic reporting",
            "title":"Discover how you can leverage reporting to prove your business impact, optimize your campaigns, and make budget decisions with greater certainty than before."
        }
    ]
  return (
    <div  className='faq_accordion'>
        <h1 className='faqs_header'>
            Faq`s
        </h1>
        <div  className='accordion'>
        {faqData.map((e)=>
      <Accordion>
        
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='faq_summary'
        >
          <Typography className='faq_summary'>
           {e.basliq}
          </Typography>
        </AccordionSummary>

        
        <AccordionDetails className='faq_details'>
            
          <Typography >
           {e.title}
          </Typography>
        </AccordionDetails>
      </Accordion>
  )}</div>
    </div>
  );
}
