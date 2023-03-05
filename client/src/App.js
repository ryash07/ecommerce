import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import { Footer } from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { Products } from "./Pages/Products/Products";
import "./app.scss"
import ContactPage from "./Pages/Contact/Contact";
import AboutPage from "./Pages/About/About";
import StoresPage from "./Pages/Stores/Stores";

const Layout = () =>{
  return(
    <div className="app">
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products/:id",
        element:<Products />
      },
      {
        path:"/product/:id",
        element:<Product />
      },
      {
        path:"/contact",
        element:<ContactPage />
      },
      {
        path:"/about",
        element:<AboutPage />
      },
      {
        path:"/stores",
        element:<StoresPage />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
