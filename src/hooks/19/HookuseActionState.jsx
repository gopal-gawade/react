import React, { useActionState } from 'react'

const HookuseActionState = () => {
    const onSubmit = async (prevState, data) => {
        const title = data.get('title');
        const msg = data.get('msg');

        const result = await new Promise((res) => {
            setTimeout(() => {
                res({ title: title, msg: msg })
            }, 1000);
        })

        return result;
    }

    const [state, formAction, isPending] = useActionState(onSubmit, null);

    return (
        <form action={formAction}>
            <h3>useActionState</h3>

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

            <button type="submit">
                Send
            </button>

            <p>Result: {isPending ? 'Loading...' : state ? `${state.title} | ${state.msg}` : ""}</p>
        </form>
    )
}

export default HookuseActionState
