import React, { Component } from 'react'
import Img1 from '../Resources/img1.jpg'
import Img2 from '../Resources/img2.jpg'
import Img3 from '../Resources/img3.jpg'

class Cards extends Component{
    render(){
        return(
            <div className="Container">
            <div className="row">
            <div className="d-flex">
            <div class="card" style={{width: "18rem"}}>
            <img src={Img1} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Encourage</h5>
            <p className="card-text">Promoting healthy growth and development.</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            </div>
            </div>

            <div class="card" style={{width: "18rem"}}>
            <img src={Img2} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Health</h5>
            <p className="card-text">Rethinking the child health agenda </p>
            <a href="#" className="btn btn-primary">Learn more</a>
            </div>
            </div>

            <div class="card" style={{width: "18rem"}}>
            <img src={Img3} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Management</h5>
            <p className="card-text">Managing childhood illness</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            </div>
            </div>
            </div>
            </div>
             </div>

        )
    }
}

export default Cards;