import React from 'react'
import { useFormStatus } from 'react-dom';

const Button = () => {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? "Sending" : "Send"}
        </button>
    )
}

const HookuseFormStatus = () => {
    const onSubmit = async (data) => {
        const title = data.get('title');
        const msg = data.get('msg');

        const result = await new Promise((res) => {
            setTimeout(() => {
                res({ title: title, msg: msg })
            }, 2000)
        });

        return result;
    }

    return (
        <div>
            <form action={onSubmit}>
                <h3>useFormStatus</h3>

                <label>
                    Title
                </label>
                <br />

                <input type="text" name="title" required />
                <br />

                <label>
                    Message
                </label>
                <br />

                <input type="text" name="msg" required />

                <Button />
            </form>
        </div>
    )
}

export default HookuseFormStatus
