import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Filter from './pages/Filter/Filter.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Singelpage from './pages/Singelpage/Singelpage.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/signup',
        element: <Signup/>
      },
      {
        path:'/filter',
        element: <Filter/>
      },
      {
        path:'/profile',
        element: <Profile/>
      },
      {
        path:'/job/:jobID',
        element: <Singelpage/>
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
