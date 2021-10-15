import './App.css'
import React from 'react'
import { useState } from 'react';

export default function Clock() {

    let Fulldate = new Date().toLocaleTimeString();
   

    const [time , setTime]= useState(Fulldate);
   

    const updatetime = () =>{
        let time = new Date().toLocaleTimeString();
        setTime(time)
    }

    setInterval(updatetime,1000)
        
        return(
                <div className="main-Comtainerr">
            <h1 className="clock-Text"> 
            {time}
            </h1>
            </div>

        )
    }
