import React from "react";
// import {
//     Card, CardBody, CardText, CardTitle,
// } from 'reactstrap';
import Moment from "moment";

//temp veriables will be move to an analysis file.
const customStyles = {
    // content : {
      width         : '15%',
      height        : '75px',
      margin       : '0.5%',
      background      :'lightGrey',
      display      :'inline-block',
      borderRadius: '2px'
  };
const customStyles1 = {
    // content : {
      width         : '15%',
      height        : '125px',
      margin       : '0.5%',
      background      :'lightGrey',
      display      :'inline-block',
      borderRadius: '2px'
  };

  const customStyles2 = {
    // content : {
      width         : '15%',
      height        : '200px',
      margin       : '0.5%',
      background      :'pink',
      display      :'inline-block',
      borderRadius: '2px'
  };

  const customStyles3 = {
    // content : {
      width         : '15%',
      height        : '225px',
      margin       : '0.5%',
      background      :'red',
      display      :'inline-block',
      borderRadius: '2px'
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
                        <div style={customStyles3}></div>
                        <div style={customStyles2}></div>
                        <div style={customStyles2}></div>
                        <div style={customStyles1}></div>
                        <div style={customStyles1}></div>
                        <div style={customStyles}></div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Dashboard;