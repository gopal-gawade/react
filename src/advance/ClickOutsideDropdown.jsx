import React, { useEffect, useRef, useState } from 'react'

const ClickOutsideDropdown = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!open) {
            return;
        }
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open]);

    return (
        <div>
            <h4>Click outside dropdown</h4>

            <div className='dropdown' ref={ref}>
                <button onClick={() => setOpen(!open)}>
                    Select
                </button>

                {open &&
                    <div className='select'>
                        {Array.from(Array(5).keys()).map((v, i) => {
                            return (
                                <button key={i}>
                                    Option {v + 1}
                                </button>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default ClickOutsideDropdown
