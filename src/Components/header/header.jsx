import React from 'react'

export default function header() {
    return (
        <div className="row header_conatiner_dark">
        <div className="col-6 d-flex">
        <div className="icon">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-pinterest-p"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fab fa-youtube"></i> 
        </div>
        &nbsp;
        &nbsp;

        <div className="phone_head">
        <i class="fal fa-phone"></i>
        &nbsp;
        +919769428745
        </div>
        </div>

        <div className="col-6">
        <div className="login_signup_container">
        <button>
        <i class="fad fa-user-plus"></i> &nbsp;
            SIGN UP
        </button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button>
            <i class="fad fa-sign-in-alt"></i> &nbsp; LOGIN </button>
        </div>
        </div>
        </div>

    )
}
