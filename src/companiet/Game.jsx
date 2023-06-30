import React, { useState } from "react";

const Game=()=>{
    const [score,setScore]=useState()
    const[youFaiz,setYouFaiz]=useState()
    const [himFaiz,setHimFaiz]=useState()
    const scoreGame=()=>{
        // const you=document.querySelector("#faiz_you")
        // const him=document.querySelector("#faiz_him")
        // const youValue=you.vaule
        // const himValue=him.value
        // const score=(himValue+youValue)/100
        // setScore(score)
        const score=(Number(youFaiz)+Number(himFaiz))/100
        setScore(score)
    }
    const form=(e)=>{
        e.preventDefault()
    }

    return <div className="game">
         <form onSubmit={form} action="">
        <div className="game_div-first">  
            <label className="faiz_label" htmlFor="faiz">       
                How much do you love him?
            </label>
            <input value={youFaiz} onChange={(e)=>{
                        setYouFaiz(e.target.value)
                        }} type="number" name="faiz" id="faiz_you" />
        </div>
        <div className="game_div-first">
            <label className="faiz_label" htmlFor="faiz1">       
             How much does he love you?
            </label>
            <input value={himFaiz} onChange={(e)=>{
                        setHimFaiz(e.target.value)
                        }} type="number" name="faiz1" id="faiz_him" />
        </div>
        <div className="game_div-first">
            <label className="faiz_label" htmlFor="faiz1">       
             How much do you love each other
            </label>
            <div className="scorre">
                {score}
            </div>
        </div>
        <button onClick={scoreGame} className="game_score">Click</button>
        </form>
    </div>
}

export default Game