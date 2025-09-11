import React, { useEffect, useRef, useState } from 'react'

const OtpInput = () => {
    const otpLen = 4;
    const [otp, setOtp] = useState(Array(otpLen).fill(""));
    const ref = useRef([]);

    const handleChange = (index, val) => {
        if (val.length > 1) {
            val = val.slice(-1)
        };
        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if (val && index < otpLen - 1) {
            ref.current[index + 1]?.focus()
        }
    }

    useEffect(() => {
        ref.current = ref.current.slice(0, otpLen)
    }, []);

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            ref.current[index - 1]?.focus()
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                {otp.map((v, i) => {
                    return (
                        <input
                            key={i}
                            type='text'
                            maxLength={"1"}
                            inputMode='numeric'
                            value={v}
                            autoFocus={i === 0}
                            style={{ width: '20px' }}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            ref={(ele) => {
                                ref.current[i] = ele
                            }}
                        />
                    )
                })
                }

                <button disabled={otp.some(v => v === "")}>
                    Verify
                </button>
            </div>
        </div>
    )
}

export default OtpInput
