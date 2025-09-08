import React from 'react'

const HigherOrderCmpOne = (Cmp) => {
    return (props) => {
        return (
            <div>
                <h3>Higher order component</h3>
                <Cmp {...props} />
            </div>
        )
    }
}

export default HigherOrderCmpOne
