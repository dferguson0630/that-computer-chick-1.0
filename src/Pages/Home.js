import React from 'react';
import Navbar from '../Navbar';
import Card from './Card';
import storefront from './Storefront.jpg';
import about from './about.jpg';
import Footer from '../Footer';



//http://www.thatcomputerchick.com/images/IMG_14541.jpg
//https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/481242_10150923990502208_1850342631_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=u0964VaF5PEAX-H2PWf&_nc_ht=scontent.fatl1-1.fna&oh=9336133c590cb0012b099eebc59a7f06&oe=5F8BC31E

const fillerImage = "http://placehold.it/1900x1080"; 
const view = () =>  window.screen.availWidth < 376 ? 45 : 75;


const Home = () => {
	  return (
	  	<div>
	     <Navbar />
	    <div id="carouselExampleIndicators" class="carousel slide" >
	   <img src={storefront} alt=""  width="100%" style={{opacity: '0.75', height: `${view()}vh`}}/>
	    </div>
	  

	  <div class="container">

	    <h1 class="my-4 text-center">Serving Marietta since 2003</h1>

		<h2 style={{ paddingBottom: "10px" }}>Features</h2>

	    <div class="row">
	      <div class="col-lg-4 col-sm-6 portfolio-item" style={{ paddingBottom: "10px" }}>
	        <div class="card h-100">
	          <a href="/about-us" style={{ height: "180px" }}><img class="card-img-top" src={about} 
	          alt="" height="180px" style={{padding: "10px 15px 10px 15px"}}/></a>
	          <div class="card-body">
	            <h4 class="card-title">
	              <a href="/about-us">About</a>
	            </h4>
	            <p class="card-text">That Computer Chick first opened its doors 17 years ago and continues to progress as both a business and as a member of the Marietta community.</p>
	          </div>
	        </div>
	      </div>
	      <div class="col-lg-4 col-sm-6 portfolio-item" style={{ paddingBottom: "10px" }}>
	        <div class="card h-100">
	          <a href="/services" style={{ height: "180px" }}><img class="card-img-top" src="https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/12002161_10153544484687208_5615520644789830695_n.jpg?_nc_cat=105&_nc_sid=43edb5&_nc_ohc=msZHHIU9UR4AX_Z518W&_nc_ht=scontent.fatl1-1.fna&oh=09464e2e866d8b3f5b54bdd101d88b45&oe=5F8B1627"
	           alt="" height="180px" style={{padding: "10px 15px 10px 15px"}}/></a>
	          <div class="card-body">
	            <h4 class="card-title">
	              <a href="/services">Services</a>
	            </h4>
	            <p class="card-text">We offer a variety of services to help you set up, repair, or restore your household electronics. </p>
	          </div>
	        </div>
	      </div>
	      <div class="col-lg-4 col-sm-6 portfolio-item" style={{ paddingBottom: "10px" }}>
	        <div class="card h-100">
	          <a href="/contact" style={{ height: "180px" }}><img class="card-img-top" src="https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/416921_10150570291642208_78267564_n.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=FxzV24K5ydcAX--DVc0&_nc_oc=AQmTcAeOctAF26DNMJSTJjL-Q-AQXfwUapGpipF9uU0AlVQ6bvZHFjzT8I-Z6kuiUThZ5TryLrbSO6x0tHDUyj3J&_nc_ht=scontent.fatl1-2.fna&oh=f4f5a27b0766bd5ff020a5717a3ed5f6&oe=5F8B33F1" 
	          alt="" height="180px" style={{padding: "10px 15px 10px 15px"}}/></a>
	          <div class="card-body">
	            <h4 class="card-title">
	              <a href="/contact">Contact</a>
	            </h4>
	            <p class="card-text">Questions? We've got answers. Find out more about store information, remote support, and directions. </p>
	          </div>
	        </div>
	        <div style={{ height: "50px" }}></div>
	      </div>
	      </div>



	    <div class="row" style={{paddingTop: "50px"}}>
	      <div class="col-lg-4 col-sm-6" style={{ paddingBottom: "10px" }}>
	        <div class="card h-100">
	          <h4 class="card-header">Why us?</h4>
	          <div class="card-body" style={{ paddingBottom: "30px" }}>
	            <p class="card-text">Since it began in 2003, That Computer Chick has strived to create an atmosphere that makes each customer feel valued, appreciated, and unique.
	            	 We understand the sacrifice required to trust us with your devices, and TCC works to reward that trust with excellent customer service, flexible timelines, and affordable solutions.
	            </p>
	          </div>
	          <div class="card-footer">
	            <a href="/about-us" class="btn btn-primary">Learn More</a>
	          </div>
	        </div>
	      </div>
	      <div class="col-lg-4 col-sm-6" style={{ paddingBottom: "10px" }}>
	        <div class="card h-100">
	          <h4 class="card-header">Your neighborhood repair specialists</h4>
	          <div class="card-body">
	            <p class="card-text">We guarantee our work, communicate in non-technical terms, and offer recommendations specific to your needs. We work hard to maintain our great reputation and we love what we do.</p>
	          </div>
	          <div class="card-footer">
	            <a href="/services" class="btn btn-primary">Learn More</a>
	          </div>
	        </div>
	      </div> 
	      <div class="col-lg-4 col-sm-6" style={{ paddingBottom: "10px" }}>
	        <div class="card h-100">
	          <h4 class="card-header">Stay connected</h4>
	          <div class="card-body">
	            <p class="card-text">Check out our Facebook and Instagram pages for deals, updates, and store information. </p>
	          </div>
	          <div class="card-footer">
	            <a href="#" class="btn btn-primary">Learn More</a> {/* Look into making href open both facebook and instagram pages in new tabs on click */}
	          </div>
	        </div>
	      </div>
	    </div>
	    
	    <br/><hr/><br/>
	    <div class="row" >
	      <div class="col-lg-6" style={{ height: "450px" }}>
	        <h2>Remote Services</h2>
	        <p>Software troublshooting from the comfort of your home</p>
	        <ul>
	          <li>
	            <strong>Get Started:</strong>
	          </li>
	          <li>Make an appointment</li>
	          <li>Click the link</li>
	          <li>Follow the instructions</li>
	          <li>Get results</li>
	        </ul>
	        <p>Our technicians remotely access your computer to diagnose software problems your device
	        may be experiencing. Instructions are simply and easy to follow, and before you know it we'll have
	        your computer diagnosed and ready for service!</p>
	      </div>
	      <div class="col-lg-6" style={{ height: "450px" }}>
	        <img class="img-fluid rounded" src="https://scontent.fatl1-1.fna.fbcdn.net/v/t31.0-8/s960x960/416685_10150530911092208_1045202526_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=rFkz8DWpyzUAX_e1lV4&_nc_ht=scontent.fatl1-1.fna&tp=7&oh=7cb60f5e0741e86b65091b90e1a97865&oe=5F8EFA7A" 
	        alt="" style={{ height: "350px" }}/>
	      </div>
	    </div>

	    <hr/>

	    <div class="row mb-4" style={{paddingTop: "30px"}}>
	      <div class="col-md-8">
	        <p>Our remote services require the use of TeamViewer, a totally safe and fully encrypted
	        remote software tha allows us to make an individual connection to your device. TeamViewer also allows
	        you to terminate your connection at any time if you decide that remote support is not right for you.
	        If you have any questions or concerns, we'd love to hear from you!</p>
	      </div>
	      <div class="col-md-4" style={{paddingTop: "10px"}}>
	        <a class="btn btn-lg btn-primary btn-block" href="/contact">Contact Us</a>
	      </div>
	    </div>

	  </div>
	  	<Footer />
	      </div>
	  );
	}

export default Home;
