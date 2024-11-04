import React from 'react'

class ScotlandYard24 extends React.Component{
    state ={
        data: ""
    }
    componentDidMount() {
        console.log("Fetching. . .");
        baseRequest.get("/scotlandyard/").then((res) => {
            this.setState({
                data: res.data,
            });
        });
    }
  render(){
    return (
      <>
          <h1>ISTE ScotlandYard 24</h1>
          <p>{this.state.data}</p>
          {/* <script src="https://sheetdb.io/s/t/0zxahfzd26kud.js"></script> */}
      </>
    )
  }
}

export default ScotlandYard24