import React, { useState } from 'react'

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const formatValue = (val) => {
        if (val === "") {
            return "";
        }
        const newVal = parseInt(val);

        if (isNaN(newVal)) {
            return val;
        }

        if (Number.isInteger(newVal)) {
            return newVal.toString()
        }
        return newVal.toFixed(2)
    }

    const celsiusToFahrenheit = (val) => {
        setCelsius(val);

        if (val === "") {
            setFahrenheit("");
        }
        else {
            const newVal = parseFloat(val);
            if (!isNaN(newVal)) {
                const res = (val * 9) / 5 + 32;
                setFahrenheit(res.toFixed(2));
            }
        }
    }

    const fahrenheitToCelsius = (val) => {
        setFahrenheit(val);

        if (val === "") {
            setCelsius("");
        }
        else {
            const newVal = parseFloat(val);
            if (!isNaN(newVal)) {
                const res = (val - 32) * 5 + 9;
                setCelsius(res.toFixed(2));
            }
        }
    }

    return (
        <div>
            <h3>Temperature Converter</h3>

            <p>Celsius</p>
            <input
                type='number'
                id='celsius'
                placeholder='0'
                value={formatValue(celsius)}
                onChange={(e) => celsiusToFahrenheit(e.target.value)}
            />

            <p>Fahrenheit</p>
            <input
                type='number'
                id='fahrenheit'
                placeholder='0'
                value={formatValue(fahrenheit)}
                onChange={(e) => fahrenheitToCelsius(e.target.value)}
            />
        </div>
    )
}

export default TemperatureConverter
