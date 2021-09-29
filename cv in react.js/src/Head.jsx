import React from "react";
import './App.css';
import Mypicture from './mypicture'

function Head(props){
    return <div className="head">
        <div className="head-left">
            <Mypicture/>
        </div>
        <div className="head-right">
            <span className='vitae'>{props.one}</span>
            <br />
            <span className='name'>{props.two}</span>
            <span></span>
        </div>

    </div>
}

export default Head;