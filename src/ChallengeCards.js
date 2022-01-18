import React from 'react'

const ChallengeCards = ({cardname,cardvalue}) => {
    return (
        <div>
            <div className="details-card-cont">
                <div className="card-name">{cardname}</div>
                <div className="card-value">{cardvalue}</div>
            </div>
        </div>
    )
}

export default ChallengeCards
