import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route  } from 'react-router-dom';

import Courses from './pages/Courses';
import Home from './pages/Home';
import ChatBot from './pages/ChatBot';
import Reports from './pages/Reports';

function Router() {
  
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="chatbot" element={<ChatBot />} />
        <Route path="test" element={<div className={"h-full w-full"}>Hello World</div>} />
        <Route path="reports" element={<Reports />}/>
      </Routes>
  );
  
}


export default Router;