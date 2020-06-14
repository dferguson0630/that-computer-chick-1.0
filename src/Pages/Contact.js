import React from 'react';
import Navbar from '../Navbar';
import storefront from './Storefront.jpg'

const Contact = () => {
	return(
		<div>
			<Navbar />
			<div class="container">

		  <h1 class="my-4">Contact Us &ensp;
		    <small>770-218-1228 | support@thatcomputerchick.com</small>
		  </h1>

		  <div class="row">

		    <div class="col-md-8">
		      <img class="img-fluid" src={storefront} alt="storefront" width='750px' height="500px" />
		      <div style={{paddingBottom: '15px'}}></div>
		    </div>

		    <div class="col-md-4" style={{paddingBottom: '15px', paddingTop: '15px'}}>
		      <h3 class="my-3">Location</h3>
		      <p>3880 Due West Road, Suite 100 <br />Marietta, GA 30064</p>
		      <p>We are in the shopping center with Dominos and Due West Pharmacy</p>
		      <h3 class="my-3">Hours</h3>
		      <table>
		      	<tr><td>Sunday</td><td>CLOSED</td></tr>
		      	<tr><td>Monday</td><td>10a-6p</td></tr>
		      	<tr><td>Tuesday</td><td>10a-6p</td></tr>
		      	<tr><td>Wednesday</td><td>10a-6p</td></tr>
		      	<tr><td>Thursday</td><td>10a-6p</td></tr>
		      	<tr><td>Friday</td><td>10a-6p</td></tr>
		      	<tr><td>Saturday</td><td>CLOSED</td></tr>
		      </table>
		    </div>

		  </div>
		  <div className="col-lg-12 col-md-4 col-sm-6 mb-4">
			<div className="card h-100">
				 <div className="card-body">
				     <h4 className="card-title">
				        <a href="">Social Media</a>
				     </h4>
				     <a href=""><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></a>
				     <a href=""><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
				  </div>
			</div>
		 </div>
	</div>
 
  

</div>
	);
}

export default Contact;