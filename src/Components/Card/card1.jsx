import React from 'react'
import Img from "../Resources/card.jpg"
export default function card1() {
    return (
        <div>
            <div className="row card-1-custom-con" >
                <div className="col-6 custom-card-img">
                    <img src={Img} alt="" className="img-fluid" />

                </div>
                <div className="col-6" style={{ backgroundColor: "#660066" }}>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white text-center">Our Mission</h1>
                        </div>
                        <div className="col-12">
                            <p className="text-white text-center">A small amount can change the life of a child; through education, nutrition, and basic protection, children can lead normal lives. The adjacent graph is a representation of how we have utilised your donations.</p>
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-primary custom-card-btn" >Learn more</button>
                
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
