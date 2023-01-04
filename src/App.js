import {
  useRoutes
} from "react-router-dom";

import Main from "./components/views/Main/Main";
import NotFound from "./components/views/NotFound/NotFound";
import Footer from "./components/views/Footer/Footer";
import Navigation from "./components/views/Navigation/Navigation";
import Contact from "./components/views/Contact/Contact";
import Offert from "./components/views/Offert/Offert";
import ShelfStairs from "./components/singleview/ShelfStairs/ShelfStairs";

function App() {
  const location = window.location.href
  const routes = useRoutes([
    {
      path: '/',
      element: <Main/>
    },
    {
      path: '/de',
      element: <Main/>
    },
    {
      path: '/gb',
      element: <Main/>
    },
    {
      path: '/pl',
      element: <Main/>
    },
    {
      path: '/pl/contact',
      element: <Contact/>
    },
    {
      path: '/de/contact',
      element: <Contact/>
    },
    {
      path: '/gb/contact',
      element: <Contact/>
    },
    {
      path: '/pl/offert',
      element: <Offert/>
    },
    {
      path: '/de/offert',
      element: <Offert/>
    },
    {
      path: '/gb/offert',
      element: <Offert/>
    },
    {
      path: '/pl/offert/shelfstairs',
      element: <ShelfStairs/>
    },
    {
      path: '*',
      element: <NotFound/>
    },
    
  ])
  return (
    <div>
      <Navigation locate={location}/>
      {routes}
      <Footer/>
    </div>
  );
}

export default App;
