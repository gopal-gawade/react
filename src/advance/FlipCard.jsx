import React from 'react'

const FlipCard = () => {
    return (
        <div>
            <h3>Flip Card</h3>

            <div className="flip-card-container">
                <div className="flip-card">
                    <div className="flip-card-content">
                        <div className="flip-card-front">
                            <p>Front</p>
                        </div>

                        <div className="flip-card-back">
                            <p>Back</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
