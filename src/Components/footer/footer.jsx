import React from "react";

export default function footer(){
return(
<footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Donation</a></li>
  	 				<li><a href="#">Partner</a></li>
  	 				<li><a href="#">Events</a></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
				<div className="Copyright" style={{color: "#ffffff"}}>
				<p>© 2021 Om Bhonsle</p>
			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
)
}