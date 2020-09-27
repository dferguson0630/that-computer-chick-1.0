import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import about from './about-us.jpg'

const AboutUs = () => {
	return (
		<div>
        <Navbar />
        	<div class="container">
			    <div class="row align-items-center my-5">
			    	<div class="col-lg-7">
			        	<img class="img-fluid rounded mb-4 mb-lg-0" src={about} alt="cover" />
			      	</div>
			      <div class="col-lg-5">
			        <h1 class="font-weight-light" style={{fontFamily: 'Bellota'}}>About Us</h1>
			        <p>That Computer Chick was founded in West Cobb in 2003 with the initial goal of meeting the needs of the community as technology grew more and more into an every household commodity. Linda Pereira, the founder, used the knowledge gained growing up in Silicon Valley to bring computer and electorincs repair to the Marietta area. Later founding locations in East Cobb and Symrna, Linda's computer expertise paired with her business savvy led to the successful expansion of That Computer Chick for over a decade.</p>
			        <p>After ten years running That Computer Chick, Linda was diagnosed with a brain and movement disorder, and by 2015 was forced to retire from the business. In the meantime, longtime technician Kimberly Austin had become co-owner of That Computer Chick, and upon retirement Linda passed the torch to her daughter Emily Peterson. Over the course of the next year, the business downsized as That Computer Chick closed its auxillary locations and moved into its current Due West location in early 2016.</p>
			        <p>Since moving to its current location, That Computer Chick has worked to re-establish itself under its new ownership by building relationships with the community and its patrons. By 2020, Emily wished to forge her own path independent from That Computer Chick, and Kimberly elected to step down as experienced technician Matthew Anderson took over as owner. Kimberly has stayed on as a consulatant and as an ambassador of the business in the community. In taking over That Computer Chick, Matthew hopes to exceed expectations by providing modern solutions to technological problems, while also giving back to the community that has supported us for the last 17 years.</p>

			      </div>
			    </div>

			    <div class="card text-white bg-secondary my-5 py-4 text-center">
			      <div class="card-body">
			        <p class="text-white m-0">We guarantee our work, communicate in non-technical terms, and offer recommendations specific to your needs. We work hard to maintain our great reputation and we love what we do.</p>
			      </div>
			    </div>

        </div>
        <Footer />
      </div>
	);
}

export default AboutUs;