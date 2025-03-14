import React from "react";

import MemberCard from "../RenderingComponents/MemberCard";
import { baseRequest } from "../../constants";

const DataHeader = (props) => {
    return (
        <div>
            <div className="col l12 s12">
                <h3>
                    {props.header}
                </h3>
            </div>
        </div>
    );
};

const DataItem = (props) => {
    // default email address if email missing in backend
    const email=props.data.email ? props.data.email : 'iste@nitk.edu.in' 
    return (
        <div className="row proj-item">
            <MemberCard
                key={props.data.id}
                isImageLeft={props.index % 2 === 0}
                name={`${props.data.user.first_name} ${props.data.user.last_name}`}
                role={props.data.role}
                content={props.data.description}
                linkedin={props.data.linkedin_url}
                email={"mailto:" + email}
                imgurl={props.data.user.avatar}
                department={props.data.department}
                about_me={props.data.about_me}
                technical_interests={props.data.technical_interests}
                internships={props.data.internships}
            />
        </div>
    );
};

const MemberList = (props) => {
    const name = props.memberInfo.first_name + " " + props.memberInfo.last_name;
    return (
        <div className="col l4 m6 s12 center">
            <h6 key={props.memberInfo.id}>{name}</h6>
        </div>
    );
};

class TeamComponent extends React.Component {
    state = {
        memberData: {
            admin_core: [],
            core: [],
            aux_core: [],
            members: [],
        },
        teamVisible : false
    };

    componentDidMount() {
        console.log("Fetching. . .");
        baseRequest.get("/team/").then((res) => {
            this.setState({
                memberData: {...this.state.memberData, ...res.data},
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row center">
                        <DataHeader
                            header="Admin Core Members" 
                        />
                        {this.state.memberData.admin_core.map((data, index) => {
                            return <DataItem data={data} index={index} />;
                        }) }
                    </div>
                    { !this.state.teamVisible ? 
                        <div className="row center">
                            <button
                                className="btn center"
                                onClick={
                                    () => {
                                        this.setState({
                                            teamVisible : !this.state.teamVisible
                                        })
                                    }
                                }
                                >Show More</button>
                        </div>
                        : null
                    }
                    {
                        this.state.teamVisible ?
                            <>
                                <div className="row center">
                                        <DataHeader 
                                            header="Core Members" 
                                            
                                        />
                                        { this.state.memberData.core.map((data, index) => {
                                            return <DataItem data={ data } index={ index } />;
                                        }) } 
                                </div> 
                                <div className="row center">
                                    <DataHeader 
                                        header="Auxiliary Core Members"
                                    />
                                    {this.state.memberData.aux_core.map((data, index) => {
                                        return <DataItem data={data} index={index} />;
                                    })}
                                </div>
                                <div className="row center">
                                    <DataHeader 
                                        header="Executive Members" 
                                    />
                                    {this.state.memberData.members.map((memberInfo) => {
                                        return <MemberList memberInfo={memberInfo} />;
                                    })}
                                </div>
                            </>
                            : null
                    }
                
                </div>
            </div>
        );
    }
}
export default TeamComponent;
