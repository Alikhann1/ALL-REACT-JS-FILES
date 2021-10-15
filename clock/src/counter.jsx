import './App.css'
import React from 'react'

export default class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            Second : 55,
            Minute : 59,
            Hours : 24
        }
    }
    componentDidMount(){
        setInterval(()=>{
            let {Second} = this.state;
            this.setState({
                Second : Second + 1
            })
        },1000)
    }

    componentDidUpdate(){
       
        let {Second, Minute, Hours} = this.state;


        if(Second === 60){
            this.setState({
                Second : 0,
                Minute : Minute + 1
            })
            
        }

        if(Minute === 60){
            this.setState({
                Minute : 0,
                Hours :Hours+1
            }) 
        }

        if(Hours === 25){
            this.setState({
                Hours :1
            }) 
        }

        
     
    }

    
    render(){
        let {Second} = this.state;
        let {Minute} = this.state;
        let {Hours} = this.state;
        return(
                <div className="main-Comtainer">
            <h1 className="clock-Text"> 
            {Hours <10 ? "0" + Hours : Hours} : {Minute <10 ? "0" + Minute : Minute} : {Second <10 ? "0" + Second : Second} {Hours < 12 ? "AM" : "PM"}
            </h1>

            </div>

        )
    }
        
}