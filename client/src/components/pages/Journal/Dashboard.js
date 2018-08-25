import React from "react";
import Moment from "moment";

const all = {
      width         : '15%',
      margin       : '0.5%',
      display      :'inline-block',
  };

  const box = {
    style : {
      border        : '1px lightGrey solid',
      textAlign        : 'center'
    }
  };

const Dashboard = (props) => {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                    <h3 style={box.style}>Assessment Dashboard</h3>
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
                    {props.assessmentData.map((data, i)=>
                        <div key={i} style={{...all, ...data.bar}} ></div>
                    )}
                    </div>
                </div>
            </div>
      </div>
    );
    }

export default Dashboard;