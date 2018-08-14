import React from 'react';

const Header = (props) => {
    return (
        <div className="card">
            <h3 className="card-header">{props.heading}</h3>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
          </div>
        </div>
    );
}

export default Header;