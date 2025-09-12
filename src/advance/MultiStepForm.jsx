import React, { useState } from 'react'

const steps = [
    { id: 1, title: 'Name' },
    { id: 2, title: 'Address' },
    { id: 3, title: 'Review' }
]

const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const previous = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    const next = () => {
        if (step < steps.length) {
            setStep(step + 1);
        }
    }

    return (
        <div>
            <h3>Multi-Step form</h3>

            <div style={{ display: 'flex', gap: '12px' }}>
                {steps.map((v) => {
                    return (
                        <button key={v.id} style={{ color: step === v.id ? "blue" : step > v.id ? "green" : "black" }}>
                            {v.title}
                        </button>
                    )
                })}
            </div>

            <div style={{ background: 'green', height: '6px', width: `${((step - 1) / (steps.length - 1)) * 100}%` }} />

            <button disabled={step === 1} onClick={previous}>
                Previous
            </button>

            <button disabled={step === 3} onClick={next}>
                Next
            </button>
        </div>
    )
}

export default MultiStepForm
