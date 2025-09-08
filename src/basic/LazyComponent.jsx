import React, { useEffect, useState } from 'react'

const LazyComponent = () => {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, [2000]);
    }, [load])

    return (
        load &&
        <div>
            <h3>Lazy component</h3>
        </div>
    )
}

export default LazyComponent
