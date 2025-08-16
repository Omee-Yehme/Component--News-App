import React, { Component } from 'react'
import spin from "../assets/spin.svg"

export default class Spin extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <img src={spin} alt="Loading spinner" />
            </div>
        )
    }
}
