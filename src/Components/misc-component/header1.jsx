import React from 'react'
import { ReactComponent as Logo2 } from "../Resources/Logo.svg";
export default function header() {
    return (
        <div>
            <div className="row">
                <div className="col-12 text-center">
                    <Logo2 className="custom-logo-misc img-thumbnail" />
                </div>

                <div className="col-12.cr7">
                    <h1 className="custom-misc-h1-1 text-secondary text-center">
                        <span>445454</span> numbers of supporters worldwide
                    </h1>
                </div>
                {/* line */}
                <span className="line2"> </span>
            </div>
        </div>
    )
}
