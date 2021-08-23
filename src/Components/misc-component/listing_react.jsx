import React from 'react'

export default function listing_react() {
    var array1 = [
        { name: "Mental Development", val: 80 },
        { name: "Food", val: 45 },
        { name: "Healthcare", val: 60 },
        { name: "Education", val: 76 },
		{ name: "Trauma Care", val:50}
    ]
    
    return (
        <div>
			<div className="row custom-misc-2-con-chart">
				<div className="col-5">
					<h1>Where the money goes</h1>
					<h3>Current oprations and program</h3>
					<ul style={{ color: "##000000" }}>
						{["Mental Development", "Food", "Healthcare", "Education", "Trauma Care"].map((data)=><li>{data}</li>)}
					</ul>

					<button
						className="btn btn-primary pill"
						style={{ backgroundColor: "#660066", border:"none"}}
					>
						DONATE NOW
					</button>
				</div>
				<div className="col-7">
					<div className="height-creator">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
    

