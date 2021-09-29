import React from "react";
import './App.css';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import { BsBook } from 'react-icons/bs';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

function Left(props){
    return <div className="left">
        <div className="left-one ">
            <h2 className="one font-color">{props.one}</h2>
            <h4 className="two font-weight">{props.two}</h4>
        </div>
        <div className="left-one">
            <h2 className="one font-color">{props.three}</h2>
            <h4 className="two font-weight"><AiFillPhone size="20px"/> {props.four}</h4>
            <h4 className="two font-weight"><AiFillHome size="20px"/> {props.five}</h4>
            <h4 className="two font-weight"><GoMail size="20px"/> {props.six}</h4>
        </div>
        <div className="left-one">
        <h2 className="one font-color">{props.seven}</h2>
        <h4 className="inline font-weight"><BsBook size="25px"/>  {props.eight}</h4>
        <h4 className="inline font-weight"><GiCommercialAirplane size="25px"/>  {props.nine}</h4>
        <br />
        <h4 className="inline font-weight"><FaLaptopCode size="25px"/>  {props.ten}</h4>
        <h4 className="inline font-weight"><FaPencilAlt size="25px"/>  {props.eleven}</h4>

        </div>
    </div>
}

export default Left;