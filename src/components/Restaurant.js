import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation'

@inject("GeneralStore", "RestaurantStore")

@observer
class Restaurant extends Component{


    addRes = () => {
        this.props.RestaurantStore.addRes(this.props.GeneralStore.name,this.props.GeneralStore.numPeople)
        this.props.GeneralStore.resetInput()
    }

    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>There are {this.props.RestaurantStore.restPopulation} people in the restaurant right now</div>
                <div>There are {this.props.RestaurantStore.completedTables} completed tables</div>
                <ResInput/>
                <button id="addRes" onClick={this.addRes}>Add Reservation</button> 
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                    {this.props.RestaurantStore.reservations.map( r=> <Reservation name={r.name} numPeople={r.numPeople} id={r.id}/>)}
                {/* Map reservation data to Reservation components here */}
                </div>
            </div>
        )
    }
}

export default Restaurant