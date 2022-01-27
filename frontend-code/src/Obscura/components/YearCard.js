import React from 'react';
import {Link} from 'react-router-dom'

const YearCard = ({title,link,score}) => {
    return (
        <div className="col s6">
            <Link to={ `${link}` }>
                <div className="card">
                  <div className="card-content">
                    <div className="card-title">
                      <h3>{title}</h3>
                    </div>
                        <h5>Score: { score }</h5>
                  </div>
                  </div>
            </Link>
        </div>
    );
};

export default YearCard;
