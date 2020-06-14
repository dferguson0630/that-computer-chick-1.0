import React from 'react';

const Card = ({ title, body, route }) => {
	return (
		<div className="col-md-4 mb-5">
			<div className="card h-100">
	          <div className="card-body">
		        <h2 className="card-title">{title}</h2>
	            <p className="card-text">{body}</p>
			   </div>
			   <div className="card-footer">
			       <a href={route} className="btn btn-primary btn-sm">Browse</a>
			    </div>
			</div>
		</div>
	);
}

export default Card;