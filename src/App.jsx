import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

// layouts
import Protected from "./Layouts/Protected"
import Guest from "./Layouts/Guest"

//pages
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  const router = createBrowserRouter([

    // protected routes
    {
      path: '/',
      element: <Protected/>,
      children: [
        { path: '/', element: <Navigate to='home' /> },
        { path: 'home', element: <Home/> }
      ]
    },

    // public routes
    {
      path: '/',
      element: <Guest/>,
      children: [
        { path: '/', element: <Navigate to='login' /> },
        { path: 'login', element: <Login/> },
        { path: 'signup', element: <Signup/> }
      ]
    }
  ])
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
