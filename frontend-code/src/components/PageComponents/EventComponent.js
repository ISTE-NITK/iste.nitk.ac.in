import React from "react";
import { Link } from "react-router-dom";

import TitleWithLine from "../RenderingComponents/TitleWithLine";
import "../../css/eventComponent.css";
import { baseRequest, baseUrl } from "../../constants";
class EventComponent extends React.Component {
    state = {
        events: [],
    };

    componentDidMount() {
        baseRequest.get("/event/").then((result) => {
            this.setState({
                events: result.data,
            });
        });
    }

    noEvents = (
        <div className="col s12 m8 push-m2">
            <div className="card-panel z-depth-3" style={{ height: 200 }}>
                <span className="grey-text text-lighten-1 center-align">
                    <br />
                    <br />
                    <div style={{ fontSize: 25 }}>
                        No Events Scheduled For Now
                    </div>
                    <br />
                </span>
            </div>
        </div>
    );

    render() {
        const eventList = this.state.events.map((event) => (
            <div key={event.name} className="col s4">
                <div className="card hoverable large z-depth-3">
                    <div className="card-image">
                        <img src={`${baseUrl}${event.poster}`} alt='event poster' />
                    </div>
                    <div className="card-content">
                        <h5 className="center card-title">{event.name}</h5>
                        <p className="grey-text">
                            <i className="inline-icon material-icons">
                                date_range
                            </i>
                            {event.date_time}
                        </p>
                        <br />
                        <p className="grey-text">
                            <i className="inline-icon material-icons">
                                location_on
                            </i>
                            {event.venue}
                        </p>
                        <br />
                        <p className="grey-text">
                            <i className="inline-icon material-icons">
                                polymer
                            </i>
                            {event.sigs.map((item) => ` ${item.name} `)}
                        </p>
                    </div>
                    <div className="card-action">
                        <center>
                            <Link
                                className="indigo-text"
                                to={`/event/view/${event.name}`}
                            >
                                View Details
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="row event-component">
                <div className="container">
                    <TitleWithLine title="Upcoming Events" />
                    {!this.state.events || this.state.events.length <= 0
                        ? this.noEvents
                        : eventList}
                </div>
            </div>
        );
    }
}

export default EventComponent;
