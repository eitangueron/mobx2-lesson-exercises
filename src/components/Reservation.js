import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("RestaurantStore")
@observer
class Reservation extends Component{

    completeRes = () => {
        this.props.RestaurantStore.completeRes(this.props.id)
    }

    seatRes = () => {
        this.props.RestaurantStore.seatRes(this.props.id)
    }

    render () {
        return (
            <div className={this.props.completed ? 'completed' : 'uncompleted'}>
                <p>{this.props.name}</p>
                <p>{this.props.numPeople}</p>
                <button onClick={this.seatRes}>Seat reservation</button>
                <button onClick={this.completeRes}>Complete Reservation</button>
            </div>
        //render the reservation data here
        //make sure you store the ID somewhere so you can find the reservation
        //use the class "conditional" to conditionally render completed reservations
        //You should hav ea complete reservation button to complete the reservation
        )
    }
}

export default Reservation