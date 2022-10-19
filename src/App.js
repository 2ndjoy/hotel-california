import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Layouts/Main';
import LogIn from './Components/Login/LogIn';
import SignUp from './Components/Login/SignUp';
import Orders from './Components/Orders/Orders';
import Rooms from './Components/Rooms/Rooms';
import ProtectedRoute from './ProtectedRouted';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'orders',
          element: <ProtectedRoute><Orders></Orders></ProtectedRoute>
        }, {
          path: 'rooms',
          loader: () => fetch('hotelDetails.json'),
          element: <Rooms></Rooms>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'login',
          element: <LogIn></LogIn>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    }

  ])

  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>

    </div>
  );
}

export default App;
