import React from "react";
import './App.css';
import { TiTick } from 'react-icons/ti';


function Right(props){
    return <div className="right">
        <div className="left-one right-one">
            <h2 className="one font-color">{props.one}</h2>
            <h4 className="edu-data font-weight"><TiTick/>{props.two}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.three}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.four}</h4> 
        </div>
        <div className="left-one right-two">
            <h2 className="one font-color">{props.five}</h2>
            <h4 className="edu-data font-weight"><TiTick/>{props.six}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.seven}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.eight}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.nine}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.ten}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.eleven}</h4>
        </div>
        <div className="left-one right-three">
        <h2 className="one font-color">{props.onee}</h2>
            <h4 className="edu-data font-weight"><TiTick/>{props.twoo}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.threee}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.fourr}</h4>
            <h4 className="edu-data font-weight"><TiTick/>{props.fivee}</h4>
        </div>
    </div>
}

export default Right;