import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Courses from './pages/Courses';
import Home from './pages/Home';
import App from './App'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/courses',
    element: <Courses />
  },
  {
    path: '/test',
    element: <App />
  }
])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;