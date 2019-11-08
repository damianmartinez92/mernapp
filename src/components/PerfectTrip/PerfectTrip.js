import React, { Component } from 'react'
import './perfectTrip.css'
import imgFlecha from '../../img/circled-right-2.png'

export default class PerfectTrip extends Component {
    render() {
        return (
            <div className="containerPerfectTrip">
                <h3>Find your perfect trip, designed by insiders who know and love their cities.</h3>
                <img src={imgFlecha} alt="IrA" className="imgFlecha"/>
            </div>
        )
    }
}
