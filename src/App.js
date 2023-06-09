import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import { router } from './Pages/Routes/Route/Route';

function App() {
  return (
    <div className="px-[7%]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
