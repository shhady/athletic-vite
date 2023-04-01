import React from 'react'
import "./Pricing.css"
export default function Pricing() {
  return (
    <div style={{marginTop:"40px"}}>
        <p style={{textAlign:"center", color:"#348feb"}}>כניסה חד פעמית 50 ש"ח</p>
        <h1 style={{textAlign:"center"}}>מחירים</h1>
        <div className='prices' dir='rtl'>
            <div className='PriceCards'>
                <h2 style={{marginBottom:"20px"}}>3 חודשים</h2>
                <h3>700 ש"ח</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>1</li>
                    <li>2</li>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
            <div  className='PriceCards'><h2  style={{marginBottom:"20px"}}>6 חודשים</h2> <h3>1500 ש"ח</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>1</li>
                    <li>2</li>
                    <li>1</li>
                    <li>2</li>
                </ul></div>
            <div  className='PriceCards'><h2  style={{marginBottom:"20px"}}>12 חודשים</h2> <h3>2500 ש"ח</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>1</li>
                    <li>2</li>
                    <li>1</li>
                    <li>2</li>
                </ul></div>
        </div>
    </div>
  )
}
