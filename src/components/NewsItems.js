
import React, { Component } from 'react'
import img from "../assets/img.jpeg"

export default class NewsItems extends Component {



    render() {
        let { title, description, imgurl, newsurl, pub, aut, sou } = this.props

        return (
            <div>
                <div className="card my-3" >
                    <a className='p-2' href={newsurl} target='_blank' rel="noreferrer">
                        <img src={imgurl ? imgurl:  img} className="card-img-top" alt="News" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge z-1 rounded-pill bg-danger">
                            {sou}
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
                        <p className="card-text"><small className="text-body-secondary">By <strong>{aut}</strong> on <strong>{new Date(pub).toGMTString()}</strong></small></p>
                    </div>
                </div>
            </div>
        )
    }
}
