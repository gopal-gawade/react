import { UserContext } from '../App'

const ContextCmp = () => {
    return (
        <div>
            <h3>Context</h3>

            <UserContext.Consumer>
                {msg => {
                    return (
                        <div>
                            <p>{msg.message}</p>

                            <button onClick={() => msg.setMessage("Hello World!")}>
                                Click here
                            </button>
                        </div>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default ContextCmp;
