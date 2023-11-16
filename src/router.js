import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
// import RestaurantPage from './components/RestaurantPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
        errorElement:<ErrorPage/>,
       
    },
    {
        path:'about',
        element:<About/>,
        errorElement:<ErrorPage/>
    }
]);
export default router;