import React from "react";
// import {
//     Card, CardBody, CardText, CardTitle,
// } from 'reactstrap';
import Moment from "moment";

//temp veriables will be move to an analysis file.

const all = {
    // content : {
      width         : '15%',
      margin       : '0.5%',
      display      :'inline-block',
  };

const bar1 = {
      height        : '50px',
      background      :'#f1ecec',
  };
const bar2 = {
    // content : {
      height        : '75px',
      background      :'#fff0f3'

  };

  const bar3 = {
      height        : '100px',
      background      :'#f3e2e5'
  };

  const bar4 = {
      height        : '150px',
      background      :'#f3b0b0'
  };

  const bar5 = {
      height        : '175px',
      background      :'#f77a7a'
  };

  const bar6 = {
      height        : '225px',
      background      :'red'
  };
  const box = {
    style : {
      border        : '1px lightGrey solid',
      textAlign        : 'center'
    }
  };

const Dashboard = (props) => {
    // console.log(props.assessmentData)
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                    <h3 style={box.style}>Assessment Dashboard Still in progress</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                    <div className="table-div mx-auto">
                        <table className="table table-bordered"> 
                            <thead className='thead-dark'>
                                <tr>
                                    <th>Date</th>
                                    <th>Score</th>
                                    <th>Diagnosis</th>
                                </tr>
                            </thead>
                            <tbody>
                            {props.assessmentData.map((data, i)=>
                                <tr key={i}>
                                    <td>{Moment(data.date).format("ll")}</td>
                                    <td>{data.score}</td>
                                    <td>{data.PD}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                    <div className="graph-div" style={box.style}>
                        <div style={{...all, ...bar6}} ></div>
                        <div style={{...all, ...bar5}} ></div>
                        <div style={{...all, ...bar4}} ></div>
                        <div style={{...all, ...bar3}} ></div>
                        <div style={{...all, ...bar2}} ></div>
                        <div style={{...all, ...bar1}} ></div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Dashboard;