import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import TestUI from './UI/TestNewUIElement';
import ScrollToTop from './UtilityComponents/ScrollToTop';
import Wrapper from './UtilityComponents/Wrapper';
import Header from './RenderingComponents/Header';
import Footer from './RenderingComponents/Footer';
import HomeComponent from './PageComponents/HomeComponent';
import EventComponent from './PageComponents/EventComponent';
import SigComponent from './PageComponents/SigComponent';
import TeamComponent from './PageComponents/TeamComponent';
import ProjectComponent from './PageComponents/ProjectComponent';
import LoginComponent from './PageComponents/LoginComponent';
import EventDetails from './PageComponents/EventDetails';
import EventAdd from './PageComponents/EventAdd';
// import ExpoHomeComponent from '../expo/Components/ExpoHomeComponent';
// import DescPage from '../expo/Components/DescPage';
import LeaderboardComponent from './PageComponents/LeaderboardComponent';
// import SGPComponent from './PageComponents/SGPComponent';
// import SGPSigComponent from './PageComponents/SGPSigComponent';
//import Transcend from './Transcend';
// import Cryptonite from './Transcend/Cryptonite';
//import RecruitmentComponent from './Recruitment/recsLandingPage.jsx';
//import RecsSIGComponent from './Recruitment/eachSIGLandingPage';

/* Obscura imports start here */
// import Obscura from '../Obscura'
// import Instructions from '../Obscura/components/Instructions';
// import ObscuraLogin from '../Obscura/components/ObscuraLogin';
// import Dashboard from '../Obscura/components/Dashboard';
// import Year1 from '../Obscura/components/year/Year1';
// import Year3 from '../Obscura/components/year/Year3';
// import Year2 from '../Obscura/components/year/Year2';
// import Year4 from '../Obscura/components/year/Year4';
import Leaderboard from '../Obscura/components/Leaderboard';
import SquareOne from './SquareOne';
import SIGSquareOne from './SquareOne/eachSIG';
// import RecruitmentComponent from './Recruitment/recsLandingPage.jsx';
// import RecsSIGComponent from './Recruitment/eachSIGLandingPage';

import '../css/constants.css';
import { enableLeaderboard } from '../constants.js';

class App extends React.Component {
	state = { headerShouldRender: true, footerBackgroundVariant: '' };
	changeHeaderFooterStatus = (val) => {
		this.setState({ headerShouldRender: val });
	};
	changeFooterBackground = (val) => {
		this.setState({ footerBackgroundVariant: val });
	};
	render() {
		return (
			<HashRouter>
				<ScrollToTop />
				<Wrapper shouldRender={this.state.headerShouldRender}>
					<Header />
				</Wrapper>
				<div className="app-main">
					{/* <Route path="/transcend"  component={Transcend} />  */}
					{/* <Route path="/smp"  component={SGPComponent} /> */}
					{/* <Route path="/smp/:name"  component={SGPSigComponent} /> */}
					{/* <Route
						path="/transcend/crypt/:id"
						
						render={(props) => (
							<Cryptonite
								{...props}
								setFooterVal={(val) => this.changeFooterBackground(val)}
							/>
						)}
					/> */}
					<Switch>
						{/* <Route path="*" component={HomeComponent} /> */}
						{/* 
						Obscura routes 
							*/}
						<Route
							path="/obscura/leaderboard"
							render={() => (
								<Leaderboard setFooterVal={this.changeFooterBackground} />
							)}
						/>
						{/* <Route
							path="/obscura/year4"
							render={() => (
								<Year4 setFooterVal={this.changeFooterBackground} />
							)}
						/>
						<Route
							path="/obscura/year3"
							render={() => (
								<Year3 setFooterVal={this.changeFooterBackground} />
							)}
						/>
						<Route
							path="/obscura/year2"
							render={() => (
								<Year2 setFooterVal={this.changeFooterBackground} />
							)}
						/>
						<Route
							path="/obscura/year1"
							render={() => (
								<Year1 setFooterVal={this.changeFooterBackground} />
							)}
						/>
						<Route
							path="/obscura/dashboard"
							render={() => (
								<Dashboard setFooterVal={this.changeFooterBackground} />
							)}
						/>
						<Route
							path="/obscura/login"
							render={() => (
								<ObscuraLogin setFooterVal={this.changeFooterBackground} />
							)}
						/>

						<Route
							path="/obscura/instructions"
							render={() => (
								<Instructions setFooterVal={this.changeFooterBackground} />
							)}
						/>
						<Route
							path="/obscura"
							render={() => (
								<Obscura setFooterVal={this.changeFooterBackground} />
							)}
						/> */}
						<Route path="/test" component={TestUI} />
						<Route path="/squareonesig/:name" component={SIGSquareOne} />
						<Route path="/squareone" component={SquareOne} />

						{/* <Route
							path="/expo"
							render={(props) => (
								<ExpoHomeComponent
									{...props}
									setHeaderFooterStatus={(val) =>
										this.changeHeaderFooterStatus(val)
									}
								/>
							)}
						/> */}
						<Route path="/leaderboard" component={LeaderboardComponent} />
						{enableLeaderboard ? (
							<Route path="/leaderboard" component={LeaderboardComponent} />
						) : null}
						{/* <Route path="/expoPage/:name" component={DescPage} /> */}
						<Route path="/sig/:name" component={SigComponent} />
						<Route path="/team" component={TeamComponent} />
						<Route path="/project/:id" component={ProjectComponent} />
						<Route path="/login" component={LoginComponent} />
						<Route path="/event/view/:name" component={EventDetails} />
						<Route path="/event/add" component={EventAdd} />
						<Route path="/event" component={EventComponent} />
						{/* <Route path="/recs/:name" component={RecsSIGComponent} />
						<Route path="/recs" component={RecruitmentComponent} /> */}
						<Route path="/" component={HomeComponent} />
					</Switch>
				</div>
				<Wrapper shouldRender={this.state.headerShouldRender}>
					<Footer value={this.state.footerBackgroundVariant} />
				</Wrapper>
			</HashRouter>
		);
	}
}
export default App;
