import { useState } from "react"
function CountdownLightSwitch(){
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