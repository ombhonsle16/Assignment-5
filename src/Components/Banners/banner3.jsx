import React from "react";

export default function Banner3() {
  return (
    <div>
        <div className=" custom-banner-3-head d-flex">
          <div className="row custom-banner-3 ">
            <div className="col-9 backg">
              <h1><b>Health Camp</b> </h1>
              
              <h2 style={{color:"#CC99CC" }}> <b> Aayushman Aadhar</b></h2>
              <div className="d-flex">
              <div><i class="fad fa-clock"></i></div>
              <div>&nbsp;5:30Am to 5:30pm</div>
              
              
              </div>
              <div className="d-flex">
                <div><i class="fad fa-calendar-day"></i></div>
                <div>&nbsp;19 October-31 December</div>
              </div>
              </div>
            </div>
          
        
         
              <div className="col-6 custom-banner3-text">
                  <div className="justify-content-evenly ">
              <h1><b> Upcoming</b>  </h1>  <h1 style={{color:"#CC99CC"}}> <b>Events</b> </h1>
              <br/>
              </div>
              <div className="row">
              <div className="col-1 back">
                 <button>
                    1
                 </button>
        
                  </div>
                  
              <div className="col-7">
                  <h5>5th Foundation day</h5>
                  <p><i class="fad fa-clock"></i> 11:30Am to 5:30pm<br/><i class="fad fa-calendar-day"></i>26 November-27 December</p>
              </div>
              
              </div>
              <div className="row">
              <div className="col-1 back">
                 <button>
                  2
                  </button>
                  </div>
                  
              <div className="col-5">
                  <h5>Waterboat ambulance</h5>
                  <p><i class="fad fa-clock"></i> 10:30Am to 7:30pm<br/><i class="fad fa-calendar-day"></i>27 October-31 December</p>
              </div>
              
              </div>
              
              </div>
              </div>
          </div>
  );
}