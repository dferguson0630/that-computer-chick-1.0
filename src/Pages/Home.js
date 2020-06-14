import React from 'react';
import NavBar from '../Navbar';
import Card from './Card';

//http://www.thatcomputerchick.com/images/IMG_14541.jpg
//
const Home = () => {
  return (
      <div>
        <NavBar />
        	<div class="container">
			    <div class="row align-items-center my-5">
			      <div class="col-lg-7">
			        <img class="img-fluid rounded mb-4 mb-lg-0" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80/900x400" alt="cover" />
			      </div>
			      <div class="col-lg-5">
			        <h1 class="font-weight-light">Your Neighborhood Repair Specialists</h1>
			        <p>Since it began in 2003, That Computer Chick has catered specifically to home and small business computer users. Essentially, we specialize in you. We continue to keep up with the latest technology in both PCs and Macs, and also help with cellular phones, tablets, printers, and game consoles.</p>
			        <a class="btn btn-primary" href="/about-us">Why choose us?</a>
			      </div>
			    </div>

			    <div class="card text-white bg-secondary my-5 py-4 text-center">
			      <div class="card-body">
			        <p class="text-white m-0">We guarantee our work, communicate in non-technical terms, and offer recommendations specific to your needs. We work hard to maintain our great reputation and we love what we do.</p>
			      </div>
			    </div>

			    <div class="row">
			      <Card title="Our Services" body="We offer a variety of services to help you set up, repair, or restore your household electronics. Click below to find out more" route="/services"/>
			      <Card title="Links" body="Along with our services, we offer recommendations for free software designed to keep your devices safe and secure." route="/links"/>
			      <Card title="Remote" body="something something remote" route="/remote"/>
			    </div>

        </div>
      </div>
  );
}

export default Home;