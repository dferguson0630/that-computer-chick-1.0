import React from 'react';
import NavBar from '../Navbar';
import Card from './Card';
import Column from './Column';
import './index.css';

class Services extends React.Component {
	render() {
		const inStore = 
			<ul className="list">
				<li>Diagnostics</li>
				<li>Hardware</li>
				<li>Software</li>
				<li>Cleanups</li>
				<li>Operating System Upgrades & Installs</li>
				<li>New System Setups</li>
				<li>Data Backups, Transfers, & Recoveries</li>
			</ul> ;
		const hourly = 
			<ul className="list">
				<li>On-Sites</li>
				<li>House Calls</li>
				<li>Remote Support</li>
				<li>Consultations</li>
			</ul> ;

		const Expedited = 
			<ul className="list">
				<li>Urgent Services</li>
				<li>Queues</li>
				<li>Virtual Lines</li>
				<li>Student Priority Check-ins</li>
			</ul>

		const Discounts = 
			<div>
				<p>We proudly offer a 15% discount on all of our services to the following (with proof of valid ID):</p>
				<ul className="list">
					<li>Military</li>
					<li>Law Enforcement</li>
					<li>First Responders</li>
					<li>Teachers</li>
					<li>Students</li>
				</ul>
			</div>




		return (
			<div>
				<NavBar />
				<div className="container">

				  <h1 className="my-4">Services  &ensp;
				    <small>PC and Mac are our specialty!</small>
				  </h1>

				  <div className="row">
				  	<Column title="In-Store" body={inStore}/>
				  	<Column title="Hourly" body={hourly}/>
				  	<Column title="Expedited" body={Expedited}/>
				  	<SpecialColumn body={Discounts}/>
				  </div>
				</div>
			</div>
		);
	}
}

			export default Services;


const SpecialColumn = ({ body }) => {
	return(
		<div className="col-lg-12 col-md-4 col-sm-6 mb-4">
			<div className="card h-100">
				 <div className="card-body">
				     <h4 className="card-title">
				        <a href="#">Discounts</a>
				     </h4>
				     <div className="card-text">{body}
				    </div>
				 </div>
			</div>
		</div>
	);
}