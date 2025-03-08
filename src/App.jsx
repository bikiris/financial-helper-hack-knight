import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App({ children }) {
  return (
    <div className='w-full h-full'>
      <NavBar />
      <div className="flex pt-16">
        <SideBar />

        <main
          id='main-content'
          className='flex-1 h-[calc(100vh-64px)] overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64'
        >
          {children}
        </main>
      </div>
    </div>
  );
}

// 432dd7

export default App;
