import React from 'react';

import LeaderboardItem from './LeaderboardItem';

import '../css/leaderboard.css';

class LeaderboardComponent extends React.Component{
    
    state={searchInput:"",selectedFilter:"rollnum"};

    LeaderboardElementsUnsorted=
    [
        {
            name:"test10",
            rollnum:"10",
            score:250,
            rank:"1"
        },
        {
            name:"test1",
            rollnum:"1",
            score:240,
            rank:"1"
        },
        {
            name:"test2",
            rollnum:"2",
            score:200,
            rank:"1"
        },
        {
            name:"test3",
            rollnum:"3",
            score:150,
            rank:"4"
        },
        {
            name:"test4",
            rollnum:"4",
            score:150,
            rank:"4"
        },
        {
            name:"test5",
            rollnum:"5",
            score:175,
            rank:"3"
        },
        {
            name:"test6",
            rollnum:"6",
            score:120,
            rank:"8"
        },
        {
            name:"test7",
            rollnum:"7",
            score:130,
            rank:"7"
        },
        {
            name:"test8",
            rollnum:"8",
            score:140,
            rank:"6"
        },{
            name:"test10",
            rollnum:"10",
            score:200,
            rank:"1"
        },
        {
            name:"test1",
            rollnum:"1",
            score:200,
            rank:"1"
        },
        {
            name:"test2",
            rollnum:"2",
            score:200,
            rank:"1"
        },
        {
            name:"test3",
            rollnum:"3",
            score:150,
            rank:"4"
        },
        {
            name:"test4",
            rollnum:"4",
            score:150,
            rank:"4"
        },
        {
            name:"test5",
            rollnum:"5",
            score:175,
            rank:"3"
        },
        {
            name:"test6",
            rollnum:"6",
            score:120,
            rank:"8"
        },
        {
            name:"test7",
            rollnum:"7",
            score:130,
            rank:"7"
        },
        {
            name:"test8",
            rollnum:"8",
            score:140,
            rank:"6"
        },{
            name:"test10",
            rollnum:"10",
            score:200,
            rank:"1"
        },
        {
            name:"test1",
            rollnum:"1",
            score:200,
            rank:"1"
        },
        {
            name:"test2",
            rollnum:"2",
            score:200,
            rank:"1"
        },
        {
            name:"test3",
            rollnum:"3",
            score:150,
            rank:"4"
        },
        {
            name:"test4",
            rollnum:"4",
            score:150,
            rank:"4"
        },
        {
            name:"test5",
            rollnum:"5",
            score:175,
            rank:"3"
        },
        {
            name:"test6",
            rollnum:"6",
            score:120,
            rank:"8"
        },
        {
            name:"test7",
            rollnum:"7",
            score:130,
            rank:"7"
        },
        {
            name:"test8",
            rollnum:"8",
            score:140,
            rank:"6"
        }
    ];

    handleClick=(e)=>{
        this.setState({selectedFilter:e.target.id});
    }

    handleChange=(e)=>{
        this.setState({searchInput:e.target.value});
    }

    LeaderboardElements=this.LeaderboardElementsUnsorted.sort((a,b)=>b.score-a.score);
        

    render(){
        const LeaderboardData=this.LeaderboardElements.filter(
            (item)=>item[this.state.selectedFilter].includes(this.state.searchInput.toLowerCase())).slice(0,15).map(
            ({name, rollnum, score,rank},index)=>{
                return(
                    <LeaderboardItem key={index} rank={rank} name={name} rollnum={rollnum} score={score} />
                );
            }
        );

        const noResults=(
            <tr>
                <td colSpan="100%" className="center">No results found</td>
            </tr>
        );
            
        const renderData=LeaderboardData.length?LeaderboardData:noResults;

        const searchParams=(
        <>
            <label>Filter:</label>
            <button className={this.state.selectedFilter==="rollnum"?"active":""} onClick={this.handleClick} id='rollnum'>
                roll number
            </button>
            <button className={this.state.selectedFilter==="name"?"active":""} onClick={this.handleClick} id='name'>
                name
            </button>
        </>
        );

        return(
            <section>
                <div className="leaderboard container">
                    <div className="header center">
                    <h1>
                        LEADERBOARD
                    </h1>
                    <div className="filter center">
                        {searchParams}
                        <br/>
                        <label htmlFor="search">Search by {this.state.selectedFilter==="rollnum"?"roll number":"name"} :</label>
                        <input name="search" onChange={this.handleChange} value={this.state.searchInput} />
                    </div>
                    <div className="leaderboard-table">
                        <table className="centered responsive">
                            <thead>
                                <tr>
                                    <th>
                                        Rank
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Roll Number
                                    </th>
                                    <th>
                                        Score
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderData}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}
export default LeaderboardComponent;