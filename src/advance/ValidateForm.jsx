import React, { useState } from 'react'

const ValidateForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        age: ""
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }))
    }

    const validate = () => {
        const newErrors = {}

        if (!form.name.trim()) {
            newErrors.name = "Name is required"
        }
        else if (!isNaN(form.name.trim())) {
            newErrors.name = "Invalid"
        }
        else if (form.name.trim().length < 2) {
            newErrors.name = "Name at least 2 characters"
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required"
        }
        else if (!form.email.includes('@') || !form.email.includes('.') || form.email.startsWith('@') || form.email.endsWith('@')) {
            newErrors.email = "Invalid email"
        }

        const age = parseInt(form.age, 10);
        if (!form.age.trim()) {
            newErrors.age = "Age is required"
        }
        else if (isNaN(age)) {
            newErrors.age = "Age must be a number"
        }
        else if (age < 18 || age > 60) {
            newErrors.age = "Age must be between 18 to 60!"
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();

        if (Object.keys(validateErrors).length === 0) {
            setSubmitted(true);
        }
        else {
            setErrors(validateErrors);
            setSubmitted(false);
        }
    }

    return (
        <div>
            <h3>Validate Form</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>
                        Name
                    </label>

                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name &&
                        <p>{errors.name}</p>
                    }
                </div>
                <br />

                <div>
                    <label htmlFor='email'>
                        Email
                    </label>

                    <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email'
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email &&
                        <p>{errors.email}</p>
                    }
                </div>
                <br />

                <div>
                    <label htmlFor='email'>
                        Age
                    </label>

                    <input
                        type='text'
                        name='age'
                        id='age'
                        placeholder='Age'
                        value={form.age}
                        onChange={handleChange}
                    />
                    {errors.age &&
                        <p>{errors.age}</p>
                    }
                </div>

                <button type='submit'>
                    Submit
                </button>

                {submitted && <p>Form successfully submitted</p>}
            </form>
        </div>
    )
}

export default ValidateForm
