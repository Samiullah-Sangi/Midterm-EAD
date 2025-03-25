import { useState,useEffect } from "react"

function CountdownLightSwitch()
{
    const [islightMode,setislightMode]=useState(false);

    const[countdown,setCountdown]=useState(30);
    
    const[isrunning,setisrunning]=useState(false);
   
    useEffect(()=>{
        let timer;
        if(isrunning && countdown > 0){
            timer =setTimeout(()=> setCountdown(countdown-1),1000);
        }
    else if (countdown ===0){
        setisrunning(false)

     } 
     return()=>clearTimeout(timer)
    },[countdown,isrunning]);

    const handlethemetoggle = ()=>{
        setislightMode((prevMode)=>!preMode)
    }

    const handlestart=()=>{
        if(!isrunning) setisrunning(true);
    };
    
    const handlesliderchange = (event)=>{
        if(!isrunning) setCountdown(parseInt(event.target.value));
    };
    return(
        <>
        <h1>Countdown & light Switch</h1>
        <input type="checkbox"></input>
        <span>Light mode</span>
        <input type="range"></input>
        <div>30s</div>
        <button> Start timer</button>

        </>
    )
}
export default CountdownLightSwitch