import React from 'react';
import styles from './css/crypt.module.css';
import TitleWithLine from '../../RenderingComponents/TitleWithLine';
import { imgAdd, inip, inop } from './addComp.js';
import { baseRequest } from '../../../constants';
import Tabhead from './addComp.js';

class Cryptonite extends React.Component {
	state = {
		inputVal: inip,
		inputSeq: [{ input: inip, output: inop }],
		rotation: 0,
	};
	validId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	currId =
		Number(this.props.match.params.id) in this.validId
			? Number(this.props.match.params.id)
			: 1;
	numInputKey = `inputs used ${this.currId.toString()}`;
	InputObjectKey = `array current ${this.currId.toString()}`;
	componentDidMount() {
		const numInputs = Number(localStorage.getItem(this.numInputKey));
		if (numInputs) {
			//TODO: Load up the data for the user here
			const initialarray = JSON.parse(localStorage.getItem(this.InputObjectKey))
				? JSON.parse(localStorage.getItem(this.InputObjectKey)).arr
				: [{ input: inip, output: inop }];
			this.setState({
				inputSeq: initialarray,
				inputVal: initialarray[0] ? initialarray[0].input : inip,
			});
			return;
		}
		localStorage.setItem(this.numInputKey, 0);
		localStorage.setItem(this.InputObjectKey, JSON.stringify({ arr: [] }));
	}
	componentDidUpdate() {
		if (Number(this.props.match.params.id) !== this.currId) {
			console.log(Number(this.props.match.params.id));
			console.log(0 in this.validId);
			console.log(this.validId);
			if (
				Number(this.props.match.params.id) in this.validId &&
				Number(this.props.match.params.id) !== 0
			) {
				this.currId = Number(this.props.match.params.id);
				this.numInputKey = `inputs used ${this.currId.toString()}`;
				this.InputObjectKey = `array current ${this.currId.toString()}`;
				const numInputs = Number(localStorage.getItem(this.numInputKey));
				if (numInputs) {
					//TODO: Load up the data for the user here
					const initialarray = JSON.parse(
						localStorage.getItem(this.InputObjectKey)
					)
						? JSON.parse(localStorage.getItem(this.InputObjectKey)).arr
						: [{ input: inip, output: inop }];
					this.setState({
						inputSeq: initialarray,
						inputVal: initialarray[0] ? initialarray[0].input : inip,
					});
					return;
				}
				localStorage.setItem(this.numInputKey, 0);
				localStorage.setItem(this.InputObjectKey, JSON.stringify({ arr: [] }));
				this.setState({
					inputSeq: [{ input: inip, output: inop }],
					inputVal: inip,
				});
				return;
			} else if (this.currId !== 1) {
				this.currId = 1;
				this.numInputKey = `inputs used ${this.currId.toString()}`;
				this.InputObjectKey = `array current ${this.currId.toString()}`;
				const numInputs = Number(localStorage.getItem(this.numInputKey));
				if (numInputs) {
					//TODO: Load up the data for the user here
					const initialarray = JSON.parse(
						localStorage.getItem(this.InputObjectKey)
					)
						? JSON.parse(localStorage.getItem(this.InputObjectKey)).arr
						: [{ input: inip, output: inop }];
					this.setState({
						inputSeq: initialarray,
						inputVal: initialarray[0] ? initialarray[0].input : inip,
					});
					// this.forceUpdate();
					return;
				}
				localStorage.setItem(this.numInputKey, 0);
				localStorage.setItem(this.InputObjectKey, JSON.stringify({ arr: [] }));
				this.setState({
					inputSeq: [{ input: inip, output: inop }],
					inputVal: inip,
				});
				return;
			}
		}
	}
	onChangeHandler = (e) => {
		this.setState({ inputVal: e.target.value });
	};
	callAPI = () => {
		//TODO: add API call. increment number of inputs ONLY on successful return from API
		this.setState({ rotation: 1 });
		baseRequest
			.post('/cryptonite/blackbox/', {
				id: this.currId.toString(),
				input: this.state.inputVal,
			})
			.then((res) => {
				const arrayToBeEntered = JSON.parse(
					localStorage.getItem(this.InputObjectKey)
				).arr;
				const ObjectToBeStored = {
					arr: [
						{ input: this.state.inputVal, output: res.data.answer },
						...arrayToBeEntered,
					],
				};
				localStorage.setItem(
					this.InputObjectKey,
					JSON.stringify(ObjectToBeStored)
				);
				localStorage.setItem(
					this.numInputKey,
					Number(localStorage.getItem(this.numInputKey)) + 1
				);
				this.setState({ inputSeq: ObjectToBeStored.arr, rotation: 0 });
			})
			.catch(() => {
				console.log('error');
			});
	};
	render() {
		return (
			<div>
				<div className={styles.tabHead}>
					<Tabhead idtab={this.currId} />
				</div>

				<div className={styles.title}>
					<TitleWithLine title={`Question ${this.currId}`} />
				</div>
				<label htmlFor="inputString">
					<div className={styles.container}>
						<div className={`center ${styles.input}`}>
							<div className={styles.heading}>Input</div>
							<input
								type="text"
								onChange={this.onChangeHandler}
								name="inputString"
								value={this.state.inputVal}
							/>
						</div>

						<div className={styles.blackBoxCon}>
							<div className={styles.blackBoxContainer}>
								<div className={styles.blackBox}>
									<img src={imgAdd} className={styles.image} alt="Black Box" />
								</div>
							</div>

							{this.state.rotation ? (
								<div className={styles.btncon}>
									<button
										className={`btn indigo ${styles.btn}`}
										onClick={this.callAPI}
										disabled
									>
										Get corresponding output
									</button>
								</div>
							) : (
								<div className={styles.btncon}>
									<button
										className={`btn ${styles.btn}`}
										onClick={this.callAPI}
									>
										Generate Output
									</button>
								</div>
							)}
						</div>
						<div className={`center ${styles.output}`}>
							<div className={styles.heading}>Output</div>
							<div className={styles.opresult}>
								{this.state.inputSeq[0] ? this.state.inputSeq[0].output : inop}
							</div>
						</div>
					</div>
				</label>
				<div className={styles.tableMain}>
					<table className={styles.table}>
						<tr>
							<th>Input</th>
							<th>Output</th>
						</tr>
						{this.state.inputSeq.map((item) => (
							<tr>
								<td>{item.input}</td>
								<td>{item.output}</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		);
	}
}
export default Cryptonite;