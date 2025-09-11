import './App.css'
import ClassCmp from './basic/ClassCmp'
import FunctionalCmp from './basic/FunctionalCmp'
import FunctionalState from './basic/FunctionalState'
import ClassState from './basic/ClassState'
import { createContext, lazy, Suspense, useRef, useState } from 'react'
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
import HookuseActionState from './hooks/19/HookuseActionState'
import HookuseFormStatus from './hooks/19/HookuseFormStatus'
import HookuseOptimistic from './hooks/19/HookuseOptimistic'
import Hookuse from './hooks/19/Hookuse'
import Error from './components/Error'
import HigherOrderComponentOne from './basic/HigherOrderCmpOne'
import HigherOrderComponentTwo from './basic/HigherOrderCmpTwo'
import RouterError from './components/RouteError'
import CmpA from './rounting/CmpA'
import CmpB from './rounting/CmpB'
import { ErrorBoundary } from 'react-error-boundary'
import { createBrowserRouter, Link, Outlet } from 'react-router-dom'
import Counter from './advance/Counter'
import ClickOutsideDropdown from './advance/ClickOutsideDropdown'
import InlineEditableInput from './advance/InlineEditableInput'
import TemperatureConverter from './advance/TemperatureConverter'
import OtpInput from './advance/OtpInput'

export const UserContext = createContext();
const LazyCmp = lazy(() => import("./basic/LazyComponent"));
const HigherOrder = HigherOrderComponentOne(HigherOrderComponentTwo)

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
      <HookuseActionState />
      <HookuseFormStatus />
      <HookuseOptimistic />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<p>Loading...</p>}>
          <Hookuse />
        </Suspense>
      </ErrorBoundary>

      {/*Optimization*/}
      <Suspense fallback={<p>Loading...</p>}>
        <LazyCmp />
      </Suspense>
      <HigherOrder message={message} />

      {/*Routing*/}
      <Outlet />
      <ul>
        <li>
          <Link to={'/cmpA'}>Component One</Link>
        </li>

        <li>
          <Link to={'/cmpB'}>Component Two</Link>
        </li>
      </ul>

      {/*Advance*/}
      <Counter />
      <ClickOutsideDropdown />
      <InlineEditableInput />
      <TemperatureConverter />
      <OtpInput />
    </div>
  )
}

export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouterError />,
    children: [
      {
        path: '/cmpA',
        element: <CmpA />
      },
      {
        path: '/cmpB',
        element: <CmpB />
      }
    ]
  }
])
