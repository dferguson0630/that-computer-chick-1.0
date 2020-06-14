import React from 'react';

const Column = ({ title, body }) => {
	return (
		<div className="col-lg-4 col-md-4 col-sm-6 mb-4">
			<div className="card h-100">
				 <div className="card-body">
				     <h4 className="card-title">
				        <a href="#">{title}</a>
				     </h4>
				     <p className="card-text">{body}</p>
				 </div>
			</div>
		</div>
	);
}

export default Column;
