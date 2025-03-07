import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route  } from 'react-router-dom';

import Courses from './pages/Courses';
import Home from './pages/Home';

function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="test" element={<div className={"h-full w-full"}>Hello World</div>} />
      </Routes>
    </BrowserRouter>
  );
  
}


export default Router;