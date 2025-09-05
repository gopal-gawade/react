import React, { useId } from 'react'

const HookuseId = () => {
    const userId = useId();
    //const emailId = useId();

    return (
        <form>
            <h3>useId</h3>

            <div>
                <label htmlFor={userId}>
                    Username
                </label>

                <input
                    type='text'
                    id={userId}
                    name='username'
                />
            </div>

            <div>
                <label htmlFor={userId + "password"}>
                    Password
                </label>

                <input
                    type='password'
                    id={userId + "password"}
                    name='password'
                />
            </div>
        </form>
    )
}

export default HookuseId
