import React from 'react';
import Navbar from '../Navbar';

const AboutUs = () => {
	return (
		<div>
        <Navbar />
        	<div class="container">
			    <div class="row align-items-center my-5">
			    	<div class="col-lg-7">
			        	<img class="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/750x500" alt="cover" />
			      	</div>
			      <div class="col-lg-5">
			        <h1 class="font-weight-light">About Us</h1>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel congue velit. Vivamus lacinia condimentum laoreet. Ut sit amet tempus lacus. Nullam imperdiet, velit vel malesuada commodo, dolor ex semper justo, at feugiat sapien ipsum sed libero. Aenean rhoncus pretium varius. Aenean tincidunt mauris eu maximus feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas velit dui, interdum consectetur aliquet cursus, scelerisque non risus. Aenean ac quam enim. In sit amet faucibus neque. Mauris nibh augue, blandit accumsan urna in, faucibus lacinia enim.</p>
			        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent mi velit, rutrum in erat pretium, bibendum suscipit nibh. Maecenas suscipit ac velit ut vestibulum. Vestibulum quis mauris tempus, porta nunc sed, venenatis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vulputate nunc vitae aliquam ornare. Duis a fringilla velit. Nullam ac neque lorem. Praesent eu faucibus odio, sit amet interdum nunc. Etiam et ex leo. Donec lorem augue, tristique id lacus nec, tincidunt dignissim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas iaculis sodales sollicitudin. Pellentesque viverra arcu tellus, non ornare lacus volutpat quis.</p>

			      </div>
			    </div>

			    <div class="card text-white bg-secondary my-5 py-4 text-center">
			      <div class="card-body">
			        <p class="text-white m-0">We guarantee our work, communicate in non-technical terms, and offer recommendations specific to your needs. We work hard to maintain our great reputation and we love what we do.</p>
			      </div>
			    </div>

        </div>
      </div>
	);
}

export default AboutUs;