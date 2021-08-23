import React from 'react'
export default function banner2() {
    return (
        <div>

            <div className="row banner-2-custom" style={{ backgroundColor:"#660066" }}>
                <div className="col-6 custom-banner2-head" >

                <h1>Don't limit yourself to money</h1>
                <br />
                <br />
                <button className="btn btn-outline-dark" style={{color:"#F9F9F9" }} >JOIN&nbsp;US</button>

                </div>


                 <div className="col-6 d-flex justify-content-around custom-banner2-imga ">
                    <i class="fad fa-backpack"></i>
                    <div className="logo-text-1">
                    <h1>School</h1>
                    </div>


                    <i class="fad fa-book-reader"></i>
                    <div className="logo-text-2">
                    <h1>Study</h1>
                    </div>

                    <i class="fad fa-users-class"></i>
                    <div className="logo-text-3">
                    <h1>Classroom</h1>
                    </div>

                 </div>



                 </div>

                 </div> 

    )
}