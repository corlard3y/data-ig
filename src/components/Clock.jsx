import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = this.getTime();

    }
    componentDidMount(){
        this.setTime();
    }

    setTime(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this),1000);
    }
    updateClock(){
        this.setState(this.getTime,this.setTime);
    }
    getTime(){
        const current = new Date();
        return{
            hours: current.getHours(),
            minutes: current.getMinutes(),
            seconds: current.getSeconds(),
            ampm: current.getHours() >= 12 ? 'pm' : 'am' 

        }

    }
    render() {
        const {hours,minutes,seconds,ampm} = this.state;


        return (
            <div className='clock'>
                   {hours === 0 ? 12 : hours > 12 ? hours - 12: hours} :
                   {minutes > 9 ? minutes : `0${minutes}`} :
                   {seconds > 9 ? seconds : `0${seconds}`}{ampm}
            </div>
        )
    }

    
}
Clock.propTypes = {
   getTime: PropTypes.object.isRequired,       
}
