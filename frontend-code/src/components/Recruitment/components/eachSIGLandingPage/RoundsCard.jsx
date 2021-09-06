import React, { Component } from 'react';
import Styles from './css/rounds.module.css';

function formattedDate(date) {
	let year = date.getFullYear();
	let month = (1 + date.getMonth()).toString().padStart(2, '0');
	let day = date.getDate().toString().padStart(2, '0');
	return day + '-' + month + '-' + year;
}

const RoundsCard = ({ data }) => {
	return (
		<div className="container" style={{ width: '70vw' }}>
			<div className="col s12 m7">
				<div className="card horizontal">
					<div className={`card-image ${Styles.roundMard}`}>
						<p className={`${Styles.roundNo}`}> </p>
					</div>
					<div className="card-stacked">
						<div className="card-content">
							<h3>{data.name}</h3>
							<h5 className="center">
								{formattedDate(new Date(data.date_time))}
							</h5>
							<p>{data.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoundsCard;