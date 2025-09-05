import './App.css'
import ClassCmp from './basic/ClassCmp'
import FunctionalCmp from './basic/FunctionalCmp'
import FunctionalState from './basic/FunctionalState'
import ClassState from './basic/ClassState'
import { createContext, useRef, useState } from 'react'
import ContextCmp from './basic/ContextCmp'
import FunctionalProps from './basic/FunctionalProps'
import ClassProps from './basic/ClassProps';
import ChildToParent from './basic/ChildToParent'
import ConditionalRenderiing from './basic/ConditionalRenderiing'
import Mount from './lifecycle/Mount'
import Update from './lifecycle/Update'
import Unmount from './lifecycle/Unmount'
import HookuseState from './hooks/HookuseState'
import HookuseEffect from './hooks/HookuseEffect'
import HookuseLayoutEffect from './hooks/HookuseLayoutEffect'
import HookuseRef from './hooks/HookuseRef'
import { useCustomHook } from './hooks/CustomHook'
import HookuseReducerOne from './hooks/HookuseReducerOne'
import HookuseReducerTwo from './hooks/HookuseReducerTwo'
import HookuseImperativeHandleOne from './hooks/HookuseImperativeHandleOne'
import HookuseImperativeHandleTwo from './hooks/HookuseImperativeHandleTwo'
import HookuseCallbackOne from './hooks/HookuseCallbackOne'
import HookuseMemo from './hooks/HookuseMemo'
import HookuseDeferredValueOne from './hooks/18/HookuseDeferredValueOne'
import HookuseTransition from './hooks/18/HookuseTransition'
import HookuseId from './hooks/18/HookuseId'

export const UserContext = createContext();

function App() {
  const [message, setMessage] = useState("");
  const [id, setId] = useState(1);
  const fetchPost = useCustomHook(id);
  const buttonRef = useRef();

  return (
    <div>
      <h1>React Notes</h1>

      {/*Basic*/}
      <FunctionalCmp />
      <ClassCmp />
      <FunctionalState />
      <ClassState />
      <UserContext.Provider
        value={{
          message: message,
          setMessage: setMessage
        }}
      >
        <ContextCmp />
      </UserContext.Provider>
      <FunctionalProps message={message} />
      <ClassProps message={message} />
      <ChildToParent
        message={message}
        setMessage={setMessage}
      />
      <ConditionalRenderiing />

      {/*Lifecycle*/}
      <Mount />
      <Update />
      <Unmount />

      {/*Hooks*/}
      <HookuseState />
      <HookuseEffect />
      <HookuseLayoutEffect />
      <HookuseRef />

      <h3>Custom Hook</h3>
      {fetchPost.title}
      <br />
      <button onClick={() => setId(id + 1)}>
        {id}
      </button>

      <HookuseReducerOne />
      <HookuseReducerTwo />

      <h3>useImperativeHandle</h3>
      <HookuseImperativeHandleOne ref={buttonRef} />
      <HookuseImperativeHandleTwo ref={buttonRef} />

      <HookuseCallbackOne />
      <HookuseMemo />
      <HookuseDeferredValueOne />
      <HookuseTransition />
      <HookuseId />
    </div>
  )
}

export default App
