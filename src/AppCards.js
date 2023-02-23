import React, {Component} from 'react'

const AppCards = ({cardsData}) => {
    const cardsList = cardsData.map(({ name, dob, email, contact, about }, i) => 
        <div className="col-4 mb-4" key={i}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-1">{dob}</p>
                    <p className="card-text mb-1">{email}</p>
                    <p className="card-text mb-1">{contact}</p>
                    <p className="card-text">{about}</p>
                </div>
            </div>
        </div>
    )

    return(
        <React.Fragment>
            <div className="container mt-3 mb-3 p-0">
                <div className="row">
                    {cardsList}
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default AppCards