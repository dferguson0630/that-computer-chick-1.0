import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Remote = () => {
	return (
		<div>
			<Navbar />
			<div class="container">

			  <h1 class="my-4">Remote Services &ensp;
			    <small>Secondary Text</small>
			  </h1>

			  <div class="row">

			    <div class="col-md-8">
			      <img class="img-fluid" src="http://placehold.it/750x500" alt="" />
			    </div>

			    <div class="col-md-4">
			      <h3 class="my-3">Project Description</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
			      <h3 class="my-3">Project Details</h3>
			      <ul>
			        <li>Lorem Ipsum</li>
			        <li>Dolor Sit Amet</li>
			        <li>Consectetur</li>
			        <li>Adipiscing Elit</li>
			      </ul>
			    </div>

			  </div>
			</div>
			<Footer />
		</div>
	);
}

export default Remote;