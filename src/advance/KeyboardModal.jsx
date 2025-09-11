import React, { useEffect, useRef, useState } from 'react'

const KeyboardModal = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [open]);

    const handleOverlay = (e) => {
        if (e.target === ref.current) {
            setOpen(false);
        }
    }

    return (
        <div>
            <h3>Keyboard modal</h3>
            <button onClick={() => setOpen(true)}>
                Click here
            </button>

            {open &&
                <div className="overlay" ref={ref} onClick={handleOverlay}>
                    <div className="modal">
                        <p>Modal</p>

                        <button onClick={() => setOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default KeyboardModal
