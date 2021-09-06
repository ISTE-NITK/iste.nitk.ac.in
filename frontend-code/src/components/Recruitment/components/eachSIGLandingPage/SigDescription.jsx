import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/sigDesc.module.css';

class SigDescription extends Component {
	render() {
		return (
			<div className={`row ${styles.container}`}>
				<div className={`col card center z-index-3`}>
					<div className="card-content col s12">
						<p className={`${styles.descText}`}>{this.props.desc}</p>
					</div>
					<div className="row"></div>
					<div className="btnContainer">
						<Link to={`/expo/`}>
							<button
								className={`waves-effect waves-light btn z-depth-0 ${styles.btn}`}
							>
								<i className={`material-icons left ${styles.arrow} `}>
									<span></span>
									<span></span>
									<span></span>
								</i>
								Expo
							</button>
						</Link>
						<Link to={`/sig/${this.props.sig}`}>
							<button
								className={`waves-effect waves-light btn z-depth-0 ${styles.btn} ${styles.btnprj}`}
							>
								<i
									className={`material-icons right ${styles.arrow} ${styles.arrowRight}`}
								>
									<span></span>
									<span></span>
									<span></span>
								</i>
								Projects
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default SigDescription;