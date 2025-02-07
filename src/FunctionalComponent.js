import React from "react";
import './Styles.css'
function FunctionalComponent(props){
    console.log(props)
    let applyStyle=props.apply? 'heading':' '
    let inlineStyle={
        color:'green',
        backgroundColor:'red',
        fontSize:'50px'
    }
    return(
        <div>
        <h1 class={`${applyStyle} font-style`}> welcome to hyd{props.clgName},{props.city}
        {props.children}</h1>
        <h2 sttle={inlineStyle}> good aftennoon</h2>
        </div>
    )



}
export default FunctionalComponent