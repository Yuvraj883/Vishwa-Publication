import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import App from './App';
import Home from './pages/Home';
import About from './pages/About'
import Courses from './pages/Courses'
// import RestaurantPage from './components/RestaurantPage';
import ErrorPage from './pages/ErrorPage';
import Gallery from './pages/Gallery';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
        errorElement:<ErrorPage/>,
       
    },
    {
       path:'about',
       element: <About/>,
       errorElement:<ErrorPage/>
    }, 
    {
        path:'courses', 
        element:<Courses/>, 
        errorElement:<ErrorPage/>
    }, 
    {
        path:'gallery',
        element:<Gallery/>,
        errorElement:<ErrorPage/>
    }
]);
export default router;